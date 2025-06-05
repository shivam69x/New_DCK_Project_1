import React from "react";
import { ChevronUp } from "lucide-react";

export default function Faqnav() {
  
  const navItems = [
    "Benefits",
    "Plans and Pricing",
    "Offers",
    "Why DC keepers?",
    "FAQ",
  ];

  return (
    <div className=" bg-white py-2 border-b-0 border-t-2 mb-5 sticky z-40 top-16 bg-white/30 backdrop-blur-md shadow-md" >
      {/* Sticky Navigation Bar */}
      <div className=" transition-all duration-300 ease-in-out  ">
        <div className="container ml-20 mr-5 pr-[500px] right-8 sticky z-40">
          <div className="bg-gray-300 rounded-full py-2 px-5 flex items-center overflow-x-auto ">
            {/* Upward Arrow Icon */}
            <div className="flex-shrink-0 mr-4">
              <ChevronUp className="w-5 h-5 text-gray-700" />
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-6 whitespace-nowrap">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="text-gray-900 font-medium text-sm hover:text-gray-700 transition-colors duration-200 px-2 py-1"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
