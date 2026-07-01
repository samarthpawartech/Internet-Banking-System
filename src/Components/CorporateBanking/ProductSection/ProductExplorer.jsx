import { useState } from "react";
import "./ProductExplorer.css";
import { explorerData } from "./explorerData";

export default function ProductExplorer({ onBack }) {
  const [category, setCategory] = useState("Lending");

  return (
    <div className="explorer">
      <div className="explorerTop">
        <div className="left">
          <p>Discover which products suit your everyday needs</p>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Lending">Lending</option>
            <option value="Payments">Payments</option>
            <option value="Trade Finance">Trade Finance</option>
          </select>
        </div>

        <button onClick={onBack}>Back</button>
      </div>

      <h2>{category}</h2>

      <div className="explorerCards">
        {explorerData[category].map((item) => (
          <div className="explorerCard" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>Know More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
