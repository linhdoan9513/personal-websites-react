import React, { useEffect } from "react";
import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const LandingPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".welcome h1",
      { opacity: 0.5, y: 20, ease: "power4.out" },
      { opacity: 1, y: 0, duration: 0.3 }
    );

    gsap.fromTo(
      ".welcome h2",
      { opacity: 0, y: 20, ease: "power4.out" },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
    );

    // gsap.from(".cloud-tag", {
    //   delay: 1,
    //   x: 500,
    //   duration: 0.5,
    // });

    // gsap.from(".coffee-cup", { delay: 1.5, x: 1000, y: 300, duration: 0.5 });
    // gsap.from(".search-bar", { delay: 2, y: -1000, x: 300, duration: 0.5 });

    let clouds = gsap.timeline();

    ScrollTrigger.create({
      animation: clouds,
      trigger: ".landing-page-image",
      scroller: ".landing-page",
      scrub: true,
      markers: true,
      pin: true,
      start: () => "top top",
      end: () => "100% 100%",
      // end: () => "+=" + * window.innerHeight,
    });

    // clouds.to(".cloud-tag", { x: 50 });

    // gsap.to(".cloud-tag", { delay: 1, x: 500, duration: 1 });
    // gsap.to(".coffee-cup", { delay: 2, x: 1000, duration: 1 });
    // gsap.to(".search-bar", { delay: 3, y: -1000, duration: 1 });
  });

  return (
    <article className="landing-page">
      <Container fluid>
        <Row>
          <Col lg={{ span: 4 }}>
            <div className="landing-page-content">
              <div className="welcome">
                <h1>Hi there 👋, I'm</h1>
                <h2>
                  linh<span>.</span>
                </h2>
                <p>
                  I'm a front-end dev who uses CSS, JavaScript and React to
                  build creative and intuitive applications.
                </p>
              </div>
              <button className="contact">Get In Touch</button>
            </div>
          </Col>
          <Col lg={{ span: 8 }}>
            <div className="landing-page-image">
              <img
                className="computer"
                src="./assets/main-pic-3.png"
                alt="computer-illustrator"
              />
              <img
                className="cloud-tag"
                src="./assets/cloud-landpage.png"
                alt="cloud"
              />
              <img
                className="coffee-cup"
                src="./assets/coffee-cup.png"
                alt="coffee-cup"
              />
              <img
                className="search-bar"
                src="./assets/searchbar.png"
                alt="searchbar"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default LandingPage;
