import { useNavigate } from "react-router-dom";

const Error = () => {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/');
    }
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-teal-200 via-sky-200 to-yellow-200" >
                <section className="border-2 bg-gray-100 border-sky-400 rounded-xl shadow-xl shadow-slate-600 p-16 flex justify-center items-center flex-col">
                    <h2 className="text-5xl my-6 font-bold text-sky-600">Opppsss!!!</h2>
                    <button onClick={handleClick} className="btn btn-sm btn-info btn-outline">Go Home</button>
                </section>
            </div>

        </div>
    );
};

export default Error;