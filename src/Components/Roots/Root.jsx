import { Outlet } from "react-router-dom";
import Nav from "../Pages/Home/Nav";
import Footer from "../Pages/Footer/Footer";
// import Banner from "../Pages/Home/Banner";


const Root = () => {
    return (
        <div className="bg-teal-100">
            <Nav/>
            
          
            <div className="max-w-6xl  mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;