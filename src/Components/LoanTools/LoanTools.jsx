import React from "react";
import "./LoanTools.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import homeLoan from "../../assets/LoanTools/home-loan-emi.png";
import personalLoan from "../../assets/LoanTools/personal-loan-emi.png";
import carLoan from "../../assets/LoanTools/car-loan-emi.png";
import creditCardLoan from "../../assets/LoanTools/credit card emi.png";

const data = [
  {
    title: "Home Loan EMI Calculator",
    image: homeLoan,
  },
  {
    title: "Personal Loan EMI Calculator",
    image: personalLoan,
  },
  {
    title: "Car Loan EMI Calculator",
    image: carLoan,
  },
  {
    title: "Credit Card EMI Calculator",
    image: creditCardLoan,
  },
];

export default function LoanTools() {
  return (
    <section className="loan-section">
      <h2>
        Tools to help you plan better,
        <br />
        decide better
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="loan-card">
              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>

              <button className="loan-btn">Calculate Now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
