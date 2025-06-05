import React from "react";
import WH from "../assets/wh.png"
import VPS from "../assets/vps.png"
import Cloud from "../assets/cloud.png"
import Mail from "../assets/email.png"
import IP from "../assets/ip.png"
import Web from "../assets/web.png"
import PY from "../assets/py.png"
import Forex from "../assets/forex.png"
import Proxy from "../assets/proxy.png"
import Google from "../assets/google.png"
import MS from "../assets/ms.png"
import KEY from "../assets/key.png"

export default function Products() {
  return (
    <section
      id="new-features"
      className="py-8 bg-white sm:py-10 lg:py-16 border rounded-xl border-gray-400 mt-5"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            What We Offer
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            We provide a wide range of services to help your business succeed
            online:
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">

          {/* Feature 1 */}
          <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
            <div className=" h-14  flex justify-center items-center">
              <img src={WH} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Web Hosting
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Fast, dependable, and scalable hosting that keeps your website up
              and running smoothly around the clock.
            </p>
          </div>

          {/* Feature 2 */}
          
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-400 flex flex-col justify-center items-center">
            <div className="w-40 h-14 rounded-full bg-teal-200 flex justify-center items-center">
             <img src={VPS} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              VPS Hosting
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Secure and flexible Virtual Private Servers to handle your
              projects with ease and reliability.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-400 flex flex-col justify-center items-center">
            <div className=" h-14 rounded-full flex justify-center items-center">
              <img src={Cloud} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Cloud Hosting
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Future-proof your business with our reliable cloud hosting
              services that grow alongside you.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-400 flex flex-col justify-center items-center">
            <div className="w-36 h-14 rounded-full  flex justify-center items-center">
              <img src={Mail} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Email Marketing Servers
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Run effective email campaigns with our dedicated servers, built
              for precision and reliability.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="w-44 h-14 rounded-full flex justify-center items-center">
              <img src={IP} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Dedicated /24IP Solution
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Take control with customized IP blocks tailored to meet your
              specific needs.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="w-52 h-14 rounded-full  flex justify-center items-center">
              <img src={Web} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Website Design
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Impress your audience with stunning, modern, and mobile-friendly
              designs crafted to reflect your brand perfectly.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-400 flex flex-col justify-center items-center">
            <div className="w-36 h-14 rounded-full flex justify-center items-center">
            <img src={PY} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Python Hosting
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Hosting made for developers! Run your Python apps on fast, secure,
              and optimized platforms.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="w-36 h-14 rounded-full flex justify-center items-center">
              <img src={Forex} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Forex/Trading Servers
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Gain an edge in trading with ultra-fast and highly secure servers
              built for the financial market.
            </p>
          </div>

          {/* Feature 9 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="w-40 h-14 rounded-ful flex justify-center items-center">
              <img src={Proxy} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Proxy Servers
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Protect your online presence with high-performance proxy solutions
              that enhance privacy and security.
            </p>
          </div>

          {/* Feature 10 */}
          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-400 flex flex-col justify-center items-center">
            <div className="w-40 h-14 rounded-ful flex justify-center items-center">
              <img src={Google} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Google Workspace
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Google Workspace simplifies teamwork with powerful tools like Gmail, Docs, Drive, and Meet, all seamlessly integrated.
            </p>
          </div>

          {/* Feature 11 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="w-44 h-14 rounded-full flex justify-center items-center">
              <img src={MS} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              Microsoft 365
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Microsoft 365 enhances productivity with robust tools like Word, Excel, Teams, and OneDrive, all designed for seamless collaboration.
            </p>
          </div>

          {/* Feature 12 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-400 md:border-t flex flex-col justify-center items-center">
            <div className="w-32 h-14 rounded-ful flex justify-center items-center">
              <img src={KEY} alt="" />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              License
            </h3>
            <p className="mt-5 text-base text-gray-600">
              Ensure smooth operations with secure and reliable licensing solutions. Empower your infrastructure with scalability and performance.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}
