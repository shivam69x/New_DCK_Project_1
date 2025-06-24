import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SecNav from "./components/SecNav";
import SignUp from "./pages/SignUp";
import SharedHostingpage from "./Products/SharedHostingpage";
import ResellerHostingPage from "./ResellerHosting/ResellerHosting";
import PythonHostingPage from "./PythonHosting/PythonHosting";
import ForexHosting from "./ForexHosting/ForexHosting";
import BulkMail from "./BulkMail/BulkMail";
import M365 from "./Microsoft/M365";
import LicenseHome from "./License/LicenseHome";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import GoogleHome from "./GoogleW/GoogleHome";
import ProxyHome from "./ProxyServer/ProxyHome";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SecNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shared-hosting" element={<SharedHostingpage />} />
          <Route path="/reseller-hosting" element={<ResellerHostingPage />} />
          <Route path="/python-hosting" element={<PythonHostingPage />} />
          <Route path="/forex-servers" element={<ForexHosting />} />
          <Route path="/proxy-servers" element={<ProxyHome />} />
          <Route path="bulk-email" element={<BulkMail />} />
          <Route path="/google-workspace" element={<GoogleHome />} />
          <Route path="/microsoft-365" element={<M365 />} />
          <Route path="/license" element={<LicenseHome />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
