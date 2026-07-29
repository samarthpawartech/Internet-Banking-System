import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../ui/GlassCard.jsx';
import Button from '../ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import styles from './StaffAuthForm.module.css';

const COPY = {
  employee: {
    title: 'Employee Portal', icon: 'UserCog',
    subtitle: 'Verify customers, approve transactions, manage accounts.',
    demoUser: 'kavya.emp', demoPass: 'demo123',
    homePath: '/staff',
  },
  admin: {
    title: 'Admin Console', icon: 'ShieldCheck',
    subtitle: 'Full control over employees, customers and banking settings.',
    demoUser: 'arjun.admin', demoPass: 'demo123',
    homePath: '/admin',
  },
};

export default function StaffAuthForm({ role }) {
  const copy = COPY[role];
  const { loginEmployee, loginAdmin } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setStatus('loading');
    window.setTimeout(() => {
      const doLogin = role === 'admin' ? loginAdmin : loginEmployee;
      const result = doLogin(username.trim(), password);
      if (result.ok) {
        navigate(copy.homePath);
      } else {
        setError(result.error);
        setStatus('idle');
      }
    }, 600);
  };

  const fillDemo = () => { setUsername(copy.demoUser); setPassword(copy.demoPass); };

  return (
    <div className={styles.wrap}>
      <div className={styles.bg} aria-hidden="true"><span className={styles.blob1} /><span className={styles.blob2} /></div>
      <GlassCard hover={false} padding="lg" glow="purple" className={styles.card}>
        <span className={styles.demoBadge}>DEMO</span>
        <div className={styles.header}>
          <div className={styles.icon}><DynamicIcon name={copy.icon} size={24} /></div>
          <h1>{copy.title}</h1>
          <p>{copy.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Username</label>
            <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} placeholder={`e.g. ${copy.demoUser}`} />
          </div>
          <div className={styles.field}>
            <label>Password</label>
            <div className={styles.passRow}>
              <input type={showPass ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
              <button type="button" onClick={() => setShowPass((v) => !v)} aria-label="Toggle password visibility">
                <DynamicIcon name={showPass ? 'EyeOff' : 'Eye'} size={17} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className={styles.error}>
                <DynamicIcon name="CircleAlert" size={15} />{error}
              </motion.div>
            )}
          </AnimatePresence>

          <Button type="submit" size="lg" disabled={status === 'loading'} className={styles.submitBtn}>
            {status === 'loading' ? 'Signing in…' : 'Sign In'}
          </Button>
        </form>

        <button type="button" className={styles.demoHint} onClick={fillDemo}>
          <DynamicIcon name="KeyRound" size={13} />
          Use demo credentials: <span className="mono">{copy.demoUser} / {copy.demoPass}</span>
        </button>
      </GlassCard>
    </div>
  );
}
