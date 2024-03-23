import React from "react";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-none navbar-dark fixed-top">
        <div className="container ">
          <a className="navbar-brand fs-3 navbar-log" href="/">
            The<span className="navspan">Portfolyo</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a className="nav-a " smoothria-current="page" to="# ">
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-a " herf="#about">
                  About
                </a>
              </li>
            

              <li className="nav-item me-3">
                <a className="nav-a " herf="#service">
                  Service
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-a " herf="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-a" herf="#project">
                  Project
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-a " herf="#timeline">
                  Timeline
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-a " herf="#testimonial">
                  Testimonial
                </a>
              </li>

              

              <li className="nav-item me-3">
                <a className="nav-a" herf="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
