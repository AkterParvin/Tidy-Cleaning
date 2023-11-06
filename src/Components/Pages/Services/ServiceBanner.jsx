import { useRef } from 'react';

const ServiceBanner = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handleMouseLeave = () => {
        
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
    return (
        <div className="relative ">
            <div className=' flex flex-col justify-center items-center  '>
                <div
                    className="relative group overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <video
                        ref={videoRef}
                        src="/vid.mp4"
                        loop
                        muted
                        className="h-[60vh] w-screen object-cover transition-all duration-500 hover:scale-105 hover:opacity-75"
                    />
                </div>




                <div className="flex flex-col justify-center items-center absolute top-[45%] text-center">
                    <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-6xl mb-6 ">Best Cleaning Services</h1>
                    <p className="text-neutral-200 font-semibold text-xl">Shift an overview | Spark a change | Shape a outlook</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;