import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import useMousePosition from '../../hooks/useMousePosition.js';
import { heroSlides, offers } from '../../data/homeData.js';
import styles from './Hero.module.css';

export default function Hero() {
  const { ref, onMouseMove } = useMousePosition();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 5500);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className={styles.hero} ref={ref} onMouseMove={onMouseMove}>
      <div className={styles.meshGlow} />
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <div className={styles.slideViewport}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={styles.slide}
              >
                <span className="eyebrow">{slide.eyebrow}</span>
                <h1 className={styles.title}>{slide.title} <span className="gradientText">{slide.highlight}</span></h1>
                <p className={styles.desc}>{slide.desc}</p>
                <div className={styles.ctas}>
                  <Button to={slide.primaryCta.path} size="lg" icon="ArrowRight">{slide.primaryCta.label}</Button>
                  <Button to={slide.secondaryCta.path} variant="outline" size="lg">{slide.secondaryCta.label}</Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.dots}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className={styles.trustRow}>
            <span><DynamicIcon name="ShieldCheck" size={16} />RBI-licensed</span>
            <span><DynamicIcon name="Users" size={16} />1.2 Cr+ customers</span>
            <span><DynamicIcon name="Star" size={16} />4.7 app rating</span>
          </div>
        </div>

        <div className={styles.cardStage} aria-hidden="true">
          <div className={`${styles.floatCard} ${styles.cardBiz}`} style={{ '--float-rot': '-14deg' }}>
            <span className={styles.cardTop}><span className={styles.chip} /><DynamicIcon name="Building2" size={18} /></span>
            <span className={`${styles.cardNum} mono`}>•••• •••• •••• 7743</span>
            <span className={styles.cardLabel}>IBS Business</span>
          </div>
          <div className={`${styles.floatCard} ${styles.cardCredit}`} style={{ '--float-rot': '6deg' }}>
            <span className={styles.cardTop}><span className={styles.chip} /><DynamicIcon name="Sparkles" size={18} /></span>
            <span className={`${styles.cardNum} mono`}>•••• •••• •••• 4821</span>
            <span className={styles.cardLabel}>IBS Infinite</span>
          </div>
          <div className={`${styles.floatCard} ${styles.cardSavings}`} style={{ '--float-rot': '-3deg' }}>
            <span className={styles.cardTop}><span className={styles.chip} /><DynamicIcon name="PiggyBank" size={18} /></span>
            <span className={`${styles.cardNum} mono`}>•••• •••• •••• 1290</span>
            <span className={styles.cardLabel}>IBS Savings</span>
          </div>
        </div>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...offers, ...offers].map((o, i) => (
            <span key={i} className={styles.offerChip}><DynamicIcon name={o.icon} size={14} />{o.text}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
