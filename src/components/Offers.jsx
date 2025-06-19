import React from "react";

export default function Offers() {
  const plans = [
    {
      name: "Shared Hosting",
      subtitle: "STARTING FROM",
      price: "199",
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
      price: "699",
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
      price: "999",
      features: [
        "2 CPU Cores",
        "2 GB RAM",
        "30 GB Hard Disk-SSD",
        "1TB Bandwidth",
        "1 IP Addresses",
        "Free CentOS WP-Cpanel",
        "99.9% Uptime Guarantee",
      ],
      buttonStyle: "primary",
      bestValue: true,
    },
    {
      name: "Forex Server",
      subtitle: "STARTING FROM",
      price: "1499",
      features: [
        "2 CPU Cores",
        "4 GB RAM",
        "50 GB Hard Disk-SSD",
        "Intel Core i5-3470 4 Cores",
        "8 GB DDR5",
        "1 GBPS Bandwidth",
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
          <h1 className="text-2xl md:text-4xl font-bold text-[#0e3c47] mb-6">
            Most Popular Hosting Plans
          </h1>
          <h2 className="text-[#0e3c47c3] mb-14 text-base">
            Cheap and best Server Hosting provider in India
          </h2>

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
                <h3 className="text-lg font-bold text-[#0e3c47] mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#0e3c47de] mb-4">{plan.subtitle}</p>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#0b2d35]">
                    ₹ {plan.price}
                  </span>
                  <span className="text-[#0e3c47cb]">/mo.</span>
                </div>

                <button
                  className={`w-full py-3 rounded-md font-medium text-sm transition-transform duration-300 ease-in-out transform ${
                    plan.buttonStyle === "primary"
                      ? "bg-[#1c7389] text-white hover:bg-[#0e3c47] hover:scale-105 "
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105"
                  }`}
                >
                  BUY NOW
                </button>
              </div>

              <div>
                <h4 className="font-bold text-base text-[#0b2e36] mb-3">
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
