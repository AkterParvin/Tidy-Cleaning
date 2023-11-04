import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.imgur.com/16vyba7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/vPTwnrC.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/40yv50l.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/VXlowuL.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/I123GtN.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/zBzHz81.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/fQNXorg.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/HxQFShY.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/1blmTqj.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/dJIyyoV.jpg" />
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Slider;