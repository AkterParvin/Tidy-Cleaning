/* eslint-disable no-unused-vars */
import { MdLocationPin } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ServiceCard = ({ item }) => {
    
    const { service_img, service_name, title, description, provider_name, provider_img, price, area, time, service_overview, thumbnail,_id } = item;
   
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 
            h-[75vh] space-y-5 overflow-hidden rounded-lg shadow-xl border dark:bg-gray-900 dark:text-gray-100 bg-teal-50">
                <div className='flex  '>

                    <div className="flex items-center space-x-4">
                        <img alt="" src={provider_img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm text-gray-700 font-semibold">Provider Name:
                                <span className="text-xs dark:text-gray-400 pl-2 text-sky-700">{provider_name}</span>
                            </a>

                        </div>
                    </div>
                </div>

                <div>
                    <img src={service_img} alt="" className=" object-cover object-center mx-auto w-full rounded shadow-md mb-4 h-36 sm:h-56 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl text-gray-800 font-semibold">{service_name}</h2>
                    <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">{description.slice(0, 100)}...</p>
                </div>
                <div className="flex items-center justify-between">
                    <div >
                        <Link to={`/servicedetail/${_id}`}>  <button className="p-2 text-center text-gray-800 hover:text-sky-700 font-semibold">
                            View Details...
                        </button></Link>

                    </div>
                    <div className="flex space-x-2 text-sm items-center p-1  dark:text-gray-400">

                        <p className='font-bold text-gray-800'>Price:</p>
                        <span className='text-sky-700 font-semibold'>{price}</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    item: PropTypes.object
}


export default ServiceCard;