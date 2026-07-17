import { Lock, ShieldCheck, KeyRound, AlertTriangle } from 'lucide-react';
const trust = [{
  icon: Lock,
  title: '256-bit Encryption',
  desc: 'Bank-grade end-to-end security'
}, {
  icon: ShieldCheck,
  title: 'RBI-Regulated',
  desc: 'Compliant & fully insured'
}, {
  icon: KeyRound,
  title: '2FA & OTP',
  desc: 'Every transaction verified'
}];
export function SecurityBand() {
  return <section className="bg-surface-2">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {trust.map(({
          icon: Icon,
          title,
          desc
        }) => <div key={title} className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan/30 text-cyan glow-cyan">
                <Icon className="size-6" />
              </span>
              <div>
                <div className="font-heading font-semibold">{title}</div>
                <div className="mt-0.5 text-sm text-muted-foreground">{desc}</div>
              </div>
            </div>)}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-warning/40 bg-warning/5 px-5 py-4">
          <AlertTriangle className="size-5 shrink-0 text-warning" />
          <p className="text-sm text-foreground">
            <span className="font-semibold text-warning">Security alert:</span> IBS
            will never ask for your password, OTP, or PIN over call, SMS or email.
          </p>
        </div>
      </div>
    </section>;
}
