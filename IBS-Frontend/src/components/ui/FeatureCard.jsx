import DynamicIcon from '../../utils/iconMap.jsx';
import GlassCard from './GlassCard.jsx';
import styles from './FeatureCard.module.css';

export default function FeatureCard({ icon, title, desc, delay = 0, accent = 'accent' }) {
  return (
    <GlassCard delay={delay} className={styles.card} padding="lg">
      <div className={`${styles.iconWrap} ${styles[accent]}`}>
        <DynamicIcon name={icon} size={24} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </GlassCard>
  );
}
