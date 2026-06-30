import React, { useEffect, useState } from "react";
import "./CorporateHero.css";
import heroData from "./heroData";

const CorporateHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="corporateHero">
      {heroData.map((item, index) => (
        <div
          key={item.id}
          className={`heroSlide ${index === activeIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <div className="heroOverlay"></div>

          <div
            className={`heroContent ${
              activeIndex === 0 && index === activeIndex ? "whiteText" : ""
            }`}
          >
            <h1>{item.title}</h1>

            {item.subtitle && <p>{item.subtitle}</p>}

            <div className="heroButtons">
              {Array.isArray(item.buttonText) ? (
                <>
                  <a href={item.buttonLink[0]}>
                    <button className="primaryBtn">{item.buttonText[0]}</button>
                  </a>

                  <a href={item.buttonLink[1]}>
                    <button className="secondaryBtn">
                      {item.buttonText[1]}
                    </button>
                  </a>
                </>
              ) : (
                <a href={item.buttonLink}>
                  <button className="primaryBtn">{item.buttonText}</button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="heroDots">
        {heroData.map((item, index) => (
          <span
            key={item.id}
            className={`dot ${index === activeIndex ? "activeDot" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CorporateHero;
