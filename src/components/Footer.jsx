import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  CreditCard,
  Smartphone,
  Wallet,
} from "lucide-react";
import DCKLogo from "../assets/DCK.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Hosting",
      links: [
        "Shared Hosting",
        "Cloud Server",
        "Dedicated Server",
        "VPS Hosting",
        "Enterprise Solutions",
      ],
    },
    {
      title: "Support",
      links: [
        "24/7 Support",
        "Documentation",
        "Product Support",
        "Report Issues",
      ],
    },
    {
      title: "Company",
      links: ["About us", "Why DC keepers", "Blog"],
    },
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, color: "text-gray-300" },
    { name: "Twitter", icon: Twitter, color: "text-gray-300" },
    { name: "LinkedIn", icon: Linkedin, color: "text-gray-300" },
    { name: "Instagram", icon: Instagram, color: "text-gray-300" },
    { name: "YouTube", icon: Youtube, color: "text-gray-300" },
    { name: "GitHub", icon: Github, color: "text-gray-300" },
  ];

  return (
    <div className="relative bg-gray-800 text-white -mt-[3px]">
      <footer className="shadow-sm">
        <div className="max-w-screen-xl mx-auto px-6 pb-10">
          {/* Logo */}
          {/* <div className="flex items-center h-auto ">
                        <img src={DCKLogo} alt="DCK Logo" className=" w-24" />
                    </div> */}

          {/* Footer Grid with Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-5">
                <h3 className="text-gray-100 font-semibold text-lg leading-tight mt-10">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-gray-100 transition-colors duration-300 text-base"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Us Section */}
            <div className="space-y-3 mt-10">
              <h3 className="text-gray-100 font-semibold text-lg leading-tight">
                Contact Us
              </h3>
              <div className="space-y-6">
                {/* Live Chat */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 p-3 rounded-xl">
                    <MessageCircle size={22} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-gray-100">
                      Live Chat
                    </p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 p-3 rounded-xl">
                    <Phone size={22} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-gray-100">
                      +91 9119359554
                    </p>
                    <p className="text-sm text-gray-500">Mon–Fri 9AM–6PM IST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 p-3 rounded-xl">
                    <Mail size={22} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-gray-100">
                      info@dckeepers.com
                    </p>
                    <p className="text-sm text-gray-500">
                      Response within 24hrs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-3 mb-4 mt-2">
            <h3 className="text-gray-100 font-semibold text-lg leading-tight">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialMedia.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href="#"
                    className={`${social.color} hover:text-gray-100 transition-colors duration-300 p-2 rounded-lg`}
                    title={social.name}
                  >
                    <IconComponent size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Payments We Accept Section */}

          {/* Bottom Section */}
          <div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 ">
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <span>Global - English</span>
                <span>USD $</span>
              </div>

              {/* Legal Section */}
              <div className="flex flex-wrap gap-4 text-xs text-gray-500 max-w-xl">
                <p className="max-w-full">
                  &copy; 2020 - 2025 Digital Cloud Keepers Inc. All Rights
                  Reserved.
                  <br />
                  Digital Cloud Keepers and the DCK logo are registered
                  trademarks of Digital Cloud Keepers Inc.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Terms of Service", "Privacy Policy", "Security"].map(
                    (text, i) => (
                      <a
                        key={i}
                        href="#"
                        className="hover:text-gray-100 transition-colors duration-300"
                      >
                        {text}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center items-center gap-5 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <span>🔒</span>
                  <span>SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🛡</span>
                  <span>ISO 27001 Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⚡</span>
                  <span>99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🌍</span>
                  <span>Global Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
