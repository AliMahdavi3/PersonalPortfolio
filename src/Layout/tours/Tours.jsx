import React from "react";
import { NavLink } from "react-router-dom"
import "../../App.css"

import img1 from "../../assets/image/material/Screenshot (36).png";
import img2 from "../../assets/image/material/Screenshot (37).png";
import img3 from "../../assets/image/material/Screenshot (38).png";
import img4 from "../../assets/image/material/Screenshot (39).png";
import img5 from "../../assets/image/material/Screenshot (40).png";
import img6 from "../../assets/image/material/Screenshot (41).png";
import img7 from "../../assets/image/material/Screenshot (42).png";
import img8 from "../../assets/image/material/Screenshot (43).png";

const Tours = () => {
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
      <div className="align-items-center justify-content-center d-flex m-5">
        <NavLink to="/" className="py-2 px-3 fs-3 btn-project">
          Back<i class="bi bi-back ms-3"></i>
        </NavLink>
      </div>
    </>
  );
};

export default Tours;
