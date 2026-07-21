import SectionHeading from '../ui/SectionHeading.jsx';
import ProductCard from '../ui/ProductCard.jsx';
import { productsGrid } from '../../data/homeData.js';
import styles from './Products.module.css';

export default function Products() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Products" title="Everything runs through one account" highlight="one account"
          description="Savings, cards, loans and business banking — built to work together instead of nine different apps." />
        <div className={styles.bento}>
          {productsGrid.map((p, i) => (
            <div key={p.title} className={p.size === 'lg' ? styles.spanLg : styles.spanMd}>
              <ProductCard {...p} delay={i * 0.06} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
