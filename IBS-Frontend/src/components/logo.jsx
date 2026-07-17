import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
export function Logo({
  className,
  href = '/',
  showText = true
}) {
  return <Link to={href} className={cn('group inline-flex items-center gap-2.5', className)} aria-label="IBS — Internet Banking System home">
      <span className="relative flex size-9 items-center justify-center rounded-lg border border-cyan/40 bg-surface glow-cyan transition-transform group-hover:scale-105">
        <ShieldCheck className="size-5 text-cyan" strokeWidth={2.2} />
      </span>
      {showText && <span className="font-heading text-xl font-bold tracking-tight text-foreground">
          IB<span className="text-cyan glow-text-cyan">S</span>
        </span>}
    </Link>;
}
