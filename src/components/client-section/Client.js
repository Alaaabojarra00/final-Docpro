import React from 'react'
import shape2 from '../images/shape-3.png'
import shape4 from '../images/shape-4.png'
import client1 from '../images/clients-logo-1-1.png'
import client2 from '../images/clients-logo-2-2.png'
import client3 from '../images/clients-logo-3-2.png'
import client4 from '../images/clients-logo-4-2.png'
import client5 from '../images/clients-logo-5-2.png'
import client6 from '../images/clients-logo-6-2.png'
import '../global.css'
import './client.css'
// import Carousel, { autoplayPlugin  } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import Slider from "react-slick";


const Client = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <section className="clients-section bg-color-2 ">
        <div className="pattern-layer">
        <div className="pattern-1" style={{backgroundImage:` url(${shape2})`}}>
        </div>
        <div className="pattern-2" style={{backgroundImage:` url(${shape4})`}}>
        </div>
        </div>
        <div className="auto-container">
            <div className="auto-container">
                <div className="clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
<div className="carose">
 <Slider {...settings}>

<figure className="clients-logo-box">
                        <a href="index.html">
                            <img src={client1} alt=""/>
                        </a>
                        </figure>
                        <figure className="clients-logo-box">
                        <a href="index.html">
                            <img src={client2} alt=""/>
                        </a>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html">
                            <img src={client3} alt=""/>
                        </a>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html">
                            <img src={client4} alt=""/>
                        </a>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html">
                            <img src={client5} alt=""/>
                        </a>
                    </figure>
                    <figure className="clients-logo-box">
                        <a href="index.html">
                            <img src={client6} alt=""/>
                        </a>
                    </figure>
                    </Slider>
                    </div>
                    </div>
            </div>
        </div>
    </section>
    )
}

export default Client;
