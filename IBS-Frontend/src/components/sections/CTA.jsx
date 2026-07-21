import Button from '../ui/Button.jsx';
import BackgroundFX from '../ui/BackgroundFX.jsx';
import styles from './CTA.module.css';

export default function CTA({
  title = 'Open an IBS account in under 6 minutes',
  description = 'Video-KYC, instant virtual card, zero paperwork.',
  primaryCta = { label: 'Open an account', path: '/personal-banking/savings-account' },
  secondaryCta = { label: 'Talk to us', path: '/contact' },
}) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.panel}>
          <BackgroundFX />
          <div className={styles.content}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={styles.ctas}>
              <Button to={primaryCta.path} size="lg" icon="ArrowRight">{primaryCta.label}</Button>
              <Button to={secondaryCta.path} variant="outline" size="lg">{secondaryCta.label}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
