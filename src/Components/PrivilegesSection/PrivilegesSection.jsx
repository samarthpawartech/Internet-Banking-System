import { useState } from "react";
import "./PrivilegesSection.css";

import rewardzImg from "../../assets/PrivilegesSection/yes-rewardz-new.png";
import offersImg from "../../assets/PrivilegesSection/yes-offer-new.png";

function PrivilegesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "IBS Rewardz",
      desc: "Embark upon a rewarding journey join the new IBS Rewardz.",
      img: rewardzImg,
      alt: "IBS Rewardz",
    },
    {
      title: "IBS Offers",
      desc: "Experience personalized offers curated exclusively for you",
      img: offersImg,
      alt: "IBS Offers",
    },
  ];

  return (
    <section className="privileges-section">
      <div className="privileges-wrapper">
        <h2 className="privileges-title">
          Privileges that make banking a pleasure
        </h2>

        <div className="privileges-cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`privilege-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <img src={card.img} alt={card.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrivilegesSection;
