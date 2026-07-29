import styles from './StatusBadge.module.css';

const TONE_MAP = {
  active: 'success', verified: 'success', completed: 'success', approved: 'success',
  pending: 'warning', 'in progress': 'warning',
  frozen: 'danger', rejected: 'danger', closed: 'danger', blocked: 'danger', disabled: 'danger', reversed: 'danger', locked: 'danger',
};

export default function StatusBadge({ status }) {
  const tone = TONE_MAP[String(status).toLowerCase()] || 'neutral';
  return <span className={`${styles.badge} ${styles[tone]}`}>{status}</span>;
}
