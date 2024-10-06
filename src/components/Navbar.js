import React, { useEffect } from "react";
import "../style/Navbar.css";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

function Navbar() {
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);

  return (
    <>
      <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark ">
        <div className="container" style={{marginTop:"-8px", marginBottom:"-8px"}}>
          <a href="https://www.apikuslabs.com/" className="navbar-brand">
            <Logo style={{width:"155px"}} id="logo"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="https://www.apikuslabs.com/" className="nav-link" id="navlink">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/platform" className="nav-link" id="navlink">
                  Platform
                </a>
              </li>
              <li className="nav-item">
                <a href="/solutions" className="nav-link" id="navlink">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link" id="navlink">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="/resources" className="nav-link" id="navlink">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link" id="navlink">
                  Contact
                </a>
              </li>
              <li className="nav-item" id="navbtn">
                <a
                  href="https://www.apikuslabs.com/"
                  className="btn btn-outline-light get-started-btn nav-link" id="navlink"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
