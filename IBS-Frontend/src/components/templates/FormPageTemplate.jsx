import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumb from '../ui/Breadcrumb.jsx';
import GlassCard from '../ui/GlassCard.jsx';
import Button from '../ui/Button.jsx';
import BackgroundFX from '../ui/BackgroundFX.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import FAQ from '../sections/FAQ.jsx';
import { generateReferenceId } from '../../utils/format.js';
import styles from './FormPageTemplate.module.css';

export default function FormPageTemplate({ data }) {
  const { breadcrumb = [], hero, fields, submitLabel, successTitle, successDesc, sidebar, faq } = data;
  const [values, setValues] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [refId, setRefId] = useState('');

  const handleChange = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    window.setTimeout(() => {
      setRefId(generateReferenceId());
      setStatus('success');
    }, 900);
  };

  const reset = () => { setStatus('idle'); setValues({}); };

  return (
    <>
      <section className={styles.hero}>
        <BackgroundFX />
        <div className={`container ${styles.heroInner}`}>
          <Breadcrumb items={breadcrumb} />
          <div className={styles.heroIcon}><DynamicIcon name={hero.icon} size={26} /></div>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.grid}`}>
          <GlassCard padding="lg" hover={false} className={styles.formCard}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={styles.success}>
                  <div className={styles.successIcon}><DynamicIcon name="CircleCheckBig" size={30} /></div>
                  <h3>{successTitle}</h3>
                  <p>{successDesc}</p>
                  <div className={`${styles.refId} mono`}>Reference ID: {refId}</div>
                  <Button variant="outline" onClick={reset}>Submit another request</Button>
                  <span className={styles.demoNote}>Demo environment — no real transaction has taken place.</span>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.form}>
                  {fields.map((f) => (
                    <div key={f.name} className={f.span === 'full' ? styles.fieldFull : styles.field}>
                      <label htmlFor={f.name}>{f.label}{f.required && <span className={styles.req}>*</span>}</label>
                      {f.type === 'select' ? (
                        <select id={f.name} required={f.required} value={values[f.name] || ''} onChange={(e) => handleChange(f.name, e.target.value)}>
                          <option value="" disabled>Select {f.label.toLowerCase()}</option>
                          {f.options.map((o) => (<option key={o} value={o}>{o}</option>))}
                        </select>
                      ) : f.type === 'textarea' ? (
                        <textarea id={f.name} required={f.required} placeholder={f.placeholder} rows={4} value={values[f.name] || ''} onChange={(e) => handleChange(f.name, e.target.value)} />
                      ) : (
                        <input id={f.name} type={f.type} required={f.required} placeholder={f.placeholder} value={values[f.name] || ''} onChange={(e) => handleChange(f.name, e.target.value)} />
                      )}
                    </div>
                  ))}
                  <div className={styles.fieldFull}>
                    <Button type="submit" size="lg" disabled={status === 'submitting'} className={styles.submitBtn}>
                      {status === 'submitting' ? 'Submitting…' : submitLabel}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>

          {sidebar && (
            <GlassCard padding="lg" hover={false} glow="purple" className={styles.sidebar}>
              <div className={styles.sidebarIcon}><DynamicIcon name={sidebar.icon} size={22} /></div>
              <h3>{sidebar.title}</h3>
              <ul>
                {sidebar.points.map((p, i) => (<li key={i}><DynamicIcon name="Check" size={15} />{p}</li>))}
              </ul>
            </GlassCard>
          )}
        </div>
      </section>

      {faq && <FAQ title={faq.title} items={faq.items} />}
    </>
  );
}
