import { useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DataTable from '../../components/dashboard/DataTable.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Modal from '../../components/dashboard/Modal.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { getCustomers, deleteCustomer, setLocked } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';

export default function AdminCustomers() {
  const { session } = useAuth();
  const [customers, setCustomers] = useState(() => getCustomers());
  const [deleteTarget, setDeleteTarget] = useState(null);

  const refresh = () => setCustomers(getCustomers());
  const toggleLock = (row) => { setLocked(row.id, !row.locked, session.username); refresh(); };
  const handleDelete = () => { deleteCustomer(deleteTarget.id, session.username); setDeleteTarget(null); refresh(); };

  const columns = [
    { key: 'fullName', label: 'Customer' },
    { key: 'accountNumber', label: 'Account No.' },
    { key: 'balance', label: 'Balance', render: (r) => <span className="mono">{formatINR(r.balance)}</span> },
    { key: 'accountStatus', label: 'Status', render: (r) => <StatusBadge status={r.accountStatus} /> },
    { key: 'locked', label: 'Security', render: (r) => <StatusBadge status={r.locked ? 'locked' : 'unlocked'} /> },
  ];

  const actions = [
    { label: 'Lock', icon: 'Lock', variant: 'warning', show: (r) => !r.locked, onClick: toggleLock },
    { label: 'Unlock', icon: 'LockOpen', variant: 'success', show: (r) => r.locked, onClick: toggleLock },
    { label: 'Delete', icon: 'Trash2', variant: 'danger', onClick: (row) => setDeleteTarget(row) },
  ];

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Customer Management</h1>
          <p className={sh.pageSubtitle}>Full view of every customer. Locking is separate from an employee's account freeze \u2014 use it for security holds.</p>
        </div>
      </div>

      <DataTable columns={columns} rows={customers} actions={actions} searchKeys={['fullName', 'accountNumber']} emptyMessage="No customers found." />

      <Modal
        open={!!deleteTarget}
        title="Delete this customer?"
        description={`This permanently removes ${deleteTarget?.fullName}'s record, including balance and transaction history, from this demo database.`}
        confirmLabel="Delete Permanently"
        tone="danger"
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
