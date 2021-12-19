import React,{useEffect} from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./navbar.css";

import img from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {


  useEffect(() => {
    const isSticky = (e) => {
      const header = document.querySelector('.header-lower');
      const scrollTop = window.scrollY;
      scrollTop >= 250 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
  };
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

  return (
    <div className="boxed_wrapper ">
      <header className="main-header style-two">
        <div className="header-top ">
          <div className="auto-container">
            <div className="top-inner clearfix">
              <div className="top-left pull-left">
                <ul className="info clearfix">
                  <li>
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                    55/2 West Zone, Downtown Dhaka
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <a href="index.tml">666 888 0000</a>
                  </li>
                </ul>
              </div>
              <div className="top-right pull-right">
                <ul className="info clearfix">
                  <li>
                    <a href="registration/index.html">Get Registration </a>
                  </li>
                  <li>
                    <a href="dashboard/index.html">Login</a>
                  </li>
                  <li>
                    <a href="contact-us/index.html">Get Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-lower" id="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="/" title="Docpro">
                    <img src={img} alt="logo" />
                  </a>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>
                      <Link to="/">Home</Link>
                          
                        
                      </li>
                      <li>
                        <a title="about" href="#about-section">
                          About
                        </a>
                      </li>
                      <li>
                        <a title="Department" href="/">
                          Department
                        </a>
                      </li>
                      <li>
                      <Link to="/all-doctor">Doctors</Link>
                      </li>
                      <li>
                      <Link to="/all-clinic">Clinic</Link>
                          
    
                      </li>
                      <li>
                        <a title="Blog" href="/">
                          Blog
                        </a>
                      </li>

                      <li>
                        <Link to="/contact-Us">Contact Us</Link>
                      </li>
                    </ul>
                    <div className="btn-box"><a href="##" className="theme-btn-one"><i className="icon-image fa fa-plus"></i>Appointment </a></div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
