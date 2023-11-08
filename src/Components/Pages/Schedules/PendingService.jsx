/* eslint-disable no-unused-vars */
import { MdUpdate } from "react-icons/md";
import PropTypes from 'prop-types';
import { FcDeleteDatabase } from "react-icons/fc";
import { useState } from "react";
import Swal from "sweetalert2";

const PendingService = ({ item, handleDelete, pendings, setBooking }) => {
    const { service_name, service_Image, provider_email, price, instruction, user_name, email, date, service_id, _id, status } = item;

    const [selectedStatus, setStatus] = useState(status);
    const [isStatusUpdated, setStatusUpdated] = useState(false);
    // update Status function 
    const handleUpdate = (id, newStatus) => {
        const updatedStatus = { status: newStatus }; // Create an object with the new status

        fetch(`https://tidy-cleaning-server.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedStatus) // Send the new status in the request body
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Confirmed!',
                        'Your file has been Updated.',
                        'success'
                    );

                    // Update the status 
                    const updatedItem = pendings.find(item => item._id === id);
                    updatedItem.status = newStatus;

                    // filter the list to exclude items with the "confirm" status
                    const remaining = pendings.filter(item => item._id !== id);
                    setBooking([updatedItem, ...remaining]);
                }
            });


    };


    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        setStatusUpdated(true); // Set the status as updated
        handleUpdate(_id, newStatus);
    };
    return (
        <div className="w-[60%] mx-auto">
            <li className="flex flex-col px-5 shadow-lg rounded-lg py-6 sm:flex-row sm:justify-between bg-sky-100">
                <div className="flex w-full space-x-2 sm:space-x-6">

                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={service_Image} alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4 ">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1 md:mr-8">
                                <h3 className="text-lg font-semibold leadi sm:pr-8">{service_name}</h3>
                                <p className="text-sm dark:text-gray-400">Price: {price}</p>
                                <p className="text-sm dark:text-gray-400">Client Email: <br /> {email}</p>
                                <p className="text-sm dark:text-gray-400"></p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">{price}</p>
                                <p className="text-sm  dark:text-gray-600">Date: {date}</p>
                            </div>
                        </div>
                        <div className="flex items-center text-sm gap-1">
                            <button onClick={() => handleDelete(_id)} type="button" className="flex items-center bg-yellow-100 border shadow-xl hover:bg-emerald-100 hover:border-emerald-500 border-yellow-500 rounded btn btn-xs space-x-1">
                                <FcDeleteDatabase className="text-base"></FcDeleteDatabase>
                                <span>Remove</span>
                            </button>

                            <div onClick={() => handleUpdate(_id)} type="button" className="dropdown dropdown-bottom">
                                <label tabIndex={0} className="flex m-1 btn btn-sm items-center bg-sky-100 border shadow-xl hover:bg-emerald-100 hover:border-emerald-500 border-sky-500 rounded px-2 py-1 pl-0 space-x-1">
                                    <MdUpdate className=" text-green-700"></MdUpdate>
                                    <span>Update Service</span>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><button onClick={() => handleStatusChange('Pending')}>Pending</button ></li>
                                    <li><button onClick={() => handleStatusChange('In-Progress')}>In-Progress</button ></li>
                                    <li><button onClick={() => handleStatusChange('Completed')}>Completed</button ></li>
                                </ul>
                            </div>
                            {isStatusUpdated && (
                                <p className='text-primary font-bold'>Status: {selectedStatus}</p>
                            )}


                        </div>


                    </div>
                </div>
            </li>
        </div>
    );
};
PendingService.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func,
    pendings: PropTypes.array,
    setBooking: PropTypes.array
}
export default PendingService;