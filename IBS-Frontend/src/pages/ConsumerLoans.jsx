import MarketingPageTemplate from '../components/templates/MarketingPageTemplate.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import EMICalculator from '../components/ui/EMICalculator.jsx';
import { pagesData } from '../data/pagesData.js';

const extra = (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className="container">
      <SectionHeading eyebrow="Try it yourself" title="Calculate your EMI" highlight="Calculate your EMI" description="Drag the sliders to see your monthly instalment update live." />
      <EMICalculator />
    </div>
  </section>
);

export default function ConsumerLoans() {
  return <MarketingPageTemplate data={{ ...pagesData.consumerLoans, extra }} />;
}
