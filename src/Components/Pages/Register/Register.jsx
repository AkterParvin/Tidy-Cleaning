import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import bg from '../../../assets/signup.jpg';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import logo from '../../../assets/cleaning.png';

const Register = () => {
    const [error, setError] = useState('');
    const [userCreate, setUserCreate] = useState('');
    const [showPass, setShowPass] = useState(false);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const accepted = form.;
        const newUser = { name, email, password };
        console.log(newUser);
        if (password.length < 6) {
            setError('Password must contain six characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('Your password must contain one Capital letter');
            return;
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            setError('Your password must contain one special character');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Email is not valid");
            return;
        }
        
        createUser(email,password)
            .then(result => {
                e.target.reset();
                setUserCreate("user created");
                console.log(result.user);
                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(result.user),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            alert('user created!!!')
                        }
                    })


            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
        navigate('home');



    }


    return (

        <div className="relative h-screen flex justify-center items-center flex-col">
            <img src={bg} alt="" className="object-fill h-full w-full absolute overflow-hidden  " />


            <div className="w-[70%] mx-auto md:w-[30%] mt-10 md:my-16 z-10 bg-teal-200/40 rounded-lg shadow-xl">

                <div className="w-full px-6 py-6 md:px-16 ">
                    <div className="flex justify-center items-center hover:rounded-lg mx-auto " >
                        <img className="rounded w-auto h-9 md:h-12 bg-white" src={logo} alt="" />

                    </div>

                    <p className="mt-2 text-xl text-center font-semibold text-[#0073f7] dark:text-gray-200">
                        Sign up Now !
                    </p>



                    <form onSubmit={handleRegister}>
                        {
                            error && <p className="text-red-700 text-md font-bold mt-2">{error}</p>
                        }
                        {
                            userCreate && <p className="text-green-700 text-md font-bold mt-2">
                                {Swal.fire('Sign up Successfull !!!')}

                            </p>
                        }

                        <div className="mt-2">
                            <label className="block mb-1 text-sm font-semibold text-[#0073f7] dark:text-gray-200" htmlFor="LoggingEmailAddress">Full Name </label>
                            <input
                                required
                                type="text"
                                name='name'
                                placeholder="Name"
                                className="block w-full px-4 py-1 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
                        </div>
                        <div className="mt-2">
                            <label className="block mb-1 text-sm font-semibold text-[#0073f7] dark:text-gray-200" htmlFor="LoggingEmailAddress">Email </label>
                            <input
                                required
                                type="email"
                                name='email'
                                placeholder="Email"
                                className="block w-full px-4 py-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
                        </div>

                        <div className="mt-2 ">
                            <div className="flex justify-between">
                                <label className="block mb-1 text-sm font-semibold text-[#0073f7] dark:text-gray-200" htmlFor="loggingPassword">Password</label>

                            </div>
                            <div className="flex relative items-center">
                                <input
                                    required
                                    type={showPass ? 'text' : 'password'}
                                    name="password"
                                    placeholder='Password'
                                    className="block w-full px-4 py-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />

                                <span className="absolute right-[5%] text-xl text-[#0073f7]"
                                    onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <AiFillEyeInvisible /> : <AiFillEye />
                                    }

                                </span>
                                {/* #82dee8 */}
                            </div>



                        </div>
                        <div className="my-2 flex items-center">
                            <input
                                required
                                type="checkbox"
                                name="terms"
                                id="terms"
                                className="mr-2 "
                            />

                            <label className="text-black text-sm font-medium "
                                htmlFor="terms">
                                Check our terms and conditions

                            </label>
                        </div>

                        <div className="mt-7">

                            <button type="submit" className="w-full px-6 py-2 text-sm font-bold tracking-wide text-gray-100 capitalize transition-colors duration-300 transform bg-[#0073f7] rounded-lg hover:bg-teal-800 hover:text-white " >Sign up</button>

                        </div>
                    </form>

                    <p className="mt-1 font-bold text-white flex justify-center items-center">Or</p>
                    <button className="flex items-center justify-center gap-1 mt-2 
                    text-[#0073f7] transition-colors duration-300 transform border rounded-lg bg-yellow-100 border-gray-700 dark:text-gray-200 hover:bg-white hover:text-gray-700 dark:hover:bg-gray-600 w-full">

                        <p className="text-lg md:text-xl" >
                            <FcGoogle></FcGoogle>
                        </p>
                        <span className="  py-2 font-bold "> Google Sign up</span>
                    </button>

                    <div className="flex items-center justify-center text-center mt-4">


                        <p className="text-xs uppercase text-[#0036f7] font-bold ">Have an account??

                            <Link to="/login" className='hover:underline font-semibold bg-white  p-1 text-[#0073f7] ml-3'> Login Page</Link> </p>


                    </div>
                </div>
            </div>

        </div>


    );
};

export default Register;

