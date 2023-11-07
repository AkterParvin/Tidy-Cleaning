/* eslint-disable no-unused-vars */
import { FcDeleteDatabase } from "react-icons/fc";
import { MdUpdate } from "react-icons/md";
import PropTypes from 'prop-types';

const BookingDetail = ({ item,handleDelete, handleUpdate }) => {
    const { service_name, service_Image, provider_email, price, instruction, user_name, email, date, service_id, _id, status } = item;






    return (
        <div>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between ">
                <div className="flex w-full space-x-2 sm:space-x-6">
                  
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={service_Image} alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4 ">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1 md:mr-8">
                                <h3 className="text-lg font-semibold leadi sm:pr-8">{service_name}</h3>
                                <p className="text-sm dark:text-gray-400">Price: {price}</p>
                                <p className="text-sm dark:text-gray-400">Provider Email: <br/> {provider_email}</p>
                                <p className="text-sm dark:text-gray-400"></p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">{price}</p>
                                <p className="text-sm  dark:text-gray-600">Date: {date}</p>
                            </div>
                        </div>
                        <div className="flex text-sm gap-1">
                            <button onClick={() => handleDelete(_id)} type="button" className="flex items-center bg-yellow-100 border shadow-xl hover:bg-emerald-100 hover:border-emerald-500 border-yellow-500 rounded px-2 py-1 pl-0 space-x-1">
                                <FcDeleteDatabase className="text-xl"></FcDeleteDatabase>
                                <span>Remove</span>
                            </button>
                            {status === "confirm" ? <span className='text-primary font-bold'>Confirmed</span>:
                            
                            <button onClick={() => handleUpdate(_id)} type="button" className="flex items-center bg-sky-100 border shadow-xl hover:bg-emerald-100 hover:border-emerald-500 border-sky-500 rounded px-2 py-1 pl-0 space-x-1">
                                <MdUpdate className="text-xl text-green-700"></MdUpdate>
                                <span>Update Service</span>
                                </button>}
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
};
BookingDetail.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete:PropTypes.func,
    handleUpdate:PropTypes.func
}
export default BookingDetail;