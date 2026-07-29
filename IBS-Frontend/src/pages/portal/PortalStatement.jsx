import { useMemo } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DataTable from '../../components/dashboard/DataTable.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Button from '../../components/ui/Button.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { getTransactionsFor } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';
import { exportToCSV, exportToPDF } from '../../utils/exportData.js';

export default function PortalStatement() {
  const { session } = useAuth();
  const transactions = useMemo(() => getTransactionsFor(session.id), [session.id]);

  const columns = [
    { key: 'date', label: 'Date', render: (r) => new Date(r.date).toLocaleDateString('en-IN') },
    { key: 'type', label: 'Type', render: (r) => <span style={{ textTransform: 'capitalize' }}>{r.type}</span> },
    { key: 'beneficiary', label: 'Details', render: (r) => r.beneficiary || r.note || '\u2014' },
    { key: 'amount', label: 'Amount', render: (r) => <span className="mono">{r.type === 'deposit' ? '+' : '-'}{formatINR(r.amount)}</span> },
    { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
  ];

  const handleExportCSV = () => {
    exportToCSV('ibs-statement', transactions.map((t) => ({
      Date: new Date(t.date).toLocaleString('en-IN'), Type: t.type, Details: t.beneficiary || t.note || '',
      Amount: t.amount, Status: t.status,
    })));
  };

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Account Statement</h1>
          <p className={sh.pageSubtitle}>{transactions.length} transaction{transactions.length !== 1 ? 's' : ''} on record</p>
        </div>
        <div className={sh.headerActions}>
          <Button variant="outline" size="sm" icon="FileSpreadsheet" onClick={handleExportCSV}>Export CSV</Button>
          <Button variant="outline" size="sm" icon="Printer" onClick={exportToPDF}>Save as PDF</Button>
        </div>
      </div>

      <DataTable columns={columns} rows={transactions} searchable searchKeys={['type', 'beneficiary', 'note', 'status']} emptyMessage="No transactions on this account yet." />
    </div>
  );
}
