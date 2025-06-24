import React, { useState, useEffect } from "react";
import DCKNav from "../assets/DCK - Footer.png";
import NavCurrency from "./NavCurrency";
import { Link } from "react-router-dom";

const SecNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
    setActiveSubDropdown(null); // Close sub-dropdown when main dropdown toggles
  };

  const toggleSubDropdown = (itemName) => {
    setActiveSubDropdown(activeSubDropdown === itemName ? null : itemName);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleMenuClick = (item) => {
    if (item.hasDropdown) {
      toggleDropdown(item.name);
    } else if (item.link) {
      // Handle navigation for items with links
      window.location.href = item.link;
    }
  };

  const menuItems = [
    { name: "Hosting", hasDropdown: true },
    { name: "Servers", hasDropdown: true },
    { name: "Forex Servers", hasDropdown: false , link: "/forex-servers" },
    { name: "Proxy Servers", hasDropdown: false , link: "/proxy-servers" },
    { name: "Bulk Email", hasDropdown: false , link: "/bulk-email" },
    { name: "Google Workspace", hasDropdown: false, link: "/googleworkspace" },
    { name: "Microsoft 365", hasDropdown: false },
    { name: "LICENSE", hasDropdown: false, link: "/license" },
    { name: "About us", hasDropdown: false, link: "/about" },
  ];

  const dropdownContent = {
    Hosting: [
      { name: "Shared Hosting", link: "/shared-hosting" },
      { name: "Reseller Hosting", link: "/reseller-hosting" },
      { name: "Python", link: "/python-hosting" },
    ],
    Servers: [
      {
        name: "Dedicated Servers",
        hasSubMenu: true,
        subItems: [
          { name: "India", link: "/dedicatedserver/india" },
          { name: "Foreign", link: "/dedicatedserver/foreign" },
        ],
      },
      {
        name: "VPS",
        hasSubMenu: true,
        subItems: [
          { name: "India", link: "/vps/india" },
          { name: "Foreign", link: "/vps/foreign" },
        ],
      },
      { name: "Cloud Servers",
        hasSubMenu: true,
        subItems: [
          { name: "India", link: "/cloud/india" },
          { name: "Foreign", link: "/cloud/foreign" },
        ], },
    ],
  };

  return (
    <>
      {/* Fixed Navigation Bar - Dynamic margin based on scroll */}
      <nav className={`bg-cyan-100 border-b border-cyan-200 fixed left-0 right-0 z-[9999] w-full transition-all duration-300 ease-in-out ${isScrolled ? 'top-0' : 'mt-0'
        }`}>
        <div className="max-w-[2800px] mx-auto px-0 sm:px-4 lg:px-[35px] lg:pr-[18px]">
          <div className="flex items-center h-11">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center w-[180px] pt-1 relative right-[8px]">
                <Link to={"/"} target="home"><img src={DCKNav} alt="Logo" /></Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2 -ml-[5px]">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.link && !item.hasDropdown ? (
                    <Link
                      to={item.link}
                      className={`uppercase flex items-center px-3 py-2 text-[11px] font-bold text-gray-900 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors duration-200 whitespace-nowrap`}
                    >
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleMenuClick(item)}
                      className={`uppercase flex items-center px-3 py-2 text-[11px] font-bold text-gray-900 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors duration-200 whitespace-nowrap`}
                    >
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</span>
                      {item.hasDropdown && (
                        <svg
                          className={`w-[18px] h-[18px] ml-1 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                  )}

                  {/* Desktop Dropdown */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-xl border border-gray-200 transition-all duration-200 ease-in-out z-[10000] ${activeDropdown === item.name
                        ? "opacity-100 visible scale-100 translate-y-0"
                        : "opacity-0 invisible scale-95 -translate-y-2"
                        }`}
                      style={{
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                      }}
                    >
                      <div className="py-1">
                        {dropdownContent[item.name]?.map((subItem, idx) => (
                          <div key={idx} className="relative">
                            {subItem.hasSubMenu ? (
                              <>
                                <button
                                  onClick={() => toggleSubDropdown(subItem.name)}
                                  className="flex justify-between items-center w-full px-4 py-2 text-sm font-bold text-gray-800 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-150"
                                >
                                  {subItem.name}
                                  <svg
                                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${activeSubDropdown === subItem.name ? "rotate-180" : ""
                                      }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>

                                {/* Submenu */}
                                <div
                                  className={`absolute top-0 left-full mt-0 ml-1 w-48 bg-white border border-gray-200 rounded-md shadow-xl transition-all duration-200 ease-in-out z-[10001] ${activeSubDropdown === subItem.name
                                    ? "opacity-100 visible scale-100"
                                    : "opacity-0 invisible scale-95"
                                    }`}
                                  style={{
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                  }}
                                >
                                  {subItem.subItems.map((child, i) => (
                                    <Link
                                      key={i}
                                      to={child.link}
                                      className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-150"
                                      onClick={closeDropdowns}
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <Link
                                to={subItem.link}
                                className="block px-4 py-2 text-sm font-bold text-gray-800 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-150"
                                onClick={closeDropdowns}
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div><NavCurrency /></div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center ml-auto">
              <button
                onClick={() => toggleDropdown("mobile")}
                className="p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out z-[10000] ${activeDropdown === "mobile" ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
            }`}
        >
          <div className="px-4 py-2 space-y-1 max-w-[2800px] mx-auto">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-[10px] font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-colors duration-200"
                    >
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis uppercase">{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mobile Sub-dropdown */}
                    <div className={`ml-4 mt-1 space-y-1 transition-all duration-200 ${activeDropdown === item.name ? "block" : "hidden"
                      }`}>
                      {dropdownContent[item.name]?.map((subItem, idx) => (
                        <Link
                          key={idx}
                          to={subItem.link}
                          className="block px-3 py-2 text-[10px] text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-colors duration-150"
                          onClick={closeDropdowns}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  item.link ? (
                    <Link
                      to={item.link}
                      className="block px-3 py-2 text-[10px] font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-colors duration-200 uppercase"
                      onClick={closeDropdowns}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="block px-3 py-2 text-[10px] font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-colors duration-200 uppercase"
                      onClick={closeDropdowns}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap - Dynamic height based on scroll */}
      <div className={`transition-all duration-300 ease-in-out ${isScrolled ? 'h-11' : 'h-[43px]'}`}></div>

      {/* Background overlay for desktop dropdowns */}
      {activeDropdown && activeDropdown !== "mobile" && (
        <div className="fixed inset-0 z-[9998]" onClick={closeDropdowns} />
      )}
    </>
  );
};

export default SecNav;