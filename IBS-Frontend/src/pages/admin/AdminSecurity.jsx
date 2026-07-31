import { useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DataTable from '../../components/dashboard/DataTable.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { getLoginHistory, getAuditLogs, getCustomers, setLocked } from '../../store/db.js';

export default function AdminSecurity() {
  const { session } = useAuth();
  const [tab, setTab] = useState('logins');
  const [customers, setCustomers] = useState(() => getCustomers());
  const loginHistory = getLoginHistory();
  const auditLogs = getAuditLogs();

  const refresh = () => setCustomers(getCustomers());
  const toggleBlock = (row) => { setLocked(row.id, !row.locked, session.username); refresh(); };

  const loginColumns = [
    { key: 'timestamp', label: 'Time', render: (r) => new Date(r.timestamp).toLocaleString('en-IN') },
    { key: 'username', label: 'Username' },
    { key: 'role', label: 'Role', render: (r) => <span style={{ textTransform: 'capitalize' }}>{r.role}</span> },
  ];
  const auditColumns = [
    { key: 'timestamp', label: 'Time', render: (r) => new Date(r.timestamp).toLocaleString('en-IN') },
    { key: 'actor', label: 'Actor' },
    { key: 'action', label: 'Action' },
    { key: 'target', label: 'Target', render: (r) => r.target ? <span className="mono">{r.target}</span> : '—' },
  ];
  const customerColumns = [
    { key: 'fullName', label: 'Customer' },
    { key: 'accountNumber', label: 'Account No.' },
    { key: 'locked', label: 'Status', render: (r) => <StatusBadge status={r.locked ? 'blocked' : 'active'} /> },
  ];
  const customerActions = [
    { label: 'Block', icon: 'ShieldOff', variant: 'danger', show: (r) => !r.locked, onClick: toggleBlock },
    { label: 'Unblock', icon: 'ShieldCheck', variant: 'success', show: (r) => r.locked, onClick: toggleBlock },
  ];

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Security</h1>
          <p className={sh.pageSubtitle}>Login history, a full audit trail, and account blocking.</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 22 }}>
        <TabBtn active={tab === 'logins'} onClick={() => setTab('logins')} icon="History" label="Login History" />
        <TabBtn active={tab === 'audit'} onClick={() => setTab('audit')} icon="ListChecks" label="Audit Logs" />
        <TabBtn active={tab === 'block'} onClick={() => setTab('block')} icon="UserX" label="Block Users" />
      </div>

      {tab === 'logins' && <DataTable columns={loginColumns} rows={loginHistory} searchKeys={['username', 'role']} emptyMessage="No logins recorded yet in this browser session." />}
      {tab === 'audit' && <DataTable columns={auditColumns} rows={auditLogs} searchKeys={['actor', 'action', 'target']} emptyMessage="No audit events yet." />}
      {tab === 'block' && <DataTable columns={customerColumns} rows={customers} actions={customerActions} searchKeys={['fullName', 'accountNumber']} emptyMessage="No customers found." />}
    </div>
  );
}

function TabBtn({ active, onClick, icon, label }) {
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
