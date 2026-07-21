import SectionHeading from '../ui/SectionHeading.jsx';
import FeatureCard from '../ui/FeatureCard.jsx';
import { digitalFeatures } from '../../data/homeData.js';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Digital Banking" title="A banking app that actually gets used" highlight="actually gets used"
          description="IBS Connect brings your accounts, cards and an AI assistant into one fast, biometric-secured app." />
        <div className={styles.grid}>
          {digitalFeatures.map((f, i) => (<FeatureCard key={f.title} {...f} delay={i * 0.07} />))}
        </div>
      </div>
    </section>
  );
}
