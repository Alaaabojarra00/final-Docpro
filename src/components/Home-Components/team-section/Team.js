import React from "react";
import shape24 from "../../../assets/images/shape-24.png";
import shape25 from "../../../assets/images/shape-25.png";
import team10 from "../../../assets/images/team-10.jpg";
import team11 from "../../../assets/images/team-11.jpg";
import "./team.css";

const TeamItem = [
  {
    image_url: null,
    name: "DR.esam",
    address: "Damascus ,Jdaydet-Artouz",
    designaion: "SSC, HSC, MBBS, MRCP, DHA - Periodontology and BDS Khulna",
    description:
      "Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna",
    available: false,
    rate: 5,
  },
  {
    image_url: null,
    name: " Alaa",
    address: "Homs",
    designaion: "SSC, HSC",
    description:
      "Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna",
    available: false,
    rate: 1,
  },
  {
    image_url: team10,
    name: "Dr. Mary Astor",
    address: "56/2 Road-1 Gulshan, Dhaka",
    designaion: "SSC, HSC, MBBS, MRCP, DHA ",
    description:
      "Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna",
    available: true,
    rate: 2,
  },
  {
    image_url: team11,
    name: "Aristor Aris",
    address: "11/9 Road-2, Kurigram",
    designaion: "MBBS - Gunocology",
    description:
      "Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna.",
    available: true,
    rate: 4,
  },
];
const Team = () => {
  return (
    <section className=" team-section" id="team-section">
      <div className="auto-container">
        <div className="sec-title centred">
          <p>MEET OUR PROFESSIONALS</p>
          <h2>Top Rated Specialists</h2>
        </div>
        <div className="row clearfix">
          {TeamItem.map((value, index) => (
            <div
              className="col-lg-6 col-md-12 col-sm-12 team-block"
              key={index}
            >
              <div
                className="team-block-one wow fadeInLeft animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="pattern">
                    <div
                      className="pattern-1"
                      style={{ backgroundImage: ` url(${shape24})` }}
                    ></div>
                    <div
                      className="pattern-2"
                      style={{ backgroundImage: ` url(${shape25})` }}
                    ></div>
                  </div>
                  <figure className="image-box">
                    <img src={value.image_url} alt="" />
                  </figure>
                  <div className="content-box">
                    <div
                      className=" docpro-likebox like-box "
                      aria-label="You must login to save"
                      data-entity="7"
                    >
                      <span className="far fa-heart"></span>
                    </div>
                    <ul className="name-box clearfix">
                      <li className="name">
                        <h3>
                          <a href="profiles/doctor/mary/index.html">
                            {value.name}
                          </a>
                        </h3>
                      </li>
                      <li className="tt--top" aria-label="Medical Varified">
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      </li>
                      <li className="tt--top" aria-label="Available">
                        <i
                          className="fa fa-check-square"
                          aria-hidden="true"
                        ></i>
                      </li>
                    </ul>
                    <span className="designaion">{value.designaion}</span>
                    <div className="text">
                      <p>{value.description}</p>
                    </div>
                    <div className="rating-box clearfix">
                      {Rate(value.rate)}
                      <div className="link">
                        {value.available ? "Available" : "Not Available"}
                      </div>
                    </div>
                    <div className="location-box">
                      <p>
                        <i
                          className="fas fa-map-marker-alt"
                          style={{
                            marginInlineEnd: "5px",
                          }}
                        ></i>
                        {value.address}
                      </p>
                    </div>
                    <div className="btn-box">
                      <a href="profiles/doctor/mary/index.html">Visit Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="more-btn centred">
            <a href="doctors/index.html" className="theme-btn-one">
              All Doctors<i className="icon-Arrow-Right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

const Rate = (i) => {
  return (
    <ul className="docpro-rating rating clearfix">
      {Array(5)
        .fill()
        .map((_, index) => (
          <li className={index < i ? "gold" : ""} key={index}>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
        ))}
      <li style={{ marginInlineStart: "5px" }}>({i})</li>
    </ul>
  );
};
