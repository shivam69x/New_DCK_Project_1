import React from 'react';
import { Clock, Headphones, TrendingUp, Cloud, Database } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Clock className="w-12 h-12 text-blue-600" />,
            title: "Instant Activation",
            description: "Get your dedicated server up and running within minutes of order confirmation"
        },
        {
            icon: <Headphones className="w-12 h-12 text-green-600" />,
            title: "24/7 Support",
            description: "Round-the-clock technical support from our expert team based in India"
        },
        {
            icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
            title: "99.9% Uptime",
            description: "Guaranteed uptime with robust infrastructure and redundant systems"
        },
        {
            icon: <Cloud className="w-12 h-12 text-indigo-600" />,
            title: "Cloud Powered",
            description: "Leverage the power of cloud technology for enhanced performance"
        },
        {
            icon: <Database className="w-12 h-12 text-orange-600" />,
            title: "Multi Datacenter",
            description: "Multiple datacenter locations across India for optimal performance"
        }
    ];
    return (
        <>
            {/* Hosting Features Grid */}
            <section className="py-8 px-2 sm:px-6 lg:px-8 bg-white from-gray-100 to-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gray-600 text-lg mb-2">Build For Speed</p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hosting Features</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gradient-to-r shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                                <div className="flex justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;
