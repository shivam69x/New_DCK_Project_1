import { useState } from 'react';

export default function Offers() {
  const [selectedOS, setSelectedOS] = useState('linux');

  const plans = {
    linux: {
      shared: { price: 199, features: ['1 Website', '1 Cpanel account', '2 GB Storage', '5GB Bandwidth', '5 Email Accounts', '3 Sub Domains', '1 Mysql Database'] },
      reseller: { price: 699, features: ['Unlimited Websites', 'Unlimited Cpanel Accounts', '25 GB Storage', 'Unlimited Bandwidth', 'Unlimited Email Accounts', 'Unlimited Sub Domains', 'Unlimited Mysql Database'] },
      vps: { price: 999, features: ['2 CPU Cores', '2 GB RAM', '30 GB Hard Disk-SSD', '1TB Bandwidth', '1 IP Addresses', 'Free CentOS WP-Cpanel', '99.9% Uptime Guarantee'] },
      forex: { price: 1499, features: ['2 CPU Cores', '4 GB RAM', '50 GB Hard Disk-SSD', 'Intel Core i5-3470 4 Cores', '8 GB DDR5', '1 GBPS Bandwidth', '1 IP Address', '99.9% Uptime Guarantee'] }
    },
    windows: {
      shared: { price: 299, features: ['1 Website', '1 Plesk account', '3 GB Storage', '10GB Bandwidth', '10 Email Accounts', '5 Sub Domains', '1 MSSQL Database'] },
      reseller: { price: 899, features: ['Unlimited Websites', 'Unlimited Plesk Accounts', '35 GB Storage', 'Unlimited Bandwidth', 'Unlimited Email Accounts', 'Unlimited Sub Domains', 'Unlimited MSSQL Database'] },
      vps: { price: 1299, features: ['2 CPU Cores', '3 GB RAM', '40 GB Hard Disk-SSD', '1.5TB Bandwidth', '1 IP Addresses', 'Free Windows Server', '99.9% Uptime Guarantee'] },
      forex: { price: 1899, features: ['4 CPU Cores', '6 GB RAM', '75 GB Hard Disk-SSD', 'Intel Core i7-4770 4 Cores', '12 GB DDR5', '1 GBPS Bandwidth', '2 IP Addresses', '99.9% Uptime Guarantee'] }
    }
  };

  const currentPlans = plans[selectedOS];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Most Popular Hosting Plans</h1>
          <p className="text-lg text-gray-600 mb-8">Cheap and best Server Hosting provider in India</p>
          
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shared Hosting */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Shared Hosting</h3>
              <p className="text-sm text-gray-500 mb-4">STARTING FROM</p>
              <div className="text-4xl font-bold text-gray-800">
                ₹ {currentPlans.shared.price}<span className="text-lg text-gray-500">/mo.</span>
              </div>
            </div>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mb-6">
              BUY NOW
            </button>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Key features</h4>
              <ul className="space-y-2">
                {currentPlans.shared.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reseller Hosting */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Reseller Hosting</h3>
              <p className="text-sm text-gray-500 mb-4">STARTING FROM</p>
              <div className="text-4xl font-bold text-gray-800">
                ₹ {currentPlans.reseller.price}<span className="text-lg text-gray-500">/mo.</span>
              </div>
            </div>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mb-6">
              BUY NOW
            </button>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Key features</h4>
              <ul className="space-y-2">
                {currentPlans.reseller.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cloud VPS - Best Value */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 relative border-2 border-green-500">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">Best value</span>
            </div>
            <div className="text-center mb-6 mt-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Cloud VPS</h3>
              <p className="text-sm text-green-600 font-medium mb-2">Best for Entrepreneurs</p>
              <div className="text-4xl font-bold text-gray-800">
                ₹ {currentPlans.vps.price}<span className="text-lg text-gray-500">/mo.</span>
              </div>
            </div>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mb-6">
              BUY NOW
            </button>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Key features</h4>
              <ul className="space-y-2">
                {currentPlans.vps.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Forex Server */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Forex Server</h3>
              <p className="text-sm text-gray-500 mb-4">STARTING FROM</p>
              <div className="text-4xl font-bold text-gray-800">
                ₹ {currentPlans.forex.price}<span className="text-lg text-gray-500">/mo.</span>
              </div>
            </div>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mb-6">
              BUY NOW
            </button>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Key features</h4>
              <ul className="space-y-2">
                {currentPlans.forex.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}