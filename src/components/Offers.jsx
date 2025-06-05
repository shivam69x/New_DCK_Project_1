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
      subtitle: "Best for entrepreneurs",
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
    <div className="min-h-screen bg-white-to-br from-orange-100 via-orange-50 to-orange-200 mt-10">
      {/* Navigation */}
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Most Popular Hosting Plans
          </h1>
          <h2 className="text-gray-800 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg p-6 ${
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

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-800">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/mo.*</span>
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-transform duration-300 ease-in-out transform ${
                    plan.buttonStyle === "primary"
                      ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105"
                  }`}
                >
                  BUY NOW
                </button>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-3">
                  Key features
                </h4>
                <ul className="space-y-3 list-disc px-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm font-semibold text-gray-800  cursor-pointer hover:text-gray-800"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full mt-5 py-3 px-4 rounded-lg font-medium transition-transform duration-300 ease-in-out transform ${
                  plan.buttonStyle === "primary"
                    ? "border border-gray-800 text-black hover:scale-105"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105"
                }`}
              >
                COMPARE PLANS
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
