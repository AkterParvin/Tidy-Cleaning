import { useEffect, useState } from "react";
import UseAxios from "../../Hooks/useAxios";
import ServiceBanner from "./ServiceBanner";
import ServiceCard from "./ServiceCard";
import Nav from "../Home/Nav";


const AllServices = () => {
    const url = 'https://tidy-cleaning-server.vercel.app/services';
    const allService = UseAxios(url);

    const [searchQuery, setSearchQuery] = useState('');
    const [showService, setShowService] = useState(allService);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setSearchQuery(form.searchQuery.value);
    };

    const filteredServices = allService.filter(service => {
        return service.service_name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    useEffect(() => {
        if (searchQuery) {
            setShowService(filteredServices);
        } else {
            setShowService(allService);
        }
    }, [searchQuery, allService, filteredServices]);
    return (
        <div>
            {/* <div>
                <Nav/>
            </div>
            <div >
                <ServiceBanner></ServiceBanner>
            </div> */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb- md:mx-auto sm:text-center lg:max-w-2xl md:mb-8">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black bg-white hover:bg-blue-400 transform border border-teal-800 duration-500 hover:text-white uppercase rounded-full bg-teal-accent-400">
                            Dream Team
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-700 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative text-sky-600">Hire trusted MADE </span>
                        </span>{' '}<br />
                        ready to clean and to make your house shine like new.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
            </div>
            <div className="mb-16 flex justify-center w-[70%] md:w-1/3 mx-auto ">

                <form onSubmit={handleSubmit} className="flex justify-center gap-2 w-full">
                    <input
                        className="w-full rounded-md "
                        type="text"
                        value={searchQuery}
                        name="searchQuery"
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Serch service..."
                    />
                    {/* <button type="submit" className="rounded-md py-2 px-5 font-bold hover:bg-sky-700 hover bg-sky-200 ">Search</button> */}

                    <a href="#_" className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono  tracking-tighter text-white bg-gray-800 rounded-lg group hover:text-gray-700 font-bold">

                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-teal-300 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative">Search</span>
                    </a>
                </form>
            </div>
            <div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl  mx-auto my-10 px-2">
                    {/* {
                        filteredServices.length>0 ? setSearchQuery(filteredServices):setSearchQuery(allService)
                    } */}

                    {showService.map(item => <ServiceCard
                        key={item._id} item={item}></ServiceCard>)}
                </div>
            </div>
        </div>
    );
};

export default AllServices;