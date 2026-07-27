import { useInView } from 'react-intersection-observer';
import * as ReactCountUpNS from 'react-countup';
import DynamicIcon from '../../utils/iconMap.jsx';
import GlassCard from './GlassCard.jsx';
import styles from './StatCard.module.css';

// react-countup's default export can resolve as a wrapped { default: CountUp } object
// depending on the bundler's CJS/ESM interop — unwrap defensively so it works either way.
const CountUp = ReactCountUpNS.default?.default || ReactCountUpNS.default;

export default function StatCard({ icon, value, prefix = '', suffix = '', decimals = 0, label, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  return (
    <GlassCard delay={delay} className={styles.card} hover={false} glow="none">
      <div ref={ref} className={styles.inner}>
        <DynamicIcon name={icon} size={22} className={styles.icon} />
        <div className={`${styles.value} mono`}>
          {prefix}
          {inView ? <CountUp end={value} duration={2.2} decimals={decimals} separator="," /> : 0}
          {suffix}
        </div>
        <div className={styles.label}>{label}</div>
      </div>
    </GlassCard>
  );
}
