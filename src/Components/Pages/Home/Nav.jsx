import { Link} from "react-router-dom";
// import { MdPages, MdNewReleases } from 'react-icons/md';
// import { BiDetail } from 'react-icons/bi';
// import { PiSignInBold } from 'react-icons/pi';
// import { SiGnuprivacyguard } from 'react-icons/si';
import logo from '../../../assets/cleaning.png'
import { useEffect, useState } from "react";


const Nav = () => {
    // change nav color when scrolling 
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= window.innerHeight * 0.2) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeColor);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);
  
    return (
        <nav className={`${color ? "bg-teal-200/20 transform scale-105 " : "bg-white transform scale-100"
            } sticky top-0 z-30 border-gray-200 dark:bg-gray-900 h-[80px] transition-all duration-300 ease-in-out`}>
            <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='home' href={logo} className="flex items-center">
                    <img src={logo} className="h-10 mr-1" alt="Flowbite Logo" />
                    <span className="self-center text-2xl text-blue-700  font-semibold whitespace-nowrap dark:text-white">TidyAid</span>
                </Link>
                <div className="flex items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm 
                    bg-[#afede3] rounded-md px-2 py-1 md:mr-0 shadow-xl text-blue-700 font-semibold focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" /> */}
                        <p>Dashborad</p>
                    </button>

                    {/*User Dropdown menu  */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">User name</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">user.eamil@.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>

                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to='home' className="block py-2 pl-3 pr-4 font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to='services' href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                        </li>
                        <li>
                            <Link to='/register' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 font-semibold md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign up</Link>
                        </li>
                        {/* <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                        </li> */}
                        {/* <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Nav;

