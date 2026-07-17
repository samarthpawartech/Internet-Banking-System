import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const neonButtonVariants = cva('inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0', {
  variants: {
    variant: {
      primary: 'bg-cyan text-primary-foreground glow-cyan hover:brightness-110',
      cta: 'bg-neon-green text-[#04140a] glow-green hover:brightness-110',
      violet: 'bg-violet text-white glow-violet hover:brightness-110',
      outline: 'border border-cyan/40 bg-transparent text-cyan hover:border-cyan hover:glow-cyan',
      ghost: 'text-muted-foreground hover:bg-surface hover:text-foreground',
      danger: 'border border-danger/40 bg-danger/10 text-danger hover:bg-danger/20'
    },
    size: {
      sm: 'h-9 px-3 text-sm [&_svg]:size-4',
      md: 'h-11 px-5 text-sm [&_svg]:size-4',
      lg: 'h-12 px-7 text-base [&_svg]:size-5',
      icon: 'size-10 [&_svg]:size-5'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});
export function NeonButton({
  className,
  variant,
  size,
  ...props
}) {
  return <button className={cn(neonButtonVariants({
    variant,
    size,
    className
  }))} {...props} />;
}
export { neonButtonVariants };
