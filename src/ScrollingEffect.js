import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

const ScrollingEffect = ({ children, wrapperElement = "div", ...props }) => {
  const Component = wrapperElement;
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });
  const fadeIn = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      ease: "power3.out",
      stagger: {
        amount: 0.2,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power3.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.3
    ? fadeOut(intersectionRef.current)
    : fadeIn(intersectionRef.current);

  return (
    <Component ref={intersectionRef} {...props}>
      {children}
    </Component>
  );
};

export default ScrollingEffect;
