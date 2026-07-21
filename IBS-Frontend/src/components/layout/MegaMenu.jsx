import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './MegaMenu.module.css';

export default function MegaMenu({ menu, onNavigate }) {
  return (
    <motion.div
      className={styles.panel}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.columns}>
        {menu.columns.map((col) => (
          <div key={col.heading} className={styles.column}>
            <span className={styles.colHeading}>{col.heading}</span>
            {col.items.map((item) => (
              <Link key={item.label} to={item.path} className={styles.item} onClick={onNavigate}>
                <span className={styles.itemIcon}><DynamicIcon name={item.icon} size={18} /></span>
                <span>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <span className={styles.itemDesc}>{item.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
      {menu.promo && (
        <Link to={menu.promo.path} className={styles.promo} onClick={onNavigate}>
          <span className="eyebrow">{menu.promo.eyebrow}</span>
          <h4>{menu.promo.title}</h4>
          <p>{menu.promo.desc}</p>
          <span className={styles.promoCta}>{menu.promo.cta} <DynamicIcon name="ArrowRight" size={14} /></span>
        </Link>
      )}
    </motion.div>
  );
}
