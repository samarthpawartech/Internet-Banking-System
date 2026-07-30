import { useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DataTable from '../../components/dashboard/DataTable.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Modal from '../../components/dashboard/Modal.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { getCustomers, setAccountStatus } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';

export default function EmployeeAccounts() {
  const { session } = useAuth();
  const [customers, setCustomers] = useState(() => getCustomers());
  const [confirmAction, setConfirmAction] = useState(null);

  const refresh = () => setCustomers(getCustomers());

  const runConfirmed = () => {
    if (!confirmAction) return;
    setAccountStatus(confirmAction.row.id, confirmAction.status, session.username);
    setConfirmAction(null);
    refresh();
  };

  const columns = [
    { key: 'fullName', label: 'Customer' },
    { key: 'accountNumber', label: 'Account No.' },
    { key: 'balance', label: 'Balance', render: (r) => <span className="mono">{formatINR(r.balance)}</span> },
    { key: 'accountStatus', label: 'Status', render: (r) => <StatusBadge status={r.accountStatus} /> },
  ];

  const actions = [
    { label: 'Activate', icon: 'CirclePlay', variant: 'success', show: (r) => r.accountStatus !== 'active' && r.accountStatus !== 'closed', onClick: (row) => setConfirmAction({ status: 'active', row }) },
    { label: 'Freeze', icon: 'Snowflake', variant: 'warning', show: (r) => r.accountStatus === 'active', onClick: (row) => setConfirmAction({ status: 'frozen', row }) },
    { label: 'Unfreeze', icon: 'CirclePlay', variant: 'success', show: (r) => r.accountStatus === 'frozen', onClick: (row) => setConfirmAction({ status: 'active', row }) },
    { label: 'Close', icon: 'DoorOpen', variant: 'danger', show: (r) => r.accountStatus !== 'closed', onClick: (row) => setConfirmAction({ status: 'closed', row }) },
  ];

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Account Operations</h1>
          <p className={sh.pageSubtitle}>Activate, freeze or close customer accounts.</p>
        </div>
      </div>

      <DataTable columns={columns} rows={customers} actions={actions} searchKeys={['fullName', 'accountNumber']} emptyMessage="No accounts found." />

      <Modal
        open={!!confirmAction}
        title={`${confirmAction?.status === 'active' ? 'Activate' : confirmAction?.status === 'frozen' ? 'Freeze' : 'Close'} this account?`}
        description={`This will set ${confirmAction?.row.fullName}'s account status to "${confirmAction?.status}".`}
        confirmLabel="Confirm"
        tone={confirmAction?.status === 'active' ? 'success' : 'danger'}
        onConfirm={runConfirmed}
        onCancel={() => setConfirmAction(null)}
      />
    </div>
  );
}
