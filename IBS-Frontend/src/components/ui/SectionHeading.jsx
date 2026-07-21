import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

function renderTitle(title, highlight) {
  if (!highlight) return title;
  const idx = title.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return title;
  const before = title.slice(0, idx);
  const match = title.slice(idx, idx + highlight.length);
  const after = title.slice(idx + highlight.length);
  return (
    <>
      {before}
      <span className="gradientText">{match}</span>
      {after}
    </>
  );
}

export default function SectionHeading({
  eyebrow, title, highlight, description, align = 'center', size = 'md', className = '',
}) {
  return (
    <motion.div
      className={`${styles.wrap} ${styles[align]} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`${styles.title} ${styles[`size-${size}`]}`}>{renderTitle(title, highlight)}</h2>
      {description && <p className={styles.desc}>{description}</p>}
    </motion.div>
  );
}
