import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './DashboardTile.module.css';

export default function DashboardTile({ icon, label, value, tone = 'accent' }) {
  return (
    <div className={styles.tile}>
      <div className={`${styles.iconWrap} ${styles[tone]}`}><DynamicIcon name={icon} size={20} /></div>
      <div>
        <div className={`${styles.value} mono`}>{value}</div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
}
