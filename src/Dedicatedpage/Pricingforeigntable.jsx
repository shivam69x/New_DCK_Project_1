import React, { useState } from 'react';
import { Server } from 'lucide-react';

const PricingforeignTable = () => {
  const [selectedOs, setSelectedOs] = useState('linux');
  const servers = [
    {
      processor: "Intel Core i5-13400 6 Cores",
      clock: "2.50GHz Base / 4.60GHz Turbo",
      ram: "32 GB DDR4",
      storage: "1 TB NVMe SSD",
      bandwidth: "100 TB",
      ips: "1 IPv4",
      price: 4999,
      popular: false,
      location: "USA - Los Angeles"
    },
    {
      processor: "Intel Core i7-13700 8 Cores",
      clock: "2.10GHz Base / 5.20GHz Turbo",
      ram: "64 GB DDR4",
      storage: "2 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "1 IPv4",
      price: 7999,
      popular: true,
      location: "USA - New York"
    },
    {
      processor: "AMD Ryzen 7 7700X 8 Cores",
      clock: "4.50GHz Base / 5.40GHz Turbo",
      ram: "32 GB DDR5",
      storage: "1 TB NVMe SSD",
      bandwidth: "100 TB",
      ips: "1 IPv4",
      price: 6999,
      popular: false,
      location: "Canada - Toronto"
    },
    {
      processor: "Intel Xeon E-2378 8 Cores",
      clock: "2.60GHz Base / 4.80GHz Turbo",
      ram: "128 GB DDR4 ECC",
      storage: "4 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "1 IPv4",
      price: 12999,
      popular: false,
      location: "UK - London"
    },
    {
      processor: "AMD EPYC 7443P 24 Cores",
      clock: "2.85GHz Base / 4.00GHz Turbo",
      ram: "256 GB DDR4 ECC",
      storage: "8 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "1 IPv4",
      price: 18999,
      popular: false,
      location: "Germany - Frankfurt"
    },
    {
      processor: "Intel Xeon Gold 5418Y 24 Cores",
      clock: "2.00GHz Base / 4.10GHz Turbo",
      ram: "512 GB DDR5 ECC",
      storage: "16 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "1 IPv4",
      price: 24999,
      popular: false,
      location: "Netherlands - Amsterdam"
    },
    {
      processor: "AMD EPYC 7763 64 Cores",
      clock: "2.45GHz Base / 3.50GHz Turbo",
      ram: "1 TB DDR4 ECC",
      storage: "32 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "1 IPv4",
      price: 35999,
      popular: false,
      location: "France - Paris"
    },
    {
      processor: "Dual Intel Xeon Gold 6448Y 64 Cores",
      clock: "2.10GHz Base / 4.20GHz Turbo",
      ram: "1 TB DDR5 ECC",
      storage: "64 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "5 IPv4",
      price: 49999,
      popular: false,
      location: "Switzerland - Zurich"
    },
    {
      processor: "Dual AMD EPYC 9654 192 Cores",
      clock: "2.40GHz Base / 3.70GHz Turbo",
      ram: "2 TB DDR5 ECC",
      storage: "128 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "10 IPv4",
      price: 79999,
      popular: false,
      location: "Singapore"
    },
    {
      processor: "Quad Intel Xeon Platinum 8490H 240 Cores",
      clock: "1.90GHz Base / 3.50GHz Turbo",
      ram: "4 TB DDR5 ECC",
      storage: "256 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "25 IPv4",
      price: 149999,
      popular: false,
      location: "Japan - Tokyo"
    }
  ];

  return (
    <div id="foreign" className="min-h-screen bg-white from-slate-50 to-blue-50 m-2 mb-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-3xl font-extrabold text-blue-500 drop-shadow-sm tracking-tight">
              Foreign's Best Linux / Windows Dedicated Servers at Affordable Prices
            </h1>
          </div>
        </div>

        {/* Table without scroll */}
        <div>
          {/* Table Header */}
          <div className="bg-teal-600 text-white rounded-t-lg">
            <div className="grid grid-cols-8 gap-10 p-4 font-semibold text-sm lg:text-base">
              <div className="flex items-center">Dedicated Processors</div>
              <div className="flex items-center pl-4">Clock Speed</div>
              <div className="flex items-center pl-10">RAM</div>
              <div className="flex items-center pl-6">Storage</div>
              <div className="flex items-center pl-3">Bandwidth</div>
              <div className="flex items-center pl-10">IPs</div>
              <div className="flex items-center pl-1">Price/Month</div>
              <div className="flex items-center pl-3">Order</div>
            </div>
          </div>

          {/* Server Rows */}
          <div className="bg-gradient-to-r rounded-b-lg shadow-lg overflow-hidden">
            {servers.map((server, index) => (
              <div
                key={index}
                className={`grid grid-cols-8 gap-3 p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors ${server.popular ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                  }`}
              >
                <div className="font-medium text-slate-700">{server.processor}
                  {server.popular && (
                    <span className="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <div className="text-center text-slate-600">{server.clock}</div>
                <div className="text-center text-slate-600">{server.ram}</div>
                <div className="text-center text-slate-600">{server.storage}</div>
                <div className="text-center text-slate-600">{server.bandwidth}</div>
                <div className="text-center text-slate-600">{server.ips}</div>
                <div className="text-center text-slate-600">
                  ₹{server.price.toLocaleString()}
                </div>
                <div className="text-center">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium whitespace-nowrap">
                    Configure Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingforeignTable;
