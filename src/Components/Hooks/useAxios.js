import axios from "axios";
import { useEffect, useState } from "react";


const UseAxios = (url) => {
    const [service, setService] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setService(res.data);
            })
    }, [url])
    return service
};

export default UseAxios;