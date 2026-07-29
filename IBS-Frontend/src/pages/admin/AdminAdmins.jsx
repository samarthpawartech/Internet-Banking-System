import { useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DataTable from '../../components/dashboard/DataTable.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Modal from '../../components/dashboard/Modal.jsx';
import Button from '../../components/ui/Button.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { getAdmins, addAdmin, updateAdmin, deleteAdmin } from '../../store/db.js';
import { PersonFormModal } from './AdminEmployees.jsx';

const empty = { name: '', email: '', username: '', password: '', role: 'admin' };

export default function AdminAdmins() {
  const { session } = useAuth();
  const [admins, setAdmins] = useState(() => getAdmins());
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(empty);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const refresh = () => setAdmins(getAdmins());
  const openAdd = () => { setForm(empty); setEditing(null); setFormOpen(true); };
  const openEdit = (row) => { setForm({ name: row.name, email: row.email, username: row.username, password: '', role: row.role }); setEditing(row); setFormOpen(true); };

  const handleSave = (e) => {
    e.preventDefault();
    if (editing) {
      updateAdmin(editing.id, { name: form.name, email: form.email, role: form.role }, session.username);
    } else {
      addAdmin({ ...form, password: form.password || 'demo123' }, session.username);
    }
    setFormOpen(false);
    refresh();
  };

  const handleDelete = () => { deleteAdmin(deleteTarget.id, session.username); setDeleteTarget(null); refresh(); };
  const toggleStatus = (row) => { updateAdmin(row.id, { status: row.status === 'active' ? 'disabled' : 'active' }, session.username); refresh(); };

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'username', label: 'Username' },
    { key: 'role', label: 'Role', render: (r) => <span style={{ textTransform: 'capitalize' }}>{r.role}</span> },
    { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
  ];

  const actions = [
    { label: 'Edit', icon: 'Pencil', onClick: openEdit },
    { label: 'Enable/Disable', icon: 'ShieldOff', variant: 'warning', show: (r) => r.id !== session.id, onClick: toggleStatus },
    { label: 'Delete', icon: 'Trash2', variant: 'danger', show: (r) => r.id !== session.id, onClick: (row) => setDeleteTarget(row) },
  ];

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Admin Management</h1>
          <p className={sh.pageSubtitle}>Add other admins and control their access level.</p>
        </div>
        <div className={sh.headerActions}><Button size="sm" icon="UserPlus" onClick={openAdd}>Add Admin</Button></div>
      </div>

      <DataTable columns={columns} rows={admins} actions={actions} searchKeys={['name', 'username', 'role']} emptyMessage="No admins yet." />

      {formOpen && (
        <PersonFormModal
          title={editing ? `Edit ${editing.name}` : 'Add Admin'}
          form={form} setForm={setForm} showPassword={!editing} showRole
          onSave={handleSave} onCancel={() => setFormOpen(false)}
        />
      )}

      <Modal open={!!deleteTarget} title="Delete this admin?" description={`${deleteTarget?.name} will lose access immediately.`} confirmLabel="Delete" tone="danger" onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
    </div>
  );
}
