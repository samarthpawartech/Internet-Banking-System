import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DynamicIcon from '../../utils/iconMap.jsx';
import { searchSuggestions } from '../../data/navigationData.js';
import { useApp } from '../../context/AppContext.jsx';
import styles from './SearchPopup.module.css';

export default function SearchPopup() {
  const { searchOpen, closeSearch } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 120);
    else setQuery('');
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeSearch();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    closeSearch();
    navigate('/support');
  };

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeSearch}>
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: -24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <DynamicIcon name="Search" size={20} className={styles.icon} />
              <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search accounts, cards, loans, support..." className={styles.input} />
              <button type="button" onClick={closeSearch} className={styles.close}><DynamicIcon name="X" size={20} /></button>
            </form>
            <div className={styles.suggestions}>
              <span className={styles.suggestLabel}>Popular searches</span>
              <div className={styles.chips}>
                {searchSuggestions.map((s) => (<button key={s} type="button" className={styles.chip} onClick={() => setQuery(s)}>{s}</button>))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
