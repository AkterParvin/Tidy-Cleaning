import Overview from "../Overview/Overview";
import Services from "../Services/Services";
import Team from "../Team/Team";




const Home = () => {
    return (
        <div >
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