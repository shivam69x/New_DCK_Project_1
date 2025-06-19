import React from "react";
import DCKFoot from "../assets/DCK - Footer.png";
import {
  Mail,
  Phone,
  Server,
  Monitor,
  CreditCard,
  Wallet,
  Smartphone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa"; 

const Footer = () => {
  const socialMedia = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp, 
      color: "hover:text-green-500",
      url: "#",
    },
    
    {
      name: "Instagram",
      icon: Instagram,
      color: "hover:text-pink-500",
      url: "https://www.instagram.com/dckeepers/",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "hover:text-blue-600",
      url: "#",
    },
    
  ];

  const services = [
    "Dedicated Hosting",
    "Email Marketing Server",
    "Cloud Hosting",
    "VPS",
    "Reseller Hosting",
    "Shared Hosting",
  ];

  const products = ["Google Workspace", "Licenses"];

  const legal = ["Terms & Conditions", "Privacy policy", "Refund policy"];

  return (
    <footer className="bg-gray-800 text-white py-8 px-12 relative overflow-hidden -mt-[1px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 ">
          {/* Company Info */}

          <div className="">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div className="flex items-center w-40 pt-2 ">
                <img
                  className="bg-gray-100 p-3 rounded-2xl"
                  src={DCKFoot}
                  alt=""
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80 mt-5 w-[400px]">
              Complete solution for online businesses including Domain
              Registration, Web Development, Hosting, VPS Server, and more.
              Working 24/7 at your service.
            </p>
          </div>

          {/* Services */}
          <div className="pr-5 pl-16">
            <h3 className="text-sm font-bold mb-3 border-b border-teal-600 pb-1">
              SERVICES
            </h3>
            <ul className="space-y-2" role="list">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-xs hover:text-teal-200 cursor-pointer transition-colors hover:translate-x-1 transform duration-200"
                  role="listitem"
                >
                  <span className="hover:border-b border-teal-200">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Legal */}
          <div className="pr-10">
            <h3 className="text-sm font-bold mb-3 border-b border-teal-600 pb-1">
              PRODUCTS
            </h3>
            <ul className="space-y-2 mb-6" role="list">
              {products.map((product, index) => (
                <li
                  key={index}
                  className="text-xs hover:text-teal-200 cursor-pointer transition-colors hover:translate-x-1 transform duration-200"
                  role="listitem"
                >
                  <span className="hover:border-b border-teal-200">
                    {product}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold mb-3 border-b border-teal-600 pb-1">
              LEGAL
            </h3>
            <ul className="space-y-2" role="list">
              {legal.map((item, index) => (
                <li
                  key={index}
                  className="text-xs hover:text-teal-200 cursor-pointer transition-colors hover:translate-x-1 transform duration-200"
                  role="listitem"
                >
                  <span className="hover:border-b border-teal-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="pr-16">
            <h3 className="text-sm font-bold mb-3 border-b border-teal-600 pb-1">
              CONTACT US
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 group">
                <Phone
                  size={12}
                  className="text-gray-400 flex-shrink-0 group-hover:text-teal-300 transition-colors"
                />
                <a
                  href="tel:+919119359554"
                  className="text-xs text-gray-300 hover:text-teal-200 transition-colors"
                >
                  +91 9119359554
                </a>
              </div>
              <div className="flex items-center space-x-2 group">
                <Mail
                  size={12}
                  className="text-gray-400 flex-shrink-0 group-hover:text-teal-300 transition-colors"
                />
                <a
                  href="mailto:info@dckeepers.com"
                  className="text-xs text-gray-300 hover:text-teal-200 transition-colors break-all"
                >
                  info@dckeepers.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          {/* Payment Methods */}
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-sm">Payments We Accept</h4>
            <div className="flex gap-3 flex-wrap items-center">
              <img
                src="https://www.siteworx.in/images/mastercard.svg"
                alt="Mastercard"
                className="h-5 w-auto bg-white rounded p-1 shadow-sm hover:scale-105 transition-transform"
              />
              <img
                src="https://www.siteworx.in/images/rupay.svg"
                alt="RuPay"
                className="h-5 w-auto bg-white rounded p-1 shadow-sm hover:scale-105 transition-transform"
              />
              <img
                src="https://www.siteworx.in/images/paypal.svg"
                alt="PayPal"
                className="h-5 w-auto bg-white rounded p-1 shadow-sm hover:scale-105 transition-transform"
              />
              <img
                src="https://www.siteworx.in/images/upi.svg"
                alt="UPI"
                className="h-5 w-auto bg-white rounded p-1 shadow-sm hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mb-4 pr-12">
            <h4 className="font-medium mb-3 text-sm">Follow Us</h4>
            <div className="flex gap-3 flex-wrap">
              {socialMedia.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 transform`}
                    title={social.name}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-xs opacity-60 border-t border-gray-700 pt-3">
          © 2025 DCKeepers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
