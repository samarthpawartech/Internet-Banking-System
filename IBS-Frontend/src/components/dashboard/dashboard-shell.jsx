
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { user } from '@/lib/ibs-data';
import { LayoutDashboard, Wallet, ArrowLeftRight, ReceiptText, CreditCard, PiggyBank, TrendingUp, Landmark, Headset, Settings, ShieldCheck, LogOut, Bell, Menu, X, ChevronLeft, Search } from 'lucide-react';
const nav = [{
  label: 'Dashboard',
  href: '/dashboard',
  icon: LayoutDashboard
}, {
  label: 'Accounts',
  href: '/dashboard/accounts',
  icon: Wallet
}, {
  label: 'Fund Transfer',
  href: '/dashboard/transfer',
  icon: ArrowLeftRight
}, {
  label: 'Bill Payments',
  href: '/dashboard/bills',
  icon: ReceiptText
}, {
  label: 'Cards',
  href: '/dashboard/cards',
  icon: CreditCard
}, {
  label: 'Deposits',
  href: '/dashboard/deposits',
  icon: PiggyBank
}, {
  label: 'Investments',
  href: '/dashboard/investments',
  icon: TrendingUp
}, {
  label: 'Loans',
  href: '/dashboard/loans',
  icon: Landmark
}, {
  label: 'Service Requests',
  href: '/dashboard/services',
  icon: Headset
}, {
  label: 'Profile & Settings',
  href: '/dashboard/profile',
  icon: Settings
}, {
  label: 'Security Center',
  href: '/dashboard/security',
  icon: ShieldCheck
}];
export function DashboardShell({
  children
}) {
  const pathname = useLocation().pathname;
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={cn('fixed inset-y-0 left-0 z-50 flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300 lg:static', collapsed ? 'w-[76px]' : 'w-64', mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0')}>
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
          {!collapsed && <Logo href="/dashboard" />}
          {collapsed && <Logo href="/dashboard" showText={false} className="mx-auto" />}
          <button className="hidden size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-sidebar-accent hover:text-cyan lg:flex" onClick={() => setCollapsed(v => !v)} aria-label="Toggle sidebar">
            <ChevronLeft className={cn('size-4 transition-transform', collapsed && 'rotate-180')} />
          </button>
          <button className="flex size-8 items-center justify-center rounded-lg text-muted-foreground lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {nav.map(item => {
          const active = pathname === item.href;
          return <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)} className={cn('group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors', active ? 'bg-sidebar-accent text-cyan' : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground')} title={collapsed ? item.label : undefined}>
                {active && <span className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-cyan shadow-[0_0_8px_var(--neon-cyan)]" />}
                <item.icon className={cn('size-5 shrink-0', active && 'drop-shadow-[0_0_6px_var(--neon-cyan)]')} />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>;
        })}
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <Link to="/login" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground transition-colors hover:bg-danger/10 hover:text-danger" title={collapsed ? 'Logout' : undefined}>
            <LogOut className="size-5 shrink-0" />
            {!collapsed && <span>Logout</span>}
          </Link>
        </div>
      </aside>

      {mobileOpen && <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-xl md:px-6">
          <div className="flex items-center gap-3">
            <button className="flex size-9 items-center justify-center rounded-lg text-muted-foreground lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu className="size-5" />
            </button>
            <div>
              <p className="text-sm font-semibold text-foreground md:text-base">
                Good evening, {user.firstName}
              </p>
              <p className="hidden text-xs text-muted-foreground sm:block">
                Last login: {user.lastLogin}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button className="hidden size-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-cyan/40 hover:text-cyan sm:flex" aria-label="Search">
              <Search className="size-4" />
            </button>
            <div className="hidden items-center gap-2 rounded-lg border border-cyan/30 bg-cyan/5 px-3 py-1.5 md:flex">
              <span className="text-xs text-muted-foreground">Balance</span>
              <span className="tabular text-sm font-semibold text-cyan">₹8,42,350</span>
            </div>
            <button className="relative flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-cyan/40 hover:text-cyan" aria-label="Notifications">
              <Bell className="size-4" />
              <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-danger text-[9px] font-bold text-white">
                3
              </span>
            </button>
            <button className="flex size-9 items-center justify-center rounded-full bg-cyan text-sm font-bold text-primary-foreground glow-cyan" aria-label="Profile menu">
              {user.avatarInitials}
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">{children}</main>

        <footer className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
          &copy; 2026 IBS — Internet Banking System |{' '}
          <span className="text-cyan">Developed by Samarth Pawar</span>
        </footer>
      </div>
    </div>;
}
