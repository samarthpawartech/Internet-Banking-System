import { useMemo } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DashboardTile from '../../components/dashboard/DashboardTile.jsx';
import DataTable from '../../components/dashboard/DataTable.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Button from '../../components/ui/Button.jsx';
import { getCustomers, getTransactions } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';
import { exportToCSV, exportToPDF } from '../../utils/exportData.js';

function isToday(iso) {
  const d = new Date(iso);
  const now = new Date();
  return d.toDateString() === now.toDateString();
}
function isThisWeek(iso) {
  const d = new Date(iso).getTime();
  return Date.now() - d < 7 * 24 * 60 * 60 * 1000;
}

export default function StaffReports() {
  const customers = useMemo(() => getCustomers(), []);
  const transactions = useMemo(() => getTransactions(), []);

  const todayTxns = transactions.filter((t) => isToday(t.date));
  const newCustomers = customers.filter((c) => isThisWeek(c.createdAt));
  const pendingApprovals = customers.filter((c) => c.kycStatus === 'pending').length + transactions.filter((t) => t.status === 'pending').length;

  const columns = [
    { key: 'date', label: 'Date', render: (r) => new Date(r.date).toLocaleString('en-IN') },
    { key: 'type', label: 'Type', render: (r) => <span style={{ textTransform: 'capitalize' }}>{r.type}</span> },
    { key: 'amount', label: 'Amount', render: (r) => <span className="mono">{formatINR(r.amount)}</span> },
    { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
  ];

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Reports</h1>
          <p className={sh.pageSubtitle}>Daily activity summary, computed live from current data.</p>
        </div>
        <div className={sh.headerActions}>
          <Button variant="outline" size="sm" icon="FileSpreadsheet" onClick={() => exportToCSV('staff-daily-transactions', todayTxns)}>Export CSV</Button>
          <Button variant="outline" size="sm" icon="Printer" onClick={exportToPDF}>Save as PDF</Button>
        </div>
      </div>

      <div className={sh.tileGrid}>
        <DashboardTile icon="Calendar" label="Transactions Today" value={todayTxns.length} tone="accent" />
        <DashboardTile icon="UserPlus" label="New Customers (7 days)" value={newCustomers.length} tone="success" />
        <DashboardTile icon="Clock" label="Pending Approvals" value={pendingApprovals} tone="gold" />
        <DashboardTile icon="Users" label="Total Customers" value={customers.length} tone="purple" />
      </div>

      <div className={sh.panelTitle} style={{ marginBottom: 14 }}>Today's Transactions</div>
      <DataTable columns={columns} rows={todayTxns} searchable={false} emptyMessage="No transactions recorded today." />
    </div>
  );
}
