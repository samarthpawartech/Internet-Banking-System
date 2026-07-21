import styles from './BackgroundFX.module.css';

export default function BackgroundFX({ variant = 'default' }) {
  return (
    <div className={`${styles.fx} ${styles[variant] || ''}`} aria-hidden="true">
      <span className={styles.orb1} />
      <span className={styles.orb2} />
      <span className={styles.orb3} />
    </div>
  );
}
