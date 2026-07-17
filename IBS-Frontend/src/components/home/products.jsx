import { GlassCard } from '@/components/glass-card';
import { BankCard } from '@/components/bank-card';
import { EmiCalculator } from '@/components/home/emi-calculator';
import { NeonButton } from '@/components/neon-button';
import { Check, TrendingUp, ShieldCheck, Landmark, QrCode, CircleDollarSign } from 'lucide-react';
const accounts = [{
  name: 'IBS Savings',
  rate: '7.25% p.a.',
  highlight: true,
  features: ['Zero balance account', 'Free NEFT/RTGS/IMPS', 'Virtual debit card', 'UPI autopay']
}, {
  name: 'IBS Current',
  rate: 'For Business',
  highlight: false,
  features: ['Unlimited transactions', 'Bulk payments', 'GST-ready statements', 'Overdraft facility']
}];
const investments = [{
  icon: TrendingUp,
  name: 'Mutual Funds',
  desc: '2,000+ direct funds, zero commission'
}, {
  icon: CircleDollarSign,
  name: 'Fixed Deposits',
  desc: 'Up to 8.10% p.a. with flexi tenure'
}, {
  icon: Landmark,
  name: 'Recurring Deposits',
  desc: 'Start SIP-style savings from ₹500/mo'
}, {
  icon: ShieldCheck,
  name: 'Insurance',
  desc: 'Term, health & motor cover in-app'
}];
function SectionHeading({
  eyebrow,
  title
}) {
  return <div className="mb-10 text-center">
      <div className="text-sm font-medium uppercase tracking-wider text-violet">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-3xl font-bold text-balance md:text-4xl">{title}</h2>
    </div>;
}
export function Products() {
  return <div>
      {/* Accounts */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Accounts" title="Accounts built around your life" />
        <div className="grid gap-6 md:grid-cols-2">
          {accounts.map(acc => <GlassCard key={acc.name} className={acc.highlight ? 'border-cyan/40 glow-cyan' : ''}>
              <div className="flex items-start justify-between">
                <h3 className="font-heading text-xl font-semibold">{acc.name}</h3>
                <span className="tabular rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-sm font-semibold text-cyan">
                  {acc.rate}
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {acc.features.map(f => <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-neon-green" />
                    {f}
                  </li>)}
              </ul>
              <NeonButton variant={acc.highlight ? 'primary' : 'outline'} size="md" className="mt-6 w-full">
                Open {acc.name}
              </NeonButton>
            </GlassCard>)}
        </div>
      </section>

      {/* Cards */}
      <section className="bg-surface-2">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="Cards" title="Cards with a holographic neon edge" />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <BankCard variant="cyan" className="relative z-20 rotate-[-4deg]" />
                <BankCard variant="violet" name="IBS PRIME" network="MASTERCARD" number="6011 •••• •••• 3390" className="absolute inset-x-6 top-10 z-10 rotate-[6deg] opacity-90" />
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold">
                Debit & Credit, reimagined
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Metallic dark finish with a glowing neon edge. Full control from your
                dashboard — freeze, set limits, and track spends in real time.
              </p>
              <ul className="mt-6 space-y-3">
                {['Up to 5% cashback on everyday spends', 'Instant freeze / unfreeze toggle', 'Zero forex markup on IBS Prime', 'Dynamic CVV for online safety'].map(f => <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-neon-green" />
                    {f}
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loans + EMI */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Loans" title="Loans approved in minutes, not weeks" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-semibold">
              Home, personal, car & education loans
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Transparent interest rates, no hidden charges, and instant in-principle
              approval. Use the calculator to plan your EMIs before you apply.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[['Home Loan', 'from 8.35%'], ['Personal Loan', 'from 10.99%'], ['Car Loan', 'from 8.75%'], ['Education Loan', 'from 9.15%']].map(([n, r]) => <div key={n} className="rounded-xl border border-border bg-surface p-4">
                  <div className="text-sm font-medium text-foreground">{n}</div>
                  <div className="tabular mt-1 text-sm text-cyan">{r}</div>
                </div>)}
            </div>
          </div>
          <EmiCalculator />
        </div>
      </section>

      {/* Investments */}
      <section className="bg-surface-2">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="Grow" title="Investments & Insurance" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {investments.map(({
            icon: Icon,
            name,
            desc
          }) => <GlassCard key={name}>
                <span className="flex size-11 items-center justify-center rounded-xl border border-violet/30 text-violet">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </GlassCard>)}
          </div>
        </div>
      </section>

      {/* Digital banking highlight */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-violet">
              Digital Banking
            </div>
            <h2 className="mt-2 text-3xl font-bold text-balance md:text-4xl">
              Your entire bank, in your pocket
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Download the IBS app to bank on the go. Biometric login, instant
              notifications, and the same neon-fast experience across every device.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex gap-3">
                <div className="flex h-12 items-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm text-foreground">
                  App Store
                </div>
                <div className="flex h-12 items-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm text-foreground">
                  Google Play
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-cyan/30 p-3">
                <QrCode className="size-10 text-cyan" />
                <span className="text-xs text-muted-foreground">
                  Scan to
                  <br />
                  download
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 hero-mesh rounded-full blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-[#1a1a22] bg-surface-2 shadow-[0_0_60px_-12px_rgba(0,240,255,0.4)]">
                <img src="/ibs-app-mockup.png" alt="IBS mobile banking app showing account balance and spending chart" width={320} height={640} className="h-auto w-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
