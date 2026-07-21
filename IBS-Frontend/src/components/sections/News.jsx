import { Link } from 'react-router-dom';
import DynamicIcon from '../../utils/iconMap.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import GlassCard from '../ui/GlassCard.jsx';
import { newsItems } from '../../data/homeData.js';
import styles from './News.module.css';

export default function News() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Newsroom" title="What's happening at IBS" highlight="IBS" align="left" />
        <div className={styles.grid}>
          {newsItems.map((n, i) => (
            <GlassCard key={n.title} delay={i * 0.08} padding="lg" className={styles.card}>
              <span className={styles.tag}>{n.tag}</span>
              <h3>{n.title}</h3>
              <p>{n.excerpt}</p>
              <div className={styles.meta}>
                <span>{n.date}</span>
                <Link to="/about" className={styles.readMore}>Read more <DynamicIcon name="ArrowUpRight" size={13} /></Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
