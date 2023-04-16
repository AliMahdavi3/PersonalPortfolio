import React from "react";
import { NavLink } from "react-router-dom"
import "../../App.css"

import img1 from "../../assets/image/eco/Screenshot (19).png";
import img2 from "../../assets/image/eco/Screenshot (20).png";
import img3 from "../../assets/image/eco/Screenshot (21).png";
import img4 from "../../assets/image/eco/Screenshot (22).png";
import img5 from "../../assets/image/eco/Screenshot (23).png";
import img6 from "../../assets/image/eco/Screenshot (24).png";

const BuildCon = () => {
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
      <div className="align-items-center justify-content-center d-flex m-5">
        <NavLink to="/" className="py-2 px-3 fs-3 btn-project">
          Back<i class="bi bi-back ms-3"></i>
        </NavLink>
      </div>
    </>
  );
};

export default BuildCon;
