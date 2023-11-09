import Overview from "../Overview/Overview";
import Services from "../Services/Services";
import Team from "../Team/Team";
import { motion } from "framer-motion";



const Home = () => {
    return (
        <div >
            <motion.div animate={{ x: 100, scale: 1 }} initial={{ scale: 0 }} transition={{type:"tween",duration:5}}>
                <div className="max-w-5xl -ml-3 mt-16 mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">All the Services you want</h2>
                    <p className="mt-4 text-lg dark:text-gray-400">Pellentesque viverra, leo id euismod laoreet, nunc risus molestie orci, vel faucibus quam justo id mauris.</p>
                </div>
            </motion.div>
           
            <Services/>
            <div className="my-8 mx-4">
                <Team></Team>
            </div>
            <div className=" h-screen w-full bg-no-repeat bg-opacity-60 bg-cover bg-fixed flex items-center justify-center " style={{ backgroundImage: 'url(https://i.imgur.com/fmTK67n.jpg)' }}>

                <h2 className="text-white font-bold z-50 text-5xl ">Book Service without hasitation</h2>
                <div className="bg-gray-700/40 z-10 overflow-hidden  h-screen w-full absolute"></div>

            </div>
            <Overview></Overview>

            {/* <h2 className="text-3xl text-center font-bold">This is Home  </h2> */}
        </div>
    );
};

export default Home;