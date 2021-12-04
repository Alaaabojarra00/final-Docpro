import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css'

import img from '../../assets/images/logo.svg'

const Navbar = () => {
  return (
    <main className="boxed_wrapper">
      <header className="main-header style-two">
        <div className="header-top">
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

        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="index.html" title="Docpro">
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
                        <a title="Home" href="index.html">
                          Home
                        </a>
                      </li>
                      <li>
                        <a title="about" href="index.html">
                          About
                        </a>
                      </li>
                      <li>
                        <a title="about" href="index.html">
                          Department
                        </a>
                      </li>
                      <li>
                        <a title="about" href="index.html">
                          Doctors
                        </a>
                      </li>
                      <li>
                        <a title="about" href="index.html">
                          Clinic
                        </a>
                      </li>
                      <li>
                        <a title="about" href="index.html">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a title="Contact Us" href="contact-us/index.html">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  )
}

export default Navbar
