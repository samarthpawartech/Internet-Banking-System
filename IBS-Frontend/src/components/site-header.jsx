
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/logo';
import { neonButtonVariants } from '@/components/neon-button';
import { cn } from '@/lib/utils';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
const navLinks = ['Personal Banking', 'Business Banking', 'Loans', 'Cards', 'Investments', 'NRI Banking', 'About Us', 'Support'];
const loginOptions = [{
  label: 'Net Banking',
  href: '/login'
}, {
  label: 'Corporate Banking',
  href: '/login'
}, {
  label: 'Credit Card Login',
  href: '/login'
}];
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={cn('sticky top-0 z-50 w-full transition-colors', scrolled ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'border-b border-transparent bg-transparent')}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map(link => <Link key={link} to="#" className="group relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link}
              <span className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-cyan transition-transform duration-200 group-hover:scale-x-100 group-hover:shadow-[0_0_8px_var(--neon-cyan)]" />
            </Link>)}
        </nav>

        <div className="flex items-center gap-2">
          <button className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface hover:text-cyan" aria-label="Search">
            <Search className="size-4" />
          </button>

          <div className="relative hidden md:block" onMouseEnter={() => setLoginOpen(true)} onMouseLeave={() => setLoginOpen(false)}>
            <button className="flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-cyan/50">
              Login
              <ChevronDown className="size-4" />
            </button>
            {loginOpen && <div className="absolute right-0 top-full w-52 pt-2">
                <div className="glass overflow-hidden rounded-xl p-1.5">
                  {loginOptions.map(opt => <Link key={opt.label} to={opt.href} className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-cyan">
                      {opt.label}
                    </Link>)}
                </div>
              </div>}
          </div>

          <Link to="/register" className={cn(neonButtonVariants({
          variant: 'primary',
          size: 'sm'
        }), 'hidden sm:inline-flex')}>
            Open an Account
          </Link>

          <button className="flex size-9 items-center justify-center rounded-lg text-muted-foreground xl:hidden" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && <div className="border-t border-border bg-background/95 backdrop-blur-xl xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map(link => <Link key={link} to="#" className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-surface hover:text-cyan">
                {link}
              </Link>)}
            <div className="mt-2 flex gap-2">
              <Link to="/login" className={cn(neonButtonVariants({
            variant: 'outline',
            size: 'sm'
          }), 'flex-1')}>
                Login
              </Link>
              <Link to="/register" className={cn(neonButtonVariants({
            variant: 'primary',
            size: 'sm'
          }), 'flex-1')}>
                Open Account
              </Link>
            </div>
          </nav>
        </div>}
    </header>;
}
