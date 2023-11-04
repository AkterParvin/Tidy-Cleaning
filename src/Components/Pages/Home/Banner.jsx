import Slider from "./Slider";


const Banner = () => {
    return (
        <div className="h-[60vh] bg-yellow-400 flex items-center justify-between gap-4 flex-col md:flex-row">
            <div className="bg-blue-300 w-full md:w-[70%] h-full">
                <Slider />
            </div>
            <div className="bg-red-400 w-full md:w-[30%] h-full ">

            </div>
        </div>
    );
};

export default Banner;