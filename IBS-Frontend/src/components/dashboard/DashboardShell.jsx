import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './DashboardShell.module.css';

export default function DashboardShell({ navItems, roleLabel, roleIcon, userName, onLogout, children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className={styles.shell}>
      <button className={styles.mobileToggle} onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
        <DynamicIcon name={mobileOpen ? 'X' : 'Menu'} size={20} />
      </button>

      <aside className={`${styles.sidebar} ${mobileOpen ? styles.sidebarOpen : ''}`}>
        <Link to="/" className={styles.brand}>
          <span className={styles.logoMark}><DynamicIcon name="Zap" size={16} /></span>
          <div>
            <strong>IBS</strong>
            <span className={styles.roleTag}><DynamicIcon name={roleIcon} size={11} />{roleLabel}</span>
          </div>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} className={`${styles.navLink} ${active ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>
                <DynamicIcon name={item.icon} size={17} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.userBox}>
          <div className={styles.avatar}>{userName?.[0]?.toUpperCase() || '?'}</div>
          <div className={styles.userInfo}>
            <strong>{userName}</strong>
            <button type="button" onClick={handleLogout} className={styles.logoutBtn}>
              <DynamicIcon name="ArrowLeft" size={13} />Logout
            </button>
          </div>
        </div>
      </aside>

      {mobileOpen && <div className={styles.scrim} onClick={() => setMobileOpen(false)} />}

      <main className={styles.content}>{children}</main>
    </div>
  );
}
