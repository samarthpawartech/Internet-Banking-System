import SectionHeading from '../ui/SectionHeading.jsx';
import StatCard from '../ui/StatCard.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { stats, awards } from '../../data/homeData.js';
import styles from './Statistics.module.css';

export default function Statistics() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="By the numbers" title="Trusted at a scale that keeps us honest" highlight="keeps us honest" />
        <div className={styles.grid}>
          {stats.map((s, i) => (<StatCard key={s.label} {...s} delay={i * 0.08} />))}
        </div>
        <div className={styles.awards}>
          {awards.map((a) => (
            <div key={a.title} className={styles.award}>
              <DynamicIcon name="Award" size={18} />
              <span>{a.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
