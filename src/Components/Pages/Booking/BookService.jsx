// import { useState } from "react";
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


const BookService = ({ serviceDetail }) => {
    const { service_img, service_name, price, provider_email, _id } = serviceDetail;
    const { newUser } = useContext(AuthContext);
    const userEmail = newUser?.email;


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const service_name = form.service_name.value;
        const service_Image = form.service_Image.value;
        const provider_email = form.provider_email.value;
        const price = form.price.value;
        const instruction = form.instruction.value;
        const user_name = form.user_name.value;
        const email = form.user_email.value;
        const date = form.date.value;
        const order = {
            service_name,
            service_Image,
            provider_email,
            price,
            instruction,
            user_name,
            email,
            date,
            service_id: _id
        }
        console.log(order);
        const url = 'http://localhost:3000/bookings';
        axios.post(url, order)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Service Purchased!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* service_name */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="service_name"
                        readOnly
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        defaultValue={service_name}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">service_name</label>
                </div>

                {/* Service_Image */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="service_Image"
                        readOnly
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        defaultValue={service_img}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Image</label>
                </div>

                {/* provider_email */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="provider_email"
                        readOnly
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        defaultValue={provider_email}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Provider email</label>
                </div>

                {/* price */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="price"
                        readOnly
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        defaultValue={price}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Price</label>
                </div>

                {/* instruction */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="instruction"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                        required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Special instruction</label>
                </div>
                {/* date */}
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="date"
                        name="date"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Service Taking date"
                        required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Taking Date</label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* user_name */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="user_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                            required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                    </div>
                    {/* user_email */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="email"
                            name="user_email"
                            readOnly
                            defaultValue={userEmail}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Email</label>
                    </div>

                </div>

                <button type="submit" className="text-white bg-emerald-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase Service</button>
            </form>

        </div>
    );
};

BookService.propTypes = {
    serviceDetail: PropTypes.node
}
export default BookService;



