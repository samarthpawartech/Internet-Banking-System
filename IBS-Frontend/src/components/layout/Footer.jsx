import { Link } from 'react-router-dom';
import DynamicIcon from '../../utils/iconMap.jsx';
import { footerColumns, socialLinks, legalLinks } from '../../data/footerData.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoMark}><DynamicIcon name="Zap" size={18} /></span>
              <span>IBS</span>
            </Link>
            <p className={styles.tagline}>Internet Banking System — banking built for the way you actually save, spend and grow.</p>
            <div className={styles.social}>
              {socialLinks.map((s) => (<a key={s.label} href={s.path} aria-label={s.label} className={styles.socialBtn}><DynamicIcon name={s.icon} size={17} /></a>))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.heading} className={styles.col}>
              <h4>{col.heading}</h4>
              <ul>{col.links.map((l) => (<li key={l.label}><Link to={l.path}>{l.label}</Link></li>))}</ul>
            </div>
          ))}
        </div>

        <div className={styles.newsletter}>
          <div>
            <h4>Stay ahead of your money</h4>
            <p>Product updates, rate changes and security tips — no spam.</p>
          </div>
          <form className={styles.newsForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@email.com" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 IBS — Internet Banking System. All rights reserved.</span>
          <div className={styles.legal}>{legalLinks.map((l) => (<a key={l.label} href={l.path}>{l.label}</a>))}</div>
          <span className={styles.credit}>Developed by Samarth Pawar</span>
        </div>
      </div>
    </footer>
  );
}
