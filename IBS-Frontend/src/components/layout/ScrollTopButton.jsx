import { AnimatePresence, motion } from 'framer-motion';
import useScrolled from '../../hooks/useScrolled.js';
import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './ScrollTopButton.module.css';

export default function ScrollTopButton() {
  const visible = useScrolled(500);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className={styles.btn}
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <DynamicIcon name="ArrowUpRight" size={18} style={{ transform: 'rotate(-45deg)' }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
