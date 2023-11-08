/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { FcDeleteDatabase } from "react-icons/fc";
import { BiEditAlt } from "react-icons/bi";
import { useState } from "react";
import Swal from "sweetalert2";
import EditMyService from './EditMyService';
import { Link } from 'react-router-dom';

const MyServiceDetails = ({ item, handleDelete }) =>
// service_name, service_img, title, description, provider_name, provider_email, provider_img, time, price, area, service_overview, thumbnail

{
    const { service_name, service_img, provider_email, price, instruction, user_name, email, date, service_id, _id, status } = item;
    return (
        <div className="w-[60%] mx-auto">
            <li className="flex flex-col px-5 shadow-lg rounded-lg py-6 sm:flex-row sm:justify-between bg-sky-100">
                <div className="flex w-full space-x-2 sm:space-x-6">

                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={service_img} alt="Polaroid camera" />
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
                            <Link to={`/updateService/${_id}`}> <button className="btn btn-xs btn-primary">
                                <BiEditAlt></BiEditAlt>
                                Edit Service
                            </button></Link>


                            {/* <div>
                               <button className="btn btn-xs btn-info"
                                    onClick={() => document.getElementById('my_modal_5').showModal()}><BiEditAlt></BiEditAlt>
                                    Edit Service</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg text-center text-teal-700 mb-2">Edit Service</h3>
                                        <EditMyService
                                        _id={_id}
                                        ></EditMyService>
                                        <div className="modal-action">
                                            <form method="dialog">

                                                <button className="btn btn-xs btn-success">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div> */}


                            {/* <div onClick={() => handleUpdate(_id)} type="button" className="dropdown dropdown-bottom">
                                <label tabIndex={0} className="flex m-1 btn btn-sm items-center bg-sky-100 border shadow-xl hover:bg-emerald-100 hover:border-emerald-500 border-sky-500 rounded px-2 py-1 pl-0 space-x-1">
                                    <MdUpdate className=" text-green-700"></MdUpdate>
                                    <span>Update Service</span>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><button onClick={() => handleStatusChange('Pending')}>Pending</button ></li>
                                    <li><button onClick={() => handleStatusChange('In-Progress')}>In-Progress</button ></li>
                                    <li><button onClick={() => handleStatusChange('Completed')}>Completed</button ></li>
                                </ul>
                            </div> */}
                            {/*  */}


                        </div>


                    </div>
                </div>
            </li>
        </div>
    );
};
MyServiceDetails.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func,
    pendings: PropTypes.array,
    setBooking: PropTypes.array
}
export default MyServiceDetails;