import React, { useState } from "react";
import {FaBolt, FaCrown, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";


const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError("Please fill in all fields.");
            return;
        }

        setError("");

        // Simulate success message
        setTimeout(() => {
            setName("");
            setEmail("");
            setMessage("");
        }, 500);
    };

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
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


            {/* Main Content */}
            <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl mb-28">
                    {/* Contact Info */}
                    <div className="text-center sm:text-left sm:w-1/2 lg:w-2/5">
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-6xl mt-3">
                            Get in Touch with <span className="text-sky-500">Task Partner</span>
                        </h1>
                        <div className="mt-6 space-y-4 text-gray-300">
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-sky-500" />
                                <span>+91 8561324560</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-sky-500" />
                                <span>supportaskpartner@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-md relative mt-4 sm:mt-0">
                        <FaBolt
                            className="absolute top-4 right-4 text-5xl hover:rotate-6 hover:scale-110 transition duration-300"
                            style={{
                                transform: "rotate(15deg)",
                                color: "#fff",
                                filter: "drop-shadow(0 0 10px #FFD700)",
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 20px #FFD700)"}
                            onMouseOut={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 10px #FFD700)"}
                            onTouchStart={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 20px #FFD700)"}
                            onTouchEnd={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 10px #FFD700)"}
                        />
                        <div className="text-center">
                            <h2 className="text-2xl font-bold sm:text-4xl">Contact Us</h2>
                            <p className="text-gray-300 text-sm sm:text-base">We'd love to hear from you</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-900 text-white border border-gray-700"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-900 text-white border border-gray-700"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Enter your message"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-900 text-white border border-gray-700"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                            {error && (
                                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
