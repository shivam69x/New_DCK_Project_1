import React from 'react';
import { Clock, Headphones, TrendingUp, Cloud, Database, Shield, Zap , Server } from 'lucide-react';

const Pricingindia = () => {
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

  const mainFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Amazing Performance",
      description: "Though Dedicated server hosting is a more expensive option than other types of web hosting, it can offer an amazing and affordable performance for your website."
    },
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: "Full Customization",
      description: "You can customize the server to your needs. This means you can optimize your website's performance to ensure fast load times."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Enhanced Security",
      description: "It offers high levels of security as you won't be sharing the server with other users. Thus, getting you full control over the security measures."
    }
  ];

  return (
    <div className="min-h-screen bg-white from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-8 px-2 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Dedicated Server Hosting
              <span className="block text-gray-750">Affordable Performance for Your Website</span>
            </h1>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're just starting out with your business's website or looking for ways to increase your sales online, 
            you must have come across the advice of choosing a dedicated server as a web hosting solution. There are multiple 
            options in the market that can offer reliable performance. But if you want the best and affordable performance 
            for your website, it's worth considering all the options including what dedicated server hosting can offer.
          </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-8 px-2 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Main Dedicated Server Hosting Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Pricingindia;



      // {/* Footer */}
      // <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      //   <div className="max-w-7xl mx-auto">
      //     <div className="grid md:grid-cols-4 gap-8">
      //       <div>
      //         <div className="flex items-center space-x-3 mb-4">
      //           <Globe className="w-8 h-8 text-blue-400" />
      //           <h3 className="text-xl font-bold">ServerIndia</h3>
      //         </div>
      //         <p className="text-gray-400">
      //           Leading dedicated server hosting provider in India, delivering reliable and affordable solutions.
      //         </p>
      //       </div>
            
      //       <div>
      //         <h4 className="text-lg font-semibold mb-4">Services</h4>
      //         <ul className="space-y-2 text-gray-400">
      //           <li><a href="#" className="hover:text-white transition-colors">Dedicated Servers</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Cloud Hosting</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">VPS Hosting</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Shared Hosting</a></li>
      //         </ul>
      //       </div>
            
      //       <div>
      //         <h4 className="text-lg font-semibold mb-4">Support</h4>
      //         <ul className="space-y-2 text-gray-400">
      //           <li><a href="#" className="hover:text-white transition-colors">24/7 Support</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Server Status</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
      //         </ul>
      //       </div>
            
      //       <div>
      //         <h4 className="text-lg font-semibold mb-4">Contact</h4>
      //         <div className="space-y-2 text-gray-400">
      //           <p>📧 support@serverindia.com</p>
      //           <p>📞 +91-8000-123-456</p>
      //           <p>🏢 Mumbai, Delhi, Bangalore</p>
      //           <p>🌐 Available 24/7/365</p>
      //         </div>
      //       </div>
      //     </div>
          
      //     <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      //       <p>&copy; 2025 ServerIndia. All rights reserved. | Made with ❤️ in India</p>
      //     </div>
      //   </div>
      // </footer>