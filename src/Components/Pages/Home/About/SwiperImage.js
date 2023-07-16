// images
import image1 from '../../../../Assets/1.jpg';
import image2 from '../../../../Assets/2.jpg';
import image3 from '../../../../Assets/3.jpg';
import image4 from '../../../../Assets/4.jpg';
import image5 from '../../../../Assets/5.jpg';

// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

const SwiperImage = () => {
    return (
        <>
            <Swiper className="mySwiper"
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                  delay: 2500
                }}
            >
                <SwiperSlide>
                    <img src={image1} alt='porfileImage' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt='porfileImage' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt='porfileImage' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt='porfileImage' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt='porfileImage' />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperImage;