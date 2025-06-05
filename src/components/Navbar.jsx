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
import DCKLogo from "../assets/DCK.png";
import Aim from "./Aim";
import Footer from "./Footer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Domain");

  const navigationLinks = [
    { name: "Domain", href: "#domain", hasDropdown: true },
    { name: "About", href: "#about", hasDropdown: true },
    { name: "Website", href: "#website", hasDropdown: true },
    { name: "Contact", href: "#Contact", hasDropdown: true },
    { name: "Hosting", href: "#hosting", hasDropdown: true },
    { name: "Tools", href: "#tools", hasDropdown: true },
  ];

  const rightNavItems = [
    { name: "Plans & pricing", href: "#plans" },
    { name: "Helpdesk", href: "#helpdesk" },
    { name: "Resources", href: "#resources", hasDropdown: true },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false);
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
    <div className="bg-white">
      {/* Top Navigation Bar */}
      <nav className="navbar-container sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center w-56 pt-2">
                <img src={DCKLogo} alt="" />
              </div>
            </div>

            {/* Right Side - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {rightNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => handleLinkClick(item.name)}
                    className="flex items-center text-gray-900 hover:text-gray-950 text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </button>
                </div>
              ))}

              {/* Login Button */}
              <button className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200">
                <User size={16} className="mr-2" />
                Login
              </button>

              {/* Cart */}
              {/* <button className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button> */}
            </div>

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
            {rightNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.name)}
                className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </button>
            ))}

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
      <nav className="bg-cyan-100 border-b border-cyan-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 overflow-x-auto">
            <div className="hidden lg:flex items-center space-x-8 cursor-pointer">
              {navigationLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <button
                    onClick={() => handleLinkClick(link.name)}
                    className={`flex items-center  text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                      activeLink === link.name
                        ? "text-gray-900 border-b-2 border-gray-950 pb-4"
                        : "text-gray-900 hover:text-gray-950 pb-4"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Mobile Secondary Nav */}
            <div className="lg:hidden flex items-center space-x-6 overflow-x-auto">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.name)}
                  className={`flex items-center text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeLink === link.name
                      ? "text-gray-800 border-b-2 border-gray-800 pb-4"
                      : "text-gray-600 hover:text-gray-800 pb-4"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className="ml-1" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

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

        <div className="max-w-6xl mx-auto px-4 py-1 ">
          <Midhero />

          <Offers />

          <Products />

          <AboutUs />

          <Whyus />

          <Aim />

          <FAQsection />

          <Clients />
        </div>
        <div className="min-h-screen mt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
