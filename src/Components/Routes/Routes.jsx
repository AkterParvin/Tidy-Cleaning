import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Error from "./Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";

import AddService from "../Pages/AddService/AddService";
import Schedules from "../Pages/Schedules/Schedules";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import AllServices from "../Pages/Services/AllServices";
import BookService from "../Pages/Booking/BookService";
import PrivateRoute from "./PrivateRoute";
import ManageService from "../Pages/My-Services/ManageService";

// #cdfcf3

const Routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'services',
                element: <Services />
            }
            ,
            {
                path: '/allservices',
                element: <AllServices />
            },
            {
                path: '/servicedetail/:id',
                element: <PrivateRoute> <ServiceDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: '/manageservice',
                element: <PrivateRoute>
                    <ManageService />
                </PrivateRoute>,

            },
            {
                path: '/add-service',
                element: <PrivateRoute> <AddService /></PrivateRoute>

            },
           
            {
                path: '/schedules',
                element:<PrivateRoute> <Schedules /></PrivateRoute>

            },
            {
                path: '/contact',
                element: <Contact />,

            },
        ]
    },
    {
        path: "/bookService/:id",
        element:<PrivateRoute> <BookService /></PrivateRoute>
    },

    {
        path: '/login',
        element: <Login />
    },
    
    {
        path: '/register',
        element: <Register />
    },
]);

export default Routes;