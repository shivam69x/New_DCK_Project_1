import React from "react";
import Himage from "../assets/4.png";

const Hero = () => {
  return (
    <div className="">
      <section className="py-12 bg-white sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <h1 className="mt-6 text-1xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Fast, secure and reliable web hosting
                </span>{" "}
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                At DC Keepers, we redefine the way businesses power their
                digital presence. Whether you are just starting out, scaling up
                or already a well-established company, we have got the expertise
                to deliver solutions designed just for you.
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                  role="button"
                >
                  {" "}
                  Start Exploring Inspiration{" "}
                </a>
              </div>
            </div>

            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 ml-[940px] animate-gentle-bounce z-50">
              <img src={Himage} alt="" />
            </div>

            <div className="relative  inline-block">
              {/* Spinning Yellow Cube */}
              <div className="absolute -top-[860px] left-[1260px]">
                <button className="animate-spin-slow w-32 h-32 bg-yellow-400/40 rounded-3xl"></button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
