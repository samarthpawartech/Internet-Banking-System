import SectionHeading from '../ui/SectionHeading.jsx';
import EMICalculator from '../ui/EMICalculator.jsx';
import Button from '../ui/Button.jsx';
import DynamicIcon from '../../utils/iconMap.jsx';
import { loanHighlights } from '../../data/homeData.js';
import styles from './Benefits.module.css';

export default function Benefits() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Loan Calculator" title="See your EMI before you apply" highlight="before you apply"
          description="Drag the sliders — the numbers update live. No forms, no phone calls." />
        <EMICalculator />
        <div className={styles.highlights}>
          {loanHighlights.map((h) => (
            <div key={h.title} className={styles.highlight}>
              <DynamicIcon name={h.icon} size={18} />
              <div><strong>{h.title}</strong><span>{h.desc}</span></div>
            </div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Button to="/personal-banking/loans" icon="ArrowRight">Explore all loans</Button>
        </div>
      </div>
    </section>
  );
}
