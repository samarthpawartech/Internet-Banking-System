
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthShell } from '@/components/auth/auth-shell';
import { GlassCard } from '@/components/glass-card';
import { Stepper } from '@/components/auth/stepper';
import { OtpInput } from '@/components/auth/otp-input';
import { PasswordStrength } from '@/components/auth/password-strength';
import { NeonButton, neonButtonVariants } from '@/components/neon-button';
import { cn } from '@/lib/utils';
import { CreditCard, Landmark, Fingerprint, Wallet, Check, ArrowLeft, ArrowRight } from 'lucide-react';
const steps = ['Method', 'Details', 'Verify', 'Credentials', 'Security', 'Done'];
const methods = [{
  icon: CreditCard,
  label: 'Debit Card',
  desc: 'Card number + PIN'
}, {
  icon: Wallet,
  label: 'Credit Card',
  desc: 'Card number + CVV'
}, {
  icon: Landmark,
  label: 'Loan Account',
  desc: 'Loan account number'
}, {
  icon: Fingerprint,
  label: 'Aadhaar',
  desc: 'Aadhaar-based eKYC'
}];
export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [method, setMethod] = useState(0);
  const [password, setPassword] = useState('');
  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));
  return <AuthShell wide>
      <GlassCard hover={false} className="border-cyan/20">
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-bold">Create your account</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Register for IBS Net Banking in a few secure steps
          </p>
        </div>

        <Stepper steps={steps} current={step} />

        <div className="mt-8 min-h-[280px]">
          {/* Step 1: method */}
          {step === 0 && <div>
              <h2 className="font-heading text-lg font-semibold">Choose a registration method</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {methods.map((m, i) => <button key={m.label} onClick={() => setMethod(i)} className={cn('flex items-center gap-3 rounded-xl border p-4 text-left transition-all', method === i ? 'border-cyan glow-cyan bg-cyan/5' : 'border-border hover:border-cyan/40')}>
                    <span className={cn('flex size-10 items-center justify-center rounded-lg border', method === i ? 'border-cyan text-cyan' : 'border-border text-muted-foreground')}>
                      <m.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-foreground">{m.label}</span>
                      <span className="block text-xs text-muted-foreground">{m.desc}</span>
                    </span>
                  </button>)}
              </div>
            </div>}

          {/* Step 2: details */}
          {step === 1 && <div className="space-y-4">
              <h2 className="font-heading text-lg font-semibold">Enter account details</h2>
              <label className="block">
                <span className="ibs-label">Account Number</span>
                <input className="ibs-input" placeholder="Enter your account number" />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="ibs-label">Card / Reference Number</span>
                  <input className="ibs-input" placeholder="XXXX XXXX XXXX XXXX" />
                </label>
                <label className="block">
                  <span className="ibs-label">PIN / CVV</span>
                  <input className="ibs-input" type="password" placeholder="••••" />
                </label>
              </div>
              <label className="block">
                <span className="ibs-label">Registered Mobile Number</span>
                <input className="ibs-input" placeholder="+91 •••••" />
              </label>
            </div>}

          {/* Step 3: OTP */}
          {step === 2 && <div className="text-center">
              <h2 className="font-heading text-lg font-semibold">Verify your identity</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Enter the 6-digit OTP sent to your registered mobile number
              </p>
              <div className="mt-8">
                <OtpInput />
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Didn&apos;t receive it?{' '}
                <span className="text-cyan">Resend in 00:28</span>
              </p>
            </div>}

          {/* Step 4: credentials */}
          {step === 3 && <div className="space-y-4">
              <h2 className="font-heading text-lg font-semibold">Set your login credentials</h2>
              <label className="block">
                <span className="ibs-label">Login ID</span>
                <input className="ibs-input" placeholder="Choose a unique Login ID" />
              </label>
              <label className="block">
                <span className="ibs-label">Password</span>
                <input className="ibs-input" type="password" placeholder="Create a strong password" value={password} onChange={e => setPassword(e.target.value)} />
                <PasswordStrength value={password} />
              </label>
              <label className="block">
                <span className="ibs-label">Confirm Password</span>
                <input className="ibs-input" type="password" placeholder="Re-enter password" />
              </label>
            </div>}

          {/* Step 5: security questions */}
          {step === 4 && <div className="space-y-4">
              <h2 className="font-heading text-lg font-semibold">Set security questions</h2>
              {['What was the name of your first school?', 'What is your favourite city?', 'What was your first pet\u2019s name?'].map((q, i) => <label key={i} className="block">
                  <span className="ibs-label">{q}</span>
                  <input className="ibs-input" placeholder="Your answer" />
                </label>)}
            </div>}

          {/* Step 6: success */}
          {step === 5 && <div className="flex flex-col items-center py-6 text-center">
              <div className="flex size-20 items-center justify-center rounded-full border-2 border-neon-green text-neon-green glow-green">
                <Check className="size-10" strokeWidth={3} />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-bold">Registration complete!</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Your IBS Net Banking account is ready. You can now log in with your new
                Login ID and password.
              </p>
              <Link to="/login" className={cn(neonButtonVariants({
            variant: 'cta',
            size: 'lg'
          }), 'mt-7')}>
                Proceed to Login
              </Link>
            </div>}
        </div>

        {/* Nav buttons */}
        {step < 5 && <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <NeonButton variant="ghost" size="md" onClick={back} disabled={step === 0} className={step === 0 ? 'invisible' : ''}>
              <ArrowLeft className="size-4" />
              Back
            </NeonButton>
            <span className="text-xs text-muted-foreground">
              Step {step + 1} of {steps.length}
            </span>
            <NeonButton variant="primary" size="md" onClick={next}>
              Continue
              <ArrowRight className="size-4" />
            </NeonButton>
          </div>}
      </GlassCard>
    </AuthShell>;
}
