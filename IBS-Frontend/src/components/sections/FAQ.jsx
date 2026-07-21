import SectionHeading from '../ui/SectionHeading.jsx';
import Accordion from '../ui/Accordion.jsx';

export default function FAQ({ eyebrow = 'FAQ', title = 'Questions, answered', highlight = 'answered', items }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} />
        <Accordion items={items} />
      </div>
    </section>
  );
}
