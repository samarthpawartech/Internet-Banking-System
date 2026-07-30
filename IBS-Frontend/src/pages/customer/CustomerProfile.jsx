import { useMemo, useState } from 'react';
import sh from '../../components/dashboard/dashboardShared.module.css';
import Button from '../../components/ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { findCustomerById, updateCustomer } from '../../store/db.js';

export default function CustomerProfile() {
  const { session, refreshName } = useAuth();
  const customer = useMemo(() => findCustomerById(session.id), [session.id]);

  const [fullName, setFullName] = useState(customer.fullName);
  const [email, setEmail] = useState(customer.email);
  const [mobile, setMobile] = useState(customer.mobile);
  const [city, setCity] = useState(customer.city);
  const [savedMsg, setSavedMsg] = useState('');

  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [passError, setPassError] = useState('');
  const [passSaved, setPassSaved] = useState(false);

  const saveProfile = (e) => {
    e.preventDefault();
    updateCustomer(customer.id, { fullName, email, mobile, city });
    refreshName(fullName);
    setSavedMsg('Profile updated.');
    window.setTimeout(() => setSavedMsg(''), 2500);
  };

  const changePassword = (e) => {
    e.preventDefault();
    setPassError('');
    if (currentPass !== customer.password) return setPassError('Current password is incorrect.');
    if (newPass.length < 6) return setPassError('New password must be at least 6 characters.');
    if (newPass !== confirmPass) return setPassError('New passwords do not match.');
    updateCustomer(customer.id, { password: newPass });
    setCurrentPass(''); setNewPass(''); setConfirmPass('');
    setPassSaved(true);
    window.setTimeout(() => setPassSaved(false), 2500);
  };

  return (
    <div>
      <div className={sh.pageHeader}>
        <div>
          <h1 className={sh.pageTitle}>Profile</h1>
          <p className={sh.pageSubtitle}>Update your personal details and security settings.</p>
        </div>
      </div>

      <div className={sh.grid2}>
        <form onSubmit={saveProfile} className={sh.panel}>
          <h3 className={sh.panelTitle}><DynamicIcon name="User" size={17} />Personal Details</h3>
          <div className={sh.form}>
            <div className={sh.field}><label>Full Name</label><input value={fullName} onChange={(e) => setFullName(e.target.value)} /></div>
            <div className={sh.field}><label>Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            <div className={sh.field}><label>Mobile Number</label><input value={mobile} onChange={(e) => setMobile(e.target.value)} /></div>
            <div className={sh.field}><label>City</label><input value={city} onChange={(e) => setCity(e.target.value)} /></div>
            <Button type="submit">Save Changes</Button>
            {savedMsg && <span style={{ fontSize: 13, color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: 6 }}><DynamicIcon name="Check" size={14} />{savedMsg}</span>}
          </div>
        </form>

        <form onSubmit={changePassword} className={sh.panel}>
          <h3 className={sh.panelTitle}><DynamicIcon name="KeyRound" size={17} />Change Password</h3>
          <div className={sh.form}>
            <div className={sh.field}><label>Current Password</label><input type="password" value={currentPass} onChange={(e) => setCurrentPass(e.target.value)} /></div>
            <div className={sh.field}><label>New Password</label><input type="password" value={newPass} onChange={(e) => setNewPass(e.target.value)} /></div>
            <div className={sh.field}><label>Confirm New Password</label><input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} /></div>
            {passError && <div className={`${sh.banner} ${sh.danger}`} style={{ marginBottom: 0 }}><DynamicIcon name="CircleAlert" size={16} />{passError}</div>}
            <Button type="submit" variant="outline">Update Password</Button>
            {passSaved && <span style={{ fontSize: 13, color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: 6 }}><DynamicIcon name="Check" size={14} />Password updated.</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
