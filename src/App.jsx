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
import ContactBtn from "./components/ContactBtn";



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <ContactBtn/>
      <SecNav/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/shared-hosting" element={<SharedHostingpage/>} />
          <Route path="/reseller-hosting" element={<ResellerHostingPage/>} />
          <Route path="/python-hosting" element={<PythonHostingPage/>} />
          <Route path="/forex-servers" element={<ForexHosting/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
};

export default App;
