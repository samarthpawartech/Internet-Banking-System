import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import sh from '../../components/dashboard/dashboardShared.module.css';
import Button from '../../components/ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { findCustomerById, createTransaction } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';

const BILLERS = ['Electricity Board', 'Water Supply', 'Broadband / Wi-Fi', 'Gas Connection', 'DTH / Cable', 'Insurance Premium'];

export default function CustomerBills() {
  const { session } = useAuth();
  const customer = useMemo(() => findCustomerById(session.id), [session.id]);
  const [tab, setTab] = useState('bill');
  const [biller, setBiller] = useState(BILLERS[0]);
  const [consumerNo, setConsumerNo] = useState('');
  const [mobile, setMobile] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle');

  const disabled = customer.accountStatus !== 'active' || customer.locked;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const amt = Number(amount);
    if (!amt || amt <= 0) return setError('Enter a valid amount.');
    if (amt > customer.balance) return setError('Insufficient balance.');
    if (tab === 'bill' && !consumerNo) return setError('Enter your consumer / account number.');
    if (tab === 'recharge' && !mobile) return setError('Enter the mobile number to recharge.');

    setStatus('submitting');
    window.setTimeout(() => {
      const txn = createTransaction({
        customerId: session.id,
        type: tab === 'bill' ? 'bill' : 'recharge',
        amount: amt,
        beneficiary: tab === 'bill' ? biller : `Recharge ${mobile}`,
        note: tab === 'bill' ? `Consumer no. ${consumerNo}` : '',
      });
      setResult(txn);
      setStatus('done');
    }, 700);
  };

  const reset = () => { setResult(null); setStatus('idle'); setAmount(''); setConsumerNo(''); setMobile(''); };

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Bills & Recharge</h1>
          <p className={sh.pageSubtitle}>Pay utility bills or top up a prepaid mobile number.</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 22 }}>
        <TabButton active={tab === 'bill'} onClick={() => { setTab('bill'); setResult(null); setStatus('idle'); }} icon="Receipt" label="Bill Payment" />
        <TabButton active={tab === 'recharge'} onClick={() => { setTab('recharge'); setResult(null); setStatus('idle'); }} icon="Smartphone" label="Mobile Recharge" />
      </div>

      <div className={sh.panel} style={{ maxWidth: 520 }}>
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={sh.successBox}>
              <div className={sh.successIcon}><DynamicIcon name={result.status === 'pending' ? 'Clock' : 'CircleCheckBig'} size={26} /></div>
              <h3>{result.status === 'pending' ? 'Payment pending approval' : 'Payment successful'}</h3>
              <p>{formatINR(result.amount)} \u2014 {result.beneficiary}</p>
              <Button variant="outline" onClick={reset}>Make another payment</Button>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={sh.form}>
              {tab === 'bill' ? (
                <>
                  <div className={sh.field}><label>Biller</label>
                    <select value={biller} onChange={(e) => setBiller(e.target.value)} disabled={disabled}>
                      {BILLERS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div className={sh.field}><label>Consumer / Account Number<span className={sh.req}>*</span></label>
                    <input value={consumerNo} onChange={(e) => setConsumerNo(e.target.value)} placeholder="e.g. 400211987" disabled={disabled} />
                  </div>
                </>
              ) : (
                <div className={sh.field}><label>Mobile Number<span className={sh.req}>*</span></label>
                  <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="10-digit mobile number" disabled={disabled} />
                </div>
              )}
              <div className={sh.field}><label>Amount (\u20b9)<span className={sh.req}>*</span></label>
                <input type="number" min="1" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 1200" disabled={disabled} />
              </div>
              {error && <div className={`${sh.banner} ${sh.danger}`} style={{ marginBottom: 0 }}><DynamicIcon name="CircleAlert" size={16} />{error}</div>}
              <Button type="submit" size="lg" disabled={disabled || status === 'submitting'}>
                {status === 'submitting' ? 'Processing\u2026' : tab === 'bill' ? 'Pay Bill' : 'Recharge Now'}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
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
