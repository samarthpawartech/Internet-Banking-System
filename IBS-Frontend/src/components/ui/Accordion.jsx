import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './Accordion.module.css';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className={styles.wrap}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button className={styles.question} onClick={() => setOpenIndex(isOpen ? -1 : i)} aria-expanded={isOpen}>
              <span>{item.q}</span>
              <DynamicIcon name="ChevronDown" size={18} className={styles.chevron} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.answerWrap}
                >
                  <p className={styles.answer}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
