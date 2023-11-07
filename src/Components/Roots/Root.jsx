import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Pages/Home/Nav";
import Footer from "../Pages/Footer/Footer";
import Banner from "../Pages/Home/Banner";
import ServiceBanner from "../Pages/Services/ServiceBanner";
// import Banner from "../Pages/Home/Banner";


const Root = () => {
    const location = useLocation()
    return (
        <div className="bg-teal-100">
            <Nav />
            {location.pathname === '/' ? <> < Banner /></> :
                <ServiceBanner />
            }


            <div className="max-w-6xl  mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;