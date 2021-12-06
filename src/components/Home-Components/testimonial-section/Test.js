import React from 'react'
import testimonial from '../../../assets/images/testimonial-1.jpg'
import shape21 from '../../../assets/images/shape-21.png'
import shape22 from '../../../assets/images/shape-22.png'
import shape23 from '../../../assets/images/shape-23.png'
import team1 from '../../../assets/images/team-1.jpg'
import team3 from '../../../assets/images/team-3.jpg'
import team2 from '../../../assets/images/team-2.jpg'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './test.css'

function Test() {
  return (
    <section
      className="testimonial-section bg-color-3 "
      id="testimonial-section"
    >
      <div
        className="bg-layer"
        style={{ backgroundImage: ` url(${testimonial})` }}
      ></div>
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: ` url(${shape22})` }}
        ></div>
        <div
          className="pattern-2"
          style={{ backgroundImage: ` url(${shape23})` }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-xl-7 col-lg-12 col-md-12 inner-column">
            <div className="testimonial-inner">
              <div
                className="pattern"
                style={{ backgroundImage: ` url(${shape21})` }}
              ></div>
              <div className="sec-title">
                <p>Testimonials</p>
                <h2>What client’s say?</h2>
              </div>

              <OwlCarousel
                items={1}
                className="owl-theme"
                autoplay={true}
                draggable={true}
                nav={true}
                dots={false}
                margin={20}
              >
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <p>
                        “ Lorem ipsum dolor sit amet consectetur adipic eksed do
                        eiusmod tempor incid unt labore dolore magna Aliqua.enim
                        minim veniam, quis nostrud. “
                      </p>
                    </div>
                    <div className="author-info">
                      <figure className="author-thumb">
                        <img src={team3} alt="" />
                      </figure>
                      <h3>Sk Ahmed</h3>
                      <span className="designation">CEO Toto Compnay</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <p>
                        “ Lorem ipsum dolor sit amet consectetur adipic eksed do
                        eiusmod tempor incid unt labore dolore magna Aliqua.enim
                        minim veniam, quis nostrud. “
                      </p>
                    </div>
                    <div className="author-info">
                      <figure className="author-thumb">
                        <img src={team1} alt="" />
                      </figure>
                      <h3>Andrulla Haris</h3>
                      <span className="designation">
                        Teacher &amp; Youtuber
                      </span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <p>
                        “ Lorem ipsum dolor sit amet consectetur adipic eksed do
                        eiusmod tempor incid unt labore dolore magna Aliqua.enim
                        minim veniam, quis nostrud. “
                      </p>
                    </div>
                    <div className="author-info">
                      <figure className="author-thumb">
                        <img src={team2} alt="" />
                      </figure>
                      <h3>Bellah Unddin</h3>
                      <span className="designation">Community Teacher</span>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Test
