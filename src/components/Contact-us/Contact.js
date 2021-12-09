import React from "react";
import "./contact-us.css";
import shape87 from "../../assets/images/shape-87.png";
import shape88 from "../../assets/images/shape-88.png";
import img16 from "../../assets/images/16.svg";
import img17 from "../../assets/images/17.svg";
import img18 from "../../assets/images/18.svg";
function Contact() {
  return (
    <div id="conatct-us">
      <section className="information-section sec-pad centred bg-color-3 ">
        <div
          className="pattern-7"
          style={{ backgroundImage: `url(${shape88})` }}
        ></div>
        <div className="auto-container">
          <div className="sec-title centred">
            <p>Information</p>
            <h2>Get In Touch</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 information-column">
              <div
                className="single-information-block wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="pattern"
                    style={{ backgroundImage: `url(${shape87})` }}
                  ></div>
                  <figure className="icon-box">
                    <img src={img16} alt="" />
                  </figure>
                  <h3>Email Address</h3>
                  <p>
                    <a href="mailto:info@example.com">info@example.com</a>
                    <br />
                    <a href="mailto:info@example.com">info@example.com</a>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 information-column">
              <div
                className="single-information-block wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="pattern"
                    style={{ backgroundImage: `url(${shape87})` }}
                  ></div>
                  <figure className="icon-box">
                    <img src={img17} alt="" />
                  </figure>
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:23055873407">+2(305) 587-3407</a>
                    <br />
                    <a href="tel:23055873408">+2(305) 587-3408</a>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 information-column">
              <div
                className="single-information-block wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div
                    className="pattern"
                    style={{ backgroundImage: `url(${shape87})` }}
                  ></div>
                  <figure className="icon-box">
                    <img src={img18} alt="" />
                  </figure>
                  <h3>Office Address</h3>
                  <p>
                    214 West Arnold St. New York, <br />
                    NY 10002{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-section ">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 form-column">
              <div class="form-inner">
                <div class="sec-title">
                  <p>Contact</p>
                  <h2>Contact Us</h2>
                </div>
                <div
                  role="form"
                  class="wpcf7"
                  id="wpcf7-f1081-p124-o1"
                  lang="en-US"
                  dir="ltr"
                >
                  <div class="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>{" "}
                    <ul></ul>
                  </div>
                  <form
                    action="http://wp4.ourwpdemo.com/docpro/contact-us/#wpcf7-f1081-p124-o1"
                    method="post"
                    class="wpcf7-form init"
                    novalidate="novalidate"
                    data-status="init"
                  >
                    <div class="default-form">
                      <div class="row clearfix">
                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                          <span class="wpcf7-form-control-wrap text-752">
                            <input
                              type="text"
                              name="text-752"
                              value=""
                              size="40"
                              class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Your name"
                            />
                          </span>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                          <span class="wpcf7-form-control-wrap email-847">
                            <input
                              type="email"
                              name="email-847"
                              value=""
                              size="40"
                              class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Your email"
                            />
                          </span>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                          <span class="wpcf7-form-control-wrap text-752">
                            <input
                              type="text"
                              name="text-752"
                              value=""
                              size="40"
                              class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Phone number"
                            />
                          </span>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                          <span class="wpcf7-form-control-wrap text-752">
                            <input
                              type="text"
                              name="text-752"
                              value=""
                              size="40"
                              class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Subject"
                            />
                          </span>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                          <span class="wpcf7-form-control-wrap textarea-302">
                            <textarea
                              name="textarea-302"
                              cols="40"
                              rows="10"
                              class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Your Message ..."
                            ></textarea>
                          </span>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button
                            class="theme-btn-one"
                            type="submit"
                            name="submit-form"
                          >
                            Send Message<i class="icon-Arrow-Right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="wpcf7-response-output" aria-hidden="true"></div>
                  </form>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
