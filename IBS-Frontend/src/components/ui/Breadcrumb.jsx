import { Link } from 'react-router-dom';
import DynamicIcon from '../../utils/iconMap.jsx';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items = [] }) {
  const all = [{ label: 'Home', path: '/' }, ...items];
  return (
    <nav className={styles.wrap} aria-label="Breadcrumb">
      {all.map((item, i) => {
        const isLast = i === all.length - 1;
        return (
          <span key={i} className={styles.crumb}>
            {isLast ? <span className={styles.current}>{item.label}</span> : <Link to={item.path} className={styles.link}>{item.label}</Link>}
            {!isLast && <DynamicIcon name="ChevronRight" size={14} className={styles.sep} />}
          </span>
        );
      })}
    </nav>
  );
}
