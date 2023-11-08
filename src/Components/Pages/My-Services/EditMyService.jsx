/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';


const EditMyService = () => {
    // service_name, service_img, title, description, provider_name, provider_email, provider_img, time, price, area, service_overview, thumbnail

    const serviceData = useLoaderData();
    const { service_name, service_img, title, description, provider_name, provider_email, provider_img, time, price, area, service_overview, thumbnail, _id } = serviceData;

    //  = item;
    // console.log(item);
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
        axios.put(`https://tidy-cleaning-server.vercel.app/services/${_id}`, newService)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Service Updated Successfully!!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                form.reset();
            })
    }
    return (
        <div>
            {/* <h2 className="text-3xl text-center font-bold">Add Services</h2>  */}
            <div className="my-8 md:my-14">
                <section className="max-w-4xl p-8 md:px-32 mx-auto bg-[#F4F3F0] rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-4xl font-semibold text-gray-700 text-center capitalize dark:text-white mt-10 mb-8 ">Update A Service</h2>
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
                                    defaultValue={service_name}
                                    placeholder="Service Name"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            {/* service_img */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm" >Service Image</label>
                                <input
                                    type="text"
                                    name="service_img"
                                    defaultValue={service_img}
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
                                    defaultValue={title}
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
                                    defaultValue={provider_name}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            {/* provider_img */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm" >Provider Image</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Provider Image Url"
                                    defaultValue={provider_img}
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
                                    defaultValue={price}
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
                                    defaultValue={area}
                                    name="area"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            {/* time  */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm" >Service Area</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="time"
                                    defaultValue={time}
                                    name="area"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            {/* Defeault thumbnail */}
                            <div>
                                <label className="text-gray-700 dark:text-gray-200 text-left font-semibold text-sm" >Thumbnail Image</label>
                                <input

                                    type="text"
                                    defaultValue={thumbnail}
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
                                    name='service_overview'
                                    defaultValue={service_overview}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-700 dark:text-gray-200 text-left font-semibold text-sm" >Service Description</label>
                                <textarea
                                    name="description"
                                    defaultValue={description}
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
                                <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">Update Service</span>
                            </button>

                        </div>
                    </form>
                </section>
            </div>
        </div>
        // <div className='max-w-4xl mx-auto bg-white px-'>
        //     <h3 className="font-bold text-lg text-center text-teal-700 mb-2">Edit Service</h3>

        //     <form onSubmit={handleSubmit}>
        //         {/* service_name */}
        //         <div className=" z-0 w-full mb-5 group">
        //             <input
        //                 type="text"
        //                 name="service_name"
        //                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                 defaultValue={service_name}
        //             />
        //             <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">service_name</label>
        //         </div>
        //         {/* service_img */}
        //         <div className=" z-0 w-full mb-5 group">
        //             <input
        //                 type="text"
        //                 name="service_img"

        //                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                 defaultValue={service_img}
        //             />
        //             <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Image</label>
        //         </div>
        //         {/* title */}
        //         <div className=" z-0 w-full mb-5 group">
        //             <input
        //                 type="text"
        //                 name="title"
        //                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                 defaultValue={title}
        //             />
        //             <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Title</label>
        //         </div>
        //         {/* provider_img */}
        //         <div className=" z-0 w-full mb-5 group">
        //             <input
        //                 type="text"
        //                 name="provider_img"
        //                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                 defaultValue={provider_img}
        //             />
        //             <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Provider Image</label>
        //         </div>
        //         {/* time */}
        //         <div className=" z-0 w-full mb-5 group">
        //             <input
        //                 type="text"
        //                 name="time"
        //                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                 defaultValue={time}
        //             />
        //             <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Time Duration</label>
        //         </div>

        //         {/* price */}
        //         <div className=" z-0 w-full mb-5 group">
        //             <input
        //                 type="text"
        //                 name="price"
        //                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                 defaultValue={price}
        //             />
        //             <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Price</label>
        //         </div>

        //         {/* area */}
        //         <div className=" z-0 w-full mb-5 group">
        //             <input
        //                 type="text"
        //                 name="area"
        //                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                 defaultValue={area}
        //             />
        //             <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Area</label>
        //         </div>

        //         {/* description */}
        //         {/* <div className=" z-0 w-full mb-5 group">
        //             <input
        //                 type="text"
        //                 name="description"
        //                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                 defaultValue={description}
        //                 required />
        //             <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Special description</label>
        //         </div> */}

        //         {/* thumbnail */}
        //         <div className=" z-0 w-full mb-5 group">
        //             <input
        //                 type="text"
        //                 name="thumbnail"
        //                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                 defaultValue={thumbnail}
        //                 required />
        //             <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Thumbnail image</label>
        //         </div>

        //         {/* description */}
        //         <div className="flex flex-col  z-0 w-full mb-5 group">
        //             <label className="text-gray-700 dark:text-gray-200 text-left font-semibold text-sm" >Service Description</label>
        //             <textarea
        //                 name="description"
        //                 defaultValue={description}
        //                 required cols="30" rows="2"
        //                 placeholder="Service description "
        //             ></textarea>
        //         </div>
        //         {/* service_overview */}
        //         <div className=" z-0 w-full mb-5 group">
        //             <input
        //                 type="text"
        //                 name="service_overview"
        //                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                 defaultValue={service_overview}
        //                 required />
        //             <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Overview</label>
        //         </div>


        //         <div className="grid md:grid-cols-2 md:gap-6">
        //             {/* provider_name */}
        //             <div className=" z-0 w-full mb-5 group">
        //                 <input
        //                     type="text"
        //                     name="provider_name"
        //                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                     defaultValue={provider_name}
        //                 />
        //                 <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Provider Name</label>
        //             </div>
        //             {/* provider_email */}
        //             <div className=" z-0 w-full mb-5 group">
        //                 <input
        //                     type="email"
        //                     name="provider_email"
        //                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        //                     defaultValue={userEmail}
        //                 />
        //                 <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Provider email</label>
        //             </div>

        //         </div>

        //         <button type="submit" className="text-white bg-emerald-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Service</button>
        //     </form>

        // </div>

    );
};
EditMyService.propTypes = {
    item: PropTypes.object,
}
export default EditMyService;