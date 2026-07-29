import { useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DataTable from '../../components/dashboard/DataTable.jsx';
import StatusBadge from '../../components/dashboard/StatusBadge.jsx';
import Modal from '../../components/dashboard/Modal.jsx';
import Button from '../../components/ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee, resetEmployeePassword } from '../../store/db.js';

const empty = { name: '', email: '', username: '', password: '', branch: '' };

export default function AdminEmployees() {
  const { session } = useAuth();
  const [employees, setEmployees] = useState(() => getEmployees());
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(empty);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [tempPassword, setTempPassword] = useState(null);

  const refresh = () => setEmployees(getEmployees());
  const openAdd = () => { setForm(empty); setEditing(null); setFormOpen(true); };
  const openEdit = (row) => { setForm({ name: row.name, email: row.email, username: row.username, password: '', branch: row.branch }); setEditing(row); setFormOpen(true); };

  const handleSave = (e) => {
    e.preventDefault();
    if (editing) {
      const patch = { name: form.name, email: form.email, branch: form.branch };
      updateEmployee(editing.id, patch, session.username);
    } else {
      addEmployee({ ...form, password: form.password || 'demo123' }, session.username);
    }
    setFormOpen(false);
    refresh();
  };

  const handleDelete = () => { deleteEmployee(deleteTarget.id, session.username); setDeleteTarget(null); refresh(); };
  const handleReset = (row) => { const pass = resetEmployeePassword(row.id, session.username); setTempPassword({ name: row.name, pass }); refresh(); };
  const toggleStatus = (row) => { updateEmployee(row.id, { status: row.status === 'active' ? 'disabled' : 'active' }, session.username); refresh(); };

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'username', label: 'Username' },
    { key: 'branch', label: 'Branch' },
    { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.status} /> },
  ];

  const actions = [
    { label: 'Edit', icon: 'Pencil', onClick: openEdit },
    { label: 'Reset Password', icon: 'KeyRound', onClick: handleReset },
    { label: 'Enable/Disable', icon: 'ShieldOff', variant: 'warning', onClick: toggleStatus },
    { label: 'Delete', icon: 'Trash2', variant: 'danger', onClick: (row) => setDeleteTarget(row) },
  ];

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Employee Management</h1>
          <p className={sh.pageSubtitle}>Add, edit, or manage employee access.</p>
        </div>
        <div className={sh.headerActions}><Button size="sm" icon="UserPlus" onClick={openAdd}>Add Employee</Button></div>
      </div>

      <DataTable columns={columns} rows={employees} actions={actions} searchKeys={['name', 'username', 'branch']} emptyMessage="No employees yet." />

      {formOpen && (
        <PersonFormModal
          title={editing ? `Edit ${editing.name}` : 'Add Employee'}
          form={form} setForm={setForm} showPassword={!editing} showBranch
          onSave={handleSave} onCancel={() => setFormOpen(false)}
        />
      )}

      <Modal open={!!deleteTarget} title="Delete this employee?" description={`${deleteTarget?.name} will lose access immediately.`} confirmLabel="Delete" tone="danger" onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />

      <Modal
        open={!!tempPassword}
        title="Password reset"
        description={tempPassword ? `New temporary password for ${tempPassword.name}: ${tempPassword.pass} \u2014 share this securely, it won't be shown again.` : ''}
        confirmLabel="Done"
        tone="success"
        onConfirm={() => setTempPassword(null)}
        onCancel={() => setTempPassword(null)}
      />
    </div>
  );
}

export function PersonFormModal({ title, form, setForm, showPassword, showBranch, showRole, onSave, onCancel }) {
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(2,5,15,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={onCancel}>
      <form onClick={(e) => e.stopPropagation()} onSubmit={onSave} className={sh.panel} style={{ width: 'min(420px, 100%)', background: 'var(--color-card)' }}>
        <h3 className={sh.panelTitle}><DynamicIcon name="UserCog" size={17} />{title}</h3>
        <div className={sh.form}>
          <div className={sh.field}><label>Full Name<span className={sh.req}>*</span></label><input required value={form.name} onChange={(e) => set('name', e.target.value)} /></div>
          <div className={sh.field}><label>Email<span className={sh.req}>*</span></label><input type="email" required value={form.email} onChange={(e) => set('email', e.target.value)} /></div>
          {'username' in form && (
            <div className={sh.field}><label>Username<span className={sh.req}>*</span></label><input required disabled={!showPassword} value={form.username} onChange={(e) => set('username', e.target.value)} /></div>
          )}
          {showPassword && (
            <div className={sh.field}><label>Password (optional \u2014 defaults to demo123)</label><input value={form.password} onChange={(e) => set('password', e.target.value)} placeholder="demo123" /></div>
          )}
          {showBranch && (
            <div className={sh.field}><label>Branch</label><input value={form.branch} onChange={(e) => set('branch', e.target.value)} placeholder="e.g. Bandra Kurla Complex" /></div>
          )}
          {showRole && (
            <div className={sh.field}><label>Role</label>
              <select value={form.role} onChange={(e) => set('role', e.target.value)}>
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>
          )}
          <div style={{ display: 'flex', gap: 10 }}>
            <button type="button" onClick={onCancel} style={{ flex: 1, padding: '11px', borderRadius: 999, border: '1px solid var(--border-glass-strong)', background: 'none', color: 'var(--color-text)', cursor: 'pointer' }}>Cancel</button>
            <button type="submit" style={{ flex: 1, padding: '11px', borderRadius: 999, border: 'none', background: 'var(--gradient-primary)', color: '#041022', fontWeight: 600, cursor: 'pointer' }}>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
