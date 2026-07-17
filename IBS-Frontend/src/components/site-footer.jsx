import { Link } from 'react-router-dom';
import { Logo } from '@/components/logo';
import { Globe, Send, AtSign, MessageCircle, Rss } from 'lucide-react';
const footerColumns = [{
  title: 'About',
  links: ['Our Story', 'Leadership', 'Careers', 'Newsroom', 'CSR']
}, {
  title: 'Personal Banking',
  links: ['Savings Account', 'Fixed Deposits', 'Debit Cards', 'Home Loans', 'Insurance']
}, {
  title: 'Business Banking',
  links: ['Current Account', 'Trade Finance', 'Corporate Cards', 'Payroll', 'API Banking']
}, {
  title: 'Investor Relations',
  links: ['Annual Reports', 'Financials', 'Shareholding', 'Announcements']
}, {
  title: 'Quick Links',
  links: ['Locate a Branch', 'ATM Network', 'Interest Rates', 'Forms & Downloads', 'Support']
}];
const socials = [Globe, Send, AtSign, MessageCircle, Rss];
export function SiteFooter() {
  return <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Secure, high-tech digital banking built for the future. Bank
              anytime, anywhere.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((Icon, i) => <a key={i} href="#" className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-cyan/50 hover:text-cyan" aria-label="social link">
                  <Icon className="size-4" />
                </a>)}
            </div>
          </div>

          {footerColumns.map(col => <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(link => <li key={link}>
                    <Link to="#" className="text-sm text-muted-foreground transition-colors hover:text-cyan">
                      {link}
                    </Link>
                  </li>)}
              </ul>
            </div>)}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-foreground">
            &copy; 2026 IBS — Internet Banking System |{' '}
            <span className="text-cyan">Developed by Samarth Pawar</span>
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            IBS is a demonstration banking platform. Not a real financial
            institution. Deposits are illustrative only. Banking services shown
            are for design and prototype purposes and are subject to regulatory
            approval in a production environment.
          </p>
        </div>
      </div>
    </footer>;
}
