import { cn } from '@/lib/utils';
export function PageHeader({
  title,
  subtitle,
  action
}) {
  return <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>;
}
export function Panel({
  title,
  action,
  className,
  children
}) {
  return <section className={cn('rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm', className)}>
      {(title || action) && <div className="mb-4 flex items-center justify-between gap-2">
          {title && <h2 className="text-sm font-semibold text-foreground">{title}</h2>}
          {action}
        </div>}
      {children}
    </section>;
}
export function StatusBadge({
  status
}) {
  const map = {
    Success: 'bg-green/10 text-green border-green/30',
    Pending: 'bg-warning/10 text-warning border-warning/30',
    Failed: 'bg-danger/10 text-danger border-danger/30'
  };
  return <span className={cn('inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium', map[status] ?? 'bg-muted text-muted-foreground border-border')}>
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>;
}
