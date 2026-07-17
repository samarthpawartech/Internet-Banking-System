import { Logo } from '@/components/logo';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
export function AuthShell({
  children,
  wide = false
}) {
  return <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <div className="hero-mesh absolute inset-0" />
      <div className="neon-grid absolute inset-0 opacity-40" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <Logo />
        <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-cyan">
          Back to home
        </Link>
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center px-6 py-8">
        <div className={wide ? 'w-full max-w-2xl' : 'w-full max-w-md'}>
          {children}
          <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 text-neon-green" />
            Secured with 256-bit encryption. IBS never asks for your password.
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Developed by <span className="text-cyan">Samarth Pawar</span>
          </p>
        </div>
      </main>
    </div>;
}
