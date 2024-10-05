import UserContext from "../utils/useContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mascot from "../assets/mascot.png";

import GoogleLogin from "./GoogleLogin";


const Login = () => {
    const { user, setUser } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Assuming setUser updates the user in your context
        setUser({ ...user, name: name, email: email, password: password, login: true });
        history('/');
    };


    return (
        <div className="flex flex-wrap items-center justify-around h-screen bg-gray-100">
            <div  >
                <img src={Mascot} alt="mascot" className="w-full shadow-sm -mt-24" />
            </div>
            <div className="bg-white p-8 w-1/2 rounded-lg shadow-lg ">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form className="mt-4" onSubmit={handleLogin} >
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Enter Name" className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="
                        Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded border border-gray-200 outline-none focus:border-gray-500" />
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 py-3 rounded text-white hover:bg-yellow-400">Login</button>
                </form>
                <div className="flex items-center w-full my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500 font-semibold">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="flex justify-center">
                    <GoogleLogin/>
                </div>

            </div>
        </div>
    )
}

export default Login;