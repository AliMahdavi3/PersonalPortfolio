import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "../components/Portfolio";
import Admin from "./admin/Admin";
import BuildCon from "./build-con/BuildCon";
import CryptoApp from "./crypto-app/CryptoApp";
import Ecommerce from "./e-commerce/Ecommerce";
import Tours from "./tours/Tours";
import Weather from "./weather-app/Weather";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cryptoapp" element={<CryptoApp />} />
        <Route path="/buildcon" element={<BuildCon />} />
      </Routes>
    </>
  );
};

export default Index;
