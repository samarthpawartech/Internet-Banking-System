
import { useState } from 'react';
import { PageHeader, Panel } from '@/components/dashboard/ui';
import { NeonButton } from '@/components/neon-button';
import { OtpInput } from '@/components/auth/otp-input';
import { accounts, beneficiaries, formatINR } from '@/lib/ibs-data';
import { Check, ShieldCheck, Zap } from 'lucide-react';
const modes = ['UPI', 'IMPS', 'NEFT', 'RTGS'];
export default function TransferPage() {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState('IMPS');
  const [selected, setSelected] = useState(beneficiaries[0].id);
  const [amount, setAmount] = useState('5000');
  const [from, setFrom] = useState(accounts[0].id);
  const beneficiary = beneficiaries.find(b => b.id === selected);
  return <div className="mx-auto max-w-3xl">
      <PageHeader title="Fund Transfer" subtitle="Send money instantly and securely" />

      {/* Progress */}
      <div className="mb-6 flex items-center gap-2">
        {['Details', 'Verify', 'Done'].map((label, i) => {
        const n = i + 1;
        const active = step >= n;
        return <div key={label} className="flex flex-1 items-center gap-2">
              <div className={`flex size-8 items-center justify-center rounded-full border text-xs font-semibold ${active ? 'border-cyan bg-cyan/10 text-cyan' : 'border-border text-muted-foreground'}`}>
                {step > n ? <Check className="size-4" /> : n}
              </div>
              <span className={`text-xs ${active ? 'text-foreground' : 'text-muted-foreground'}`}>
                {label}
              </span>
              {i < 2 && <span className={`h-px flex-1 ${step > n ? 'bg-cyan/50' : 'bg-border'}`} />}
            </div>;
      })}
      </div>

      {step === 1 && <Panel className="space-y-5">
          <div>
            <span className="ibs-label">Transfer mode</span>
            <div className="grid grid-cols-4 gap-2">
              {modes.map(m => <button key={m} onClick={() => setMode(m)} className={`rounded-lg border py-2 text-sm font-medium transition-colors ${mode === m ? 'border-cyan bg-cyan/10 text-cyan' : 'border-border text-muted-foreground hover:border-cyan/40'}`}>
                  {m}
                </button>)}
            </div>
          </div>

          <div>
            <span className="ibs-label">From account</span>
            <select className="ibs-input" value={from} onChange={e => setFrom(e.target.value)}>
              {accounts.filter(a => a.balance > 0).map(a => <option key={a.id} value={a.id}>
                    {a.type} — {a.number} ({formatINR(a.balance)})
                  </option>)}
            </select>
          </div>

          <div>
            <span className="ibs-label">Select beneficiary</span>
            <div className="grid gap-2 sm:grid-cols-2">
              {beneficiaries.map(b => <button key={b.id} onClick={() => setSelected(b.id)} className={`flex items-center gap-3 rounded-lg border p-3 text-left transition-colors ${selected === b.id ? 'border-cyan bg-cyan/5' : 'border-border hover:border-cyan/40'}`}>
                  <span className="flex size-9 items-center justify-center rounded-full bg-cyan/10 text-sm font-semibold text-cyan">
                    {b.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{b.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {b.bank} • {b.account}
                    </p>
                  </div>
                </button>)}
            </div>
          </div>

          <div>
            <label htmlFor="amount" className="ibs-label">
              Amount
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                ₹
              </span>
              <input id="amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} className="ibs-input pl-7 text-lg font-semibold" />
            </div>
          </div>

          <NeonButton className="w-full" onClick={() => setStep(2)}>
            Continue to verify
          </NeonButton>
        </Panel>}

      {step === 2 && <Panel className="space-y-5">
          <div className="rounded-lg border border-border bg-background/40 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">To</span>
              <span className="font-medium text-foreground">{beneficiary.name}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Via</span>
              <span className="font-medium text-foreground">{mode}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Amount</span>
              <span className="tabular text-xl font-bold text-cyan">
                {formatINR(Number(amount) || 0)}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-lg border border-cyan/20 bg-cyan/5 p-3 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0 text-cyan" />
            Enter the 6-digit OTP sent to your registered mobile ending in ••8842.
          </div>

          <div>
            <span className="ibs-label text-center">Enter OTP</span>
            <div className="flex justify-center">
              <OtpInput onComplete={() => {}} />
            </div>
          </div>

          <div className="flex gap-3">
            <NeonButton variant="ghost" className="flex-1" onClick={() => setStep(1)}>
              Back
            </NeonButton>
            <NeonButton className="flex-1" onClick={() => setStep(3)}>
              Confirm transfer
            </NeonButton>
          </div>
        </Panel>}

      {step === 3 && <Panel className="flex flex-col items-center gap-4 py-10 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-green/10 text-green glow-green">
            <Check className="size-8" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-foreground">Transfer Successful</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {formatINR(Number(amount) || 0)} sent to {beneficiary.name} via {mode}
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Zap className="size-3.5 text-cyan" /> Ref: TXN{Math.floor(Math.random() * 900000 + 100000)}
          </div>
          <NeonButton className="mt-2" onClick={() => {
        setStep(1);
        setAmount('5000');
      }}>
            Make another transfer
          </NeonButton>
        </Panel>}
    </div>;
}
