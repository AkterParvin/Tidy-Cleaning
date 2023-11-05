import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Error from "./Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/LOgin";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";



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
                path: 'services',
                element: <Services/>
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