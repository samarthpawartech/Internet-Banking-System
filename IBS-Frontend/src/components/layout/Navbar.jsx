import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import DynamicIcon from '../../utils/iconMap.jsx';
import Button from '../ui/Button.jsx';
import MegaMenu from './MegaMenu.jsx';
import { megaMenuData } from '../../data/navigationData.js';
import { useApp } from '../../context/AppContext.jsx';
import useScrolled from '../../hooks/useScrolled.js';
import styles from './Navbar.module.css';

export default function Navbar() {
  const scrolled = useScrolled(40);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;
  const [openMenu, setOpenMenu] = useState(null);
  const { openSearch, openDrawer } = useApp();

  return (
    <header className={`${styles.header} ${transparent ? styles.transparent : styles.solid}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={() => setOpenMenu(null)}>
          <span className={styles.logoMark}><DynamicIcon name="Zap" size={18} /></span>
          <span>IBS</span>
        </Link>

        <nav className={styles.nav} onMouseLeave={() => setOpenMenu(null)}>
          {megaMenuData.map((menu, i) => (
            <div key={menu.label} className={styles.navItemWrap} onMouseEnter={() => !menu.simple && setOpenMenu(i)}>
              {menu.simple ? (
                <Link to={menu.path} className={styles.navLink}>{menu.label}</Link>
              ) : (
                <button className={styles.navLink} onClick={() => setOpenMenu(openMenu === i ? null : i)}>
                  {menu.label}
                  <DynamicIcon name="ChevronDown" size={14} />
                </button>
              )}
              <AnimatePresence>
                {openMenu === i && !menu.simple && <MegaMenu menu={menu} onNavigate={() => setOpenMenu(null)} />}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn} onClick={openSearch} aria-label="Search"><DynamicIcon name="Search" size={19} /></button>
          <button className={styles.iconBtn} aria-label="Notifications">
            <DynamicIcon name="Bell" size={19} />
            <span className={styles.dot} />
          </button>
          <Button to="/customer-login" variant="primary" size="sm" className={styles.loginBtn}>Login</Button>
          <button className={styles.hamburger} onClick={openDrawer} aria-label="Open menu"><DynamicIcon name="Menu" size={22} /></button>
        </div>
      </div>
    </header>
  );
}
