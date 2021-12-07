import React from "react";
import shap from "../../../assets/images/shape-2.png";
import banner from "../../../assets/images/banner-image-1-1.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./banner.css";
import { useState } from "react";
const Banner = () => {
  const [input, setInput] = useState("");
  return (
    <section className=" banner-section bg-colo/r-1" id="banner-section">
      <div
        className="pattern-layer"
        style={{ backgroundImage: `url(${shap})` }}
      ></div>
      <div className="auto-container">
        <div className="row align-items-center clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <h1>Find Nearest Doctor.</h1>
              <p>We Care for Your Health & Medical Support</p>
              <div className="form-inner clinicsearch">
                <form className="testclassName">
                  <div className="form-group">
                    <input
                      type="text"
                      name="n"
                      placeholder="Ex. Name, Specialization..."
                      required=""
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                      }}
                    />
                    <button type="submit">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                  </div>
                  <ul className="select-box clearfix">
                    <li>
                      <div className="single-checkbox">
                        <input
                          type="radio"
                          name="status"
                          id="check1"
                          checked="checked"
                          onChange={(e) => e.target.checked}
                        />
                        <label htmlFor="check1">
                          <span></span>All Clinic
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-checkbox">
                        <input
                          type="radio"
                          name="status"
                          value="available"
                          id="check2"
                        />
                        <label htmlFor="check2">
                          <span></span>Available Clinic
                        </label>
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box js-tilt">
              <figure
                className="image clearfix wow fadeInRight animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <img src={banner} alt=""></img>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
