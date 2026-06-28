import "./CyberBanner.css";
import cyberBanner from "../../assets/CyberBanner/cyber-banner.png";

function CyberBanner() {
  return (
    <section className="cyber-banner">
      <div className="cyber-banner-container">
        <img
          src={cyberBanner}
          alt="Cyber Crime Awareness Banner"
          className="cyber-banner-image"
        />
      </div>
    </section>
  );
}

export default CyberBanner;
