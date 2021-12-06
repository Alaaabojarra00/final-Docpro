import React from 'react'
import shape2 from '../../../assets/images/shape-3.png'
import shape4 from '../../../assets/images/shape-4.png'
import client1 from '../../../assets/images/clients-logo-1-1.png'
import client2 from '../../../assets/images/clients-logo-2-2.png'
import client3 from '../../../assets/images/clients-logo-3-2.png'
import client4 from '../../../assets/images/clients-logo-4-2.png'
import client5 from '../../../assets/images/clients-logo-5-2.png'
import client6 from '../../../assets/images/clients-logo-6-2.png'
import './client.css'
import Slider from 'react-slick'

const ItemSlider = [client1, client2, client3, client4, client5, client6]

const Client = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }
  return (
    <section className="clients-section bg-color-2 " id="clients-section">
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: ` url(${shape2})` }}
        ></div>
        <div
          className="pattern-2"
          style={{ backgroundImage: ` url(${shape4})` }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="auto-container">
          <div className="clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
            <div className="carose">
              <Slider {...settings}>
                {ItemSlider.map((value, index) => (
                  <figure className="clients-logo-box" key={index}>
                    <a href="index.html">
                      <img src={value} alt="" />
                    </a>
                  </figure>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client
