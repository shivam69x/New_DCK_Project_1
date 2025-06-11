import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero10 from "../assets/hero10.png";
import Hero20 from "../assets/hero20.png";
import Hero30 from "../assets/hero30.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      heading: "Fast, secure and reliable web hosting",
      paragraph:
        "Elevate your business with cutting-edge web solutions that drive growth, enhance user experience, and deliver measurable results in today's competitive digital landscape.",
      image: Hero10,
    },
    {
      id: 2,
      heading: "Innovative Cloud Solutions",
      paragraph:
        "Scale your infrastructure with enterprise-grade cloud services designed for modern businesses. Experience unmatched reliability, security, and performance optimization.",
      image: Hero20,
    },
    {
      id: 3,
      heading: "Data-Driven Success",
      paragraph:
        "Unlock the power of analytics and artificial intelligence to make informed decisions, optimize operations, and stay ahead of market trends with our advanced platform.",
      image: Hero30,
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 👈 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] h-[60vh] min-h-[500px] overflow-hidden">
      <div className="container mx-auto px-6 h-full relative">
        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center">
          <div className="w-full h-full flex items-center">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                  index === currentSlide
                    ? "translate-x-0 opacity-100"
                    : index < currentSlide
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
                  {/* Left Side - Text Content */}
                  <div className="flex flex-col justify-center space-y-7 order-1 lg:order-1">
                    <h1 className="text-lg lg:text-2xl xl:text-4xl  font-bold leading-tight text-[#0a2540]">
                      {slide.heading}
                    </h1>
                    <p className="text-sm lg:text-lg leading-relaxed text-[#3b3f5c] max-w-lg">
                      {slide.paragraph}
                    </p>
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex justify-center lg:justify-end items-center order-2 lg:order-2 ">
                    <div className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] ">
                      <img
                        src={slide.image}
                        alt={`Slide ${slide.id}`}
                        className="max-w-3xl h-auto object-cover lg:pl-6 xl:pl-44"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Arrow Navigation */}
          <div className="flex space-x-2 ml-6 ">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-[#94a3b2] "
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-[#94a3b2] "
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
