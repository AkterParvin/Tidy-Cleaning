/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { BiSolidLocationPlus } from "react-icons/bi";
import BookService from "../Booking/BookService";
import UseAxios from "../../Hooks/useAxios";
import SmallCard from "./smallCard";



const ServiceDetails = () => {
    const url = 'https://tidy-cleaning-server.vercel.app/services';
    const allService = UseAxios(url);
    console.log(allService);

    const serviceDetail = useLoaderData()
    // console.log(serviceDetail);
    const { service_img, service_name, title, description, provider_name, provider_img, price, area, time, service_overview, thumbnail,
        provider_email, } = serviceDetail;


    //     background - image: linear - gradient(
    //         180deg,
    //         hsl(164deg 7 % 29 %) 0 %,
    //         hsl(162deg 5 % 41 %) 14 %,
    //         hsl(160deg 4 % 53 %) 27 %,
    //         hsl(158deg 5 % 65 %) 39 %,
    //         hsl(156deg 7 % 78 %) 50 %,
    //         hsl(154deg 17 % 92 %) 59 %,
    //         hsl(159deg 37 % 91 %) 68 %,
    //         hsl(163deg 54 % 90 %) 76 %,
    //         hsl(167deg 67 % 88 %) 83 %,
    //         hsl(170deg 78 % 87 %) 91 %,
    //         hsl(174deg 87 % 85 %) 100 %
    // );



    return (
        <div className="bg-gradient-to-t from-stone-200 via-gray-300 to-emerald-50 ">

            <div className="grid grid-cols-1 md:grid-cols-4 my-10 min-h-screen 
            ">
                <div className="col-span-3 ">

                    <div className="flex flex-col w-[98%] mx-auto my-6 p-6 
             space-y-5 overflow-hidden rounded-lg shadow-xl border dark:bg-gray-900 dark:text-gray-100 bg-white">
                        <div className='flex flex-col justify-center items-start '>
                            <h2 className="text-xl pl-2 font-bold text-gray-700">Service Provider Info:</h2>
                            <div className="flex items-center space-x-4">

                                <img alt="" src={provider_img} className="object-cover w-16 h-16 rounded-full shadow dark:bg-gray-500" />
                                <div className="flex flex-col space-y-1">
                                    <a rel="noopener noreferrer" href="#" className="text-sm text-gray-700 font-semibold">Provider Name :
                                        <span className="text-xs dark:text-gray-400 pl-2 text-sky-700">{provider_name}</span>
                                    </a>
                                    <a rel="noopener noreferrer" href="#" className="text-sm text-gray-700 font-semibold">Provider Email :
                                        <span className="text-xs dark:text-gray-400 pl-2 text-sky-700">{
                                            provider_email}</span>
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <img src={service_img} alt="" className=" object-cover object-center mx-auto w-full rounded shadow-md mb-8 h-36 sm:h-96 dark:bg-gray-500" />

                            <h2 className="mb-1 text-xl text-gray-800 font-semibold">{title}</h2>
                            <h1 className="mb-1 text-base text-gray-800 font-semibold">Service Name: <span className="mb-1 text-base text-emerald-800 font-semibold">{service_name} </span></h1>
                            <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">{description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div >
                                <div>
                                    <button className="btn"
                                        onClick={() => document.getElementById('my_modal_5').showModal()}>Book Service</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg text-center text-teal-700 mb-2">Book Now!</h3>
                                            <BookService
                                                serviceDetail={serviceDetail}
                                            ></BookService>
                                            <div className="modal-action">
                                                <form method="dialog">

                                                    <button className="btn btn-xs btn-success">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>

                            </div>
                            <div className="flex space-x-8 text-sm items-center p-1  dark:text-gray-400">

                                <div className="flex items-center">
                                    <p className='text-2xl text-gray-800'><BiSolidLocationPlus /></p>
                                    <span className='text-sky-700 ml-1 font-semibold'>{area}</span>
                                </div>
                                <div className="flex gap-1">
                                    <p className='font-bold text-gray-800'>Price:</p>
                                    <span className='text-sky-700 font-semibold'>{price}</span>
                                </div>


                            </div>
                            {/* <div className="flex space-x-2 text-sm items-center p-1  dark:text-gray-400">

                                <p className='font-bold text-gray-800'>Price:</p>
                                <span className='text-sky-700 font-semibold'>{price}</span>

                            </div> */}
                        </div>
                    </div>


                </div>


                <div className=" col-span-1">
                    <div className="flex flex-col max-w-xl p-8 shadow-xl rounded-xl lg:p-10 my-6  mx-2 bg-teal-100 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-lg md:text-2xl font-semibold text-center">Your opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center">How was your experience?</span>
                                <div className="flex flex-wrap space-x-1">
                                    <button type="button" className="text-2xl text-sky-800">
                                        <AiTwotoneStar />
                                    </button>
                                    <button type="button" className="text-2xl text-sky-800">
                                        <AiTwotoneStar />
                                    </button>
                                    <button type="button" className="text-2xl text-sky-800">
                                        <AiTwotoneStar />
                                    </button>
                                    <button type="button" className="text-2xl text-sky-800">
                                        <AiTwotoneStar />
                                    </button>
                                    <button type="button" className="text-2xl text-sky-800">
                                        <AiTwotoneStar />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                <button className=" my-4 w-[90%] mx-auto rounded-lg py-1 font-semibold hover:text-white hover:bg-[#0c4c40] transition-colors  duration-500 bg-[#03c3a0] dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400 hover:text-blue-800">Maybe later</a>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-xl p-1 rounded-xl lg:p-6 bg-sky-100 mg:mx-4 my-6 shadow-xl mx-2 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex flex-col flex-wrap justify-center items-center w-[full]">
                            <h2 className="text-lg md:text-xl font-semibold text-sky-600 text-center">Customer reviews</h2>
                            <div className="flex flex-wrap items-center justify-center  mt-2 mb-1 space-x-2">
                                <div className="flex">
                                    <button type="button" title="Rate 1 stars" className="text-teal-700" aria-label="Rate 1 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars" className="text-teal-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars" className="text-teal-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars" className="text-teal-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars" className="text-teal-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <span className="dark:text-gray-400">3 out of 5</span>
                            </div>
                            <p className="text-sm dark:text-gray-400">861 global ratings</p>
                            <div className="flex flex-col mt-4">
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
                                        <div className="dark:bg-orange-300 h-4 w-5/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
                                        <div className="dark:bg-orange-300 h-4 w-4/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
                                        <div className="dark:bg-orange-300 h-4 w-3/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
                                        <div className="dark:bg-orange-300 h-4 w-2/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
                                        <div className="dark:bg-orange-300 h-4 w-1/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="dark:bg-gray-800 max-w-6xl mx-auto dark:text-gray-100">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">

                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={thumbnail} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:h-96" />
                        </div>
                    </div>
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                        <h1 className="text-3xl font-extrabold text-teal-600 font-serif">Service Overview </h1>
                        <div className="flex space-x-2 sm:space-x-4">

                            <div className="space-y-2">
                                <p className="text-lg font-medium leadi">{service_overview.slice(0, 98)}</p>

                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00796B" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-base font-medium leadi">{service_overview.slice(99, 183)}</p>

                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00796B" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-base font-medium leadi">{service_overview.slice(183, 278)}</p>

                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00796B" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-base font-medium leadi">{service_overview.slice(279, 375)}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="my-10 bg-teal-50 py-6">
                <h2 className="text-2xl my-7 text-center font-semibold text-teal-700">All Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl m-4">

                    {allService.map(item =>
                        <SmallCard
                            key={item._id}
                            item={item}

                        >

                        </SmallCard>)}
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;