import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/slider1 (1).jpg';
import img2 from "../../../assets/1.png";
import img3 from '../../../assets/2.png';
import img4 from '../../../assets/3.png';
import img5 from '../../../assets/4.png';
import img6 from '../../../assets/5.png';

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
                    <div className='relative h-full w-full '>
                        <img src={img1} />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>Clean and <span className='text-teal-400'>Healthy</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src={img2} />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>Give Your Home  <span className='text-teal-400'>a Fresh Start</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src={img3} />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>The Pristine <span className='text-teal-400'>Professionals</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src={img4} />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>Clean Home,  <span className='text-teal-400'>Happy Life</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>
                   
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src={img5} />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>Making Your  <span className='text-teal-400'>Space Sparkle</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>
                    
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full '>
                        <img src={img6} />
                        <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                            <div className='space-y-7 pt-9 md:pt-[15%] px-6 md:px-16  lg:w-1/2 text-left'>
                                <h2 className='text-2xl md:text-6xl  font-bold text-white '>Get the Job  <span className='text-teal-400'>Done Right</span></h2>
                                <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                                    <button className='btn  btn-outline md: text-white my-2 hover:bg-[#cdfcf3] hover:text-teal-700 font-bold'>Discover More</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
               
               

            </Swiper>


        </div>
    );
};

export default Slider;