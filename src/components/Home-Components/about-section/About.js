import React from "react";
import "./about.css";
import shape15 from "../../../assets/images/shape-15.png";
import about1 from "../../../assets/images/about-1.png";

const About = () => {
  return (
    <div className="auto-container parent-about" id="about-section">
      <section className="about-section ">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 image-column">
              <div className="image_block_1">
                <div className="image-box">
                  <div className="pattern">
                    <div
                      className="pattern-1"
                      style={{ backgroundImage: ` url(${shape15})` }}
                    ></div>
                    <div className="pattern-2"></div>
                    <div
                      className="pattern-3"
                      style={{ backgroundImage: ` url(${shape15})` }}
                    ></div>
                  </div>
                  <figure className="image clearfix">
                    <img src={about1} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section two">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 content-column">
              <div className="content_block_1">
                <div className="content-box">
                  <div className="sec-title">
                    <p>About Docpro</p>
                    <h2>Bring care to your home with one click</h2>
                  </div>
                  <div className="text">
                    <p>
                      We are experts in the field of medical and dental
                      services. We observe local and national legislation as
                      well as safety requirements to the our maintain the
                      highest levels of corporate integrity.{" "}
                    </p>
                  </div>
                  <ul className="list-style-one clearfix">
                    <li>Ambulance Services </li>
                    <li>Pharmacy on Clinic</li>
                    <li>Oxizen on Wheel </li>
                    <li>On duty Doctors </li>
                    <li>24/7 Medical Emergency </li>
                  </ul>
                  <div className="btn-box">
                    <a href="about-us/index.html" className="theme-btn-one">
                      About Us<i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
