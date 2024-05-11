import { useState } from 'react';
import logo from '../../assets/images/clepher-logo-black.png';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/dashboard');
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center sm:px-6 lg:px-8 bg-blue-50">
            <div className="max-w-lg w-full p-6 bg-slate-50 rounded-3xl shadow-md">
                <img src={logo} className="mx-auto w-44 mt-4" />
                <p className="mt-3 text-center text-gray-400">Log in to access your account</p>
                <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 focus:border-gray-300 focus:ring-gray-300 placeholder-gray-400 text-gray-500 rounded-lg ring-offset-1 bg-white accent-white"
                        placeholder="E-mail Address"
                    />

                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 focus:border-gray-300 focus:ring-gray-300 placeholder-gray-400 text-gray-500 rounded-lg ring-offset-1 bg-white accent-white"
                        placeholder="Password"
                    />

                    <button
                        type="submit"
                        className="w-full flex justify-center p-4 text-sm rounded-lg text-white bg-blue-600 hover:bg-blue-700"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>

                    <div className="mt-3">
                        <a href="#" className="text-base text-gray-700">
                            Forgot password?
                        </a>
                        <p className="text-gray-300 text-base mt-3">
                            Clever Messenger &copy; {new Date().getFullYear()}
                        </p>
                    </div>
                </form>
            </div>
            <a href="#" className="text-base text-gray-700 mt-4">
                Don't got a Clever Messenger account yet?
            </a>
        </div>
    );
}

export default SignIn;
