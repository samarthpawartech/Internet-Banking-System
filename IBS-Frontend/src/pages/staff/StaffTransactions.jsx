import { useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DataTable from '../../components/dashboard/DataTable.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Modal from '../../components/dashboard/Modal.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { getTransactions, getCustomers, approveTransaction, rejectTransaction, reverseTransaction } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';

export default function StaffTransactions() {
  const { session } = useAuth();
  const [transactions, setTransactions] = useState(() => getTransactions());
  const customers = getCustomers();
  const [confirmAction, setConfirmAction] = useState(null);

  const customerName = (id) => customers.find((c) => c.id === id)?.fullName || 'Unknown';

  const refresh = () => setTransactions(getTransactions());

  const runConfirmed = () => {
    if (!confirmAction) return;
    const { type, row } = confirmAction;
    if (type === 'approve') approveTransaction(row.id, session.username);
    if (type === 'reject') rejectTransaction(row.id, session.username);
    if (type === 'reverse') reverseTransaction(row.id, session.username);
    setConfirmAction(null);
    refresh();
  };

  const columns = [
    { key: 'date', label: 'Date', render: (r) => new Date(r.date).toLocaleString('en-IN') },
    { key: 'customerId', label: 'Customer', render: (r) => customerName(r.customerId) },
    { key: 'type', label: 'Type', render: (r) => <span style={{ textTransform: 'capitalize' }}>{r.type}</span> },
    { key: 'amount', label: 'Amount', render: (r) => <span className="mono">{formatINR(r.amount)}</span> },
    { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
  ];

  const actions = [
    { label: 'Approve', icon: 'CircleCheckBig', variant: 'success', show: (r) => r.status === 'pending', onClick: (row) => setConfirmAction({ type: 'approve', row }) },
    { label: 'Reject', icon: 'X', variant: 'danger', show: (r) => r.status === 'pending', onClick: (row) => setConfirmAction({ type: 'reject', row }) },
    { label: 'Reverse', icon: 'Undo2', variant: 'warning', show: (r) => r.status === 'completed', onClick: (row) => setConfirmAction({ type: 'reverse', row }) },
  ];

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Transactions</h1>
          <p className={sh.pageSubtitle}>Approve pending transfers, or reverse a completed transaction if authorised.</p>
        </div>
      </div>

      <DataTable columns={columns} rows={transactions} actions={actions} searchKeys={['type', 'status']} emptyMessage="No transactions found." />

      <Modal
        open={!!confirmAction}
        title={confirmAction?.type === 'approve' ? 'Approve transaction?' : confirmAction?.type === 'reject' ? 'Reject transaction?' : 'Reverse transaction?'}
        description={`This ${confirmAction?.row.type} of ${confirmAction ? formatINR(confirmAction.row.amount) : ''} for ${confirmAction ? customerName(confirmAction.row.customerId) : ''} will be marked "${confirmAction?.type === 'approve' ? 'completed' : confirmAction?.type === 'reject' ? 'rejected' : 'reversed'}".`}
        confirmLabel="Confirm"
        tone={confirmAction?.type === 'approve' ? 'success' : 'danger'}
        onConfirm={runConfirmed}
        onCancel={() => setConfirmAction(null)}
      />
    </div>
  );
}
