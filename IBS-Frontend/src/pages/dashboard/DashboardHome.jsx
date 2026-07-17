import { Link } from 'react-router-dom';
import { Panel, StatusBadge } from '@/components/dashboard/ui';
import { DonutChart, Sparkline } from '@/components/dashboard/charts';
import { BankCard } from '@/components/bank-card';
import { accounts, transactions, spendingBreakdown, beneficiaries, upcomingBills, formatINR, user } from '@/lib/ibs-data';
import { ArrowLeftRight, ReceiptText, Smartphone, PiggyBank, Plus, TrendingUp, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
const quickActions = [{
  label: 'Transfer',
  icon: ArrowLeftRight,
  href: '/dashboard/transfer'
}, {
  label: 'Pay Bills',
  icon: ReceiptText,
  href: '/dashboard/bills'
}, {
  label: 'Recharge',
  icon: Smartphone,
  href: '/dashboard/bills'
}, {
  label: 'New Deposit',
  icon: PiggyBank,
  href: '/dashboard/deposits'
}];
const accentText = {
  cyan: 'text-cyan',
  violet: 'text-violet',
  green: 'text-green',
  orange: 'text-orange'
};
export default function DashboardPage() {
  const balanceHistory = [720, 680, 750, 690, 810, 770, 842];
  return <div className="space-y-6">
      {/* Top: balance + quick actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Panel className="lg:col-span-2" title="Total Balance">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="tabular text-4xl font-bold text-foreground">
                {formatINR(2593040.25)}
              </p>
              <p className="mt-1 flex items-center gap-1 text-sm text-green">
                <TrendingUp className="size-4" /> +4.2% this month
              </p>
            </div>
            <div className="w-full max-w-[280px]">
              <Sparkline data={balanceHistory} />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {quickActions.map(a => <Link key={a.label} to={a.href} className="group flex flex-col items-center gap-2 rounded-lg border border-border bg-background/40 p-3 transition-colors hover:border-cyan/40 hover:bg-cyan/5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan transition-transform group-hover:scale-110">
                  <a.icon className="size-5" />
                </span>
                <span className="text-xs font-medium text-foreground">{a.label}</span>
              </Link>)}
          </div>
        </Panel>

        <Panel title="Spending Breakdown">
          <div className="flex flex-col items-center gap-4">
            <DonutChart data={spendingBreakdown} />
            <div className="w-full space-y-1.5">
              {spendingBreakdown.map(s => <div key={s.label} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="size-2 rounded-full" style={{
                  backgroundColor: s.color
                }} />
                    {s.label}
                  </span>
                  <span className="tabular text-foreground">{formatINR(s.value)}</span>
                </div>)}
            </div>
          </div>
        </Panel>
      </div>

      {/* Accounts */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Your Accounts</h2>
          <Link to="/dashboard/accounts" className="text-xs text-cyan hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {accounts.map(acc => <div key={acc.id} className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm">
              <p className="text-xs text-muted-foreground">{acc.type}</p>
              <p className="mt-0.5 text-sm font-medium text-foreground">{acc.number}</p>
              <p className={`tabular mt-3 text-xl font-bold ${accentText[acc.accent]}`}>
                {formatINR(acc.balance)}
              </p>
            </div>)}
        </div>
      </div>

      {/* Transactions + side column */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Panel className="lg:col-span-2" title="Recent Transactions" action={<Link to="/dashboard/accounts" className="text-xs text-cyan hover:underline">
              See all
            </Link>}>
          <div className="divide-y divide-border">
            {transactions.slice(0, 6).map(t => {
            const credit = t.amount > 0;
            return <div key={t.id} className="flex items-center gap-3 py-3">
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${credit ? 'bg-green/10 text-green' : 'bg-muted text-muted-foreground'}`}>
                    {credit ? <ArrowDownLeft className="size-4" /> : <ArrowUpRight className="size-4" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{t.merchant}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.date} • {t.mode}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`tabular text-sm font-semibold ${credit ? 'text-green' : 'text-foreground'}`}>
                      {formatINR(t.amount, true)}
                    </p>
                    <StatusBadge status={t.status} />
                  </div>
                </div>;
          })}
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel title="Quick Transfer" action={<Link to="/dashboard/transfer" className="text-xs text-cyan hover:underline">
                Manage
              </Link>}>
            <div className="flex flex-wrap gap-3">
              {beneficiaries.map(b => <Link key={b.id} to="/dashboard/transfer" className="flex flex-col items-center gap-1.5" title={b.name}>
                  <span className="flex size-11 items-center justify-center rounded-full border border-cyan/30 bg-cyan/5 text-sm font-semibold text-cyan">
                    {b.initials}
                  </span>
                  <span className="max-w-[52px] truncate text-[10px] text-muted-foreground">
                    {b.name.split(' ')[0]}
                  </span>
                </Link>)}
              <Link to="/dashboard/transfer" className="flex flex-col items-center gap-1.5" title="Add beneficiary">
                <span className="flex size-11 items-center justify-center rounded-full border border-dashed border-border text-muted-foreground hover:border-cyan hover:text-cyan">
                  <Plus className="size-5" />
                </span>
                <span className="text-[10px] text-muted-foreground">Add</span>
              </Link>
            </div>
          </Panel>

          <Panel title="Upcoming Bills">
            <div className="space-y-3">
              {upcomingBills.map(bill => <div key={bill.id} className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm text-foreground">{bill.name}</p>
                    <p className="text-xs text-warning">{bill.due}</p>
                  </div>
                  <span className="tabular text-sm font-semibold text-foreground">
                    {formatINR(bill.amount)}
                  </span>
                </div>)}
            </div>
          </Panel>
        </div>
      </div>

      {/* Featured card */}
      <Panel title="Featured Card">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="w-full max-w-sm">
            <BankCard name="IBS NEON" holder={user.name.toUpperCase()} number="4291 •••• •••• 7734" variant="cyan" />
          </div>
          <div className="max-w-md space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Unlock premium rewards</h3>
            <p className="text-sm text-muted-foreground">
              5X reward points on online spends, complimentary airport lounge access, and zero
              forex markup on international transactions.
            </p>
            <Link to="/dashboard/cards" className="inline-flex items-center gap-1 text-sm font-medium text-cyan hover:underline">
              Manage cards <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Panel>
    </div>;
}
