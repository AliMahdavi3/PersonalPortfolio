import React from "react";
import "../App.css";
import Header from "./Header";
import About from "./About";
import Info from "./Info";
import Content from "./Content";
import MyProject from "./MyProject";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div>
      <h5 id="home">.</h5>

      <Header />

      <div className="main">
        <About />

        <div className="w-100 my-3"></div>

        <Info />

        <div className="w-100 my-4"></div>

        <Content />

        <div className="w-100 my-4"></div>

        <MyProject />
      </div>

    <Footer/>
    </div>
  );
};

export default Portfolio;
