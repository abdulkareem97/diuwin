
// Import images
import Banner1 from '../images/newimage/Banner_1.png';
import Banner2 from '../images/newimage/Banner_2.png';
import Banner3 from '../images/newimage/Banner_3.png';
import Banner4 from '../images/newimage/Banner_4.jpg';
import Banner5 from '../images/newimage/Banner_5.jpg';
import Banner6 from '../images/newimage/Banner_6.jpg';
import Banner7 from '../images/newimage/Banner_7.jpg';
import Banner8 from '../images/newimage/Banner_8.jpg';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
// import './styles.css'; // Include your custom styles

const MySwiperComponent = ({ isShowButton = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  // Mock API call - replace with actual API implementation
  const getBannerApi = async () => {
    // Simulated API response
    return [
      { bannerUrl:Banner1, url: '#' },
      { bannerUrl: Banner2, url: '#' },
      { bannerUrl: Banner3, url: '#' },
      { bannerUrl: Banner4, url: '#' },
      { bannerUrl: Banner5, url: '#' },
      { bannerUrl: Banner6, url: '#' },
      { bannerUrl:Banner7, url: '#' },
      { bannerUrl: Banner8, url: '#' },
    ];
  };

  useEffect(() => {
    const fetchBanners = async () => {
      const data = await getBannerApi();
      setBanners(data);
    };
    fetchBanners();
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleImageClick = (url) => {
    if (url) window.location.href = url;
  };

  return (
    <div data-v-3ad7aed7="" className="swiper_box" style={{ marginTop: '10px' }}>
    <Swiper
      data-v-3ad7aed7=""
      className="swiper my-swipe swiper-backface-hidden"
      slidesPerView={1}
      spaceBetween={20}
      onSlideChange={handleSlideChange}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Autoplay]}
      loop={true}
    >
      {banners.map((banner, index) => (
        <SwiperSlide
          data-v-3ad7aed7=""
          key={index}
          className={`swiper-slide ${activeIndex === index ? 'swiper-slide-next' : ''}`}
        >
          <img
            data-v-3ad7aed7=""
            src={banner.bannerUrl}
            alt={`Banner ${index + 1}`}
            onClick={() => handleImageClick(banner.url)}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {isShowButton && (
      <div data-v-3ad7aed7="" className="swiper-button">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`${activeIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
    )}
  </div>
  );
};

export default MySwiperComponent;