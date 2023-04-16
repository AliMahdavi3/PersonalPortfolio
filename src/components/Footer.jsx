import React from "react";
import "../App.css";
import img3 from "../assets/image/pexels-johannes-plenio-1103970.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-100 container pt-3 d-flex">
          <div>
            <i class="bi bi-telegram text-info fs-3 m-3"></i>
            <i class="bi bi-whatsapp text-success fs-3  m-3"></i>
            <i class="bi bi-instagram text-warning fs-3  m-3"></i>
            <i class="bi bi-github text-light fs-3  m-3"></i>
            <i class="bi bi-linkedin text-primary fs-3  m-3"></i>
          </div>
          <div className="footer-paragraf">
          <p className="paragraf">
            Create Your <span className="text-success paragraf">Dream</span>
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
