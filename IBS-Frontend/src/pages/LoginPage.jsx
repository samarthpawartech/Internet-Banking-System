
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthShell } from '@/components/auth/auth-shell';
import { GlassCard } from '@/components/glass-card';
import { neonButtonVariants } from '@/components/neon-button';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, RefreshCw } from 'lucide-react';
export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [captcha, setCaptcha] = useState('7K9XQ2');
  const refreshCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    setCaptcha(Array.from({
      length: 6
    }, () => chars[Math.floor(Math.random() * chars.length)]).join(''));
  };
  return <AuthShell>
      <GlassCard hover={false} className="border-cyan/20">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold">Welcome back</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Log in to your IBS Net Banking account
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={e => e.preventDefault()}>
          <label className="block">
            <span className="ibs-label">Customer ID / User ID</span>
            <input type="text" placeholder="Enter your Customer ID" className="ibs-input" />
          </label>

          <label className="block">
            <span className="ibs-label">Password</span>
            <div className="relative">
              <input type={showPwd ? 'text' : 'password'} placeholder="Enter your password" className="ibs-input pr-10" />
              <button type="button" onClick={() => setShowPwd(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-cyan" aria-label={showPwd ? 'Hide password' : 'Show password'}>
                {showPwd ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </label>

          <label className="block">
            <span className="ibs-label">Captcha</span>
            <div className="flex gap-3">
              <div className="flex flex-1 items-center justify-center rounded-lg border border-input bg-surface-2 tabular text-lg font-bold tracking-[0.35em] text-cyan line-through decoration-cyan/30 select-none">
                {captcha}
              </div>
              <button type="button" onClick={refreshCaptcha} className="flex size-11 items-center justify-center rounded-lg border border-input text-muted-foreground hover:border-cyan/50 hover:text-cyan" aria-label="Refresh captcha">
                <RefreshCw className="size-4" />
              </button>
            </div>
            <input type="text" placeholder="Enter captcha above" className="ibs-input mt-3" />
          </label>

          <Link to="/dashboard" className={cn(neonButtonVariants({
          variant: 'primary',
          size: 'lg'
        }), 'w-full')}>
            Login
          </Link>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm">
          <Link to="/forgot-password" className="text-muted-foreground hover:text-cyan">
            Forgot Login ID / Password
          </Link>
          <Link to="/register" className="font-medium text-cyan hover:underline">
            Register Here
          </Link>
        </div>
      </GlassCard>
    </AuthShell>;
}
