import "./HeroSlider.css";
import bannerData from "./bannerData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function HeroSlider() {
  return (
    <div className="hero-slider">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="slide-container"
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            >
              <div className="banner-overlay"></div>

              <div className="slide-content">
                <h1>{banner.title}</h1>
                <p>{banner.description}</p>

                <div className="banner-buttons">
                  <button className="primary-btn">{banner.button1}</button>

                  {banner.button2 && (
                    <button className="secondary-btn">{banner.button2}</button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
