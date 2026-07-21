import { Outlet, Link } from 'react-router-dom';
import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './AuthPageLayout.module.css';

export default function AuthPageLayout() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}><DynamicIcon name="Zap" size={18} /></span>
          <span>IBS</span>
        </Link>
        <Link to="/support" className={styles.help}><DynamicIcon name="CircleQuestionMark" size={16} />Need help?</Link>
      </header>
      <main className={styles.main}><Outlet /></main>
    </div>
  );
}
