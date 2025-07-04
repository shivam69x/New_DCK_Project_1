import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Download } from "lucide-react";
import DCKLogoPng from "../assets/DCK - Footer.png";
import OrderSummary from "./OrderSummary";

const Invoice = () => {
  const { state } = useLocation();
  const { plan, billing } = state || {};
  const navigate = useNavigate();

  if (!plan || !billing) {
    return (
      <div className="text-center mt-20 text-xl text-gray-700">
        No invoice data found. Please go back and complete your order.
      </div>
    );
  }

  const basePrice = parseInt(plan.price);
  const gst = Math.round(basePrice * 0.18);
  const total = basePrice + gst;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  const handleDownload = () => {
    window.print(); // Print to PDF
  };

  return (
    <>
      <div className="w-3/4 m-auto order-1 lg:order-2 mt-8 mb-10 border-2 rounded-lg ">
        <OrderSummary plan={plan} />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10 mb-10 bg-white shadow border rounded print:shadow-none print:bg-white">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <img
              src={DCKLogoPng}
              alt="Company Logo"
              className="w-40 h-auto mb-2"
            />
            <h2 className="text-lg font-semibold">
              Digital Cloud Keepers Pvt. Ltd.
            </h2>
            <p className="text-sm text-gray-600">
              Vijay Path, Mansarovar, Jaipur, India
              <br />
              GSTIN: 07ABCDE1234F2Z5
              <br />
              Email: info@dckeepers.com
            </p>
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold">Invoice</h1>
            <p className="text-sm text-gray-600">
              Invoice Date: {new Date().toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              Invoice No: INV-{Date.now()}
            </p>
          </div>
        </div>

        {/* Billing Info */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Bill To:</h3>
          <p className="text-sm">{billing.fullName}</p>
          <p className="text-sm">{billing.email}</p>
          <p className="text-sm">{billing.phone}</p>
          <p className="text-sm">
            {billing.streetAddress}, {billing.city}, {billing.state},{" "}
            {billing.zipCode}, {billing.country}
          </p>
        </div>

        {/* Order Summary */}
        <table className="w-full text-sm mb-6 border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Service</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">GST (18%)</th>
              <th className="p-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">{plan.name}</td>
              <td className="p-2 border">{formatPrice(basePrice)}</td>
              <td className="p-2 border">{formatPrice(gst)}</td>
              <td className="p-2 border">{formatPrice(total)}</td>
            </tr>
          </tbody>
        </table>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <p className="text-sm text-gray-700">Online via UPI / Card</p>
        </div>

        {/* Download Button */}
        <div className="flex justify-between items-center mt-8">
          <p className="text-sm text-gray-600">Thank you for your business!</p>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            <Download className="w-4 h-4" />
            Download Invoice
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice;
