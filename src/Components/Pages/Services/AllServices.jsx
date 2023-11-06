import UseAxios from "../../Hooks/useAxios";
import ServiceBanner from "./ServiceBanner";
import ServiceCard from "./ServiceCard";


const AllServices = () => {
    const url = 'http://localhost:3000/services';
    const allService = UseAxios(url);
    return (
        <div>
            <div>
                <ServiceBanner></ServiceBanner>
            </div>
            <div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl  mx-auto my-10 px-2">

                    {allService.map(item => <ServiceCard
                        key={item._id} item={item}></ServiceCard>)}
                </div>
            </div>
        </div>
    );
};

export default AllServices;