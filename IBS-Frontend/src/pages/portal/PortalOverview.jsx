import { useMemo } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DashboardTile from '../../components/dashboard/DashboardTile.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Button from '../../components/ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { findCustomerById, getTransactionsFor } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';

export default function PortalOverview() {
  const { session } = useAuth();
  const customer = useMemo(() => findCustomerById(session.id), [session.id]);
  const recentTxns = useMemo(() => getTransactionsFor(session.id).slice(0, 5), [session.id]);

  if (!customer) return null;
  const pending = customer.accountStatus === 'pending';

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Welcome back, {customer.fullName.split(' ')[0]}</h1>
          <p className={sh.pageSubtitle}>Account {customer.accountNumber}</p>
        </div>
        <div className={sh.headerActions}>
          <Button to="/portal/transfer" icon="Send" size="sm">Transfer Money</Button>
        </div>
      </div>

      {pending && (
        <div className={`${sh.banner} ${sh.warning}`}>
          <DynamicIcon name="Clock" size={20} />
          <div><strong>Your account is pending verification.</strong> An IBS employee needs to review your KYC before transactions are enabled. This usually takes under a business day in the demo.</div>
        </div>
      )}
      {customer.locked && (
        <div className={`${sh.banner} ${sh.danger}`}>
          <DynamicIcon name="ShieldOff" size={20} />
          <div><strong>Your account is locked</strong> for security review. Please contact support.</div>
        </div>
      )}

      <div className={sh.grid2} style={{ marginBottom: 32 }}>
        <div className={sh.balanceCard}>
          <span className={sh.balanceLabel}>Available Balance</span>
          <span className={`${sh.balanceValue} mono`}>{formatINR(customer.balance)}</span>
          <div className={sh.balanceMeta}>
            <span>KYC: {customer.kycStatus}</span>
            <span>Status: {customer.accountStatus}</span>
          </div>
        </div>
        <div className={sh.panel}>
          <h3 className={sh.panelTitle}><DynamicIcon name="CircleUserRound" size={17} />Account Details</h3>
          <DetailRow label="Account Holder" value={customer.fullName} />
          <DetailRow label="Account Number" value={customer.accountNumber} mono />
          <DetailRow label="Registered Mobile" value={customer.mobile} />
          <DetailRow label="Registered Email" value={customer.email} />
          <DetailRow label="KYC Status" value={<StatusBadge status={customer.kycStatus} />} />
        </div>
      </div>

      <div className={sh.panel}>
        <h3 className={sh.panelTitle}><DynamicIcon name="History" size={17} />Recent Transactions</h3>
        {recentTxns.length === 0 ? (
          <div className={sh.emptyState}><DynamicIcon name="Receipt" size={30} /><p>No transactions yet.</p></div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {recentTxns.map((t) => (
              <div key={t.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 4px', borderBottom: '1px solid var(--border-glass)' }}>
                <div>
                  <div style={{ fontSize: 14, color: 'var(--color-text)', textTransform: 'capitalize' }}>{t.type}{t.beneficiary ? ` \u2014 ${t.beneficiary}` : ''}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-muted)' }}>{new Date(t.date).toLocaleString('en-IN')}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span className="mono" style={{ fontSize: 14, color: t.type === 'deposit' ? 'var(--color-success)' : 'var(--color-text)' }}>
                    {t.type === 'deposit' ? '+' : '-'}{formatINR(t.amount)}
                  </span>
                  <StatusBadge status={t.status} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DetailRow({ label, value, mono }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', fontSize: 13.5, borderBottom: '1px dashed var(--border-glass)' }}>
      <span style={{ color: 'var(--color-muted)' }}>{label}</span>
      <span className={mono ? 'mono' : ''} style={{ color: 'var(--color-text)', fontWeight: 600 }}>{value}</span>
    </div>
  );
}
