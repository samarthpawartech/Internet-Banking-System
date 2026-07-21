import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import DynamicIcon from '../../utils/iconMap.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import GlassCard from '../ui/GlassCard.jsx';
import { testimonials } from '../../data/homeData.js';
import styles from './Testimonials.module.css';

function initials(name) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Customer stories" title="Banking people actually talk about" highlight="actually talk about" />
        <Swiper modules={[Autoplay]} autoplay={{ delay: 4500, disableOnInteraction: false }} loop spaceBetween={24}
          slidesPerView={1} breakpoints={{ 760: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }} className={styles.swiper}>
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <GlassCard padding="lg" className={styles.card} glow="purple">
                <div className={styles.stars}>{Array.from({ length: 5 }).map((_, i) => (<DynamicIcon key={i} name="Star" size={14} className={i < t.rating ? styles.starOn : styles.starOff} />))}</div>
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.person}>
                  <span className={styles.avatar}>{initials(t.name)}</span>
                  <div><strong>{t.name}</strong><span>{t.role}</span></div>
                </div>
              </GlassCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
