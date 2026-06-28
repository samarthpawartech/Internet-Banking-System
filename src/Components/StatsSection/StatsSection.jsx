import "./StatsSection.css";

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-box">
          <h1>1,583</h1>
          <p>Total Branches & BCBOs</p>
        </div>

        <div className="vertical-line"></div>

        <div className="stat-box">
          <h1>10+ Million</h1>
          <p>Happy Customers</p>
        </div>

        <div className="vertical-line"></div>

        <div className="stat-box">
          <h1>1,350+</h1>
          <p>ATMs</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
