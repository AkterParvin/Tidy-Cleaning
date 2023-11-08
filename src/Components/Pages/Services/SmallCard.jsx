/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SmallCard = ({item}) => {
    const { service_img, service_name, title, description, provider_name, provider_img, price, area, time, service_overview, thumbnail, _id } = item;
    return (
        <div className="card  bg-base-100 shadow-xl max-w-sm">
            <figure className="px-3 pt-3">
                <img src={ service_img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="p-4 items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="py-2 items-center text-center">{ title}</p>
                <div className="card-actions flex justify-center">
                    <Link to={`/servicedetail/${_id}`}>  <button className="p-2 btn btn-xs btn-accent text-center text-gray-800 hover:text-sky-700 font-semibold">
                     Details...
                    </button></Link>
                   
                </div>
            </div>
        </div>
    );
};

export default SmallCard;