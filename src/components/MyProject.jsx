import React from 'react'
import { NavLink } from 'react-router-dom';
import img3 from "../assets/image/e-commerc/e-commerce.png";
import img4 from "../assets/image/admin-panel/admin (2).png";
import img5 from "../assets/image/crypto/Screenshot (17).png";
import img6 from "../assets/image/eco/Screenshot (19).png";
import img7 from "../assets/image/wheather/Screenshot (16).png";
import img8 from "../assets/image/material/Screenshot (40).png";

const MyProject = () => {
  return (
    <>
        <div className="w-75 position-relative start-50 translate-middle-x p-3 text-light" id="gallery">
          <p className="h1 info-main text-center">My Projects</p>
          <hr className="my-3 text-light"/>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 my-4">
              <img src={img3} alt="" className="img-fluid img-thumbnail"/>
              <p className=" mt-3 fs-2">
                E-commerce

                <span className="float-end">
                  <NavLink to="/ecommerce">
                    <i class="bi bi-eye-fill btn btn-warning fs-4"></i>
                  </NavLink>
                </span>

                <span className="float-end">
                  <a href="https://github.com/AliMahdavi3/E-commerce">
                    <i class="bi bi-github btn btn-dark fs-4 me-2"></i>                  
                  </a>
                </span>
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-4 my-4">
              <img src={img4} alt="" className="img-fluid img-thumbnail"/>
              <p className=" mt-3 fs-2">
                Admin Panel

                <span className="float-end">
                  <NavLink to="/admin">
                    <i class="bi bi-eye-fill btn btn-warning fs-4"></i>
                  </NavLink>
                </span>

                <span className="float-end">
                  <a href="https://github.com/AliMahdavi3/AdminPanel">
                    <i class="bi bi-github btn btn-dark fs-4 me-2"></i>                  
                  </a>
                </span>
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-4 my-4">
              <img src={img5} alt="" className="img-fluid img-thumbnail"/>
              <p className=" mt-3 fs-2">
                Crypto app

                <span className="float-end">
                  <NavLink to="/cryptoapp">
                    <i class="bi bi-eye-fill btn btn-warning fs-4"></i>
                  </NavLink>
                </span>

                <span className="float-end">
                  <a href="https://github.com/AliMahdavi3/Crypto-app-react-js">
                    <i class="bi bi-github btn btn-dark fs-4 me-2"></i>                  
                  </a>
                </span>
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-4 my-4">
              <img src={img6} alt="" className="img-fluid img-thumbnail"/>
              <p className=" mt-3 fs-2">
                Build Con

                <span className="float-end">
                  <NavLink to="/buildcon">
                    <i class="bi bi-eye-fill btn btn-warning fs-4"></i>
                  </NavLink>
                </span>

                <span className="float-end">
                  <a href="https://github.com/AliMahdavi3/buildCon">
                    <i class="bi bi-github btn btn-dark fs-4 me-2"></i>                  
                  </a>
                </span>
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-4 my-4">
              <img src={img7} alt="" className="img-fluid img-thumbnail"/>
              <p className=" mt-3 fs-2">
                Weather app

                <span className="float-end">
                  <NavLink to="/weather">
                    <i class="bi bi-eye-fill btn btn-warning fs-4"></i>
                  </NavLink>
                </span>

                <span className="float-end">
                  <a href="https://github.com/AliMahdavi3/WeatherApp">
                    <i class="bi bi-github btn btn-dark fs-4 me-2"></i>                  
                  </a>
                </span>
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-4 my-4">
              <img src={img8} alt="" className="img-fluid img-thumbnail"/>
              <p className=" mt-3 fs-2">
                Tours
                <span className="float-end">
                  <NavLink to="/tours">
                    <i class="bi bi-eye-fill btn btn-warning fs-4"></i>
                  </NavLink>
                </span>

                <span className="float-end">
                  <a href="https://github.com/AliMahdavi3/CryptoBase">
                    <i class="bi bi-github btn btn-dark fs-4 me-2"></i>                  
                  </a>
                </span>
              </p>
            </div>
          </div>

          <hr className="bg-success"/>
          <hr className="bg-success"/>
        </div>
    </>
  )
}

export default MyProject