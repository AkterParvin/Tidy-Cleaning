import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Error from "./Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import MyServices from "../Pages/My-Services/MyServices";
import AddService from "../Pages/AddService/AddService";
import Schedules from "../Pages/Schedules/Schedules";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import AllServices from "../Pages/Services/AllServices";
import BookService from "../Pages/Booking/BookService";
import PrivateRoute from "./PrivateRoute";

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
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: '/my-services',
                element: <PrivateRoute>
                    <MyServices />
                </PrivateRoute>,

            },
           
            {
                path: '/schedules',
                element: <Schedules />

            },
            {
                path: '/contact',
                element: <Contact />,

            },
        ]
    },
    {
        path: "/bookService/:id",
        element: <BookService />
    },

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/add-service',
        element: <AddService />

    },
    {
        path: '/register',
        element: <Register />
    },
]);

export default Routes;