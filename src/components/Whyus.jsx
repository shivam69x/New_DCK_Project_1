import React from "react";
import WhyImage from "../assets/2.png";

export default function Whyus() {
  return (
    <section className="py-16 px-1 relative xl:mr-0 lg:mr-5 mr-0 border border-slate-300 bg-white rounded-2xl mt-16 bg-gradient-to-t from-sky-100 shadow-md">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Right Image */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                className="sm:mt-5 sm:ml- w-full h-full rounded-3xl object-cover"
                src={WhyImage}
                alt="about Us"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-slate-950 text-4xl font-bold leading-relaxed">
                  Why Choose DC Keepers ?
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <ol className="list-disc list-inside text-lg font-semibold text-gray-700 space-y-2">
                    <li>Experienced Team - We know what it takes to provide the best service, and we are here to help you in every step.</li>
                    <li>Customized Solutions - Your business is unique, so are your needs. We offer solutions designed to fit your requirements.</li>
                    <li>Affordable Pricing - We believe in offering pocket friendly & excellent services with No hidden fees.</li>
                    <li>Innovative Technology - We always try to evolve and bring you the latest technology to keep your business ahead of your competitors.</li>
                    <li>Reliable Support - Our support team is always ready to assist you and solve your issues.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
