import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SecNav from "./components/SecNav";
import SignUp from "./pages/SignUp";



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <SecNav/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
};

export default App;
