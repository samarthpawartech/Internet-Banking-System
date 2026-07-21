import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard.jsx';
import Button from '../ui/Button.jsx';
import Tabs from '../ui/Tabs.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './AuthForm.module.css';

const COPY = {
  customer: {
    idLabel: 'Customer ID / Mobile Number',
    idPlaceholder: 'e.g. 9876543210',
    title: 'Welcome back',
    subtitle: 'Log in to manage accounts, cards and transfers.',
    registerText: "New to IBS?",
    registerCta: 'Open an account',
    registerPath: '/personal-banking/savings-account',
  },
  business: {
    idLabel: 'Corporate ID / Registered Mobile',
    idPlaceholder: 'e.g. CORP0004521',
    title: 'Business Net Banking',
    subtitle: 'Manage payouts, collections and approvals for your business.',
    registerText: 'New business?',
    registerCta: 'Open a current account',
    registerPath: '/business-banking',
  },
};

export default function AuthForm({ variant = 'customer' }) {
  const copy = COPY[variant];
  const [mode, setMode] = useState('password');
  const [showPass, setShowPass] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [status, setStatus] = useState('idle');
  const [resendIn, setResendIn] = useState(0);

  const sendOtp = () => {
    setOtpSent(true);
    setResendIn(30);
    const tick = window.setInterval(() => {
      setResendIn((v) => {
        if (v <= 1) { window.clearInterval(tick); return 0; }
        return v - 1;
      });
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    window.setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.blob1} /><span className={styles.blob2} />
      </div>
      <GlassCard hover={false} padding="lg" glow="purple" className={styles.card}>
        <span className={styles.demoBadge}>DEMO</span>
        <div className={styles.header}>
          <div className={styles.icon}><DynamicIcon name={variant === 'business' ? 'Building2' : 'UserCheck'} size={24} /></div>
          <h1>{copy.title}</h1>
          <p>{copy.subtitle}</p>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.success}>
              <DynamicIcon name="CircleCheckBig" size={40} className={styles.successIcon} />
              <h3>Login successful (Demo)</h3>
              <p>This is a UI showcase — no real account was accessed and no data was transmitted.</p>
              <Button to="/" variant="outline">Back to Home</Button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className={styles.tabsRow}>
                <Tabs layoutId={`auth-tab-${variant}`} tabs={[{ id: 'password', label: 'Password' }, { id: 'otp', label: 'OTP Login' }]} activeId={mode} onChange={(m) => { setMode(m); setOtpSent(false); }} />
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label>{copy.idLabel}</label>
                  <input type="text" required placeholder={copy.idPlaceholder} />
                </div>

                {mode === 'password' ? (
                  <div className={styles.field}>
                    <label>Password</label>
                    <div className={styles.passRow}>
                      <input type={showPass ? 'text' : 'password'} required placeholder="Enter your password" />
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

                <Button type="submit" size="lg" disabled={status === 'loading' || (mode === 'otp' && !otpSent)} className={styles.submitBtn}>
                  {status === 'loading' ? 'Verifying…' : 'Login'}
                </Button>
              </form>

              <div className={styles.footer}>
                <span>{copy.registerText}</span>
                <Button to={copy.registerPath} variant="ghost" size="sm">{copy.registerCta}</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  );
}
