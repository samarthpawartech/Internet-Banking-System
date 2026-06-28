import React, { useEffect, useState } from "react";
import "./BankingHero.css";
import heroData from "./heroData";

import qr from "../../assets/BankingHero/qr.png";

const BankingHero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bankingHero">
      {/* LEFT */}

      <div className="left">
        <p className="topTitle">IBS - Developed by Samarth Pawar</p>

        <h1>
          New-age app for
          <br />
          holistic and
          <br />
          seamless banking
        </h1>

        <ul>
          <li>Earn exciting rewards</li>
          <li>Avail loan in seconds</li>
          <li>Quick and secure fund transfer</li>
          <li>Instant bill payments</li>
          <li>100+ features and services</li>
        </ul>

        <div className="bottomArea">
          <div>
            <p>
              Scan the QR code to
              <br />
              download IBS app
            </p>

            <button className="knowBtn">Know More</button>
          </div>

          <img src={qr} alt="" />
        </div>
      </div>

      {/* CENTER */}

      <div className="center">
        {heroData.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt=""
            className={`phone ${active === index ? "activePhone" : ""}`}
          />
        ))}
      </div>

      {/* RIGHT */}

      <div className="right">
        {heroData.map((item, index) => (
          <div
            key={index}
            className={`step ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <div className="circle">{index + 1}</div>

            <div>
              <h3>{item.title}</h3>

              {active === index && (
                <>
                  <p>{item.description}</p>

                  <button className="redBtn">{item.button}</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BankingHero;
