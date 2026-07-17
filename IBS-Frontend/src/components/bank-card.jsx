import { cn } from '@/lib/utils';
import { Wifi } from 'lucide-react';
export function BankCard({
  name = 'IBS NEON',
  holder = 'SAMARTH PAWAR',
  number = '5412 •••• •••• 8842',
  expiry = '08/29',
  variant = 'cyan',
  network = 'VISA',
  className
}) {
  const edge = {
    cyan: 'before:bg-cyan/70 border-cyan/30',
    violet: 'before:bg-violet/70 border-violet/30',
    green: 'before:bg-neon-green/70 border-neon-green/30'
  }[variant];
  const glow = {
    cyan: 'shadow-[0_0_30px_-8px_rgba(0,240,255,0.5)]',
    violet: 'shadow-[0_0_30px_-8px_rgba(176,38,255,0.5)]',
    green: 'shadow-[0_0_30px_-8px_rgba(57,255,20,0.5)]'
  }[variant];
  return <div className={cn('relative aspect-[1.586/1] w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-[#1c1c26] via-[#121218] to-[#0a0a0f] p-5', 'before:absolute before:inset-x-0 before:top-0 before:h-px before:content-[""]', edge, glow, className)}>
      <div className="flex items-start justify-between">
        <div>
          <div className="font-heading text-sm font-bold tracking-widest text-foreground">
            {name}
          </div>
          <div className="mt-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
            Internet Banking System
          </div>
        </div>
        <Wifi className="size-5 rotate-90 text-muted-foreground" />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-7 w-9 rounded-md bg-gradient-to-br from-[#e6c15c] to-[#b8912f]" />
      </div>

      <div className="tabular mt-3 text-lg font-medium tracking-[0.12em] text-foreground">
        {number}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <div className="text-[9px] uppercase tracking-wide text-muted-foreground">
            Card Holder
          </div>
          <div className="text-xs font-medium text-foreground">{holder}</div>
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wide text-muted-foreground">
            Valid Thru
          </div>
          <div className="tabular text-xs font-medium text-foreground">{expiry}</div>
        </div>
        <div className="font-heading text-sm font-bold italic text-foreground">
          {network}
        </div>
      </div>
    </div>;
}
