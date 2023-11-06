import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/slider1 (1).jpg';
import img2 from "../../../assets/1.png";
import img3 from '../../../assets/2.png';
import img4 from '../../../assets/3.png';
import img5 from '../../../assets/4.png';
import img6 from '../../../assets/5.png';
import img7 from '../../../assets/6.png';
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
               
            </Swiper>


        </div>
    );
};

export default Slider;