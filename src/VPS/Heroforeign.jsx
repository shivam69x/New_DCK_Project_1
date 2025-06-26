import React from 'react';
import Hero13 from "../assets/8.png";
import { ArrowRight } from "lucide-react";


export default function Heroforeign() {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relativebg-gradient-to-br from-[#dff6fd] to-[#f7fafe] h-[90vh] min-h-[440px] overflow-hidden"
    >
      <div className="container mx-auto px-6  h-full relative">
        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center ">
          <div className="w-full h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  lg:gap-12 h-full items-center">
              {/* Left Side - Text Content */}
              <div className="flex flex-col justify-center space-y-7  order-1 lg:order-1">
                <h1 className="text-lg lg:text-2xl xl:text-4xl font-bold leading-tight text-[#0a2540]">
                  VPS Hosting - Foreign
                </h1>
                <p className="text-sm lg:text-lg leading-relaxed text-[#3b3f5c] max-w-lg">
                  Uplift your digital landscape with our top-tier foreign VPS solutions, crafted to deliver speed and reliability across international markets – now with a special 20% discount on yearly commitments.
                </p>
              {/* CTA Buttons */}
              <div className="pt-0">
                <button
                  className="group bg-[#126276] hover:bg-[#218aa4] text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center space-x-2 text-base"
                  aria-label="View all hosting plans"
                >
                  <span>See All Plans</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              </div>
              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end items-center order-2 lg:order-2 animate-gentle-bounce">
                <div className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px]">
                  <img
                    src={Hero13}
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