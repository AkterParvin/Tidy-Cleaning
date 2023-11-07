import { Link } from "react-router-dom";
// import { MdPages, MdNewReleases } from 'react-icons/md';
// import { BiDetail } from 'react-icons/bi';
// import { PiSignInBold } from 'react-icons/pi';
// import { SiGnuprivacyguard } from 'react-icons/si';
import logo from '../../../assets/cleaning.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Nav = () => {
    const { newUser, logOut } = useContext(AuthContext);

    // logout user function 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged Out');
            })
            .catch(error => console.log(error.message))
    }
    const navLinks = <>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/allservices">Services</Link></li>
        {/* <li><Link to="">Services</Link></li>
        <li><Link to="">Blog</Link></li>
        <li><Link to="">Contact</Link></li> */}

        {
            newUser ? <>
                <li tabIndex={0} >
                    <details>
                        <summary> <Link to="/"> <button className=''>Dashboard</button></Link></summary>
                        <ul className="p-1 bg-gray-100 text-xs font-semibold text-[#33b097]">

                            <li><Link to='/manageservice'>
                                Manage-services</Link></li>
                            <li>
                                <Link to='/add-service'>
                                    Add-service</Link>
                            </li>
                            <li><Link to='/schedules'>
                                Schedules</Link>
                            </li>

                        </ul>
                    </details>


                </li>
                <li>
                    <button onClick={handleLogOut} >Log Out</button>

                </li>

            </>

                :
                <Link to='/login'><button className="btn btn-outline btn-warning btn-sm ">Login</button></Link>
        }


    </>


    // change nav color when scrolling 
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= window.innerHeight * 0.3) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeColor);

        // Cleaning the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    return (
        <div className={`${color ? "bg-teal-100 transform  " : "bg-stone-300 transform "
            } sticky top-0 z-30 border-gray-200 dark:bg-gray-900 h-[80px] transition-all duration-300 navbar  ease-in-out`}>
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-48">
                          
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <span>
                            <img src={logo} alt="" className="w-10 " />
                        </span> TidyAid</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li> */}
                        {navLinks}
                    </ul>
                </div>
           </div>
            
        </div>

    );
};

export default Nav;

