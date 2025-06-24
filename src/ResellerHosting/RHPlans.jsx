import React, { useState, useEffect } from "react";
import { Check, Star, Server, Monitor } from "lucide-react";

const RHPlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOS, setSelectedOS] = useState("linux");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const linuxPlans = [
    {
      name: "Basic Linux",
      price: "180",
      originalPrice: "360",
      savings: "50%",
      description: "Perfect for personal websites and blogs",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "100 GB Bandwidth",
        "Free SSL Certificate",
        "24/7 Support",
        "1-Click WordPress Install",
        "PHP 8.1 Support",
        "MySQL Database",
      ],
      ctaText: "Get Started",
      popular: false,
      os: "linux"
    },
    {
      name: "Professional Linux",
      price: "269",
      originalPrice: "538",
      savings: "50%",
      description: "Ideal for growing businesses and portfolios",
      features: [
        "5 Websites",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Priority Support",
        "Advanced Security Features",
        "Git Integration",
        "Node.js Support",
      ],
      ctaText: "Get Started",
      popular: true,
      os: "linux"
    },
    {
      name: "Business Linux",
      price: "389",
      originalPrice: "778",
      savings: "50%",
      description: "Advanced features for professional websites",
      features: [
        "25 Websites",
        "100 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Premium Support",
        "Daily Backups",
        "Python Support",
        "Redis Cache",
      ],
      ctaText: "Get Started",
      popular: false,
      os: "linux"
    },
    {
      name: "Enterprise Linux",
      price: "589",
      originalPrice: "1,178",
      savings: "50%",
      description: "Maximum performance for high-traffic sites",
      features: [
        "Unlimited Websites",
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Dedicated Support",
        "Advanced Analytics",
        "Load Balancing",
        "CDN Integration",
      ],
      ctaText: "Get Started",
      popular: false,
      os: "linux"
    },
  ];

  const windowsPlans = [
    {
      name: "Basic Windows",
      price: "220",
      originalPrice: "440",
      savings: "50%",
      description: "Perfect for ASP.NET and Windows applications",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "100 GB Bandwidth",
        "Free SSL Certificate",
        "24/7 Support",
        "ASP.NET Core Support",
        "MSSQL Database",
        "Windows Server 2022",
      ],
      ctaText: "Get Started",
      popular: false,
      os: "windows"
    },
    {
      name: "Professional Windows",
      price: "329",
      originalPrice: "658",
      savings: "50%",
      description: "Ideal for .NET applications and businesses",
      features: [
        "5 Websites",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Priority Support",
        "Advanced Security Features",
        "IIS 10 Web Server",
        ".NET Framework Support",
      ],
      ctaText: "Get Started",
      popular: true,
      os: "windows"
    },
    {
      name: "Business Windows",
      price: "449",
      originalPrice: "898",
      savings: "50%",
      description: "Advanced Windows hosting for enterprises",
      features: [
        "25 Websites",
        "100 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Premium Support",
        "Daily Backups",
        "PowerShell Access",
        "Azure Integration",
      ],
      ctaText: "Get Started",
      popular: false,
      os: "windows"
    },
    {
      name: "Enterprise Windows",
      price: "689",
      originalPrice: "1,378",
      savings: "50%",
      description: "Maximum Windows performance and features",
      features: [
        "Unlimited Websites",
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Dedicated Support",
        "Advanced Analytics",
        "Remote Desktop Access",
        "Active Directory Support",
      ],
      ctaText: "Get Started",
      popular: false,
      os: "windows"
    },
  ];

  const currentPlans = selectedOS === "linux" ? linuxPlans : windowsPlans;

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-[40px] font-bold text-[#0e3c47] mb-5">
            Choose Your Perfect
            <span className="text-blue-600"> Hosting Solution</span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed mb-8">
            Get started with complete confidence. Our 30-day money-back
            guarantee means it's risk-free.
          </p>

          {/* OS Selection Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1 shadow-lg">
              <div className="flex">
                <button
                  onClick={() => setSelectedOS("linux")}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedOS === "linux"
                      ? "bg-white text-gray-700 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Linux
                </button>
                <button
                  onClick={() => setSelectedOS("windows")}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedOS === "windows"
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Windows
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={`${plan.os}-${plan.name}`}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                plan.popular ? "ring-4 ring-green-500 ring-opacity-80" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* OS Badge */}
              <div className="absolute top-4 right-4">
              </div>

              <div className="p-8 pt-12">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#0e3c47] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#0e3c47da] text-sm mb-4">
                    {plan.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-gray-400 text-lg line-through">
                        ₹{plan.originalPrice}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Save {plan.savings}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#0e3c47]">
                        ₹{plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">/month</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "rounded-xl border border-white bg-gradient-to-r from-[#0e3c47] to-[#0040514d] text-white shadow-lg backdrop-blur-md transition duration-300 hover:border-white/100 hover:from-[#133c46] hover:to-[#0040515d] hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-blue-50 hover:text-blue-700 border-2 border-transparent hover:border-blue-200"
                  }`}
                >
                  {plan.ctaText}
                </button>

                {/* Renewal Notice */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  Renews at ₹{plan.originalPrice}/mo after first year. Cancel
                  anytime.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/90 border backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-8">
              {selectedOS === "linux" ? "Linux" : "Windows"} Hosting Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  99.9% Uptime
                </h4>
                <p className="text-gray-600 text-xs">
                  Guaranteed reliable hosting
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  Free Migration
                </h4>
                <p className="text-gray-600 text-xs">
                  We'll move your site for free
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  24/7 Support
                </h4>
                <p className="text-gray-600 text-xs">
                  Expert help when you need it
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  {selectedOS === "linux" ? "Open Source" : "Enterprise Ready"}
                </h4>
                <p className="text-gray-600 text-xs">
                  {selectedOS === "linux" 
                    ? "Flexible open-source stack" 
                    : "Microsoft technology stack"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RHPlans;