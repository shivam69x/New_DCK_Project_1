import React from "react";

export default function Offers() {
  const plans = [
    {
      name: "Shared Hosting",
      subtitle: "STARTING FROM",
      price: "2",
      features: [
        "1 Website",
        "1 Cpanel account",
        "2 GB Storage",
        "5GB Bandwidth",
        "5 Email Accounts",
        "3 Sub Domains",
        "1 Mysql Database",
      ],
      buttonStyle: "primary",
    },
    {
      name: "Reseller Hosting",
      subtitle: "STARTING FROM",
      price: "8",
      features: [
        "Unlimited Websites",
        "Unlimited Cpanel Accounts",
        "25 GB Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Unlimited Sub Domains",
        "Unlimited Mysql Database",
      ],
      buttonStyle: "primary",
    },
    {
      name: "Cloud VPS",
      subtitle: "Best for Entrepreneurs",
      price: "17",
      features: [
        "2 CPU Cores",
        "4 GB RAM",
        "50 GB Hard Disk-SSD",
        "1TB Bandwidth",
        "1 IP Addresses",
        "Free CentOS WP-Cpanel",
        "99.9% Uptime Guarantee",
      ],
      buttonStyle: "primary",
      bestValue: true,
    },
    {
      name: "Cloud VPS",
      subtitle: "STARTING FROM",
      price: "40",
      features: [
        "Intel Core i5-3470 4 Cores",
        "3.20Ghz",
        "8 GB DDR5",
        "240 GB SSD",
        "2000 GBPS Bandwidth",
        "1 IP Address",
        "99.9% Uptime Guarantee",
      ],
      buttonStyle: "primary",
    },
  ];

  return (
    <div  id="offers" className="max-w-full min-h-screen bg-white-to-br from-orange-100 via-orange-50 to-orange-200 mt-10">

      {/* Hero Section */}
      <div className="max-w-[1500px] mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">
            Most Popular Hosting Plans
          </h1>
          <h2 className="text-gray-800 mb-14 text-base">
            Cheap Dedicated Server Hosting provider in India
          </h2>

          {/* <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-gray-700">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 text-green-600 font-bold">✓</span>
              <span>The first choice for domain hosting</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 text-green-600 font-bold">✓</span>
              <span>Reliable online partner</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 text-green-600 font-bold">✓</span>
              <span>24/7 support</span>
            </div>
          </div> */}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[1200px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg px-3 py-5 ${
                plan.bestValue
                  ? "ring-4 ring-green-500 transform scale-105"
                  : ""
              }`}
            >
              {plan.bestValue && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium relative -top-1">
                    Best value
                  </div>
                </div>
              )}

              <div className="text-center mb-6 px-3">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-600 mb-4">{plan.subtitle}</p>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-800">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/mo.*</span>
                </div>

                <button
                  className={`w-full py-3 rounded-md font-medium text-sm transition-transform duration-300 ease-in-out transform ${
                    plan.buttonStyle === "primary"
                      ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 "
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105"
                  }`}
                >
                  BUY NOW
                </button>
              </div>

              <div>
                <h4 className="font-bold text-base text-gray-800 mb-3">
                  Key features
                </h4>
                <ul className="space-y-3 list-disc px-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-xs text-[16px] font-semibold text-gray-900  cursor-pointer hover:text-gray-700"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-4">
                <button
                className={`w-full mt-5 py-2 px-3 rounded-lg font-medium transition-transform duration-300 ease-in-out transform text-sm ${
                  plan.buttonStyle === "primary"
                    ? "border border-gray-800 text-black hover:scale-105"
                    : "border border-gray-300 text-gray-900 hover:bg-gray-50 hover:scale-105"
                }`}
              >
                COMPARE PLANS
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
