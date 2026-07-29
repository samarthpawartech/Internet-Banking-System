import { useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DataTable from '../../components/dashboard/DataTable.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Modal from '../../components/dashboard/Modal.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { getCustomers, approveCustomer, rejectCustomer, updateCustomer } from '../../store/db.js';
import { formatINR } from '../../utils/format.js';

export default function StaffCustomers() {
  const { session } = useAuth();
  const [customers, setCustomers] = useState(() => getCustomers());
  const [confirmAction, setConfirmAction] = useState(null); // { type, row }
  const [editRow, setEditRow] = useState(null);

  const refresh = () => setCustomers(getCustomers());

  const runConfirmed = () => {
    if (!confirmAction) return;
    const { type, row } = confirmAction;
    if (type === 'approve') approveCustomer(row.id, session.username);
    if (type === 'reject') rejectCustomer(row.id, session.username);
    setConfirmAction(null);
    refresh();
  };

  const saveEdit = (patch) => {
    updateCustomer(editRow.id, patch);
    setEditRow(null);
    refresh();
  };

  const columns = [
    { key: 'fullName', label: 'Customer' },
    { key: 'accountNumber', label: 'Account No.' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'balance', label: 'Balance', render: (r) => <span className="mono">{formatINR(r.balance)}</span> },
    { key: 'kycStatus', label: 'KYC', render: (r) => <StatusBadge status={r.kycStatus} /> },
    { key: 'accountStatus', label: 'Account', render: (r) => <StatusBadge status={r.accountStatus} /> },
  ];

  const actions = [
    { label: 'Approve', icon: 'CircleCheckBig', variant: 'success', show: (r) => r.kycStatus === 'pending', onClick: (row) => setConfirmAction({ type: 'approve', row }) },
    { label: 'Reject', icon: 'X', variant: 'danger', show: (r) => r.kycStatus === 'pending', onClick: (row) => setConfirmAction({ type: 'reject', row }) },
    { label: 'Edit', icon: 'Pencil', onClick: (row) => setEditRow(row) },
  ];

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Customer Management</h1>
          <p className={sh.pageSubtitle}>Review pending registrations and manage customer records.</p>
        </div>
      </div>

      <DataTable columns={columns} rows={customers} actions={actions} searchKeys={['fullName', 'accountNumber', 'mobile', 'kycStatus', 'accountStatus']} emptyMessage="No customers found." />

      <Modal
        open={!!confirmAction}
        title={confirmAction?.type === 'approve' ? 'Approve this customer?' : 'Reject this customer?'}
        description={confirmAction?.type === 'approve' ? `${confirmAction?.row.fullName}'s KYC will be marked verified and their account activated.` : `${confirmAction?.row.fullName}'s KYC will be marked rejected.`}
        confirmLabel={confirmAction?.type === 'approve' ? 'Approve' : 'Reject'}
        tone={confirmAction?.type === 'approve' ? 'success' : 'danger'}
        onConfirm={runConfirmed}
        onCancel={() => setConfirmAction(null)}
      />

      {editRow && <EditCustomerModal row={editRow} onSave={saveEdit} onCancel={() => setEditRow(null)} />}
    </div>
  );
}

function EditCustomerModal({ row, onSave, onCancel }) {
  const [fullName, setFullName] = useState(row.fullName);
  const [email, setEmail] = useState(row.email);
  const [mobile, setMobile] = useState(row.mobile);
  const [city, setCity] = useState(row.city);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(2,5,15,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={onCancel}>
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => { e.preventDefault(); onSave({ fullName, email, mobile, city }); }}
        className={sh.panel}
        style={{ width: 'min(420px, 100%)', background: 'var(--color-card)' }}
      >
        <h3 className={sh.panelTitle}>Edit {row.fullName}</h3>
        <div className={sh.form}>
          <div className={sh.field}><label>Full Name</label><input value={fullName} onChange={(e) => setFullName(e.target.value)} /></div>
          <div className={sh.field}><label>Email</label><input value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className={sh.field}><label>Mobile</label><input value={mobile} onChange={(e) => setMobile(e.target.value)} /></div>
          <div className={sh.field}><label>City</label><input value={city} onChange={(e) => setCity(e.target.value)} /></div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button type="button" onClick={onCancel} style={{ flex: 1, padding: '11px', borderRadius: 999, border: '1px solid var(--border-glass-strong)', background: 'none', color: 'var(--color-text)', cursor: 'pointer' }}>Cancel</button>
            <button type="submit" style={{ flex: 1, padding: '11px', borderRadius: 999, border: 'none', background: 'var(--gradient-primary)', color: '#041022', fontWeight: 600, cursor: 'pointer' }}>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
