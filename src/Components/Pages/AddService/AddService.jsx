import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AddService = () => {
    // const { scrollYProgress } = useScroll();

    // const imageAnimation = {
    //     x: 100,
    //     scale: 1,
        
    // };
    const { newUser } = useContext(AuthContext);
    const userEmail = newUser?.email;
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const service_name = form.service_name.value;
        const service_img = form.service_img.value;
        const title = form.title.value;
        const description = form.description.value;
        const provider_name = form.provider_name.value;
        const provider_img = form.provider_img.value;
        const price = form.price.value;
        const area = form.area.value;
        const thumbnail = form.thumbnail.value;
        const service_overview = form.service_overview.value;
        const time = "48 hours";
        const provider_email = userEmail;

        const newService = {
            service_name, service_img, title, description, provider_name, provider_email, provider_img, time, price, area, service_overview, thumbnail
        }
        console.log(newService);
        axios.post('https://tidy-cleaning-server.vercel.app/services', newService, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Service Added Successfully!!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                form.reset();
            })
    }
    // service_img, service_name, title, description, provider_name, provider_img, price, area, time, service_overview, thumbnail, _id

    return (
        <div>
            {/* <h2 className="text-3xl text-center font-bold">Add Services</h2>  */}
            <div className="my-8 md:my-14">
                <section className="max-w-4xl p-8 md:px-32 mx-auto bg-[#F4F3F0] rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-4xl font-semibold text-gray-700 text-center capitalize dark:text-white mt-10 mb-8 ">Add New Service</h2>
                    <p className="text-lg text-gray-500 text-center mb-14">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    {/* service_img, service_name, title, description, provider_name, provider_img, price, area, time, service_overview, thumbnail,_id */}
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2">
                            {/* service_name */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm" >Service Name</label>
                                <input
                                    required
                                    type="text"
                                    name="service_name"
                                    placeholder="Service Name"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            {/* service_img */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm" >Service Image</label>
                                <input
                                    type="text"
                                    name="service_img"
                                    placeholder="Service Image Url"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    required
                                />
                            </div>

                            {/* title */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm" >Service Title </label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    placeholder="Write a Title"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            {/* {provider_name } */}
                            <div >
                                <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm" >Provider Name</label>

                                <input
                                    type="text"
                                    placeholder="Provider Name"
                                    name="provider_name"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            {/* provider_img */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm" >Provider Image</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Provider Image Url"
                                    name="provider_img"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            {/* price */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm" >Service Price</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Service Price"
                                    name="price"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>


                            {/* area */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm" >Service Area</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Service Area"
                                    name="area"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            {/* Defeault thumbnail */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 text-left font-semibold text-sm" >OverView Image</label>
                                <input
                                    readOnly
                                    type="text"
                                    defaultValue={'https://i.imgur.com/LrUgqc2.jpg'}
                                    placeholder="Photo URL"
                                    name="thumbnail"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>


                        </div>


                        <div className="flex flex-col justify-end mt-6 space-y-4">
                            <div className="flex flex-col">
                                <label className="text-gray-700 dark:text-gray-200 text-left font-semibold text-sm text" >OverView Text</label>
                                <textarea
                                    readOnly
                                    type="text"
                                    defaultValue={"Malesuada fames ac turpis egestas sed tempus urna. Nisl nisi scelerisque eu ultrices vitae auctor. The housekeepers we hired are professionals who take pride in doing excellent work. We carefully screen all of our cleaners, so you can rest assured that your home would receive. Your time is precious, and we understand that cleaning is really just one more item on your list."}
                                    name="service_overview"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-700 dark:text-gray-200 text-left font-semibold text-sm" >Service Description</label>
                                <textarea
                                    name="description"
                                    required cols="30" rows="3"
                                    placeholder="Service description "
                                ></textarea>
                            </div>


                            {/* <input type="submit" value="Add Service"
                                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#D2B48C] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            /> */}

                            <button type="submit" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold transition-all bg-emerald-500 rounded-xl group">
                                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-teal-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-emerald-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0">

                                </span>
                                <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">Add Service</span>
                            </button>

                        </div>
                    </form>
                </section>
            </div>
            <section className="p-4 my-6 md:my-14 rounded-xl shadow-xl bg-slate-200 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">Aliquip definiebas ad est</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Quando cetero his ne, eum admodum sapientem ut.</p>
                    </div>
                    <motion.div initial={{ scale: 0 }}
                        animate={{ x: 100, scale: 1 }} className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img
                           
                            src="https://i.imgur.com/vDe56Xc.jpg" alt=""
                            className="h-80 dark:bg-gray-500 aspect-video"
                           
                        />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Join, it is free</span>
                            <h3 className="text-3xl font-bold">Your One-Stop Shop for All Things Clean</h3>
                            <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </motion.div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://i.imgur.com/P0HDZpt.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Join, it is free</span>
                            <h3 className="text-3xl font-bold">We are the Cleaning Service That Puts Your Needs First</h3>
                            <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.imgur.com/pEpHpds.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <span className="text-xs uppercase dark:text-gray-400">Join, it is free</span>
                            <h3 className="text-3xl font-bold">Your Home Away From Home, Cleaned to Perfection</h3>
                            <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddService;