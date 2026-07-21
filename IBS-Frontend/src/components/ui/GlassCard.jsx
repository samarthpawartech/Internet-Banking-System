import { motion } from 'framer-motion';
import styles from './GlassCard.module.css';

export default function GlassCard({
  children, className = '', hover = true, glow = 'accent', padding = 'md',
  animate = true, delay = 0, as = 'div', ...rest
}) {
  const classes = `${styles.card} ${hover ? styles.hoverable : ''} ${styles[`glow-${glow}`]} ${styles[`pad-${padding}`]} ${className}`;

  if (!animate) {
    const Tag = as;
    return <Tag className={classes} {...rest}>{children}</Tag>;
  }

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
