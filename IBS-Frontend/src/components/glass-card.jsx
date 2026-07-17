import { cn } from '@/lib/utils';
export function GlassCard({
  className,
  hover = true,
  children,
  ...props
}) {
  return <div className={cn('glass rounded-2xl p-6', hover && 'glass-hover', className)} {...props}>
      {children}
    </div>;
}
