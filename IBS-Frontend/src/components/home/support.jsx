
import { useState } from 'react';
import { ChevronDown, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils';
const faqs = [{
  q: 'How do I register for IBS Net Banking?',
  a: 'Click "Register Here" on the login screen and complete the multi-step wizard using your debit card, credit card, loan account, or Aadhaar. Verify with an OTP, then set your Login ID and password.'
}, {
  q: 'Is my money and data safe with IBS?',
  a: 'Yes. We use 256-bit encryption, mandatory 2FA/OTP on transactions, and are fully RBI-regulated. We never store your password in plain text.'
}, {
  q: 'What should I do if I lose my card?',
  a: 'Instantly block your card from the dashboard under Cards, or use the "Block Card" quick action. You can request a replacement in the same flow.'
}, {
  q: 'How long do NEFT / RTGS / IMPS transfers take?',
  a: 'IMPS is instant 24x7, NEFT settles in half-hourly batches, and RTGS is real-time for high-value transfers during banking hours.'
}];
export function Support() {
  const [open, setOpen] = useState(0);
  return <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="text-sm font-medium uppercase tracking-wider text-violet">
            Support
          </div>
          <h2 className="mt-2 text-3xl font-bold text-balance md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => <div key={faq.q} className="overflow-hidden rounded-xl border border-border bg-surface">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={open === i}>
                  <span className="text-sm font-medium text-foreground">{faq.q}</span>
                  <ChevronDown className={cn('size-5 shrink-0 text-cyan transition-transform', open === i && 'rotate-180')} />
                </button>
                <div className={cn('grid transition-all duration-300', open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Branch / ATM locator (dark styled) */}
        <div>
          <div className="text-sm font-medium uppercase tracking-wider text-violet">
            Nearby
          </div>
          <h2 className="mt-2 text-3xl font-bold text-balance md:text-4xl">
            Branch & ATM locator
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <div className="relative h-80 neon-grid bg-surface-2">
              <div className="absolute inset-0 hero-mesh opacity-70" />
              {[{
              top: '30%',
              left: '25%'
            }, {
              top: '55%',
              left: '60%'
            }, {
              top: '42%',
              left: '78%'
            }, {
              top: '68%',
              left: '35%'
            }].map((pos, i) => <span key={i} className="absolute -translate-x-1/2 -translate-y-full" style={{
              top: pos.top,
              left: pos.left
            }}>
                  <MapPin className="size-7 text-cyan drop-shadow-[0_0_8px_var(--neon-cyan)]" />
                </span>)}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg glass px-3 py-2 text-xs text-muted-foreground">
                <Navigation className="size-4 text-cyan" />
                24 branches &middot; 180+ ATMs near you
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chat bubble */}
      <button className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-cyan text-primary-foreground glow-cyan animate-pulse-glow" aria-label="Open live chat">
        <MessageCircle className="size-6" />
      </button>
    </section>;
}
