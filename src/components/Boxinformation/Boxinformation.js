import React from "react";
import "./Boxinformation.css";
import shape24 from "../../assets/images/shape-24.png";
import shape25 from "../../assets/images/shape-25.png";

const Boxinformation = (props) => {
  const { obj } = props;
  return (
    <div className="boxinformation">
      <div className="clinic-block-one">
        <div className="inner-box">
          <div className="pattern">
            <div
              className="pattern-1"
              style={{
                backgroundImage: `url(${shape24}
                  
                )`,
              }}
            ></div>
            <div
              className="pattern-2"
              style={{
                backgroundImage: `url(
                  ${shape25}
                )`,
              }}
            ></div>
          </div>
          <figure className="image-box">
            <img src={obj.image_url} alt="Aristor Aris" />
          </figure>
          <div className="content-box">
            <div
              className=" docpro-likebox tt--top like-box unliked"
              aria-label="You must login to save"
              data-entity="22"
            >
              <span className="far fa-heart"></span>
            </div>
            <ul className="name-box clearfix">
              <li className="name">
                <h3>
                  <a href="##">{obj.name}</a>
                </h3>
              </li>
              <li className="tt--top" aria-label="Available">
                <i className="fas fa-check"></i>
              </li>
            </ul>
            {obj.designaion && (
              <span className="designation">{obj?.designaion}</span>
            )}
            <div className="text">
              <p>{obj.description}</p>
            </div>
            <div className="rating-box clearfix">
              {Rate(obj.rate)}

              {obj.time && <div className="link">{obj.time}</div>}
            </div>
            <div className="flex">
              <div className="location-box">
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  {obj.address}
                </p>

                <div className="btn-box">
                  <a href="/ ">Visit Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxinformation;

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
