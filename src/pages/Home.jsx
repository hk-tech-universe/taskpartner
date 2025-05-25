import { useEffect, useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react"
import { FaBolt } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import "../App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    // Add animation classes after component mounts
    const heading = document.getElementById("hero-heading")
    const paragraph = document.getElementById("hero-paragraph")

    if (heading) heading.classList.add("animate-zoom-in")
    if (paragraph) paragraph.classList.add("animate-fade-in")

    // Scroll to section if hash is present
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location]);

  const services = [
    { title: "Shopping", description: "We help you shop for groceries, essentials, and more." },
    { title: "Handling Couriers/Parcel", description: "Receive, send, or manage parcels with ease." },
    { title: "Home Maintenance", description: "Fix household issues like plumbing or electrical." },
    { title: "Pet Care", description: "Feeding, walking, and caring for your beloved pets." },
    { title: "Gardening Works", description: "Keep your garden fresh and beautiful with our help." },
    { title: "Events Support", description: "Setup, manage, or assist with personal or business events." },
    { title: "Cleaning Services", description: "From light dusting to deep cleaning, we do it all." },
    { title: "Personal Tasks", description: "Errands tailored to your individual daily needs." },
  ];

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-slate-800 to-gray-900 text-white py-5 px-6 sticky top-0 z-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" style={{ margin: 0 }}>
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
            <ScrollLink
              to="about"
              smooth={true}
              className="hover:text-blue-300 transition-colors duration-200 cursor-pointer"
            >
              About
              <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-300 transition-colors duration-200 cursor-pointer"
            >
              Services
              <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </ScrollLink>
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
                <li className="transform transition-transform duration-200 hover:translate-x-1">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    className="block py-2 px-3 hover:text-blue-300 transition-colors duration-200 cursor-pointer"
                  >
                    About
                  </ScrollLink>
                </li>
                <li className="transform transition-transform duration-200 hover:translate-x-1">
                  <ScrollLink
                    to="services"
                    smooth={true}
                    className="block py-2 px-3 hover:text-blue-300 transition-colors duration-200 cursor-pointer"
                  >
                    Services
                  </ScrollLink>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 via-gray-800 to-blue-900 text-white py-11 px-6">
        <div className="2xl:container mx-auto">
          <div className="flex justify-center items-center text-center h-[80vh]">
            {/* <div className="max-w-2xl">
              <h1
                id="hero-heading"
                className="text-5xl text-white md:text-6xl font-bold mb-6 opacity-0 transition-all duration-1000 ease-out sm:whitespace-nowrap"
              >
                Welcome to <span className="text-sky-500">Task Partner</span>
              </h1>
              <p
                id="hero-paragraph"
                className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-0 transition-all duration-1000 ease-out delay-500"
              >
                Let us handle your tasks, so you can focus on what matters most.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors cursor-pointer"
              >
                Get Started
              </button>
              <p className="text-lg mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-300 hover:text-blue-500 transition-colors cursor-pointer">
                  Login
                </Link>
              </p>
            </div> */}
            <div className="max-w-3xl text-center md:text-left">
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white opacity-0 animate-fade-in"
              >
                Welcome to <span className="text-sky-400">Task Partner</span>
              </h1>
              <p
                id="hero-paragraph"
                className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 opacity-0 animate-fade-in delay-300"
              >
                Let us handle your tasks, so you can focus on what matters most.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigate("/login")}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  🚀 Get Started
                </button>
                <p className="text-gray-400 text-base sm:text-lg">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-sky-400 underline underline-offset-4 hover:text-sky-300 transition duration-200"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="2xl:container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://media.istockphoto.com/id/1303877287/vector/paper-checklist-and-pencil-flat-pictogram.jpg?s=612x612&w=0&k=20&c=NoqPzn94VH2Pm7epxF8P5rCcScMEAiGQ8Hv_b2ZwRjY="
                    alt="Errand icon"
                    width={80}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Efficient Task Management</h3>
                <p className="text-gray-600 text-center">
                  Leave your tasks to us and focus on what’s important. Your convenience comes first.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NAjyrb8b2nyXgvVZNU66kLHoBsN4l1PnCQ&s"
                    alt="Errand icon"
                    width={80}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Convenient Task Solutions</h3>
                <p className="text-gray-600 text-center">
                  Simplify your day with our convenient services designed to save your time and effort.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://www.delom.com.sg/images/109692e4f2f9663905efd36fc162b441.png"
                    alt="Errand icon"
                    width={70}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Your Trusted Partner</h3>
                <p className="text-gray-600 text-center">
                  Count on us to take care of your work with professionalism and care, ensuring peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 bg-gray-50">
        <section className="bg-white py-12 animate__animated animate__fadeIn">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {[
                {
                  step: "1",
                  title: "Sign Up or Login",
                  description: "Create an account or login to access our services.",
                },
                {
                  step: "2",
                  title: "Book a Service",
                  description: "Choose from a variety of professional services.",
                },
                {
                  step: "3",
                  title: "Relax and Enjoy",
                  description: "Let us handle your tasks while you focus on what matters.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-100 p-6 rounded-lg shadow-xl hover:shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Services Section */}
      <div className="py-5" id="services">
        <section className="py-16 px-4 pl-0.5 bg-white flex flex-col justify-center items-center md:flex-row">
          {/* Updated "Our Services" Section with grid layout */}
          <div className="w-full md:w-1/2 pl-6 md:pl-0 md:ml-12">
            <h2 className="text-3xl text-center font-bold mb-12">Our Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center bg-gray-200 p-6 rounded-lg shadow-md w-full md:w-[330px] h-[70px]"
                >
                  <ChevronRight className="text-blue-500 mr-4 text-2xl" />
                  <span className="text-xl">{service.title}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-12">
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors cursor-pointer text-md my-10 -mt-10"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Why Choose Task Partner Section (Unchanged) */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 sm:pl-28 pl-13 pr-6 mb-12 md:mb-0 md:-mt-29">
            <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
              Why Choose Task Partner?
            </h2>
            <ul className="space-y-10">
              {[
                {
                  text: "Time-Saving",
                  description: "Save your time and energy – let us handle your tasks.",
                },
                {
                  text: "Convenience",
                  description: "Experience the ease of having tasks managed for you.",
                },
                {
                  text: "Reliability",
                  description: "Trust our professionals to get the job done efficiently.",
                },
                {
                  text: "Quality Service",
                  description: "Enjoy top-notch service from our skilled and dedicated team.",
                },
              ].map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="text-blue-500 text-3xl">✓</span>
                  <div>
                    <h3 className="text-2xl font-bold">{benefit.text}</h3>
                    <p className="text-gray-600 text-lg">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>



      {/* Contact Us Section */}
      <section className="py-16 px-6 bg-blue-900 text-white text-center">
        <div className="container mx-auto">
          <p className="text-xl max-w-2xl mx-auto mb-1">Have questions or ready to get started?</p>
          <div>
            <p className="text-xl max-w-2xl mx-auto mb-5">Reach out to us today and let us know how we can help.</p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-blue-900 hover:bg-gray-200 hover:shadow-2xl font-bold py-3 px-8 rounded-full transition-colors cursor-pointer"
          >
            Contact Us
          </button>
          <p className="text-lg mt-4">
            Ready to use our services?{" "}
            <Link to="/login" className="text-blue-300 hover:text-blue-500 transition-colors cursor-pointer">
              Sign In
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>
            <span className="text-white">©</span>
            {new Date().getFullYear()} Task Partner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

