import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard.jsx';
import Button from '../components/ui/Button.jsx';
import DynamicIcon from '../utils/iconMap.jsx';
import { registerCustomer } from '../store/db.js';
import styles from './Register.module.css';

const initial = { fullName: '', email: '', mobile: '', dob: '', pan: '', city: '', username: '', password: '', confirmPassword: '' };

export default function Register() {
  const [values, setValues] = useState(initial);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);

  const set = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (values.password.length < 6) return setError('Password must be at least 6 characters.');
    if (values.password !== values.confirmPassword) return setError('Passwords do not match.');
    if (!fileName) return setError('Please attach a KYC document (any file) to continue.');

    setStatus('submitting');
    window.setTimeout(() => {
      try {
        const { confirmPassword, ...data } = values;
        const record = registerCustomer(data);
        setResult(record);
        setStatus('success');
      } catch (err) {
        setError(err.message);
        setStatus('idle');
      }
    }, 800);
  };

  return (
    <div className={styles.wrap}>
      <GlassCard hover={false} padding="lg" glow="purple" className={styles.card}>
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.success}>
              <DynamicIcon name="CircleCheckBig" size={40} className={styles.successIcon} />
              <h2>Registration submitted</h2>
              <p>Your account <strong className="mono">{result.accountNumber}</strong> has been created and is pending KYC verification. You can log in now to check your status.</p>
              <Button to="/customer-login" icon="ArrowRight">Go to Customer Login</Button>
              <span className={styles.demoNote}>Demo environment — your data is stored only in this browser's local storage.</span>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className={styles.header}>
                <div className={styles.icon}><DynamicIcon name="UserPlus" size={24} /></div>
                <h1>Open an IBS login</h1>
                <p>Create your customer profile. Your account activates once our team verifies your KYC.</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row2}>
                  <Field label="Full Name" required><input required value={values.fullName} onChange={(e) => set('fullName', e.target.value)} placeholder="As per PAN" /></Field>
                  <Field label="Date of Birth" required><input type="date" required value={values.dob} onChange={(e) => set('dob', e.target.value)} /></Field>
                </div>
                <div className={styles.row2}>
                  <Field label="Email" required><input type="email" required value={values.email} onChange={(e) => set('email', e.target.value)} placeholder="you@email.com" /></Field>
                  <Field label="Mobile Number" required><input type="tel" required value={values.mobile} onChange={(e) => set('mobile', e.target.value)} placeholder="10-digit number" /></Field>
                </div>
                <div className={styles.row2}>
                  <Field label="PAN Number" required><input required value={values.pan} onChange={(e) => set('pan', e.target.value.toUpperCase())} placeholder="ABCDE1234F" /></Field>
                  <Field label="City" required><input required value={values.city} onChange={(e) => set('city', e.target.value)} placeholder="Your city" /></Field>
                </div>

                <Field label="Upload KYC Document (PAN / Aadhaar / Passport)" required>
                  <label className={styles.fileInput}>
                    <DynamicIcon name="Upload" size={16} />
                    <span>{fileName || 'Choose a file...'}</span>
                    <input type="file" onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} hidden />
                  </label>
                </Field>

                <div className={styles.row2}>
                  <Field label="Choose Username" required><input required value={values.username} onChange={(e) => set('username', e.target.value)} placeholder="e.g. yourname.ibs" /></Field>
                  <Field label="Choose Password" required><input type="password" required value={values.password} onChange={(e) => set('password', e.target.value)} placeholder="At least 6 characters" /></Field>
                </div>
                <Field label="Confirm Password" required><input type="password" required value={values.confirmPassword} onChange={(e) => set('confirmPassword', e.target.value)} placeholder="Re-enter password" /></Field>

                {error && <div className={styles.error}><DynamicIcon name="CircleAlert" size={15} />{error}</div>}

                <Button type="submit" size="lg" disabled={status === 'submitting'} className={styles.submitBtn}>
                  {status === 'submitting' ? 'Creating account…' : 'Create My Account'}
                </Button>
                <p className={styles.loginHint}>Already have an account? <Link to="/customer-login">Log in</Link></p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <div className={styles.field}>
      <label>{label}{required && <span className={styles.req}>*</span>}</label>
      {children}
    </div>
  );
}
