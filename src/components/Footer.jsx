import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import DCKLogo from "../assets/DCK.png";

const Footer = () => {
  const footerSections = [
    {
      title: "About Digital Cloud Keepers",
      links: [
        "About Us",
        "Our Mission",
        "Careers",
        "Contact Us",
        "DCK Blog",
        "Investor Relations",
        "Legal",
        "Newsroom",
        "Security Center",
      ],
    },
    {
      title: "Support",
      links: [
        "24/7 Support",
        "Documentation",
        "Knowledge Base",
        "Community Forum",
        "Report Issues",
        "Training Resources",
      ],
    },
    {
      title: "Cloud Services",
      links: [
        "Cloud Hosting",
        "Database Management",
        "Data Analytics",
        "API Services",
        "Backup Solutions",
        "Migration Tools",
        "Performance Monitoring",
        "Cost Optimizer",
      ],
    },
    {
      title: "Data Solutions",
      links: [
        "Data Storage",
        "Data Security",
        "Compliance Tools",
        "Data Recovery",
        "Real-time Sync",
        "Archive Services",
      ],
    },
    {
      title: "Account",
      links: [
        "Login to Dashboard",
        "Billing & Usage",
        "Create Account",
        "Account Settings",
        "Subscription Plans",
      ],
    },
    {
      title: "Products",
      links: [
        "Cloud Infrastructure",
        "Data Warehousing",
        "AI/ML Platform",
        "DevOps Tools",
        "Enterprise Solutions",
        "Mobile Backend",
        "Edge Computing",
        "IoT Platform",
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white rounded-t-2xl bg-gradient-to-b from-sky-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-semibold text-sm">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Live Chat */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    Live Chat
                  </div>
                  <div className="text-xs text-gray-400">Available 24/7</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    +91 9119359554
                  </div>
                  <div className="text-xs text-gray-400">
                    Mon-Fri 9AM-6PM IST
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    info@dckeepers.com
                  </div>
                  <div className="text-xs text-gray-400">
                    Response within 24hrs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-52 h-16  bg-white rounded-lg flex items-center justify-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center w-56 pt-2">
                      <img src={DCKLogo} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-white font-bold text-xl">
                    Digital Cloud Keepers
                  </span>
                  <div className="text-xs text-gray-400">
                    Secure • Scalable • Reliable
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300 ml-4">
                <span>Global - English</span>
                <span>USD $</span>
              </div>
            </div>
          </div>

          {/* Legal Section */}
          <div className="mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="text-xs text-gray-400 max-w-4xl">
              <p className="mb-2">
                Copyright © 2020 - 2025 Digital Cloud Keepers Inc. All Rights
                Reserved. Digital Cloud Keepers and the DCK logo are registered
                trademarks of Digital Cloud Keepers Inc. in the US and other
                countries.
              </p>
              <p>
                Your data is secure with us. We comply with GDPR, SOC 2, and
                industry-leading security standards. By using our services, you
                agree to our Terms of Service and Privacy Policy.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Cookie Policy",
                "GDPR Compliance",
                "Security",
              ].map((text, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🛡️</span>
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
  );
};

export default Footer;
