import { motion } from 'framer-motion';
import styles from './Tabs.module.css';

export default function Tabs({ tabs, activeId, onChange, layoutId = 'tabIndicator' }) {
  return (
    <div className={styles.wrap} role="tablist">
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button key={tab.id} role="tab" aria-selected={active} className={`${styles.tab} ${active ? styles.active : ''}`} onClick={() => onChange(tab.id)}>
            {active && <motion.span layoutId={layoutId} className={styles.indicator} transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
            <span className={styles.label}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
