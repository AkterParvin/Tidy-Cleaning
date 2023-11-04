import { Link, NavLink } from "react-router-dom";
import { MdPages, MdNewReleases } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import { PiSignInBold } from 'react-icons/pi';
import { SiGnuprivacyguard } from 'react-icons/si';



const Nav = () => {
    
    return (
       
        <div className="max-w-6xl mx-auto bg-white h-24 items-center flex justify-between ">
            <div>
                <img src="https://i.imgur.com/CYiikTE.png" alt=""  className="w-24 ml-4"/>
            </div>
           
            <div className="text-end flex items-center justify-between gap-2 ">
                <button className="text-white bg-[#6ebe3b] hover:bg-[#58982F] focus:ring-2 focus:ring-green-600 font-medium rounded-lg text-sm px-5 
                py-2 mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-green-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                    Menu
                </button>
                <Link to='/login'><button className=" bg-slate-600 hover:bg-slate-800 text-white font-medium rounded-lg text-sm px-5  focus:ring-2 focus:ring-black
                py-2 mr-2  ">Login</button></Link>
            </div>
            <div id="drawer-navigation" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gradient-to-r from-gray-100 to-stone-300 w-64 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">

                <h5 id="drawer-navigation-label" className="text-base  text-[#58982F] font-bold uppercase ">Menu</h5>
                <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-[#58982F] bg-gray-200 bg-transparent hover:bg-lime-800 hover:text-white rounded-lg text-sm w-8 h-8 
                absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink to='home' href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-[#58982F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ml-3 group-hover:text-[#58982F] font-semibold">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <MdPages className="text-2xl  text-[#58982F] group-hover:text-gray-900 "/>
                                <span className="flex-1 ml-3 font-semibold text-left whitespace-nowrap group-hover:text-[#58982F]">Pages</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                                <li>
                                    <NavLink to='/' className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-lime-100 dark:text-white font-semibold dark:hover:bg-gray-700">Recipe Search</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-lime-100 font-semibold dark:text-white dark:hover:bg-gray-700">Elements</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-lime-100 dark:text-white dark:hover:bg-gray-700 font-semibold ">FAQs</NavLink>
                                </li>
                            </ul>
                        </li>
                       
                        <li>
                            <NavLink href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-lime-50 dark:hover:bg-gray-700 group">
                                <BiDetail className="text-2xl text-[#58982F] group-hover:text-gray-900 " />
                                <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-[#58982F] font-semibold">Recipe Detail</span>
                                
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to='contact/recent' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdNewReleases className="text-2xl text-[#58982F] group-hover:text-gray-900" />
                                
                                <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-[#58982F] font-semibold">Recent Recipes</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdNewReleases className="text-2xl text-[#58982F] group-hover:text-gray-900" />
                                
                                <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-[#58982F] font-semibold">Blog</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <PiSignInBold className="text-2xl text-[#58982F] group-hover:text-gray-900" />
                                
                                <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-[#58982F] font-semibold">Login</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/register' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <SiGnuprivacyguard className="text-xl text-[#58982F] group-hover:text-gray-900" />
                                
                                <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-[#58982F] font-semibold">Sign Up</span>
                            </NavLink>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;