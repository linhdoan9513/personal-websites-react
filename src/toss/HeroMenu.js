import React from "react";

const HeroMenu = () => {
  return (
    <footer className="hero-menu-container">
      <ul className="hero-menu">
        <li>
          <a href="#">
            <i data-color="#FFFFFF" className="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i data-color="#7784D6" className="bi bi-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i data-color="#FFFFFF" className="bi bi-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default HeroMenu;
