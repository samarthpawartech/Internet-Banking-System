import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DynamicIcon from '../../utils/iconMap.jsx';
import Button from '../ui/Button.jsx';
import { megaMenuData } from '../../data/navigationData.js';
import { useApp } from '../../context/AppContext.jsx';
import styles from './MobileDrawer.module.css';

export default function MobileDrawer() {
  const { drawerOpen, closeDrawer } = useApp();
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const go = (path) => { closeDrawer(); navigate(path); };

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div className={styles.scrim} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeDrawer} />
          <motion.aside className={styles.drawer} initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
            <div className={styles.top}>
              <span className={styles.logo}>IBS</span>
              <button className={styles.closeBtn} onClick={closeDrawer}><DynamicIcon name="X" size={22} /></button>
            </div>
            <nav className={styles.nav}>
              {megaMenuData.map((menu, i) => (
                <div key={menu.label} className={styles.navItem}>
                  {menu.simple ? (
                    <Link to={menu.path} onClick={closeDrawer} className={styles.navHead}>{menu.label}</Link>
                  ) : (
                    <>
                      <button className={styles.navHead} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                        {menu.label}
                        <DynamicIcon name="ChevronDown" size={16} className={openIndex === i ? styles.rotated : ''} />
                      </button>
                      {openIndex === i && (
                        <div className={styles.subLinks}>
                          {menu.columns.flatMap((c) => c.items).map((item) => (
                            <Link key={item.label} to={item.path} onClick={closeDrawer} className={styles.subLink}>{item.label}</Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
            <div className={styles.actions}>
              <Button variant="outline" size="md" onClick={() => go('/business-login')} className={styles.fullBtn}>Business Login</Button>
              <Button variant="primary" size="md" onClick={() => go('/customer-login')} className={styles.fullBtn}>Customer Login</Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
