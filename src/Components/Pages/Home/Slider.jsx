import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/slider1 (1).jpg';
import img2 from '../../../assets/slider2.jpg';
import img3 from '../../../assets/slider3 (1).jpg';
import img4 from '../../../assets/slider4.jpg';
import img5 from '../../../assets/slider5.jpg';
import img6 from '../../../assets/slider6.jpg';
import img7 from '../../../assets/slider7.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
const Slider = () => {
    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                speed={800} 
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,

                }}
                effect={'fade'}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img7} />
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} />
                </SwiperSlide> */}
            </Swiper>


        </div>
    );
};

export default Slider;