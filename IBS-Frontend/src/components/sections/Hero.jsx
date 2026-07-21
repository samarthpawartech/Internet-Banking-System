import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import Button from '../ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import useMousePosition from '../../hooks/useMousePosition.js';
import { heroSlides, offers } from '../../data/homeData.js';
import styles from './Hero.module.css';

export default function Hero() {
  const { ref, onMouseMove } = useMousePosition();

  return (
    <section className={styles.hero} ref={ref} onMouseMove={onMouseMove}>
      <div className={styles.meshGlow} />
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <Swiper modules={[Autoplay]} autoplay={{ delay: 5500, disableOnInteraction: false }} loop speed={700} className={styles.swiper}>
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.title}>
                <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  {slide.eyebrow}
                </motion.span>
                <motion.h1 className={styles.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}>
                  {slide.title} <span className="gradientText">{slide.highlight}</span>
                </motion.h1>
                <motion.p className={styles.desc} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}>
                  {slide.desc}
                </motion.p>
                <motion.div className={styles.ctas} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }}>
                  <Button to={slide.primaryCta.path} size="lg" icon="ArrowRight">{slide.primaryCta.label}</Button>
                  <Button to={slide.secondaryCta.path} variant="outline" size="lg">{slide.secondaryCta.label}</Button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

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
