import React from "react";
import img2 from "../assets/image/10.JPG";
import img3 from "../assets/image/HTML5_logo.svg";
import img4 from "../assets/image/css.png";
import img5 from "../assets/image/js.png";
import img6 from "../assets/image/bootstrap.png";
import img7 from "../assets/image/react.png";
import img8 from "../assets/image/material-ui-seeklogo.com.svg";
import img9 from "../assets/image/git.png";
import img10 from "../assets/image/kisspng-github.png";

const Content = () => {
  return (
    <>
      <div
        id="contact"
        className="w-75 position-relative start-50 translate-middle-x border border-light border-end-0 p-3 text-light rounded content-style"
      >
        <img
          src={img2}
          className="rounded-circle pill position-absolute start-0 top-0 translate-middle contact2"
          alt="img2"
        />

        <p className="info-main fs-3">The languages and libraries I use</p>

        <hr />

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-2">
          <div className="border-start border-3 border-dark mt-5">
            <p className="h3">
              HTML 5
              <img src={img3} className="logo-content" alt="" />
            </p>
            <p>
              HTML is the standard markup language for Web pages. With HTML you
              can create your own Website. HTML is easy to learn You will enjoy
              it
            </p>
          </div>

          <div className="border-start border-3 border-dark mt-5">
            <p className="h3">
              CSS 3
              <img src={img4} className="logo-content" alt="" />
            </p>
            <p>
              CSS is the language we use to style an HTML document. CSS
              describes how HTML elements should be displayed.
            </p>
          </div>

          <div className="border-start border-3 border-dark mt-5">
            <p className="h3">
              JAVASCRIP, ES6
              <img src={img5} className="logo-content" alt="" />
            </p>
            <p>
              JavaScript is the world's most popular programming language.
              JavaScript is the programming language of the Web. JavaScript is
              easy to learn.
            </p>
          </div>

          <div className="border-start border-3 border-dark mt-5">
            <p className="h3">
              BOOTSTRAP 5
              <img src={img6} className="logo-content" alt="" />
            </p>
            <p>
              Bootstrap 5 is the newest version of Bootstrap, which is the most
              popular HTML, CSS, and JavaScript framework for creating
              responsive, mobile-first websites
            </p>
          </div>

          <div className="border-start border-3 border-dark mt-5">
            <p className="h3">
              REACT JS
              <img src={img7} className="logo-content" alt="" />
            </p>
            <p>
              React is a JavaScript library for building user interfaces. React
              is used to build single-page applications. React allows us to
              create reusable UI components.
            </p>
          </div>

          <div className="border-start border-3 border-dark mt-5">
            <p className="h3">
              GIT AND GITHUB
              <img src={img9} className="logo-content" alt="" />
              <img src={img10} className="logo-content" alt="" />
            </p>
            <p>
              Git is a version control system. Git helps you keep track of code
              changes. Git is used to collaborate on code.
            </p>
          </div>

          <div className="border-start border-3 border-dark mt-5">
            <p className="h3">
              MATERIAL UI
              <img src={img8} className="logo-content" alt="" />
            </p>
            <p>
              MUI offers a comprehensive suite of UI tools to help you ship new
              features faster. Start with Material UI, our fully-loaded
              component library, or bring your own design system to our
              production-ready components.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
