
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthShell } from '@/components/auth/auth-shell';
import { GlassCard } from '@/components/glass-card';
import { Stepper } from '@/components/auth/stepper';
import { OtpInput } from '@/components/auth/otp-input';
import { PasswordStrength } from '@/components/auth/password-strength';
import { NeonButton, neonButtonVariants } from '@/components/neon-button';
import { cn } from '@/lib/utils';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
const steps = ['Identity', 'OTP', 'Reset', 'Confirm'];
export default function ForgotPasswordPage() {
  const [step, setStep] = useState(0);
  const [password, setPassword] = useState('');
  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));
  return <AuthShell>
      <GlassCard hover={false} className="border-cyan/20">
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-bold">Reset your access</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Recover your Login ID or reset your password
          </p>
        </div>

        <Stepper steps={steps} current={step} />

        <div className="mt-8 min-h-[220px]">
          {step === 0 && <div className="space-y-4">
              <h2 className="font-heading text-lg font-semibold">Verify your identity</h2>
              <label className="block">
                <span className="ibs-label">Customer ID</span>
                <input className="ibs-input" placeholder="Enter your Customer ID" />
              </label>
              <label className="block">
                <span className="ibs-label">Registered Mobile / Email</span>
                <input className="ibs-input" placeholder="Enter registered contact" />
              </label>
              <label className="block">
                <span className="ibs-label">Date of Birth</span>
                <input className="ibs-input" type="date" />
              </label>
            </div>}

          {step === 1 && <div className="text-center">
              <h2 className="font-heading text-lg font-semibold">Enter OTP</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                We sent a 6-digit code to your registered mobile number
              </p>
              <div className="mt-8">
                <OtpInput />
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                <span className="text-cyan">Resend in 00:24</span>
              </p>
            </div>}

          {step === 2 && <div className="space-y-4">
              <h2 className="font-heading text-lg font-semibold">Set a new password</h2>
              <label className="block">
                <span className="ibs-label">New Password</span>
                <input className="ibs-input" type="password" placeholder="Enter new password" value={password} onChange={e => setPassword(e.target.value)} />
                <PasswordStrength value={password} />
              </label>
              <label className="block">
                <span className="ibs-label">Confirm New Password</span>
                <input className="ibs-input" type="password" placeholder="Re-enter new password" />
              </label>
            </div>}

          {step === 3 && <div className="flex flex-col items-center py-6 text-center">
              <div className="flex size-20 items-center justify-center rounded-full border-2 border-neon-green text-neon-green glow-green">
                <Check className="size-10" strokeWidth={3} />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-bold">Password reset!</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Your password has been updated successfully. Please log in with your new
                credentials.
              </p>
              <Link to="/login" className={cn(neonButtonVariants({
            variant: 'cta',
            size: 'lg'
          }), 'mt-7')}>
                Back to Login
              </Link>
            </div>}
        </div>

        {step < 3 && <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <NeonButton variant="ghost" size="md" onClick={back} disabled={step === 0} className={step === 0 ? 'invisible' : ''}>
              <ArrowLeft className="size-4" />
              Back
            </NeonButton>
            <NeonButton variant="primary" size="md" onClick={next}>
              Continue
              <ArrowRight className="size-4" />
            </NeonButton>
          </div>}
      </GlassCard>
    </AuthShell>;
}
