import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
// import './styles.css'; // Include your custom styles

// Import your images directly
import WinGo from '../images/newimage/WinGo-modified.png';
import K3 from '../images/newimage/K3-modified.png';
import FiveD from '../images/newimage/5D-modified.png';
import Trx from '../images/newimage/Trx-modified.png';

const LotterySection = () => {
    const handleImageClick = (url) => {
        window.location.href = url;
    };

    return (
        <div data-v-a75fb528="" data-v-0137aa14="" className="homeNav" id="lottery">
            <div data-v-a75fb528="" className="title">
                <div data-v-a75fb528="">
                    <b data-v-a75fb528=""></b>Lottery{' '}
                    <div data-v-a75fb528="" className="allMore">More 3</div>
                </div>
                <div data-v-a75fb528="" className="right_btn">
                    <svg data-v-a75fb528="" className="svg-icon icon-p3a_l_lottery" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-b10e07bccbc033782">
                        <use xlinkHref="#icon-p3a_l"></use>
                    </svg>
                    <svg data-v-a75fb528="" className="svg-icon icon-p3a_r_lottery" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-b10e07bccbc033782">
                        <use xlinkHref="#icon-p3a_r"></use>
                    </svg>
                </div>
            </div>
            <div data-v-a75fb528="" className="tip">Fair and diverse lottery gameplay</div>
            <div data-v-3ad7aed7="" className="swiper_box">
                <Swiper
                    data-v-3ad7aed7=""
                    className="swiper my-swipe-lottery"
                    slidesPerView={1} // Adjust this based on the number of slides you want to show at once
                    spaceBetween={30} // Adjust space between slides
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay,Navigation]}
                    loop={true}
                    navigation={{
                        nextEl: '.right_btn', // Link to the right button
                        prevEl: '#leftBtn',  // Link to the left button
                      }}
                >
                    {/* Explicit swiper-wrapper */}
                    <div className="swiper-wrapper">
                        {/* First SwiperSlide containing multiple images */}
                        <SwiperSlide className="swiper-slide" data-v-3ad7aed7="">
                            <img
                                data-v-a75fb528=""
                                alt="WinGo"
                                src={WinGo}
                                onClick={() => handleImageClick('/wingo?game_type=1')}
                            />
                            <img
                                data-v-a75fb528=""
                                alt="/newimage/K3-modified.png"
                                src={K3}
                                onClick={() => handleImageClick('/k3?game_type=1')}
                            />
                            <img
                                data-v-a75fb528=""
                                alt="/newimage/5D-modified.png"
                                src={FiveD}
                                onClick={() => handleImageClick('/5d?game_type=1')}
                            />
                        </SwiperSlide>

                        {/* Second SwiperSlide containing one image */}
                        <SwiperSlide className="swiper-slide" data-v-3ad7aed7="">
                            <img
                                data-v-a75fb528=""
                                alt="Trx"
                                src={Trx}
                                onClick={() => handleImageClick('/trx_wingo?game_type=1')}
                            />
                        </SwiperSlide>

                        {/* Add more slides as needed */}
                    </div>
                </Swiper>
            </div>

        </div>
    );
};

export default LotterySection;
