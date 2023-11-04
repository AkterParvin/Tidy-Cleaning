import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { name, email, password };
        console.log(newUser);


    }


    return (
        
        <div className="relative h-full flex justify-center items-center flex-col">
            <img src="https://i.imgur.com/626GNuW.jpg" alt="" className="object-fill h-full w-full absolute overflow-hidden  " />


            <div className="w-[70%] mx-auto md:w-[30%] mt-10 md:my-16 z-10 bg-gray-600/50 rounded-md">

                <div className="w-full px-6 py-6 md:px-16 ">
                    <div className="flex justify-center items-center hover:rounded-lg mx-auto " >
                        <img className="rounded w-auto h-9 md:h-12 bg-white" src="https://i.imgur.com/CYiikTE.png" alt="" />

                    </div>

                    <p className="mt-2 text-xl text-center font-semibold text-lime-500 dark:text-gray-200">
                        Sign up Now !
                    </p>



                    <form onSubmit={handleRegister}>
                        {/* {
                            loginError && <p className="text-red-700 text-md font-bold mt-2">{loginError}</p>
                        } */}

                        <div className="mt-2">
                            <label className="block mb-1 text-sm font-semibold text-lime-300 dark:text-gray-200" htmlFor="LoggingEmailAddress">Full Name </label>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder='Full Name'
                                className="block w-full px-4 py-1 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
                        </div>
                        <div className="mt-2">
                            <label className="block mb-1 text-sm font-semibold text-lime-300 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email </label>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder='Email'
                                className="block w-full px-4 py-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
                        </div>

                        <div className="mt-2">
                            <div className="flex justify-between">
                                <label className="block mb-1 text-sm font-semibold text-lime-300 dark:text-gray-200" htmlFor="loggingPassword">Password</label>

                            </div>

                            <input
                                required
                                type="password"
                                name="password"
                                placeholder='Password'
                                className="block w-full px-4 py-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
                        </div>

                        <div className="mt-7">

                            <button type="submit" className="w-full px-6 py-2 text-sm font-bold tracking-wide text-gray-800 capitalize transition-colors duration-300 transform bg-lime-400 rounded-lg hover:bg-lime-700 hover:text-white " >Sign up</button>

                        </div>
                    </form>

                    <p className="mt-1 font-bold text-white flex justify-center items-center">Or</p>
                    <button className="flex items-center justify-center gap-1 mt-2 text-lime-700 transition-colors duration-300 transform border rounded-lg bg-stone-200 border-gray-700 dark:text-gray-200 hover:bg-lime-50 hover:text-gray-700 dark:hover:bg-gray-600 w-full">

                        <p className="text-lg md:text-xl" >
                            <FcGoogle></FcGoogle>
                        </p>
                        <span className="  py-2 font-bold "> Google Sign up</span>
                    </button>

                    <div className="flex items-center justify-center text-center mt-4">


                        <p className="text-xs uppercase text-lime-200 ">Have an account??

                            <Link to="/login" className='hover:underline font-semibold bg-white  p-1 text-green-900 ml-3'> Login Page</Link> </p>


                    </div>
                </div>
            </div>

        </div>


    );
};

export default Register;

