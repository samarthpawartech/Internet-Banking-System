import DynamicIcon from '../../utils/iconMap.jsx';
import GlassCard from './GlassCard.jsx';
import Button from './Button.jsx';
import styles from './ProductCard.module.css';

export default function ProductCard({ icon, badge, title, desc, features, cta, variant = 'default', delay = 0 }) {
  return (
    <GlassCard delay={delay} padding="lg" className={styles.card}>
      {variant === 'card' ? (
        <div className={styles.mockCard}>
          <div className={styles.chip} />
          <DynamicIcon name={icon} size={22} className={styles.mockIcon} />
          <div className={`${styles.mockDots} mono`}>•••• •••• •••• 4821</div>
        </div>
      ) : (
        <div className={styles.iconWrap}><DynamicIcon name={icon} size={22} /></div>
      )}
      {badge && <span className={`${styles.badge} mono`}>{badge}</span>}
      <h3 className={styles.title}>{title}</h3>
      {desc && <p className={styles.desc}>{desc}</p>}
      {features?.length > 0 && (
        <ul className={styles.features}>
          {features.map((f, i) => (<li key={i}><DynamicIcon name="Check" size={14} />{f}</li>))}
        </ul>
      )}
      {cta && (
        <Button to={cta.path} variant="outline" size="sm" icon="ArrowUpRight" className={styles.cta}>{cta.label}</Button>
      )}
    </GlassCard>
  );
}
