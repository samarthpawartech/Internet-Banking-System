import "./ProductsSection.css";
import productData from "./productData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function ProductsSection() {
  return (
    <section className="products-section">
      <p className="sub-heading">Our Products</p>

      <h2 className="main-heading">Get the most out of our products</h2>

      <p className="description">
        Here's your chance to enjoy lifestyle benefits, attractive cashbacks and
        much more.
      </p>

      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        spaceBetween={25}
        slidesPerView={4}
        className="products-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {productData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-card" style={{ backgroundColor: item.bg }}>
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <img
                src={item.image}
                alt={item.title}
                className="product-image"
              />

              <button className="know-more-btn">{item.buttonText}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bottom-banner">
        <div className="banner-text">
          Discover which products suit your everyday needs
        </div>

        <div className="banner-dropdown">
          <select>
            <option>I am looking for Loans</option>
            <option>Tax Savings</option>
            <option>Wealth Creation</option>
            <option>Forex Services</option>
            <option>Insurance</option>
            <option>Credit Cards</option>
          </select>
        </div>

        <button className="view-products-btn">View Products</button>
      </div>
    </section>
  );
}

export default ProductsSection;
