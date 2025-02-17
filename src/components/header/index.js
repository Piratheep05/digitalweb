import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#6B3CC9'}}>
        <div className="container">
          <a className="navbar-brand text-white" href="#">
          {/* <img alt="Company Icon" class="company-icon"></img>  */}
           AT DIGITAL
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#summary">
                  Summary
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#services">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
