import React from "react";
import { NavLink } from "react-router-dom"
import "../../App.css"

import img1 from "../../assets/image/crypto/Screenshot (17).png";
import img2 from "../../assets/image/crypto/Screenshot (18).png";

const CryptoApp = () => {
  return (
    <>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img1} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex my-5 project-img">
        <img src={img2} className="img-fluid" alt="" />
      </div>
      <div className="align-items-center justify-content-center d-flex m-5">
        <NavLink to="/" className="py-2 px-3 fs-3 btn-project">
          Back<i class="bi bi-back ms-3"></i>
        </NavLink>
      </div>
    </>
  );
};

export default CryptoApp;
