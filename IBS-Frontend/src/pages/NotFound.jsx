import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DynamicIcon from '../utils/iconMap.jsx';
import Button from '../components/ui/Button.jsx';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className={styles.bg} aria-hidden="true"><span /><span /><span /></div>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoMark}><DynamicIcon name="Zap" size={18} /></span>
        <span>IBS</span>
      </Link>
      <div className={styles.content}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={styles.code}>404</motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          This account doesn't exist
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}>
          The page you're looking for has been moved, renamed, or never existed in the first place.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }} className={styles.ctas}>
          <Button to="/" icon="ArrowRight">Back to Home</Button>
          <Button to="/support" variant="outline">Visit Support</Button>
        </motion.div>
      </div>
    </div>
  );
}
