import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import GlassCard from '../components/ui/GlassCard.jsx';
import Button from '../components/ui/Button.jsx';
import BackgroundFX from '../components/ui/BackgroundFX.jsx';
import DynamicIcon from '../utils/iconMap.jsx';
import FAQ from '../components/sections/FAQ.jsx';
import styles from './Contact.module.css';

const methods = [
  { icon: 'Phone', title: '24x7 Phone Support', desc: '1800-123-4567 (toll free)' },
  { icon: 'Mail', title: 'Email Us', desc: 'support@ibsbank.example' },
  { icon: 'MapPin', title: 'Head Office', desc: 'Bandra Kurla Complex, Mumbai 400051' },
  { icon: 'MessageCircle', title: 'Chat with Nova', desc: 'Available in-app, 24x7' },
];

const contactFaq = [
  { q: 'What are your branch working hours?', a: 'Branches are open Monday to Saturday, 9:30 AM to 4:30 PM, excluding public holidays. Net banking and the app are available 24x7.' },
  { q: 'How do I report a lost card?', a: 'Freeze your card instantly from IBS Connect\u2019s Security Center, or call our 24x7 helpline for immediate assistance.' },
  { q: 'Do you have a grievance redressal officer?', a: 'Yes. If your complaint isn\u2019t resolved within 5 working days, it is automatically escalated to our nodal grievance officer.' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); window.setTimeout(() => setSent(false), 4000); };

  return (
    <>
      <section className={styles.hero}>
        <BackgroundFX />
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">Contact</span>
          <h1>We're easier to reach than most banks</h1>
          <p>Phone, email, chat, or a real branch — pick whichever gets you unstuck fastest.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.methodsGrid}>
            {methods.map((m, i) => (
              <GlassCard key={m.title} delay={i * 0.06} padding="lg" className={styles.methodCard}>
                <div className={styles.methodIcon}><DynamicIcon name={m.icon} size={22} /></div>
                <strong>{m.title}</strong>
                <span>{m.desc}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <GlassCard padding="lg" hover={false} className={styles.formCard}>
            <h3 className={styles.formTitle}>Send us a message</h3>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.sentMsg}>
                  <DynamicIcon name="CircleCheckBig" size={28} />
                  <p>Thanks — our team will respond within one business day.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.form}>
                  <div className={styles.row2}>
                    <div className={styles.field}><label>Full Name</label><input required placeholder="Your name" /></div>
                    <div className={styles.field}><label>Email</label><input type="email" required placeholder="you@email.com" /></div>
                  </div>
                  <div className={styles.field}><label>Subject</label><input required placeholder="What's this about?" /></div>
                  <div className={styles.field}><label>Message</label><textarea required rows={5} placeholder="Tell us more..." /></div>
                  <Button type="submit" size="lg" className={styles.submitBtn}>Send message</Button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>

          <GlassCard padding="lg" hover={false} glow="purple" className={styles.mapCard}>
            <div className={styles.mapVisual}>
              <DynamicIcon name="MapPin" size={30} />
              <span>IBS Head Office</span>
              <span className={styles.mapSub}>Bandra Kurla Complex, Mumbai</span>
            </div>
            <div className={styles.hours}>
              <div><DynamicIcon name="Clock" size={16} /><span>Mon–Sat, 9:30 AM – 4:30 PM</span></div>
              <div><DynamicIcon name="Phone" size={16} /><span>1800-123-4567</span></div>
            </div>
          </GlassCard>
        </div>
      </section>

      <FAQ title="Before you reach out" highlight="reach out" items={contactFaq} />
    </>
  );
}
