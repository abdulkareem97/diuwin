import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Import your images directly
import TBChess1 from '../images/gamelogo/TB_Chess/800.png';
import TBChess2 from '../images/gamelogo/TB_Chess/811.png';
import TBChess3 from '../images/gamelogo/TB_Chess/812.png';
import JILI1 from '../images/gamelogo/JILI/111.png';
import JILI2 from '../images/gamelogo/JILI/100.png';
import JILI3 from '../images/gamelogo/TB_Chess/110.png';
import JILI4 from '../images/gamelogo/JILI/102.png';

const SuperJackpotSection = () => {
    const handleImageClick = (url) => {
        window.location.href = url;
    };

    return (
        <div data-v-94997d77="" data-v-0137aa14="" className="homeNav" id="bigaward">
            <div data-v-94997d77="" className="title">
                <div data-v-94997d77=""><b data-v-94997d77=""></b>Super Jackpot</div>
                <div data-v-94997d77="" className="right_btn">
                    <svg data-v-94997d77="" className="svg-icon icon-p3a_l_superlottery">
                        <use xlinkHref="#icon-p3a_l"></use>
                    </svg>
                    <svg data-v-94997d77="" className="svg-icon icon-p3a_r_superlottery">
                        <use xlinkHref="#icon-p3a_r"></use>
                    </svg>
                </div>
            </div>
            <div data-v-94997d77="" className="tip">When you win a super jackpot, you will receive additional rewards</div>
            <div data-v-94997d77="" className="tip">Maximum bonus <span data-v-94997d77="">₹300.00</span></div>
            
            <div data-v-3ad7aed7="" className="swiper_box">
                <Swiper
                    data-v-3ad7aed7=""
                    className="swiper my-swipe-superlottery"
                    slidesPerView={1} // Adjust this based on the number of slides you want to show at once
                    spaceBetween={30} // Adjust space between slides
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay, Navigation]}
                    loop={true}
                    navigation={{
                        nextEl: '.icon-p3a_r_superlottery', // Link to the right button
                        prevEl: '.icon-p3a_l_superlottery', // Link to the left button
                    }}
                >
                    {/* First SwiperSlide containing multiple images */}
                    <SwiperSlide className="swiper-slide" data-v-3ad7aed7="">
                        <div data-v-94997d77="" className="multiple">21.92X</div>
                        <img
                            data-v-5d47e2fb=""
                            alt="TB Chess 1"
                            src={TBChess1}
                            onClick={() => handleImageClick('/DUIWIN/ossimg.94lottery/6club/gamelogo/TB_Chess/800.png')}
                        />
                        <img
                            data-v-5d47e2fb=""
                            alt="TB Chess 2"
                            src={TBChess2}
                            onClick={() => handleImageClick('/DUIWIN/ossimg.94lottery/6club/gamelogo/TB_Chess/811.png')}
                        />
                        <img
                            data-v-5d47e2fb=""
                            alt="TB Chess 3"
                            src={TBChess3}
                            onClick={() => handleImageClick('/DUIWIN/ossimg.94lottery/6club/gamelogo/TB_Chess/812.png')}
                        />
                    </SwiperSlide>

                    {/* Second SwiperSlide containing multiple images */}
                    <SwiperSlide className="swiper-slide" data-v-3ad7aed7="">
                        <div data-v-94997d77="" className="multiple">50.92X</div>
                        <img
                            data-v-5d47e2fb=""
                            alt="JILI 1"
                            src={JILI1}
                            onClick={() => handleImageClick('/DUIWIN/ossimg.94lottery/6club/gamelogo/JILI/111.png')}
                        />
                        <img
                            data-v-5d47e2fb=""
                            alt="JILI 2"
                            src={JILI2}
                            onClick={() => handleImageClick('/DUIWIN/ossimg.94lottery/6club/gamelogo/JILI/100.png')}
                        />
                        <img
                            data-v-5d47e2fb=""
                            alt="JILI 3"
                            src={JILI3}
                            onClick={() => handleImageClick('/DUIWIN/ossimg.94lottery/6club/gamelogo/TB_Chess/110.png')}
                        />
                    </SwiperSlide>

                    {/* Third SwiperSlide containing one image */}
                    <SwiperSlide className="swiper-slide" data-v-3ad7aed7="">
                        <div data-v-94997d77="" className="multiple">30.92X</div>
                        <img
                            data-v-5d47e2fb=""
                            alt="JILI 4"
                            src={JILI4}
                            onClick={() => handleImageClick('/DUIWIN/ossimg.94lottery/6club/gamelogo/JILI/102.png')}
                        />
                    </SwiperSlide>

                    {/* Add more slides as needed */}
                </Swiper>
            </div>
        </div>
    );
};

export default SuperJackpotSection;
