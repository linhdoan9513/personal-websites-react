import React, { useState } from "react";

const NavigationBar = () => {
  const [show, setShow] = useState(true);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Linh
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <i className="bi bi-list"></i>
            ) : (
              <i className="bi bi-x-lg"></i>
            )}
          </button>
          <div
            className={
              show
                ? "collapse navbar-collapse"
                : "collapse.show navbar-collapse active"
            }
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  01.About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  02.Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  03.Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
