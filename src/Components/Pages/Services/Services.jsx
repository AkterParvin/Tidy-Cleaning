/* eslint-disable no-unused-vars */
import { useState } from "react";
import UseAxios from "../../Hooks/useAxios";
import ServiceCard from "./ServiceCard";
import { Link, useLocation } from "react-router-dom";
// import ServiceBanner from "./ServiceBanner";



const Services = () => {
    const url = 'https://tidy-cleaning-server.vercel.app/services';
    const service = UseAxios(url);
    console.log(service);
    const location = useLocation();
    const [showAll, setShowAll] = useState(false);

    const displayedService = location.pathname === '/allservices' || showAll ? service : service.slice(0, 6);
    return (
        <div className="flex flex-col justify-center items-center">


            <div className="grid md:grid-cols-2 gap-8 max-w-4xl  mx-auto my-10 px-2">

                {displayedService.map(item => <ServiceCard
                    key={item._id} item={item}></ServiceCard>)}
            </div>

            {location.pathname === '/' && !showAll ? (
                <div className="flex justify-center my-8"><Link to='/allservices'>
                    <a href="#_" className="relative px-6 py-3 font-bold text-teal-900  rounded-xl group shadow-xl">
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-800 ease opacity-80 group-hover:translate-x-0 rounded-xl shadow-xl group-hover:translate-y-0"></span>
                        <span className="absolute  inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-emerald-400 ease opacity-80 group-hover:translate-x-0
                shadow-xl group-hover:translate-y-0 mix-blend-screen"></span>
                        <span className="relative">All Services</span>
                    </a>


                </Link>
                </div>) :
                (<div className="flex justify-center my-8"><Link to="/">
                    <button className="px-6 duration-300 py-2 bg-[#8dd9ca] text-gray-700 font-bold rounded-lg shadow-lg border border-sky-900 hover:text-white hover:bg-[#33b097]">Go Home</button>

                </Link></div>)

            }

            {/* <button className="px-6 duration-300 py-2 bg-[#8dd9ca] text-gray-700 font-bold rounded-lg shadow-lg border border-sky-900 hover:text-white hover:bg-[#33b097]">All Services</button> */}
        </div>

    );
};

export default Services;