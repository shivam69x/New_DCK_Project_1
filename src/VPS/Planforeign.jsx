import React from 'react'

const Planforeign = () => {
    const plans = [
        {
            name: "Business Plan",
            subtitle: "START FROM",
            price: "949",
            features: [
                "2 CPU Cores",
                "2 GB RAM",
                "30 GB Hard Disk-SSD",
                "1TB Bandwidth",
                "1 Dedicated IP",
                "Free CentOS WP-Cpanel",
                "FREE Set Up!!",
                "99.9% Uptime Guarantee",
            ],
            buttonStyle: "primary",
        },
        {
            name: "Traffic Plan",
            subtitle: "START FROM",
            price: "1799",
            features: [
                "2 CPU Cores",
                "4 GB RAM",
                "80 GB Hard Disk-SSD",
                "1TB Bandwidth",
                "1 Dedicated IP",
                "Free CentOS WP-Cpanel",
                "FREE Set Up!!",
                "99.9% Uptime Guarantee",
            ],
            buttonStyle: "primary",
            bestValue: true,
        },
        {
            name: "Standard Plan",
            subtitle: "Best for Entrepreneurs",
            price: "2799",
            features: [
                "4 CPU Cores",
                "6 GB RAM",
                "120 GB Hard Disk-SSD",
                "2TB Bandwidth",
                "1 Dedicated IP",
                "Free CentOS WP-Cpanel",
                "FREE Set Up!!",
                "99.9% Uptime Guarantee",
            ],
            buttonStyle: "primary",
        },
        {
            name: "Enterprise Plan",
            subtitle: "START FROM",
            price: "3699",
            features: [
                "4 CPU Cores",
                "8 GB RAM",
                "200 GB Hard Disk-SSD",
                "2TB Bandwidth",
                "1 Dedicated IP",
                "Free CentOS WP-Cpanel",
                "FREE Set Up!!",
                "99.9% Uptime Guarantee",
            ],
            buttonStyle: "primary",
        },
    ];

    return (
        <div id="plan" className="max-w-full min-h-screen bg-white-to-br from-orange-100 via-orange-50 to-orange-200 mt-10">

            {/* Hero Section */}
            <div className="max-w-[1500px] mx-auto py-16">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-blue-500 drop-shadow-sm tracking-tight">
                        Best Foreign VPS Hosting at Affordable Price
                    </h1>
                    <p>
                        Select Your
                    </p>
                    <h2 className="text-gray-800 text-xl font-bold mb-14 text-base">
                        Foreign VPS Hosting
                    </h2>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[1200px]">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-lg shadow-lg px-3 py-5 ${plan.bestValue
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
                                    <span className="text-xl font-bold text-gray-800">
                                        INR 
                                    </span>
                                    <span className="text-3xl font-bold text-gray-800"> {plan.price}</span>
                                     
                                    <span className="text-gray-600"> p/mo.*</span>
                                </div>


                                <button
                                    className={`w-full py-3 rounded-md font-medium text-sm transition-transform duration-300 ease-in-out transform ${plan.buttonStyle === "primary"
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Planforeign ;
