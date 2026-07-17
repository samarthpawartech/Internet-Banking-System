
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GlassCard } from '@/components/glass-card';
import { neonButtonVariants } from '@/components/neon-button';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';
const promos = [{
  tag: 'Savings',
  title: '7.25% p.a.',
  sub: 'on high-yield savings accounts'
}, {
  tag: 'Cashback',
  title: 'Up to 5%',
  sub: 'cashback on IBS Neon Credit Card'
}, {
  tag: 'Fixed Deposit',
  title: '8.10% p.a.',
  sub: 'special 444-day FD tenure'
}];
export function Hero() {
  const [showPwd, setShowPwd] = useState(false);
  return <section className="relative overflow-hidden">
      <div className="hero-mesh absolute inset-0" />
      <div className="neon-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-xs font-medium text-cyan">
            <Sparkles className="size-3.5" />
            Next-gen digital banking
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
            Banking that moves at the{' '}
            <span className="text-cyan glow-text-cyan">speed of light</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            Manage accounts, transfer funds, pay bills and grow your wealth — all
            from one secure, futuristic platform trusted by millions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/register" className={neonButtonVariants({
            variant: 'cta',
            size: 'lg'
          })}>
              Open an Account
              <ArrowRight className="size-5" />
            </Link>
            <Link to="/login" className={neonButtonVariants({
            variant: 'outline',
            size: 'lg'
          })}>
              Net Banking Login
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[['12M+', 'Active customers'], ['₹4.2L Cr', 'Assets managed'], ['99.99%', 'Uptime SLA']].map(([stat, label]) => <div key={label}>
                <div className="tabular text-2xl font-bold text-cyan">{stat}</div>
                <div className="mt-1 text-xs text-muted-foreground">{label}</div>
              </div>)}
          </div>
        </div>

        {/* Quick login glass card + promos */}
        <div className="flex flex-col justify-center gap-6">
          <GlassCard hover={false} className="glow-cyan/40 border-cyan/20">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold">Quick Login</h2>
              <span className="text-xs text-muted-foreground">Net Banking</span>
            </div>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <Field label="Customer ID">
                <input type="text" placeholder="Enter your Customer ID" className="ibs-input" />
              </Field>
              <Field label="Password">
                <div className="relative">
                  <input type={showPwd ? 'text' : 'password'} placeholder="Enter password" className="ibs-input pr-10" />
                  <button type="button" onClick={() => setShowPwd(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-cyan" aria-label={showPwd ? 'Hide password' : 'Show password'}>
                    {showPwd ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </Field>
              <Link to="/dashboard" className={cn(neonButtonVariants({
              variant: 'primary',
              size: 'md'
            }), 'w-full')}>
                Login
              </Link>
              <div className="flex items-center justify-between text-sm">
                <Link to="/forgot-password" className="text-muted-foreground hover:text-cyan">
                  Forgot Password?
                </Link>
                <Link to="/register" className="text-cyan hover:underline">
                  New User? Register
                </Link>
              </div>
            </form>
          </GlassCard>

          <div className="grid grid-cols-3 gap-3">
            {promos.map(p => <div key={p.tag} className="glass glass-hover rounded-xl p-4">
                <div className="text-[11px] font-medium uppercase tracking-wide text-violet">
                  {p.tag}
                </div>
                <div className="mt-2 tabular text-lg font-bold text-cyan">{p.title}</div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">{p.sub}</div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}
function Field({
  label,
  children
}) {
  return <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-muted-foreground">{label}</span>
      {children}
    </label>;
}
