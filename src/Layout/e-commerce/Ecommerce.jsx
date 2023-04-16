import React from "react";
import { NavLink } from "react-router-dom"
import "../../App.css"

import img1 from "../../assets/image/e-commerc/e-commerce.png";
import img2 from "../../assets/image/e-commerc/Screenshot (3).png";
import img3 from "../../assets/image/e-commerc/Screenshot (4).png";
import img4 from "../../assets/image/e-commerc/Screenshot (5).png";
import img5 from "../../assets/image/e-commerc/Screenshot (6).png";
import img6 from "../../assets/image/e-commerc/Screenshot (7).png";
import img7 from "../../assets/image/e-commerc/Screenshot (8).png";
import img8 from "../../assets/image/e-commerc/Screenshot (9).png";
import img9 from "../../assets/image/e-commerc/Screenshot (10).png";

const Ecommerce = () => {
  return (
    <>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img1} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img2} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img3} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img4} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img5} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img6} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img7} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img8} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img9} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex m-5">
        <NavLink to="/" className="py-2 px-3 fs-3 btn-project">
          Back<i class="bi bi-back ms-3"></i>
        </NavLink>
      </div>
    </>
  );
};

export default Ecommerce;
