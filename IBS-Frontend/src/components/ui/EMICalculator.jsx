import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { calculateEMI } from '../../utils/calculators.js';
import { formatINR } from '../../utils/format.js';
import GlassCard from './GlassCard.jsx';
import styles from './EMICalculator.module.css';

export default function EMICalculator() {
  const [amount, setAmount] = useState(1500000);
  const [rate, setRate] = useState(9.5);
  const [tenure, setTenure] = useState(15);

  const { emi, totalInterest, totalPayment } = useMemo(
    () => calculateEMI(amount, rate, tenure * 12),
    [amount, rate, tenure]
  );
  const principalPct = totalPayment ? Math.round((amount / totalPayment) * 100) : 0;

  return (
    <GlassCard padding="lg" hover={false} className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.controls}>
          <Slider label="Loan Amount" value={amount} min={100000} max={10000000} step={50000} onChange={setAmount} format={(v) => formatINR(v)} />
          <Slider label="Interest Rate" value={rate} min={6} max={16} step={0.1} onChange={setRate} format={(v) => `${v.toFixed(1)}%`} />
          <Slider label="Tenure" value={tenure} min={1} max={30} step={1} onChange={setTenure} format={(v) => `${v} yr${v > 1 ? 's' : ''}`} />
        </div>
        <div className={styles.result}>
          <div className={styles.ring} style={{ '--pct': principalPct }}>
            <div className={styles.ringInner}>
              <span className={styles.ringLabel}>Monthly EMI</span>
              <motion.span key={Math.round(emi)} initial={{ opacity: 0.3, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`${styles.ringValue} mono`}>
                {formatINR(emi)}
              </motion.span>
            </div>
          </div>
          <div className={styles.breakdown}>
            <div><span>Principal</span><strong className="mono">{formatINR(amount)}</strong></div>
            <div><span>Total Interest</span><strong className="mono">{formatINR(totalInterest)}</strong></div>
            <div><span>Total Payment</span><strong className="mono">{formatINR(totalPayment)}</strong></div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function Slider({ label, value, min, max, step, onChange, format }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={styles.sliderRow}>
      <div className={styles.sliderLabel}><span>{label}</span><span className={`${styles.sliderValue} mono`}>{format(value)}</span></div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className={styles.range} style={{ '--pct': `${pct}%` }} />
    </div>
  );
}
