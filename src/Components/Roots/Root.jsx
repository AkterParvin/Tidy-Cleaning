import { Outlet } from "react-router-dom";
import Nav from "../Pages/Home/Nav";
// import Banner from "../Pages/Home/Banner";


const Root = () => {
    return (
        <div>
            <Nav/>
          
            <div className="max-w-6xl  mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;