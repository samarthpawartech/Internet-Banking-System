import { AnimatePresence, motion } from 'framer-motion';
import DynamicIcon from '../../utils/iconMap.jsx';
import Button from '../ui/Button.jsx';
import styles from './Modal.module.css';

export default function Modal({ open, title, description, confirmLabel = 'Confirm', tone = 'danger', onConfirm, onCancel }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onCancel}>
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 16, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`${styles.icon} ${styles[tone]}`}><DynamicIcon name={tone === 'danger' ? 'CircleAlert' : 'CircleCheckBig'} size={22} /></div>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            <div className={styles.actions}>
              <Button variant="outline" onClick={onCancel}>Cancel</Button>
              <Button variant={tone === 'danger' ? 'primary' : 'primary'} onClick={onConfirm}>{confirmLabel}</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
