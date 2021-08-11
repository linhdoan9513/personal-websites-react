import React, { useRef } from "react";
import { useIntersection } from "react-use";
import LandingPage from "./LandingPage";
import gsap from "gsap";

const Demo = () => {
  const intersectionRef = useRef(false);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: -60,
      ease: "power1.out",
      stagger: {
        amount: 0.2,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: +60,
      ease: "power1.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut(intersectionRef.current)
    : fadeIn(intersectionRef.current);

  return (
    <div>
      <LandingPage />
      <section>
        <h2 ref={intersectionRef}>01.About Me</h2>
        <div>01.Aboutasdfdsadfadfadsfadsfadfasdfafasdfadfadsaafd Me</div>
      </section>
    </div>
  );
};

export default Demo;
