import React from "react";
import img1 from "../assets/image/about.jpg";

const Info = () => {
  return (
    <>
      <div
        id="info"
        className="w-75 position-relative start-50 translate-middle-x border border-light border-end-0 p-2 text-light rounded about"
      >
        <div className="row">
          <p className="h3 info-main">Find Out More About Me</p>
          <hr className="text-light my-3" />
          <div className="col-12 col-md-5 aligh-self-center">
            <img
              src={img1}
              className="img-fluid rounded-5 img"
              alt="image"
            />
          </div>
          <div className="col-12 col-md-7 align-self-center">
            <p className="p-1 info-p">
              Hello, This is <span>Ali Mahdavi</span>, Im <span>Front end Developer</span> and <span>UI,UX
              Designer</span> Im Using Javascript with
              React js, I Really Love Coding and I have been working on
              Programming for a Year, Now, if you are interested in my
              job, I will be happy to work together
            </p>
          </div>
          <hr className="text-light my-3" />

          <div className="col-12 col-sm-6">
            <div className="d-flex my-2">
              <div>
                <i class="bi bi-telephone-fill p-2"></i>
              </div>
              <div>
                <p>09012559469</p>
              </div>
            </div>

            <div className="d-flex my-2">
              <div>
                <i class="bi bi-envelope-check-fill m-2"></i>
              </div>
              <div>
                <p>alimahdavi30000@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="d-flex my-2">
              <div>
                <i class="bi bi-calendar-date-fill m-2"></i>
              </div>
              <div>
                <p>28 octobr 1998</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
