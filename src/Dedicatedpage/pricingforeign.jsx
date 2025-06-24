import React from 'react';
import { Clock, Headphones, TrendingUp, Cloud, Database, Shield, Zap, Globe, Server, CheckCircle } from 'lucide-react';

const Pricingforeign = () => {
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
    <div className="min-h-screen bg-white from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-whiite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Best Linux Dedicated Server Providers in 2025
            </h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              The majority of server providers in the market guarantee cheap web hosting services. They even have pre-built hosting packages that include all the tools you will be needing to expand your company's online presence, such as a free domain name, unlimited storage, feature-rich cPanel, a one-click install among others. Yet, many of them do not specify that these offered resources still have some restrictions. The result is these restrictions lead to the shutdown of your website whenever it suffers a spike in traffic. You must pick the most reliable hosting company if you intend to successfully establish your website in the online world. Herein lies the value of web hosting services like by Digital Keepers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Main Dedicated Server Hosting Features:
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Digital Keepers team understands that companies want a hosting solution that can meet every demand of their expanding online presence. One of the reasons we prioritize providing the best Linux dedicated hosting services is due to this only. You won't need to be concerned about hosting restrictions with our Linux Dedicated hosting because you will be having total control over your server. Want it better still? We also allow you to customize your hosting plans so that you truly receive the tools required to expand your internet presence and receive the greatest value with our services.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Without any additional costs or hidden usage restrictions, our options are highly affordable. Thus, if you are searching for a reliable and adaptable hosting solution that can meet the demands of your expanding online presence, you can choose Digital Keepers Linux Dedicated Server hosting.
            </p>
          </div>
        </div>
      </section>

      {/* Hosting Features Grid */}
      <section className="py-8 px-2 sm:px-3 lg:px-4  bg-white from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg mb-2">Build For Speed</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hosting Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
    </div>
  );
};

export default Pricingforeign;