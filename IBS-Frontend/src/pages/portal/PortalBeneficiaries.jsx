import { useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import DataTable from '../../components/dashboard/DataTable.jsx';
import Button from '../../components/ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { addBeneficiary, deleteBeneficiary, getBeneficiariesFor } from '../../store/db.js';

export default function PortalBeneficiaries() {
  const { session } = useAuth();
  const [list, setList] = useState(() => getBeneficiariesFor(session.id));
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');

  const refresh = () => setList(getBeneficiariesFor(session.id));

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !accountNumber || !ifsc) return;
    addBeneficiary(session.id, { name, accountNumber, ifsc });
    setName(''); setAccountNumber(''); setIfsc(''); setShowForm(false);
    refresh();
  };

  const handleDelete = (row) => { deleteBeneficiary(row.id); refresh(); };

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'accountNumber', label: 'Account Number' },
    { key: 'ifsc', label: 'IFSC' },
  ];

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Beneficiaries</h1>
          <p className={sh.pageSubtitle}>Saved payees for faster transfers.</p>
        </div>
        <div className={sh.headerActions}>
          <Button size="sm" icon={showForm ? 'X' : 'UserPlus'} onClick={() => setShowForm((v) => !v)}>{showForm ? 'Cancel' : 'Add Beneficiary'}</Button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className={sh.panel} style={{ marginBottom: 24 }}>
          <div className={sh.grid3}>
            <div className={sh.field}><label>Name<span className={sh.req}>*</span></label><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Beneficiary name" required /></div>
            <div className={sh.field}><label>Account Number<span className={sh.req}>*</span></label><input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Account number" required /></div>
            <div className={sh.field}><label>IFSC Code<span className={sh.req}>*</span></label><input value={ifsc} onChange={(e) => setIfsc(e.target.value.toUpperCase())} placeholder="e.g. IBSB0001234" required /></div>
          </div>
          <Button type="submit" style={{ marginTop: 16 }}>Save Beneficiary</Button>
        </form>
      )}

      <DataTable
        columns={columns}
        rows={list}
        searchKeys={['name', 'accountNumber']}
        actions={[{ label: 'Remove', icon: 'Trash2', variant: 'danger', onClick: handleDelete }]}
        emptyMessage="No beneficiaries added yet."
      />
    </div>
  );
}
