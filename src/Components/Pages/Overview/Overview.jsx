

const Overview = () => {
    return (
        <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:py-20">
            <h2 className="max-w-lg mb-12 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
                Our Commitment to Your Satisfaction
            </h2>

            <div className="grid gap-10 lg:grid-cols-2">

                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <svg className="text-red-800 w-7 h-7" viewBox="0 0 24 24">
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points=" 8,5 8,1 16,1 16,5"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="9,15 1,15 1,5 23,5 23,15 15,15"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="22,18 22,23 2,23 2,18"
                                strokeLinejoin="round"
                            />
                            <rect
                                x="9"
                                y="13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                width="6"
                                height="4"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="max-w-xl mx-3 mb-6">
                        <h2 className="max-w-lg mb-6 hover:text-teal-600 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Cleaning Couture: 
                            <br />
                            Where Elegance <br />
                            <span className="inline-block text-deep-purple-accent-400">
                                Meets Cleanliness
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg hover:text-sky-700">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                   
                    <div>
                        <a
                            href="/"
                            aria-label=""
                            className="hover:text-emerald-700 inline-flex items-center ml-3 font-bold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://i.imgur.com/erfR1jj.jpg"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://i.imgur.com/rIZBjfa.jpg"
                            alt=""
                        />
                    </div>
                    <div className="px-2 ">
                        <img
                            className="object-cover w-36 h-44 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-72"
                            src="https://i.imgur.com/GsrjNcP.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            
            <div className="my-16 grid gap-10 lg:grid-cols-2">
                <div className="flex items-center justify-center -mx-4 lg:pr-8">
                    <div className="flex flex-col items-end px-1 md:px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://i.imgur.com/xo4lhOR.jpg"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://i.imgur.com/h6fUxLQ.jpg"
                            alt=""
                        />
                    </div>
                    <div className="md:px-2">
                        <img
                            className="object-cover object-center w-36 h-44 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://i.imgur.com/3oxH0LT.jpg"
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex flex-col mx-3 justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points=" 8,5 8,1 16,1 16,5"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="9,15 1,15 1,5 23,5 23,15 15,15"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="22,18 22,23 2,23 2,18"
                                strokeLinejoin="round"
                            />
                            <rect
                                x="9"
                                y="13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                width="6"
                                height="4"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight hover:text-teal-600 text-gray-900 sm:text-4xl sm:leading-none">
                            Unparalleled Cleanliness: 
                            <br className="hidden md:block" />
                            Your Best Friend <br />
                            <span className="inline-block text-deep-purple-accent-400">
                                That Define Luxury
                            </span>
                        </h2>
                        <p className="hover:text-sky-700 text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-emerald-700 "
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>


            </div>

            <div className=" h-screen w-full bg-no-repeat bg-opacity-60 bg-cover bg-fixed flex items-center justify-center " style={{ backgroundImage: 'url(https://i.imgur.com/f83mfQV.png)' }}>

                <h2 className="text-white font-bold z-50 text-5xl ">Book Service without hasitation</h2>
                <div className="bg-gray-700/40 z-10 overflow-hidden  h-screen w-full absolute"></div>

            </div>

            <div className="grid gap-10 lg:grid-cols-2">

                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points=" 8,5 8,1 16,1 16,5"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="9,15 1,15 1,5 23,5 23,15 15,15"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="22,18 22,23 2,23 2,18"
                                strokeLinejoin="round"
                            />
                            <rect
                                x="9"
                                y="13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                width="6"
                                height="4"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="max-w-xl mx-3 mb-6">
                        <h2 className="max-w-lg mb-6 hover:text-teal-600 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Immaculate Impressions: 
                            <br />
                            The Ultimate  <br />
                            <span className="inline-block text-deep-purple-accent-400">
                                Cleaning Experience
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg hover:text-sky-700">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <div>
                        <a
                            href="/"
                            aria-label=""
                            className="hover:text-emerald-700 inline-flex items-center font-bold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center -mx-4 lg:pl-6">
                    <div className="flex flex-col items-end px-1 md:px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://i.imgur.com/PebkxXi.jpg"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://i.imgur.com/LrUgqc2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="md:px-2">
                        <img
                            className="object-cover w-36 h-44 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://i.imgur.com/MeW5YEx.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* another Section  */}
            <div>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 md:py-20">
                    <div className="mx-auto sm:text-center lg:max-w-2xl">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                    Salford Cars
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="relative">Behind the Wheel:</span>
                                </span><br />
                                Profiles of Inspiring Car Owners.
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 xl:h-96"
                                src="https://i.imgur.com/ZfTDchl.png"
                                alt=""
                            />
                        </div>
                        <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud ullamco laboris aliquip ex ea.
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="bg-slate-700/80 rounded-xl w-full">
                    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:py-20">
                        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                            <svg
                                viewBox="0 0 88 88"
                                className="w-full max-w-screen-xl text-gray-800"
                            >
                                <circle
                                    fill="currentColor"
                                    fillOpacity="0.4"
                                    cx="44"
                                    cy="44"
                                    r="15.5"
                                />
                                <circle
                                    fillOpacity="0.1"
                                    fill="currentColor"
                                    cx="44"
                                    cy="44"
                                    r="44"
                                />
                                <circle
                                    fillOpacity="0.1"
                                    fill="currentColor"
                                    cx="44"
                                    cy="44"
                                    r="37.5"
                                />
                                <circle
                                    fillOpacity="0.1"
                                    fill="currentColor"
                                    cx="44"
                                    cy="44"
                                    r="29.5"
                                />
                                <circle
                                    fillOpacity="0.1"
                                    fill="currentColor"
                                    cx="44"
                                    cy="44"
                                    r="22.5"
                                />
                            </svg>
                        </div>
                        <div className="relative grid gap-5 sm:grid-cols-2  lg:grid-cols-4">
                            <div className="px-8 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                                <p className="font-semibold text-gray-200">
                                    Sed ut perspiciatis unde omnis iste
                                </p>
                            </div>
                            <div className="px-8 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                                <p className="font-semibold text-gray-200">
                                    Well, the way they make shows is
                                </p>
                            </div>
                            <div className="px-8 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                                <p className="font-semibold text-gray-200">
                                    Some do not, become nothing again
                                </p>
                            </div>
                            <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                                <p className="font-semibold text-gray-200">
                                    Pommy ipsum smeg head whizz morris
                                </p>
                            </div>
                            <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                                <p className="font-semibold text-gray-200">
                                    Taking the mick middle class bog
                                </p>
                            </div>
                            <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                                <p className="font-semibold text-gray-200">
                                    Sportacus andrew weatherall goose
                                </p>
                            </div>
                            <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                                <p className="font-semibold text-gray-200">
                                    Semi beard cream bun disaster alpha
                                </p>
                            </div>
                            <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                                <p className="font-semibold text-gray-200">
                                    Bro ipsum dolor sit amet gaper dart
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Overview;