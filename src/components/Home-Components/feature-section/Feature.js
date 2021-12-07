import React from "react";
import { Link } from "react-router-dom";
import shape13 from "../../../assets/images/shape-13.png";
import shape14 from "../../../assets/images/shape-14.png";
import shape5 from "../../../assets/images/shape-5.png";
import shape9 from "../../../assets/images/shape-9.png";
import shape6 from "../../../assets/images/shape-6.png";
import shape7 from "../../../assets/images/shape-7.png";
import shape8 from "../../../assets/images/shape-8.png";
import shape10 from "../../../assets/images/shape-10.png";
import shape11 from "../../../assets/images/shape-11.png";
import shape12 from "../../../assets/images/shape-12.png";
import shape1 from "../../../assets/images/1.svg";
import shape2 from "../../../assets/images/2.svg";
import shape3 from "../../../assets/images/3.svg";
import shape15 from "../../../assets/images/15.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./feature.css";

const ItemFeature = [
  {
    patternBox_1: shape5,
    patternBox_2: shape9,
    iconBox: shape1,
    desc: "Appointment With",
    title: "Nearest Clinic",
    buttonText: "All Clinics",
    link: "all-clinic",
  },
  {
    patternBox_1: shape6,
    patternBox_2: shape10,
    iconBox: shape2,
    desc: "Live Chat With",
    title: "Doctor",
    buttonText: "All Doctor",
    link: "all-doctor",
  },
  {
    patternBox_1: shape7,
    patternBox_2: shape11,
    iconBox: shape3,
    desc: "Appoinment With Top",
    title: "Departments",
    buttonText: "Departments",
    link: "all-departments",
  },
  {
    patternBox_1: shape8,
    patternBox_2: shape12,
    iconBox: shape15,
    desc: "24/7 Active Support",
    title: "Help Support",
    buttonText: "Contact Us",
    link: "contact-us",
  },
];
const Feature = () => {
  return (
    <section
      className=" feature-section centred bg-color-3"
      id="feature-section"
    >
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: ` url(${shape13})` }}
        ></div>
        <div
          className="pattern-2"
          style={{ backgroundImage: ` url(${shape14})` }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          {ItemFeature.map((value, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-12 feature-block"
              key={index}
            >
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="pattern">
                    <div
                      className="pattern-1"
                      style={{ backgroundImage: ` url(${value.patternBox_1})` }}
                    ></div>
                    <div
                      className="pattern-2"
                      style={{ backgroundImage: ` url(${value.patternBox_2})` }}
                    ></div>
                  </div>
                  <figure className="icon-box">
                    <img src={value.iconBox} alt="" />
                  </figure>
                  <p>{value.desc}</p>
                  <h3>{value.title}</h3>
                  <div className="link">
                    <a href="all-clinic-2/index.html">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="btn-box">
                    <Link to={value.link} className="theme-btn-one">
                      {value.buttonText}
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
