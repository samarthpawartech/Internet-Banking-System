
import { useMemo, useState } from 'react';
import { GlassCard } from '@/components/glass-card';
function formatINR(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(n);
}
export function EmiCalculator() {
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(15);
  const {
    emi,
    total,
    interest
  } = useMemo(() => {
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;
    const emi = amount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const total = emi * months;
    return {
      emi,
      total,
      interest: total - amount
    };
  }, [amount, rate, years]);
  return <GlassCard hover={false} className="border-cyan/20">
      <h3 className="font-heading text-lg font-semibold">EMI Calculator</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Estimate your monthly loan repayment in seconds.
      </p>

      <div className="mt-6 rounded-xl border border-cyan/20 bg-surface-2 p-5 text-center">
        <div className="text-xs uppercase tracking-wide text-muted-foreground">
          Monthly EMI
        </div>
        <div className="tabular mt-1 text-3xl font-bold text-cyan glow-text-cyan">
          {formatINR(emi)}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <Slider label="Loan Amount" value={amount} min={100000} max={10000000} step={50000} onChange={setAmount} display={formatINR(amount)} />
        <Slider label="Interest Rate" value={rate} min={6} max={18} step={0.1} onChange={setRate} display={`${rate.toFixed(1)}% p.a.`} />
        <Slider label="Tenure" value={years} min={1} max={30} step={1} onChange={setYears} display={`${years} yrs`} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border bg-surface-2 p-3">
          <div className="text-xs text-muted-foreground">Total Interest</div>
          <div className="tabular mt-1 text-sm font-semibold text-violet">
            {formatINR(interest)}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-surface-2 p-3">
          <div className="text-xs text-muted-foreground">Total Payable</div>
          <div className="tabular mt-1 text-sm font-semibold text-foreground">
            {formatINR(total)}
          </div>
        </div>
      </div>
    </GlassCard>;
}
function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display
}) {
  const pct = (value - min) / (max - min) * 100;
  return <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <span className="tabular text-sm font-semibold text-cyan">{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} className="ibs-range" style={{
      background: `linear-gradient(90deg, var(--neon-cyan) ${pct}%, rgba(255,255,255,0.1) ${pct}%)`
    }} aria-label={label} />
    </div>;
}
