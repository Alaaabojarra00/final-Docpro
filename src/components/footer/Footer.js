import React from "react";
import "./footer.css";
import logo2 from "../../assets/images/logo2.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer">
        <footer className="one main-footer">
          <div className="footer-top">
            <div className="auto-container">
              <div className="widget-section">
                <div className="row clearfix">
                  <div className="col-sm-12 footer-column">
                    <div className="footer-widget logo-widget">
                      <figure className="footer-logo">
                        <a href="##">
                          <img src={logo2} alt="" />
                        </a>
                      </figure>
                      <div className="text">
                        <p>
                          Lorem ipsum is placeholder text commonly used in the
                          graphic, print, and publishing .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="two main-footer">
          <div className="footer-top">
            <div className="auto-container">
              <div className="widget-section">
                <div className="row clearfix">
                  <div className="col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                      <div className="widget-title">
                        <h3>About</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="links clearfix">
                          <li>
                            <a href="#about-section">About Us</a>
                          </li>
                          <li>
                            <a href="##">Special Offers</a>
                          </li>
                          <li>
                            <a href="##">Pricing Details </a>
                          </li>
                          <li>
                            <a href="##">Our Services</a>
                          </li>
                          <li>
                            <a href="##">Our Blog</a>
                          </li>
                          <li>
                            <Link to="/contact-Us">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="three main-footer">
          <div className="footer-top">
            <div className="auto-container">
              <div className="widget-section">
                <div className="row clearfix">
                  <div className="col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                      <div className="widget-title">
                        <h3>Useful Links</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="links clearfix">
                          <li>
                            <a href="doctors/index.html">Specialist</a>
                          </li>
                          <li>
                            <a href="all-clinic-2/index.html">Clinic</a>
                          </li>
                          <li>
                            <a href="contact-us/index.html">Contact </a>
                          </li>
                          <li>
                            <a href="registration/index.html">Registration</a>
                          </li>
                          <li>
                            <a href="dashboard/index.html">Join as a Doctor</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="four main-footer">
          <div className="footer-top">
            <div className="auto-container">
              <div className="widget-section">
                <div className="row clearfix">
                  <div className="col-sm-12 footer-column">
                    <div className="footer-widget contact-widget">
                      <div className="widget-title">
                        <h3>Contacts</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="info-list clearfix">
                          <li>
                            <i className="fas fas fa-map-marker-alt"></i>
                            <a href="##">
                              Flat 20, Reynolds Neck, North Helenaville, FV77
                              8WS
                            </a>
                          </li>
                          <li>
                            <i className="fas fas fa-microphone"></i>
                            <a href="##">+2(305) 587-3407</a>
                          </li>
                          <li>
                            <i className="fas fas fa-envelope"></i>
                            <a href="##">info@example.com</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <footer className=" main-footer">
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-box ">
              <div className="copyright ">
                <p>
                  <a href="registration/index.html">Docpro</a> &copy; 2021 All
                  Right Reserved
                </p>
              </div>
              <ul className="footer-nav ">
                <li className="a">
                  <a href="registration/index.html">Terms of Service</a>
                </li>
                <li>
                  <a href="registration/index.html">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
