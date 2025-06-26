import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";

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
      <nav className="navbar-container sticky top-0 z-30 bg-white border-b border-gray-200 ">
        <div className="max-w-[2800px] mx-auto lg:pr-[18px] px-4 sm:px-6 lg:px-[140px]">
          <div className="flex justify-between items-center h-[40px]">
            {/* Logo */}

            {/* Right Side - Desktop */}
            <div className="ml-[725px] hidden lg:flex items-center justify-between space-x-[100px]">
              <div className="relative group flex items-center justify-center gap-8 ">
                {/* Login Button / signUp Button*/}

                <div className="flex gap-3">

                  <Link to={"/signup"}>
                  <button className="flex items-center px-2  text-[16px] font-medium py-[2px]  text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 hover:border-blue-600 transition-colors duration-200">
                    {/* <User size={14} className="mr-2" /> */}
                    <svg
                      class="w-[18px] h-[18px] text-gray-800 dark:text-blue-700 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                      />
                    </svg>
                    Sign Up
                  </button>
                  </Link>

                  <Link to={"/login"}>
                    <button className="flex items-center px-2  text-[16px] font-medium py-[2px] text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 hover:border-blue-600 transition-colors duration-200">
                      {/* <User size={14} className="mr-2" /> */}
                      <svg
                        class="w-[18px] h-[18px] text-gray-800 dark:text-blue-700 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                        />
                      </svg>
                      Login
                    </button>
                  </Link>
                </div>

                <span className="pl-[0px] flex items-center  text-gray-900 hover:text-gray-950 text-xs font-medium transition-colors duration-200 pr-[0px]">
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

                <span className="flex items-center text-gray-900 hover:text-gray-950 text-xs font-medium transition-colors duration-200 ">
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
      <div className="sticky z-50 top-0">{/* <SecNav /> */}</div>

      {/* Demo Content */}
    </div>
  );
};

export default Navbar;
