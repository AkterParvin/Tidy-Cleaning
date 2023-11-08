import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import axios from "axios";
import empty from '../../../assets/emptyCart.json';
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BookingDetail from "../My-Services/BookingDetail";
import PendingService from "./PendingService";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";

const Schedules = () => {

    // My Booking Related Function 
    const { newUser } = useContext(AuthContext);
    const [bookings, setBooking] = useState([]);
    
    const url = `http://localhost:3000/bookings?email=${newUser?.email}`
    useEffect(() => {
        axios.get(url,{withCredentials:true})
            .then(res => {
                setBooking(res.data);
            })
    }, [url])



    // My Pending Work Related Function 
    const [pendings, setPendings] = useState([]);
    const url2 =`http://localhost:3000/bookings?provider_email=${newUser?.email}`
    useEffect(() => {
        axios.get(url2,{withCredentials:true})
            .then(res => {
                setPendings(res.data);
            })
    }, [url2])
    console.log(pendings);
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




    // const handleUpdate = id => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, Confirm it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:3000/bookings/${id}`, {
    //                 method: "PATCH",
    //                 headers: {
    //                     "content-type": "application/json"
    //                 },
    //                 body: JSON.stringify({ status: "confirm" })
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data)
    //                     if (data.modifiedCount > 0) {
    //                         Swal.fire(
    //                             'Confirmed!',
    //                             'Your file has been Confirmed.',
    //                             'success'
    //                         )
    //                         // const remaining = bookings.filter(book => book._id !== id);
    //                         // setBookings(remaining);
    //                         const remaining = pendings.filter(item => item._id !== id);
    //                         const updatedItem = pendings.find(item => item._id === id);
    //                         updatedItem.status = "confirm";
    //                         const UpdatedBookings = [updatedItem, ...remaining];
    //                         setBooking(UpdatedBookings);

    //                     }
    //                 })
    //         }
    //     })
    // }
    const backgroundImageUrl = 'https://i.imgur.com/HiCpPNc.png';

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
        
    };
    const backgroundUrl = 'https://i.imgur.com/SWXaDkU.png';

    const containerStyle2 = {
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
        
    };


    return (
        <div className="flex justify-center my-12 flex-col">
            {/* My Bookings  */}
            <div className=" max-w-6xl">

                {
                    bookings.length > 0 ?
                        <div style={containerStyle2} className=" flex flex-col max-w-6xl mx-auto mt-12 p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 rounded-xl shadow-xl">
                            <h2 className="text-2xl font-semibold text-center text-blue-600 animate-pulse">Your Bookings</h2>
                            <ul className="flex flex-col divide-y divide-gray-700 ">
                                {
                                    bookings.map(item => <BookingDetail
                                        key={item._id}
                                        item={item}
                                        handleDelete={handleDelete}
                                      
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
                                    <span className="text-teal-800 sr-only sm:not-sr-only"> to shop</span>
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


            {/* my pending service section  */}
            <div className=" max-w-6xl">
                {
                    pendings.length > 0 ?
                        <div style={containerStyle} className=" flex flex-col max-w-6xl mx-auto mt-12 p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 rounded-xl shadow-xl">

                            <h2 className="text-2xl font-semibold text-center text-teal-600 animate-bounce">Your Pending Services</h2>
                            <ul className="flex flex-col divide-y divide-gray-700 ">
                                {
                                    pendings.map(item => <PendingService
                                        key={item._id}
                                        item={item}
                                        handleDelete={handleDelete}
                                        pendings={pendings}
                                        setBooking={setBooking}
                                    ></PendingService>)
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

export default Schedules;