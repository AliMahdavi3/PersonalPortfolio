import React from "react";
import "../../App.css"
import { NavLink } from "react-router-dom"
import img1 from "../../assets/image/admin-panel/admin (2).png";
import img2 from "../../assets/image/admin-panel/admin (3).png";
import img3 from "../../assets/image/admin-panel/admin (4).png";
import img4 from "../../assets/image/admin-panel/admin (1).png";

const Admin = () => {
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
      <div className="align-items-center justify-content-center d-flex m-5">
        <NavLink to="/" className="py-2 px-3 fs-3 btn-project">
          Back<i class="bi bi-back ms-3"></i>
        </NavLink>
      </div>
    </>
  );
};

export default Admin;
