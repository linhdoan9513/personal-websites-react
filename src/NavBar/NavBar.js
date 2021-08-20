import React, { useState } from "react";
import "./Navbar.css";
import Pdf from "../toss/Resume.pdf";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const onResumeClick = () => {
    window.open(Pdf);
  };

  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   gsap.utils.toArray("section").forEach((section, i) => {
  //     const bgColor = section.dataset.color;

  //     gsap.to(".NavBarItems", {
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top top",
  //         end: "bottom",
  //         toggleActions: "play reset play reset",
  //       },
  //       backgroundColor: `${bgColor}`,
  //       duration: 0.5,
  //     });

  //     // gsap.to([".nav-links", ".nav-bar-logo"], {
  //     //   scrollTrigger: {
  //     //     markers: false,
  //     //     trigger: section,
  //     //     toggleActions: "play reset play reset",
  //     //   },
  //     //   color: `${fontColor}`,
  //     //   duration: 0.5,
  //     // });
  //   });
  // }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Linh Doan <span>.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setClick(!click)}
        >
          {click ? (
            <i className="bi bi-cloud-sun-fill"></i>
          ) : (
            <i className="bi bi-cloud-moon-fill"></i>
          )}
        </button>
        <div
          className={`${click ? "" : "collapse"} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex align-items-baseline">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About Me<span>.</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects<span>.</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact<span>.</span>
              </a>
            </li>
            <div className="nav-item resume">
              <a className="resume-link" onClick={onResumeClick}>
                Resume<span>.</span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
