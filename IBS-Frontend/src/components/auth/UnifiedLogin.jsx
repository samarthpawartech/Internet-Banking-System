import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard.jsx';
import Button from '../ui/Button.jsx';
import Tabs from '../ui/Tabs.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import styles from './UnifiedLogin.module.css';

const ROLES = [
  {
    id: 'customer', label: 'Consumer', icon: 'UserCheck',
    idLabel: 'Username / Mobile Number', idPlaceholder: 'Enter your username',
    title: 'Welcome back', subtitle: 'Log in to manage accounts, cards and transfers.',
    homePath: '/customer', supportsOtp: true,
    registerText: 'New to IBS?', registerCta: 'Create an account', registerPath: '/register',
  },
  {
    id: 'employee', label: 'Employee', icon: 'UserCog',
    idLabel: 'Employee Username', idPlaceholder: 'Enter your username',
    title: 'Employee Portal', subtitle: 'Verify customers, approve transactions, manage accounts.',
    homePath: '/employee', supportsOtp: false,
  },
  {
    id: 'admin', label: 'Admin', icon: 'ShieldCheck',
    idLabel: 'Admin Username', idPlaceholder: 'Enter your username',
    title: 'Admin Console', subtitle: 'Full control over employees, customers and banking settings.',
    homePath: '/admin', supportsOtp: false,
  },
];

export default function UnifiedLogin({ defaultRole = 'customer' }) {
  const navigate = useNavigate();
  const { loginCustomer, loginEmployee, loginAdmin } = useAuth();

  const [roleId, setRoleId] = useState(defaultRole);
  const [mode, setMode] = useState('password');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [resendIn, setResendIn] = useState(0);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  const role = ROLES.find((r) => r.id === roleId);

  const switchRole = (id) => {
    setRoleId(id);
    setMode('password');
    setIdentifier(''); setPassword(''); setError(''); setOtpSent(false);
  };

  const sendOtp = () => {
    setOtpSent(true);
    setResendIn(30);
    const tick = window.setInterval(() => {
      setResendIn((v) => { if (v <= 1) { window.clearInterval(tick); return 0; } return v - 1; });
    }, 1000);
  };

  const doLogin = { customer: loginCustomer, employee: loginEmployee, admin: loginAdmin }[roleId];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setStatus('loading');
    window.setTimeout(() => {
      if (mode === 'otp') {
        setStatus('idle');
        setError('OTP delivery isn’t connected yet — please sign in with your password for now.');
        return;
      }
      const result = doLogin(identifier.trim(), password);
      if (result.ok) {
        navigate(role.homePath);
      } else {
        setError(result.error);
        setStatus('idle');
      }
    }, 700);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.bg} aria-hidden="true"><span className={styles.blob1} /><span className={styles.blob2} /></div>
      <GlassCard hover={false} padding="lg" glow="purple" className={styles.card}>
        <div className={styles.roleRow}>
          <Tabs layoutId="unified-role-tab" tabs={ROLES.map((r) => ({ id: r.id, label: r.label }))} activeId={roleId} onChange={switchRole} />
        </div>

        <div className={styles.header}>
          <div className={styles.icon}><DynamicIcon name={role.icon} size={24} /></div>
          <h1>{role.title}</h1>
          <p>{role.subtitle}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={roleId} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
            {role.supportsOtp && (
              <div className={styles.tabsRow}>
                <Tabs layoutId="unified-mode-tab" tabs={[{ id: 'password', label: 'Password' }, { id: 'otp', label: 'OTP Login' }]} activeId={mode} onChange={(m) => { setMode(m); setOtpSent(false); setError(''); }} />
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label>{role.idLabel}</label>
                <input type="text" required placeholder={role.idPlaceholder} value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
              </div>

              {mode === 'password' || !role.supportsOtp ? (
                <div className={styles.field}>
                  <label>Password</label>
                  <div className={styles.passRow}>
                    <input type={showPass ? 'text' : 'password'} required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="button" onClick={() => setShowPass((v) => !v)} aria-label="Toggle password visibility">
                      <DynamicIcon name={showPass ? 'EyeOff' : 'Eye'} size={17} />
                    </button>
                  </div>
                  <div className={styles.rowBetween}>
                    <label className={styles.checkRow}><input type="checkbox" /> Remember me</label>
                    <a href="#forgot" className={styles.forgot}>Forgot password?</a>
                  </div>
                </div>
              ) : (
                <div className={styles.field}>
                  <label>One-Time Password</label>
                  {!otpSent ? (
                    <Button type="button" variant="outline" onClick={sendOtp} className={styles.otpBtn}>Send OTP</Button>
                  ) : (
                    <>
                      <div className={styles.otpRow}>
                        {Array.from({ length: 6 }).map((_, i) => (<input key={i} maxLength={1} className={styles.otpBox} inputMode="numeric" />))}
                      </div>
                      <div className={styles.rowBetween}>
                        <span className={styles.otpHint}>Sent to your registered mobile</span>
                        <button type="button" disabled={resendIn > 0} onClick={sendOtp} className={styles.resend}>
                          {resendIn > 0 ? `Resend in ${resendIn}s` : 'Resend OTP'}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              <AnimatePresence>
                {error && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className={styles.error}>
                    <DynamicIcon name="CircleAlert" size={15} />{error}
                  </motion.div>
                )}
              </AnimatePresence>

              <Button type="submit" size="lg" disabled={status === 'loading' || (mode === 'otp' && !otpSent)} className={styles.submitBtn}>
                {status === 'loading' ? 'Verifying…' : `Sign In as ${role.label}`}
              </Button>
            </form>

            {role.registerPath && (
              <div className={styles.footer}>
                <span>{role.registerText}</span>
                <Button to={role.registerPath} variant="ghost" size="sm">{role.registerCta}</Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </GlassCard>
    </div>
  );
}
