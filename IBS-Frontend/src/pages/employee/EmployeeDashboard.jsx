import { useMemo } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DashboardTile from '../../components/dashboard/DashboardTile.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Button from '../../components/ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { getCustomers, getTransactions } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';

export default function EmployeeDashboard() {
  const customers = useMemo(() => getCustomers(), []);
  const transactions = useMemo(() => getTransactions(), []);

  const pendingCustomers = customers.filter((c) => c.kycStatus === 'pending');
  const pendingTxns = transactions.filter((t) => t.status === 'pending');
  const activeAccounts = customers.filter((c) => c.accountStatus === 'active');

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Employee Dashboard</h1>
          <p className={sh.pageSubtitle}>Live snapshot of what needs your attention.</p>
        </div>
      </div>

      <div className={sh.tileGrid}>
        <DashboardTile icon="Clock" label="Pending Registrations" value={pendingCustomers.length} tone="gold" />
        <DashboardTile icon="ListChecks" label="Pending Transactions" value={pendingTxns.length} tone="purple" />
        <DashboardTile icon="UserCheck" label="Active Accounts" value={activeAccounts.length} tone="success" />
        <DashboardTile icon="Users" label="Total Customers" value={customers.length} tone="accent" />
      </div>

      <div className={sh.grid2}>
        <div className={sh.panel}>
          <h3 className={sh.panelTitle}><DynamicIcon name="Clock" size={17} />Pending Customer Requests</h3>
          {pendingCustomers.length === 0 ? (
            <div className={sh.emptyState}><DynamicIcon name="CircleCheckBig" size={26} /><p>All caught up \u2014 no pending KYC.</p></div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {pendingCustomers.slice(0, 5).map((c) => (
                <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 4px', borderBottom: '1px solid var(--border-glass)' }}>
                  <div><strong style={{ fontSize: 13.5 }}>{c.fullName}</strong><div style={{ fontSize: 12, color: 'var(--color-muted)' }}>{c.accountNumber}</div></div>
                  <StatusBadge status={c.kycStatus} />
                </div>
              ))}
              <Button to="/employee/customers" variant="ghost" size="sm" icon="ArrowRight" style={{ alignSelf: 'flex-start', marginTop: 10 }}>Review all</Button>
            </div>
          )}
        </div>

        <div className={sh.panel}>
          <h3 className={sh.panelTitle}><DynamicIcon name="ListChecks" size={17} />Pending Transactions</h3>
          {pendingTxns.length === 0 ? (
            <div className={sh.emptyState}><DynamicIcon name="CircleCheckBig" size={26} /><p>No transactions waiting on approval.</p></div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {pendingTxns.slice(0, 5).map((t) => (
                <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 4px', borderBottom: '1px solid var(--border-glass)' }}>
                  <div><strong style={{ fontSize: 13.5, textTransform: 'capitalize' }}>{t.type}</strong><div style={{ fontSize: 12, color: 'var(--color-muted)' }}>{t.beneficiary}</div></div>
                  <span className="mono" style={{ fontSize: 13.5 }}>{formatINR(t.amount)}</span>
                </div>
              ))}
              <Button to="/employee/transactions" variant="ghost" size="sm" icon="ArrowRight" style={{ alignSelf: 'flex-start', marginTop: 10 }}>Review all</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
