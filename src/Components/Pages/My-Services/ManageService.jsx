/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import empty from '../../../assets/emptyCart.json';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import MyServiceDetails from "./MyServiceDetails";

// import axios from "axios";
// import BookingDetail from "./BookingDetail";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";


const ManageService = () => {
  const { newUser } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const url = `https://tidy-cleaning-server.vercel.app/services?provider_email=${newUser?.email}`
  useEffect(() => {
    axios.get(url, { withCredentials: true })
      .then(res => {
        setServices(res.data);
      })
  }, [url])
  console.log(services);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tidy-cleaning-server.vercel.app/services/${id}`,
          { Credentials: 'include' }, {
          method: "DELETE"
        },)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = services.filter(service => service._id !== id);
              setServices(remaining);

            }
          })

      }
    })
  };

  const handleUpdate = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tidy-cleaning-server.vercel.app/services/${id}`, { credentials: true }, {
          method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ status: "confirm" })
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
              Swal.fire(
                'Confirmed!',
                'Your file has been Confirmed.',
                'success'
              )
              // const remaining = bookings.filter(book => book._id !== id);
              // setBookings(remaining);
              const remaining = services.filter(item => item._id !== id);
              const updatedItem = services.find(item => item._id === id);
              updatedItem.status = "confirm";
              const UpdatedBookings = [updatedItem, ...remaining];


            }
          })
      }
    })
  }
  const backgroundImageUrl = 'https://i.imgur.com/HiCpPNc.png';

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',

  };
  return (
    <div className="flex justify-center my-12 flex-col">
      <div className=" max-w-6xl">
        {
          services.length > 0 ?
            <div style={containerStyle} className=" flex flex-col max-w-6xl mx-auto mt-12 p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 rounded-xl shadow-xl">
              <h2 className="text-2xl font-semibold text-center text-blue-600 animate-pulse">My Services:{services.length}</h2>


              <ul className="flex flex-col divide-y divide-gray-700 ">
                {
                  services.map(item => <MyServiceDetails
                    key={item._id}
                    item={item}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  ></MyServiceDetails>)
                }


              </ul>
              <div className="space-y-1 text-right">
                <p>Total amount:
                  <span className="font-semibold">357 €</span>
                </p>
                <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
              </div>
              <div className="flex justify-end space-x-4">
                <Link to='/'>  <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                  <span className="sr-only sm:not-sr-only">to shop</span>
                </button>
                </Link>
                <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                  <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                </button>
              </div>


            </div> :
            <div className=" h-[90vh] md:h-[60vh] flex items-center justify-center max-w-3xl mx-auto flex-col">
              <h2 className="text-xl md:text-3xl text-center font-bold text-sky-700">Sorry you do not have any Bookings</h2>

              <Lottie animationData={empty} className="h-48 md:h-64"></Lottie>

            </div>
        }


      </div>
    </div>
  );
};

export default ManageService;