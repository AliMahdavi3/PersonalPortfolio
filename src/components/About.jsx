import React from "react";

const About = () => {
  return (
    <>
      <div className="w-100 h-100">
        <div className="position-absolute w-50 top-50 start-50 translate-middle text-light text-center contact">
          <p className="h1 mt-5 font-text">
            .Ali <span className="main-text">Mahdavi</span>
          </p>
          <br />
          <p className="h1 font-3">
            <span className="font-333">Front End</span> Developer
          </p>
          <hr className="text-success" />
          <hr className="text-success" />
          <p className="paragraf-main">
            Hello, my name is <span className="main-p-text">Ali</span> and i'm a <span className="main-p-text-1">Front End</span> developer who write clean,
            elegant and efficient code
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
