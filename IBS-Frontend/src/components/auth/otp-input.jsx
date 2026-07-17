
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
export function OtpInput({
  length = 6,
  onComplete
}) {
  const [values, setValues] = useState(Array(length).fill(''));
  const refs = useRef([]);
  const set = (i, v) => {
    const digit = v.replace(/\D/g, '').slice(-1);
    const next = [...values];
    next[i] = digit;
    setValues(next);
    if (digit && i < length - 1) refs.current[i + 1]?.focus();
    if (next.every(d => d) && onComplete) onComplete(next.join(''));
  };
  const onKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !values[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  };
  const onPaste = e => {
    const data = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    if (!data) return;
    e.preventDefault();
    const next = Array(length).fill('');
    data.split('').forEach((d, idx) => next[idx] = d);
    setValues(next);
    refs.current[Math.min(data.length, length - 1)]?.focus();
    if (data.length === length && onComplete) onComplete(data);
  };
  return <div className="flex justify-center gap-2 sm:gap-3">
      {values.map((v, i) => <input key={i} ref={el => {
      refs.current[i] = el;
    }} inputMode="numeric" maxLength={1} value={v} onChange={e => set(i, e.target.value)} onKeyDown={e => onKeyDown(i, e)} onPaste={onPaste} aria-label={`Digit ${i + 1}`} className={cn('tabular size-12 rounded-xl border bg-surface-2 text-center text-xl font-semibold text-foreground outline-none transition-all sm:size-14', v ? 'border-cyan glow-cyan text-cyan' : 'border-input focus:border-cyan focus:glow-cyan')} />)}
    </div>;
}
