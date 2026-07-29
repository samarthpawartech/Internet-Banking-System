import { useMemo, useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DashboardTile from '../../components/dashboard/DashboardTile.jsx';
import DataTable from '../../components/dashboard/DataTable.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Button from '../../components/ui/Button.jsx';
import { getCustomers, getTransactions } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';
import { exportToCSV, exportToPDF } from '../../utils/exportData.js';

function isThisMonth(iso) {
  const d = new Date(iso);
  const now = new Date();
  return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
}

export default function AdminReports() {
  const [report, setReport] = useState('monthly');
  const customers = useMemo(() => getCustomers(), []);
  const transactions = useMemo(() => getTransactions(), []);

  const monthlyTxns = transactions.filter((t) => isThisMonth(t.date));
  const monthlyDeposits = monthlyTxns.filter((t) => t.type === 'deposit').reduce((s, t) => s + t.amount, 0);
  const monthlyCustomers = customers.filter((c) => isThisMonth(c.createdAt));
  const revenue = transactions.filter((t) => t.status === 'completed' && (t.type === 'bill' || t.type === 'recharge')).reduce((s, t) => s + t.amount * 0.01, 0); // illustrative 1% service margin

  const reportRows = {
    monthly: monthlyTxns,
    revenue: transactions.filter((t) => t.type === 'bill' || t.type === 'recharge'),
    transactions: transactions,
  }[report];

  const columns = [
    { key: 'date', label: 'Date', render: (r) => new Date(r.date).toLocaleDateString('en-IN') },
    { key: 'type', label: 'Type', render: (r) => <span style={{ textTransform: 'capitalize' }}>{r.type}</span> },
    { key: 'amount', label: 'Amount', render: (r) => <span className="mono">{formatINR(r.amount)}</span> },
    { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
  ];

  const handleExport = () => exportToCSV(`ibs-${report}-report`, reportRows.map((t) => ({ Date: new Date(t.date).toLocaleString('en-IN'), Type: t.type, Amount: t.amount, Status: t.status })));

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Reports</h1>
          <p className={sh.pageSubtitle}>Monthly, revenue and transaction reports \u2014 export to CSV or print to PDF.</p>
        </div>
        <div className={sh.headerActions}>
          <Button variant="outline" size="sm" icon="FileSpreadsheet" onClick={handleExport}>Export Excel (CSV)</Button>
          <Button variant="outline" size="sm" icon="Printer" onClick={exportToPDF}>Export PDF</Button>
        </div>
      </div>

      <div className={sh.tileGrid}>
        <DashboardTile icon="Calendar" label="Transactions This Month" value={monthlyTxns.length} tone="accent" />
        <DashboardTile icon="IndianRupee" label="Deposits This Month" value={formatINR(monthlyDeposits)} tone="success" />
        <DashboardTile icon="UserPlus" label="New Customers This Month" value={monthlyCustomers.length} tone="purple" />
        <DashboardTile icon="ChartLine" label="Illustrative Fee Revenue" value={formatINR(revenue)} tone="gold" />
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 22 }}>
        <TabBtn active={report === 'monthly'} onClick={() => setReport('monthly')} label="Monthly Report" />
        <TabBtn active={report === 'revenue'} onClick={() => setReport('revenue')} label="Revenue Report" />
        <TabBtn active={report === 'transactions'} onClick={() => setReport('transactions')} label="All Transactions" />
      </div>

      <DataTable columns={columns} rows={reportRows} searchable={false} emptyMessage="No records for this report." />
    </div>
  );
}

function TabBtn({ active, onClick, label }) {
  return (
    <button
      type="button" onClick={onClick}
      style={{
        padding: '10px 18px', borderRadius: 999,
        border: `1px solid ${active ? 'var(--color-accent)' : 'var(--border-glass)'}`,
        background: active ? 'rgba(0,245,255,0.08)' : 'transparent', color: active ? 'var(--color-accent)' : 'var(--color-text-secondary)',
        fontSize: 13.5, fontWeight: 600, cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}
