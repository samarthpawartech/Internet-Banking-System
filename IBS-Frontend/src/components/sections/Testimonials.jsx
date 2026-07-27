import { useRef } from 'react';
import DynamicIcon from '../../utils/iconMap.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import GlassCard from '../ui/GlassCard.jsx';
import { testimonials } from '../../data/homeData.js';
import styles from './Testimonials.module.css';

function initials(name) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const scrollByCard = (dir) => trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });

  return (
    <section className="section">
      <div className="container">
        <div className={styles.headRow}>
          <SectionHeading eyebrow="Customer stories" title="Banking people actually talk about" highlight="actually talk about" align="left" className={styles.heading} />
          <div className={styles.navBtns}>
            <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous testimonial"><DynamicIcon name="ArrowLeft" size={18} /></button>
            <button type="button" onClick={() => scrollByCard(1)} aria-label="Next testimonial"><DynamicIcon name="ArrowRight" size={18} /></button>
          </div>
        </div>

        <div className={styles.track} ref={trackRef}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.slide}>
              <GlassCard padding="lg" className={styles.card} glow="purple" animate={false}>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <DynamicIcon key={i} name="Star" size={14} className={i < t.rating ? styles.starOn : styles.starOff} />
                  ))}
                </div>
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.person}>
                  <span className={styles.avatar}>{initials(t.name)}</span>
                  <div><strong>{t.name}</strong><span>{t.role}</span></div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
