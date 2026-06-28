import "./BusinessBanner.css";

import businessman from "../../assets/BusinessBanner/bussinessman.png";

function BusinessBanner() {
  return (
    <section className="business-section">
      <div className="business-container">
        <div className="business-left">
          <img src={businessman} alt="Businessman" />
        </div>

        <div className="business-right">
          <span className="small-text">
            Overdraft , Cash Credit and Term Loans
          </span>

          <h2>Looking for Working Capital requirements?</h2>

          <p>
            Partnering businesses to accelerate growth with easy, hassle-free
            MSME Loans
          </p>

          <div className="business-buttons">
            <button className="apply-btn">Apply Now</button>

            <button className="know-btn">Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessBanner;
