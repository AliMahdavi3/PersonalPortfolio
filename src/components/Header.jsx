import React from "react";

const Header = () => {
  return (
    <>
      <div className="header fixed-top ">
        <div className="container">
          <ul className="d-flex d-sm-none justify-content-center mt-3 list-unstyled fs-1 mobile-nav">
            <li>
              <a href="#home">
                <i class="bi bi-house-fill"></i>
              </a>
            </li>
            <li>
              <a href="#info">
                <i class="bi bi-info-square-fill"></i>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i class="bi bi-person-lines-fill"></i>
              </a>
            </li>
            <li>
              <a href="#gallery">
                <i class="bi bi-images"></i>
              </a>
            </li>
          </ul>
          <ul className="d-none mt-4 d-sm-flex justify-content-center mt-3 list-unstyled fs-4 sm-nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#info">About</a>
            </li>
            <li>
              <a href="#contact">Experience</a>
            </li>
            <li>
              <a href="#gallery">Projects</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-none d-md-flex">
        <ul  className="icons-100">
          <li className="icons list-unstyled">
            <a href="#" className="d-flex justify-content-center text-light bg-info p-2">
             Linkedin <i class="bi bi-linkedin mx-3"></i>
            </a>
          </li>
          <li className="icons1 list-unstyled">
            <a href="#" className="d-flex justify-content-center text-light bg-dark p-2">
             GitHub <i class="bi bi-github mx-3"></i>
            </a>
          </li>
          <li className="icons2 list-unstyled">
            <a href="#" className="d-flex justify-content-center text-light bg-primary p-2">
            Telegram <i class="bi bi-telegram mx-3"></i>
            </a>
          </li>
          <li className="icons3 list-unstyled">
            <a href="#" className="d-flex justify-content-center text-light bg-success p-2">
            Whatsapp <i class="bi bi-whatsapp mx-3"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
