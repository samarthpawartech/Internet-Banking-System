import { useState } from "react";
import "./ProductSection.css";
import { products } from "./productData";
import ProductExplorer from "./ProductExplorer";

export default function ProductSection() {
  const [showExplorer, setShowExplorer] = useState(false);

  return (
    <section className="productSection">
      {!showExplorer && (
        <>
          <span className="sectionTag">Our Products</span>

          <h2>Get the most out of our products</h2>

          <p className="sectionDesc">
            Our corporate & business banking products across payable &
            receivable management, lending, corporate cards and digital banking
            simplify your banking experience.
          </p>

          <div className="productGrid">
            {products.map((item) => (
              <div className="productCard" key={item.id}>
                <div className="cardTop" style={{ background: item.color }}>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className="cardImage">
                  <img src={item.image} alt={item.title} />

                  <button>Know More</button>
                </div>
              </div>
            ))}
          </div>

          <div className="productBottom">
            <div className="bottomLeft">
              <p>Discover which products suit your everyday needs</p>

              <select>
                <option>Lending</option>
                <option>Payments</option>
                <option>Trade Finance</option>
                <option>Corporate Cards</option>
              </select>
            </div>

            <button className="viewBtn" onClick={() => setShowExplorer(true)}>
              View Products
            </button>
          </div>
        </>
      )}

      {showExplorer && (
        <ProductExplorer onBack={() => setShowExplorer(false)} />
      )}
    </section>
  );
}
