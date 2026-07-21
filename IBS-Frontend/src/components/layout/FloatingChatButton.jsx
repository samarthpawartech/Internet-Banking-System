import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './FloatingChatButton.module.css';

const SCRIPT = [
  { from: 'bot', text: "Hi, I'm Nova — IBS's virtual assistant. Ask me about accounts, cards or rates." },
  { from: 'user', text: 'What is the savings account interest rate?' },
  { from: 'bot', text: 'Regular Savings earns 3.5% p.a., Premium Savings earns up to 4.5% p.a.' },
];

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.wrap}>
      <AnimatePresence>
        {open && (
          <motion.div className={styles.panel} initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>
            <div className={styles.head}>
              <span className={styles.headIcon}><DynamicIcon name="Bot" size={18} /></span>
              <div>
                <strong>Nova · IBS Assistant</strong>
                <span className={styles.status}>● Online — demo preview</span>
              </div>
              <button onClick={() => setOpen(false)}><DynamicIcon name="X" size={18} /></button>
            </div>
            <div className={styles.messages}>
              {SCRIPT.map((m, i) => (<div key={i} className={`${styles.bubble} ${m.from === 'bot' ? styles.bot : styles.user}`}>{m.text}</div>))}
            </div>
            <div className={styles.inputRow}>
              <input placeholder="Type a message..." disabled />
              <button disabled><DynamicIcon name="Send" size={16} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }} className={styles.fab} onClick={() => setOpen((v) => !v)} aria-label="Chat with Nova">
        <DynamicIcon name={open ? 'X' : 'MessageCircle'} size={24} />
      </motion.button>
    </div>
  );
}
