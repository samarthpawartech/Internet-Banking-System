import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
export function Stepper({
  steps,
  current
}) {
  return <div className="flex items-center">
      {steps.map((label, i) => {
      const done = i < current;
      const active = i === current;
      return <div key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div className={cn('flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-all', done && 'border-cyan bg-cyan text-primary-foreground glow-cyan', active && 'border-cyan text-cyan glow-cyan', !done && !active && 'border-border text-muted-foreground')}>
                {done ? <Check className="size-4" /> : i + 1}
              </div>
              <span className={cn('hidden text-[11px] font-medium sm:block', active || done ? 'text-cyan' : 'text-muted-foreground')}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && <div className="mx-2 h-px flex-1 bg-border">
                <div className={cn('h-full transition-all duration-500', done ? 'w-full bg-cyan shadow-[0_0_8px_var(--neon-cyan)]' : 'w-0')} />
              </div>}
          </div>;
    })}
    </div>;
}
