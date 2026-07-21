import Hero from '../components/sections/Hero.jsx';
import Products from '../components/sections/Products.jsx';
import Features from '../components/sections/Features.jsx';
import Benefits from '../components/sections/Benefits.jsx';
import Statistics from '../components/sections/Statistics.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import News from '../components/sections/News.jsx';
import FAQ from '../components/sections/FAQ.jsx';
import CTA from '../components/sections/CTA.jsx';
import { homeFaq } from '../data/homeData.js';

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Features />
      <Benefits />
      <Statistics />
      <Testimonials />
      <News />
      <FAQ items={homeFaq} />
      <CTA />
    </>
  );
}
