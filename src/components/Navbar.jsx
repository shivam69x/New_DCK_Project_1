import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ShoppingCart, User } from "lucide-react";
import Midhero from "./Midhero";
import HeroImg from "../assets/4103163_1032.jpg";
import Offers from "./Offers";
import Hero from "./Hero";
import DCK from "./DCK";
import Faqnav from "./Faqnav";
import Products from "./Products";
import AboutUs from "./Aboutus";
import FAQsection from "./FAQsection";
import Whyus from "./Whyus";
import Clients from "./Clients";
import Aim from "./Aim";
import SecNav from "./SecNav";
import { Link, NavLink } from "react-router-dom";
import NavCurrency from "./NavCurrency";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div className=" ">
      {/* Top Navigation Bar */}
      <nav className="navbar-container sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex justify-between items-center h-[40px]">
            {/* Logo */}

            {/* Right Side - Desktop */}
            <div className="hidden lg:flex items-center space-x-[50px]">
              <div className="relative group flex items-center gap-8">
                <span className="flex items-center text-gray-900 hover:text-gray-950 text-xs font-medium transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 relative right-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  info@dckeepers.com
                </span>

                <span className="flex items-center text-gray-900 hover:text-gray-950 text-xs font-medium transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 relative right-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  +91 9119359554
                </span>
              </div>

              {/* Login Button / signUp Button*/}

              <div className="flex gap-3 ">
                <button className="flex items-center px-2  text-[16px] font-medium py-[2px]  text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 hover:border-blue-600 transition-colors duration-200">
                  <User size={14} className="mr-2" />
                  Sign Up
                </button>

                <Link to={"/login"}>
                  <button className="flex items-center px-2  text-[16px] font-medium py-[2px] text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 hover:border-blue-600 transition-colors duration-200">
                    <User size={14} className="mr-2" />
                    Login
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex gap-3 justify-end relative z-50 "> <NavCurrency/> </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-800 transition-colors duration-200"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white border-t border-gray-200`}
        >
          <div className="px-4 py-3 space-y-3">
            <div className="border-t border-gray-200 pt-3 mt-3">
              <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200 justify-center">
                <User size={16} className="mr-2" />
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation Bar */}
      <SecNav />

      {/* Demo Content */}
      <div className="bg-slate-200 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 ">
          {/* <div className="text-center flex items-center flex-col">
            <img className="w-2/4 mb-10 -mt-10" src={HeroImg} alt="" />
            <h1 className="text-4xl font-light text-gray-800 mb-6">
              Fast, secure and reliable web hosting
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              At DC Keepers, we redefine the way businesses power their digital
              presence. Whether you are just starting out, scaling up or already
              a well-established company, we have got the expertise to deliver
              solutions designed just for you.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Clean Design</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Minimalist approach with subtle borders, gentle colors, and plenty of white space 
                  for a professional appearance.
                </p>
              </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Dual Navigation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Two-tier navigation system with utility links on top and main navigation 
                  below, just like the original design.
                </p>
              </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Mobile Ready</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Responsive design that adapts beautifully to mobile devices with 
                  collapsible menus and touch-friendly interactions.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-light text-gray-800 mb-4">
                Professional Web Services Navigation
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                This navigation recreates the clean, professional aesthetic of one.com with 
                its distinctive dual-bar layout, subtle green accent, and comprehensive service categories. 
                Perfect for web hosting, domain, and digital service websites.
              </p>
            </div>
          </div> */}
        </div>

        <Hero />
        <Faqnav />
        <DCK />

        <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
          <Midhero />

          <Offers />

          <Products />

          <AboutUs />

          <Whyus />

          <Aim />

          <FAQsection />
        </div>
        <div className="mt-20">
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
