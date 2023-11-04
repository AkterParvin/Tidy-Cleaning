import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Error from "./Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/LOgin";
import Register from "../Pages/Register/Register";

import Recent from "../Pages/RecentRecipe/Recent";
import Contact from "../Pages/Contact/Contact";



const Routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Root />,
        children: [
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'recent',
                element: <Recent />
            }
            ,
            {
                path: '/contact',
                element: <Contact />,

            },



        ]
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