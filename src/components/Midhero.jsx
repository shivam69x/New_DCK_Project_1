import React from "react";
import ALL from "../assets/all.png";
import SECURITY from "../assets/shield.png";
import LIGHT from "../assets/lighting.png";
import DOMAIN from "../assets/domain.png";

const Midhero = () => {
  const features = [
    {
      title: "All-in-one",
      description:
        "All the tools you need to manage your business, from website creation to personalized email.",
      bgColor: "bg-blue-500",
      iconBg: "bg-blue-100",
      icon: ALL,
    },
    {
      title: "Secure",
      description:
        "Keep yourself safe with an included SSL certificate, malware protection, and daily backups.",
      bgColor: "bg-green-500",
      iconBg: "bg-green-100",
      icon: SECURITY,
    },
    {
      title: "Lightning fast",
      description:
        "Benefit from ultra-fast load times and unlimited data traffic, powered by world-class network hubs.",
      bgColor: "bg-orange-500",
      iconBg: "bg-orange-100",
      icon: LIGHT,
    },
    {
      title: "Free domain",
      description: (
        <span>
          Get your domain for free for the first year on{" "}
          <span className="underline decoration-2 underline-offset-2">
            select TLDs
          </span>{" "}
          when you buy a hosting plan.
        </span>
      ),
      bgColor: "bg-green-500",
      iconBg: "bg-green-100",
      icon: DOMAIN,
    },
  ];


  return (
    <>
      <div className="bg-white py-16 px-2 sm:px-3 lg:px-4 border-slate-300 rounded-2xl mt-16  shadow-md [background:radial-gradient(150%_150%_at_50%_10%,white_40%,#63e_110%)] backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-5xl lg:text-3xl font-light text-gray-900 mb-6">
              Everything you need to
              <br />
              <span className="font-medium">build your business online</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              Get started with professional web hosting, domain registration,
              and all the tools you need to create a successful online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-gray-500 hover:border-gray-800 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 border-t-slate-300 border-s-slate-300 border-e-slate-300 bg-white/40 backdrop-blur-md shadow-md"
              >
                {/* Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <div
                    className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center relative`}
                  >
                    {/* Image */}
                    <img src={feature.icon} alt={feature.title} className="w-10 object-contain" />

                    {/* Small colored circle accent */}
                    <div
                      className={`absolute -top-1 -right-1 w-5 h-5 ${feature.bgColor} rounded-full flex items-center justify-center`}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Midhero;