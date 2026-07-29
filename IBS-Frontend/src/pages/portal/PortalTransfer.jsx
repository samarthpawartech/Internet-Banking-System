import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import sh from '../../components/dashboard/dashboardShared.module.css';
import Button from '../../components/ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { findCustomerById, getBeneficiariesFor, createTransaction, requestDeposit, getSettings } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';

export default function PortalTransfer() {
  const { session } = useAuth();
  const customer = useMemo(() => findCustomerById(session.id), [session.id]);
  const beneficiaries = useMemo(() => getBeneficiariesFor(session.id), [session.id]);
  const settings = getSettings();
  const autoLimit = settings.transactionLimits?.autoApproveUpTo ?? 50000;
  const disabled = customer.accountStatus !== 'active' || customer.locked;

  const [tab, setTab] = useState('transfer');

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Transfer & Deposits</h1>
          <p className={sh.pageSubtitle}>Transfers above {formatINR(autoLimit)} need employee approval. Deposit requests always do \u2014 someone has to verify the cash or cheque.</p>
        </div>
      </div>

      {disabled && (
        <div className={`${sh.banner} ${sh.warning}`}>
          <DynamicIcon name="CircleAlert" size={20} />
          <div>This section is disabled until your account is active{customer.locked ? ' and unlocked' : ''}.</div>
        </div>
      )}

      <div style={{ display: 'flex', gap: 10, marginBottom: 22 }}>
        <TabButton active={tab === 'transfer'} onClick={() => setTab('transfer')} icon="Send" label="Transfer Money" />
        <TabButton active={tab === 'deposit'} onClick={() => setTab('deposit')} icon="PiggyBank" label="Deposit Request" />
      </div>

      <div className={sh.grid2}>
        <div className={sh.panel}>
          {tab === 'transfer'
            ? <TransferForm customer={customer} beneficiaries={beneficiaries} disabled={disabled} autoLimit={autoLimit} />
            : <DepositForm customer={customer} disabled={disabled} />}
        </div>

        <div className={sh.panel}>
          <h3 className={sh.panelTitle}><DynamicIcon name="IndianRupee" size={17} />Available Balance</h3>
          <div className="mono" style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-text)', marginBottom: 6 }}>{formatINR(customer.balance)}</div>
          <p style={{ fontSize: 13, color: 'var(--color-muted)' }}>Account {customer.accountNumber}</p>
          <div style={{ marginTop: 20, padding: 14, borderRadius: 10, background: 'rgba(0,245,255,0.05)', border: '1px solid rgba(0,245,255,0.2)', fontSize: 12.5, color: 'var(--color-text-secondary)' }}>
            {tab === 'transfer'
              ? <>Auto-approved up to <strong className="mono">{formatINR(autoLimit)}</strong>. Larger transfers wait for employee review \u2014 set by Admin under Banking Settings.</>
              : <>Deposit requests are always verified by an employee before the balance updates, regardless of amount.</>}
          </div>
        </div>
      </div>
    </div>
  );
}

function TransferForm({ customer, beneficiaries, disabled, autoLimit }) {
  const { session } = useAuth();
  const [beneficiary, setBeneficiary] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const amt = Number(amount);
    if (!beneficiary || beneficiary === '__new') return setError('Select or enter a beneficiary.');
    if (!amt || amt <= 0) return setError('Enter a valid amount.');
    if (amt > customer.balance) return setError('Insufficient balance for this transfer.');

    setStatus('submitting');
    window.setTimeout(() => {
      const txn = createTransaction({ customerId: session.id, type: 'transfer', amount: amt, beneficiary, note });
      setResult(txn);
      setStatus('done');
    }, 700);
  };

  const reset = () => { setResult(null); setStatus('idle'); setBeneficiary(''); setAmount(''); setNote(''); };

  return (
    <AnimatePresence mode="wait">
      {result ? (
        <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={sh.successBox}>
          <div className={sh.successIcon}><DynamicIcon name={result.status === 'pending' ? 'Clock' : 'CircleCheckBig'} size={26} /></div>
          <h3>{result.status === 'pending' ? 'Transfer pending approval' : 'Transfer completed'}</h3>
          <p>{result.status === 'pending' ? `This transfer exceeds ${formatINR(autoLimit)} and needs employee sign-off before it completes.` : `${formatINR(result.amount)} sent to ${result.beneficiary}.`}</p>
          <Button variant="outline" onClick={reset}>Make another transfer</Button>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={sh.form}>
          <div className={sh.field}>
            <label>Beneficiary<span className={sh.req}>*</span></label>
            {beneficiaries.length > 0 ? (
              <select value={beneficiary} onChange={(e) => setBeneficiary(e.target.value)} disabled={disabled}>
                <option value="">Select a saved beneficiary</option>
                {beneficiaries.map((b) => <option key={b.id} value={b.name}>{b.name} \u2014 {b.accountNumber}</option>)}
                <option value="__new">Enter a new beneficiary...</option>
              </select>
            ) : (
              <input value={beneficiary} onChange={(e) => setBeneficiary(e.target.value)} placeholder="Beneficiary name" disabled={disabled} />
            )}
            {beneficiary === '__new' && <input autoFocus placeholder="Type beneficiary name" onChange={(e) => setBeneficiary(e.target.value)} style={{ marginTop: 8 }} />}
          </div>
          <div className={sh.field}>
            <label>Amount (\u20b9)<span className={sh.req}>*</span></label>
            <input type="number" min="1" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 5000" disabled={disabled} />
          </div>
          <div className={sh.field}>
            <label>Note (optional)</label>
            <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="What's this for?" disabled={disabled} />
          </div>
          {error && <div className={`${sh.banner} ${sh.danger}`} style={{ marginBottom: 0 }}><DynamicIcon name="CircleAlert" size={16} />{error}</div>}
          <Button type="submit" size="lg" disabled={disabled || status === 'submitting'}>
            {status === 'submitting' ? 'Processing\u2026' : 'Send Money'}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function DepositForm({ customer, disabled }) {
  const { session } = useAuth();
  const [method, setMethod] = useState('Cash Deposit');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const amt = Number(amount);
    if (!amt || amt <= 0) return setError('Enter a valid amount.');

    setStatus('submitting');
    window.setTimeout(() => {
      const txn = requestDeposit(session.id, amt, method, note);
      setResult(txn);
      setStatus('done');
    }, 700);
  };

  const reset = () => { setResult(null); setStatus('idle'); setAmount(''); setNote(''); };

  return (
    <AnimatePresence mode="wait">
      {result ? (
        <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={sh.successBox}>
          <div className={sh.successIcon}><DynamicIcon name="Clock" size={26} /></div>
          <h3>Deposit request submitted</h3>
          <p>{formatINR(result.amount)} via {result.beneficiary} is awaiting employee verification before it's credited.</p>
          <Button variant="outline" onClick={reset}>Request another deposit</Button>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={sh.form}>
          <div className={sh.field}>
            <label>Deposit Method</label>
            <select value={method} onChange={(e) => setMethod(e.target.value)} disabled={disabled}>
              <option>Cash Deposit</option>
              <option>Cheque Deposit</option>
              <option>Demand Draft</option>
            </select>
          </div>
          <div className={sh.field}>
            <label>Amount (\u20b9)<span className={sh.req}>*</span></label>
            <input type="number" min="1" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 20000" disabled={disabled} />
          </div>
          <div className={sh.field}>
            <label>Note (optional)</label>
            <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. Cheque number" disabled={disabled} />
          </div>
          {error && <div className={`${sh.banner} ${sh.danger}`} style={{ marginBottom: 0 }}><DynamicIcon name="CircleAlert" size={16} />{error}</div>}
          <Button type="submit" size="lg" disabled={disabled || status === 'submitting'}>
            {status === 'submitting' ? 'Submitting\u2026' : 'Submit Deposit Request'}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      type="button" onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 999,
        border: `1px solid ${active ? 'var(--color-accent)' : 'var(--border-glass)'}`,
        background: active ? 'rgba(0,245,255,0.08)' : 'transparent', color: active ? 'var(--color-accent)' : 'var(--color-text-secondary)',
        fontSize: 13.5, fontWeight: 600, cursor: 'pointer',
      }}
    >
      <DynamicIcon name={icon} size={15} />{label}
    </button>
  );
}
