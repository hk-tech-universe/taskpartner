import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBolt, FaCrown, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // This is frontend only - replace with actual logic or API call later
        if (!email || !password) {
            setError("Please enter email and password.");
        } else {
            setError("");
        }
    };

    return (
        <div className="relative isolate bg-gray-900 h-screen overflow-hidden">
            {/* Navbar */}
            <nav className="bg-gradient-to-r from-slate-800 to-gray-900 text-white py-5 px-6 sticky top-0 z-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] " style={{ margin: 0 }}>
                <div className="2xl:container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <FaBolt className="text-[#FFD700] text-2xl mt-1" />
                        </div>
                        <span className="font-bold text-xl mr-46 whitespace-nowrap">Task Partner</span>
                    </div>

                    <div className="hidden md:flex space-x-6 text-lg">
                        <Link to="/" className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                            Home
                            <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                        </Link>
                        <Link
                            to="/login"
                            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition-all duration-200 text-white text-base hover:shadow-lg"
                        >
                            Login
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            className="text-white transition-transform duration-200 hover:scale-105 focus:outline-none -ml-5"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                        <div
                            className={` -mt-1.5 fixed top-[76px] left-0 right-0 bg-gradient-to-r from-slate-800 to-gray-900 text-white w-full shadow-md transition-all duration-300 ease-in-out ${isOpen
                                ? "max-h-[300px] opacity-100 translate-y-0"
                                : "max-h-0 opacity-0 -translate-y-4 pointer-events-none overflow-hidden"
                                }`}
                        >
                            <ul className="flex flex-col items-center p-4 space-y-2">
                                <li className="transform transition-transform duration-200 hover:translate-x-1">
                                    <Link
                                        to="/"
                                        className="block py-2 px-3 hover:text-blue-300 transition-colors duration-200 cursor-pointer"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link
                                        to="/login"
                                        className="block py-1.5 px-3 bg-blue-600 hover:bg-blue-700 rounded-md text-center transition-colors duration-200 w-24 mx-auto"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
                  <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="200"
            height="200"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth="0"
          ></path>
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        ></rect>
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>

            {/* Main Content */}
            <div className="flex items-center justify-center min-h-[600px] px-4 sm:px-6 lg:px-8 pt-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl">
                    {/* Text Section */}
                    <div className="text-center sm:text-left sm:w-1/2 lg:w-2/5 ">
                        <h1 className="text-3xl font-bold tracking-tight lg:whitespace-nowrap text-white sm:text-6xl">
                            Welcome to <span className="text-sky-500">Task Partner</span>
                        </h1>
                        <p className="mt-3 text-lg leading-8 text-gray-300">
                            Your Trusted Partner for Managing Tasks
                        </p>
                        <div className="mt-5 flex items-center justify-center sm:justify-start gap-x-6">
                            <button
                                onClick={() => navigate("/register")}
                                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 cursor-pointer"
                            >
                                Try Now →
                            </button>
                        </div>
                    </div>

                    {/* Login Box */}
                    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-full max-w-md relative mt-4">
                        {/* <FaBolt
                            className="absolute top-4 right-4 text-5xl hover:rotate-6 hover:scale-110 transition duration-300"
                            style={{ transform: "rotate(20deg)", color: "#fff" }}
                            onMouseOver={(e) => (e.currentTarget.style.filter = "drop-shadow(0 0 20px #FFD700)")}
                            onMouseOut={(e) => (e.currentTarget.style.filter = "drop-shadow(0 0 10px #FFD700)")}
                            onTouchStart={(e) => (e.currentTarget.style.filter = "drop-shadow(0 0 20px #FFD700)")}
                            onTouchEnd={(e) => (e.currentTarget.style.filter = "drop-shadow(0 0 10px #FFD700)")}
                        /> */}
                        <FaBolt
                            className="absolute top-4 right-4 text-5xl hover:rotate-6 hover:scale-110 transition duration-300"
                            style={{
                                transform: "rotate(20deg)",
                                color: "#fff",
                                filter: "drop-shadow(0 0 10px #FFD700)", // Default glow
                            }}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.filter = "drop-shadow(0 0 20px #FFD700)")
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.filter = "drop-shadow(0 0 10px #FFD700)")
                            }
                            onTouchStart={(e) =>
                                (e.currentTarget.style.filter = "drop-shadow(0 0 20px #FFD700)")
                            }
                            onTouchEnd={(e) =>
                                (e.currentTarget.style.filter = "drop-shadow(0 0 10px #FFD700)")
                            }
                        />

                        <div className="text-center mb-4">
                            <h2 className="text-3xl font-bold sm:text-4xl">Task Partner</h2>
                            <p className="text-gray-300 text-sm sm:text-base">Login to your account</p>
                        </div>

                        <form onSubmit={handleLogin}>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-300"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-6 relative">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-300"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            <div className="flex justify-center w-full">
                                <button
                                    type="submit"
                                    className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded group cursor-pointer"
                                >
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-[#007BFF] via-[#0061D5] to-[#0056B3] absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out">
                                        Login
                                    </span>
                                </button>
                            </div>
                        </form>

                        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

                        <div className="mt-6 text-center">
                            <p className="text-gray-300 text-sm sm:text-base">
                                Don't have an account?{" "}
                                <button
                                    onClick={() => navigate("/register")}
                                    className="text-blue-400 hover:underline hover:text-blue-600 cursor-pointer"
                                >
                                    Sign Up
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
