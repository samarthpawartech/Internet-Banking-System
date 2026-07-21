import SectionHeading from '../components/ui/SectionHeading.jsx';
import GlassCard from '../components/ui/GlassCard.jsx';
import FeatureCard from '../components/ui/FeatureCard.jsx';
import StatCard from '../components/ui/StatCard.jsx';
import BackgroundFX from '../components/ui/BackgroundFX.jsx';
import DynamicIcon from '../utils/iconMap.jsx';
import CTA from '../components/sections/CTA.jsx';
import { stats } from '../data/homeData.js';
import styles from './About.module.css';

const timeline = [
  { year: '2015', title: 'IBS is founded', desc: 'Started as a digital-first lending platform for salaried professionals.' },
  { year: '2018', title: 'Savings & current accounts launch', desc: 'Full-stack retail banking goes live with video-KYC onboarding.' },
  { year: '2020', title: '50 lakh customers', desc: 'Crossed 5 million customers across 400+ cities.' },
  { year: '2022', title: 'IBS Connect app + UPI', desc: 'Unified app for accounts, cards, UPI and investments.' },
  { year: '2024', title: 'Nova, the AI assistant, launches', desc: 'Conversational banking inside net banking and the app.' },
  { year: '2026', title: '1.2 crore customers', desc: 'Pan-India presence with 5,400+ branches and ATMs.' },
];

const values = [
  { icon: 'HeartHandshake', title: 'Customer First', desc: 'Every product decision is graded against one question: does this make banking simpler for the person using it?' },
  { icon: 'Eye', title: 'Radical Transparency', desc: 'No hidden fees dressed up as fine print. If a charge exists, it is shown before you confirm — not after.' },
  { icon: 'ShieldCheck', title: 'Security by Design', desc: 'Encryption, device intelligence and fraud monitoring are built into the foundation, not bolted on later.' },
  { icon: 'Rocket', title: 'Move Fast, Responsibly', desc: 'We ship quickly, but every release for money movement goes through the same rigorous review.' },
];

const leaders = [
  { name: 'Rohan Mehta', role: 'Chief Executive Officer' },
  { name: 'Aditi Rao', role: 'Chief Digital Officer' },
  { name: 'Vikram Nair', role: 'Chief Risk Officer' },
  { name: 'Sanya Kapoor', role: 'Chief Product Officer' },
];

function initials(name) { return name.split(' ').map((n) => n[0]).join(''); }

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <BackgroundFX variant="purple" />
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">About IBS</span>
          <h1>Built to make banking feel less like banking</h1>
          <p>IBS — Internet Banking System — is a digital-first bank built around one idea: money management should feel as fast and clear as everything else on your phone.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our journey" title="Eleven years, one obsession" highlight="one obsession" align="left" />
          <div className={styles.timeline}>
            {timeline.map((t) => (
              <div key={t.year} className={styles.tlItem}>
                <div className={styles.tlDot} />
                <span className={`${styles.tlYear} mono`}>{t.year}</span>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What we stand for" title="Four ideas we don't compromise on" highlight="don't compromise on" />
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (<FeatureCard key={v.title} {...v} delay={i * 0.07} accent={['accent', 'purple', 'success', 'gold'][i]} />))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Leadership" title="The people steering IBS" highlight="steering IBS" />
          <div className={styles.leadGrid}>
            {leaders.map((l, i) => (
              <GlassCard key={l.name} delay={i * 0.06} padding="lg" className={styles.leadCard}>
                <span className={styles.avatar}>{initials(l.name)}</span>
                <strong>{l.name}</strong>
                <span className={styles.role}>{l.role}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (<StatCard key={s.label} {...s} delay={i * 0.07} />))}
          </div>
        </div>
      </section>

      <CTA title="Want to build the next version of banking with us?" description="We're always looking for people who care about both craft and compliance." primaryCta={{ label: 'View open roles', path: '/careers' }} secondaryCta={{ label: 'Contact us', path: '/contact' }} />
    </>
  );
}
