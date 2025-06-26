import React, { useState, useEffect } from "react";
import DCKNav from "../assets/DCK - Footer.png";
import NavCurrency from "./NavCurrency";
import { Link } from "react-router-dom";

const SecNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menuName) => {
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (subMenuName) => {
    setActiveSubDropdown((prev) => (prev === subMenuName ? null : subMenuName));
  };

  const menuItems = [
    { name: "Hosting", hasDropdown: true },
    { name: "Servers", hasDropdown: true },
    { name: "Forex Servers", hasDropdown: false, link: "/forex-servers" },
    { name: "Proxy Servers", hasDropdown: false, link: "/proxy-servers" },
    { name: "Bulk Email", hasDropdown: false, link: "/bulk-email" },
    { name: "Google Workspace", hasDropdown: false, link: "/google-workspace" },
    { name: "Microsoft 365", hasDropdown: false, link: "/microsoft-365" },
    { name: "LICENSE", hasDropdown: false, link: "/license" },
    { name: "About us", hasDropdown: false, link: "/about-us" },
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
      {
        name: "Cloud Servers",
        hasSubMenu: true,
        subItems: [
          { name: "India", link: "/cloud/india" },
          { name: "Foreign", link: "/cloud/foreign" },
        ],
      },
    ],
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  return (
    <>
      <nav className="bg-cyan-100 border-b border-cyan-200 z-50 sticky top-0">
        <div className="max-w-[2800px] mx-auto px-4">
          <div className="flex items-center h-11">
            <Link to="/" className="flex-shrink-0 w-[180px]">
              <img src={DCKNav} alt="Logo" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 ml-6">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.link && !item.hasDropdown ? (
                    <Link
                      to={item.link}
                      className="uppercase flex items-center px-2 py-2 text-[14px] font-bold text-[#075466] hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="uppercase flex items-center px-2 py-2 text-[14px] font-bold text-[#075466] hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                      <svg
                        className={`ml-2 w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}

                  {/* Main Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-[12px] w-56 bg-white rounded-md shadow-xl border z-50">
                      {dropdownContent[item.name]?.map((subItem, idx) => (
                        <div key={idx} className="relative">
                          {subItem.hasSubMenu ? (
                            <>
                              <button
                                onClick={() => toggleSubDropdown(subItem.name)}
                                className="flex justify-between items-center w-full px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-cyan-50"
                              >
                                {subItem.name}
                                <svg
                                  className={`ml-2 w-4 h-4 transition-transform ${
                                    activeSubDropdown === subItem.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>

                              {activeSubDropdown === subItem.name && (
                                <div className="absolute top-0 left-full mt-0 ml-1 w-48 bg-white border rounded-md shadow-xl z-50">
                                  {subItem.subItems.map((child, i) => (
                                    <Link
                                      key={i}
                                      to={child.link}
                                      className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-cyan-50"
                                      onClick={closeDropdowns}
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={subItem.link}
                              className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-cyan-50"
                              onClick={closeDropdowns}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Currency Component */}
            <div className="ml-auto">
              <NavCurrency />
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {activeDropdown && (
        <div className="fixed inset-0 z-40" onClick={closeDropdowns}></div>
      )}
    </>
  );
};

export default SecNav;
