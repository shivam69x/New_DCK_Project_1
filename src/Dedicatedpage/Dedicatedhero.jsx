import React from 'react';
import Hero10 from "../assets/4103163_1032.jpg";



export default function Dedicatedhero() {
  // Function to handle smooth scroll to pricing table
  const Items = [
    { name: "See All Plans", targetId: "india" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative bg-white from-[#dff6fd] to-[#f7fafe] h-[60vh] min-h-[500px] overflow-hidden"
    >
      <div className="container mx-auto px-6  h-full relative">
        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center ">
          <div className="w-full h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  lg:gap-12 h-full items-center">
              {/* Left Side - Text Content */}
              <div className="flex flex-col justify-center space-y-7  order-1 lg:order-1">
                <h1 className="text-lg lg:text-2xl xl:text-4xl font-bold leading-tight text-[#0a2540]">
                  Dedicated Server
                </h1>
                <p className="text-sm lg:text-lg leading-relaxed text-[#3b3f5c] max-w-lg">
                  Experience reliability and speed like never before! Unleash the power of Linux/Windows India dedicated servers with our high-performance hosting solutions. Subscribe now and save big on your dedicated server with our limited time 20% discount offer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {Items.map((item, index) => (
                    <button
                     key={index}
                     onClick={() => handleScroll(item.targetId)}
                     className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center gap-2">
                        {item.name}
                      </span>
                    </button>
                 ))}
                </div>
              </div>
              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end items-center order-2 lg:order-2 animate-gentle-bounce">
                <div className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px]">
                  <img
                    src={Hero10}
                    className="max-w-2xl h-auto object-cover lg:pl-6 xl:pl-44"
                    alt="Dedicated Server"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

    // <div className="relative min-h-screen bg-white-to-br from-blue-900 via-blue-800 to-teal-800 overflow-hidden">
    //   {/* Main Content */}
    //   <div className="relative z-10 flex items-center min-h-screen">
    //     <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
    //       {/* Left Content */}
    //       <div className="space-y-8 animate-fade-in">
    //         <div className="space-y-4">              
    //           <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
    //             Dedicated Server{' '}
    //             <span className="bg-gray-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
    //               5% OFF
    //             </span>
    //           </h1>
    //         </div>

    //         <p className="text-xl text-gray-900-100 leading-relaxed max-w-2xl">
    //           Experience reliability and speed like never before! Unleash the power of Linux/Windows India dedicated servers with our high-performance hosting solutions. Subscribe now and save big on your dedicated server with our limited time 20% discount offer.
    //         </p>

    //         <div className="flex flex-col sm:flex-row gap-4">
    //           <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
    //             <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    //             <span className="relative flex items-center gap-2">
    //               See All Plans
    //               <Server className="w-5 h-5" />
    //             </span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>