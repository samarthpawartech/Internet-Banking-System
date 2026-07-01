import React from "react";
import "./CorporateBanking.css";

import CorporateHero from "./CorporateHero/CorporateHero";
import ProductSection from "./ProductSection/ProductSection";

const CorporateBanking = () => {
  return (
    <div className="corporateBanking">
      <CorporateHero />
      <ProductSection />
    </div>
  );
};

export default CorporateBanking;
