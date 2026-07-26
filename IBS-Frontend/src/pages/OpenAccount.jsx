import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumb from '../components/ui/Breadcrumb.jsx';
import GlassCard from '../components/ui/GlassCard.jsx';
import Button from '../components/ui/Button.jsx';
import BackgroundFX from '../components/ui/BackgroundFX.jsx';
import DynamicIcon from '../utils/iconMap.jsx';
import FAQ from '../components/sections/FAQ.jsx';
import { generateReferenceId } from '../utils/format.js';
import { accountTypes, accountTypeFields, commonFields, openAccountFaq } from '../data/accountTypesData.js';
import styles from './OpenAccount.module.css';

function Field({ field, value, onChange }) {
  return (
    <div className={field.span === 'full' ? styles.fieldFull : styles.field}>
      <label htmlFor={field.name}>{field.label}{field.required && <span className={styles.req}>*</span>}</label>
      {field.type === 'select' ? (
        <select id={field.name} required={field.required} value={value || ''} onChange={(e) => onChange(field.name, e.target.value)}>
          <option value="" disabled>Select {field.label.toLowerCase()}</option>
          {field.options.map((o) => (<option key={o} value={o}>{o}</option>))}
        </select>
      ) : (
        <input id={field.name} type={field.type} required={field.required} placeholder={field.placeholder} value={value || ''} onChange={(e) => onChange(field.name, e.target.value)} />
      )}
    </div>
  );
}

export default function OpenAccount() {
  const [searchParams] = useSearchParams();
  const requested = searchParams.get('type');
  const initialType = accountTypes.find((t) => t.key === requested)?.key || 'savings';

  const [selectedType, setSelectedType] = useState(initialType);
  const [values, setValues] = useState({});
  const [status, setStatus] = useState('idle');
  const [refId, setRefId] = useState('');

  const activeType = accountTypes.find((t) => t.key === selectedType) || accountTypes[0];
  const extraFields = accountTypeFields[selectedType] || [];

  const handleChange = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const selectType = (key) => {
    setSelectedType(key);
    setValues({});
    setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    window.setTimeout(() => {
      setRefId(generateReferenceId('IBSAPP'));
      setStatus('success');
    }, 1000);
  };

  const reset = () => { setStatus('idle'); setValues({}); };

  return (
    <>
      <section className={styles.hero}>
        <BackgroundFX variant="accent" />
        <div className={`container ${styles.heroInner}`}>
          <Breadcrumb items={[{ label: 'Open an Account', path: '/open-account' }]} />
          <span className="eyebrow">Open an Account</span>
          <h1>One application, every IBS product</h1>
          <p>Pick what you need below — savings, business, deposits, NRI, cards or a loan — and apply in a single form.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0, paddingBottom: 32 }}>
        <div className="container">
          <div className={styles.typeGrid}>
            {accountTypes.map((t) => (
              <button
                key={t.key}
                type="button"
                className={`${styles.typeCard} ${selectedType === t.key ? styles.typeActive : ''}`}
                onClick={() => selectType(t.key)}
              >
                <DynamicIcon name={t.icon} size={20} />
                <strong>{t.label}</strong>
                <span>{t.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.grid}`}>
          <GlassCard padding="lg" hover={false} className={styles.formCard}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={styles.success}>
                  <div className={styles.successIcon}><DynamicIcon name="CircleCheckBig" size={30} /></div>
                  <h3>Application received</h3>
                  <p>Your {activeType.label.toLowerCase()} application has been submitted. Our team will reach out to complete video-KYC.</p>
                  <div className={`${styles.refId} mono`}>Reference ID: {refId}</div>
                  <Button variant="outline" onClick={reset}>Apply for another product</Button>
                  <span className={styles.demoNote}>Demo environment — no data was transmitted or stored.</span>
                </motion.div>
              ) : (
                <motion.form key={selectedType} onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.form}>
                  <h3 className={styles.formTitle}>
                    <DynamicIcon name={activeType.icon} size={20} />
                    Applying for: {activeType.label}
                  </h3>
                  <div className={styles.fieldGrid}>
                    {commonFields.map((f) => (<Field key={f.name} field={f} value={values[f.name]} onChange={handleChange} />))}
                    {extraFields.map((f) => (<Field key={f.name} field={f} value={values[f.name]} onChange={handleChange} />))}
                  </div>
                  <Button type="submit" size="lg" disabled={status === 'submitting'} className={styles.submitBtn}>
                    {status === 'submitting' ? 'Submitting…' : `Submit ${activeType.label} Application`}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>

          <GlassCard padding="lg" hover={false} glow="purple" className={styles.sidebar}>
            <div className={styles.sidebarIcon}><DynamicIcon name="ClipboardList" size={22} /></div>
            <h3>What happens next</h3>
            <ul>
              <li><DynamicIcon name="Check" size={15} />Application reviewed within 1 business day</li>
              <li><DynamicIcon name="Check" size={15} />Short video-KYC call to verify your identity</li>
              <li><DynamicIcon name="Check" size={15} />Account or card activated immediately after approval</li>
              <li><DynamicIcon name="Check" size={15} />Physical card or welcome kit couriered within 7 days</li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <FAQ eyebrow="FAQ" title="Before you apply" highlight="you apply" items={openAccountFaq} />
    </>
  );
}
