import { useMemo } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DashboardTile from '../../components/dashboard/DashboardTile.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { getCustomers, getEmployees, getTransactions, getAuditLogs } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';

export default function AdminDashboard() {
  const customers = useMemo(() => getCustomers(), []);
  const employees = useMemo(() => getEmployees(), []);
  const transactions = useMemo(() => getTransactions(), []);
  const auditLogs = useMemo(() => getAuditLogs(), []);

  const totalDeposits = customers.reduce((sum, c) => sum + (c.balance || 0), 0);
  const activeAccounts = customers.filter((c) => c.accountStatus === 'active').length;

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Admin Dashboard</h1>
          <p className={sh.pageSubtitle}>System-wide totals across the whole bank.</p>
        </div>
      </div>

      <div className={sh.tileGrid}>
        <DashboardTile icon="Users" label="Total Customers" value={customers.length} tone="accent" />
        <DashboardTile icon="UserCog" label="Total Employees" value={employees.length} tone="purple" />
        <DashboardTile icon="Landmark" label="Active Accounts" value={activeAccounts} tone="success" />
        <DashboardTile icon="ListChecks" label="Total Transactions" value={transactions.length} tone="gold" />
      </div>
      <div className={sh.tileGrid} style={{ gridTemplateColumns: '1fr' }}>
        <DashboardTile icon="IndianRupee" label="Total Deposits Across All Accounts" value={formatINR(totalDeposits)} tone="success" />
      </div>

      <div className={sh.panel}>
        <h3 className={sh.panelTitle}><DynamicIcon name="History" size={17} />Recent Activity</h3>
        {auditLogs.length === 0 ? (
          <div className={sh.emptyState}><DynamicIcon name="History" size={26} /><p>No activity yet.</p></div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {auditLogs.slice(0, 8).map((log) => (
              <div key={log.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 4px', borderBottom: '1px solid var(--border-glass)', fontSize: 13 }}>
                <div><strong style={{ color: 'var(--color-text)' }}>{log.actor}</strong> <span style={{ color: 'var(--color-muted)' }}>{log.action}</span> {log.target && <span className="mono" style={{ color: 'var(--color-accent)' }}>{log.target}</span>}</div>
                <span style={{ color: 'var(--color-muted)', fontSize: 12, flexShrink: 0, marginLeft: 12 }}>{new Date(log.timestamp).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
