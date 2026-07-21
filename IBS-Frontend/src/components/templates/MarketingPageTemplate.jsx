import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumb from '../ui/Breadcrumb.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import FeatureCard from '../ui/FeatureCard.jsx';
import ProductCard from '../ui/ProductCard.jsx';
import Button from '../ui/Button.jsx';
import BackgroundFX from '../ui/BackgroundFX.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import CTA from '../sections/CTA.jsx';
import FAQ from '../sections/FAQ.jsx';
import styles from './MarketingPageTemplate.module.css';

export default function MarketingPageTemplate({ data }) {
  const { theme = 'accent', breadcrumb = [], hero, overview, benefits, features, cards, faq, related, cta, extra } = data;

  return (
    <>
      <section className={styles.hero}>
        <BackgroundFX variant={theme} />
        <div className={`container ${styles.heroInner}`}>
          <Breadcrumb items={breadcrumb} />
          <div className={styles.heroIcon}><DynamicIcon name={hero.icon} size={26} /></div>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.desc}>{hero.description}</p>
          <div className={styles.ctas}>
            {hero.primaryCta && <Button to={hero.primaryCta.path} size="lg" icon="ArrowRight">{hero.primaryCta.label}</Button>}
            {hero.secondaryCta && <Button to={hero.secondaryCta.path} variant="outline" size="lg">{hero.secondaryCta.label}</Button>}
          </div>
        </div>
      </section>

      {overview && (
        <section className="section">
          <div className={`container ${styles.overviewGrid}`}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className={styles.overviewTitle}>{overview.title}</h2>
              {overview.paragraphs.map((p, i) => (<p key={i} className={styles.overviewText}>{p}</p>))}
            </motion.div>
            {overview.highlights && (
              <div className={styles.highlightCol}>
                {overview.highlights.map((h) => (
                  <div key={h.label} className={styles.highlightItem}>
                    <DynamicIcon name={h.icon} size={20} />
                    <div><strong>{h.value}</strong><span>{h.label}</span></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {benefits && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Benefits" title={benefits.title} />
            <div className={styles.grid4}>
              {benefits.items.map((b, i) => (<FeatureCard key={b.title} {...b} delay={i * 0.06} />))}
            </div>
          </div>
        </section>
      )}

      {features && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Features" title={features.title} />
            <div className={styles.grid4}>
              {features.items.map((f, i) => (<FeatureCard key={f.title} {...f} accent="purple" delay={i * 0.06} />))}
            </div>
          </div>
        </section>
      )}

      {cards && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Choose your fit" title={cards.title} description={cards.subtitle} />
            <div className={styles.grid3}>
              {cards.items.map((c, i) => (<ProductCard key={c.title} {...c} delay={i * 0.08} />))}
            </div>
          </div>
        </section>
      )}

      {extra}

      {cta && <CTA {...cta} />}
      {faq && <FAQ title={faq.title} items={faq.items} />}

      {related && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <SectionHeading eyebrow="Keep exploring" title={related.title} align="left" />
            <div className={styles.relatedRow}>
              {related.items.map((r) => (
                <Link key={r.title} to={r.path} className={styles.relatedItem}>
                  <DynamicIcon name={r.icon} size={18} />
                  <span>{r.title}</span>
                  <DynamicIcon name="ArrowUpRight" size={15} className={styles.relatedArrow} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
