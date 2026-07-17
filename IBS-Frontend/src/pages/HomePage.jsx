import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/home/hero';
import { QuickActions } from '@/components/home/quick-actions';
import { Products } from '@/components/home/products';
import { SecurityBand } from '@/components/home/security-band';
import { Support } from '@/components/home/support';
export default function HomePage() {
  return <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <QuickActions />
        <Products />
        <SecurityBand />
        <Support />
      </main>
      <SiteFooter />
    </div>;
}
