import React from "react";
import { ChevronUp } from "lucide-react";


export default function Faqnav() {
  
  const navItems = [
    { name: "Home", targetId: "home" },
    { name: "Offers", targetId: "offers" },
    { name: "Why DC keepers?", targetId: "whyDCkeepers" },
    { name: "FAQ", targetId: "faq" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className=" bg-white py-2  sticky z-40 top-11 bg-white/30 backdrop-blur-md shadow-md flex items-center h-10" >
      {/* Sticky Navigation Bar */}
      <div className=" transition-all duration-300 ease-in-out  ">
        <div className="container px-20 sm:pr-0 md:pr-6 lg:pr-96 sticky z-40">
          <div className="bg-gray-300 rounded-full py-[3px] px-5 flex items-center overflow-x-auto ">

            {/* Upward Arrow Icon */}
            <div className="flex-shrink-0 mr-3">
              <ChevronUp className="w-5 text-gray-800" />
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-6 whitespace-nowrap">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item.targetId)}
                  className="text-gray-900 font-medium text-[15px] hover:text-gray-700 transition-colors duration-200 px-2 py-1"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
