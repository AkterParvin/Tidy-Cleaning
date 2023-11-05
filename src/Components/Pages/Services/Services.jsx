import UseAxios from "../../Hooks/useAxios";



const Services = () => {
    const url = 'http://localhost:3000/services';
    const service = UseAxios(url);
    console.log(service);
    return (
        <div>
            
        </div>
    );
};

export default Services;