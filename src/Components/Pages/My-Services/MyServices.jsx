import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import BookingDetail from "./BookingDetail";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyServices = () => {
  const { newUser } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);
  const url = `http://localhost:3000/bookings?email=${newUser?.email}`
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setBooking(res.data);
      })
  }, [url])
  console.log(bookings);

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
        fetch(`http://localhost:3000/bookings/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = bookings.filter(book => book._id !== id);
              setBooking(remaining);

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
        fetch(`http://localhost:3000/bookings/${id}`, {
          method: "PATCH",
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
              const remaining = bookings.filter(item => item._id !== id);
              const updatedItem = bookings.find(item => item._id === id);
              updatedItem.status = "confirm";
              const UpdatedBookings = [updatedItem, ...remaining];
              setBooking(UpdatedBookings);

            }
          })
      }
    })
  }

  return (
    <div className="flex justify-center my-12 flex-col">
      <div className="bg-gray-100 max-w-6xl">
        <h2 className="text-3xl text-center font-bold mt-5">My Bookings:{bookings.length}</h2>
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <h2 className="text-xl font-semibold">Your cart</h2>
          <ul className="flex flex-col divide-y divide-gray-700 ">
            {
              bookings.map(item => <BookingDetail
                key={item._id}
                item={item}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></BookingDetail>)
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
        </div>
      </div>
      {/* my service section  */}
      <div>
        <h2 className="text-3xl text-center font-bold mt-5">Pending Orders : </h2>
      </div>
    </div>
  );
};

export default MyServices;