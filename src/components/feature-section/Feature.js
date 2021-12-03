import React from 'react'
import shape13 from '../images/shape-13.png';
import shape14 from '../images/shape-14.png';
import shape5 from '../images/shape-5.png';
import shape9 from '../images/shape-9.png';
import shape6 from '../images/shape-6.png';
import shape7 from '../images/shape-7.png';
import shape8 from '../images/shape-8.png';
import shape10 from '../images/shape-10.png';
import shape11 from '../images/shape-11.png';
import shape12 from '../images/shape-12.png';
import shape1 from '../images/1.svg';
import shape2 from '../images/2.svg';
import shape3 from '../images/3.svg';
import shape15 from '../images/15.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './feature.css'
function Feature() {
    return (
        <section className=" feature-section centred bg-color-3">
        <div className="pattern-layer">
                            <div className="pattern-1" style={{backgroundImage:` url(${shape13})`}}>
                            </div>
                            <div className="pattern-2" style={{backgroundImage:` url(${shape14})`}}>
                            </div>
        </div>
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                    <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="pattern">
                                <div className="pattern-1" style={{backgroundImage:` url(${shape5})`}}>
                                </div>
                                <div className="pattern-2" style={{backgroundImage:` url(${shape9})`}}></div>
                            </div>
                            <figure className="icon-box">
                            <img src={shape1} alt=""/>
                            </figure>
                            <p>Appointment With</p>
                            <h3>Nearest Clinic</h3>
                            <div className="link"><a href="all-clinic-2/index.html"><i className="fa fa-arrow-right"></i></a></div>
                            <div className="btn-box"><a href="all-clinic-2/index.html" className="theme-btn-one">All Clinics<i className="fa fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                    <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="pattern">
                                <div className="pattern-1" style={{backgroundImage:` url(${shape6})`}}>
                                </div>
                                <div className="pattern-2" style={{backgroundImage:` url(${shape10})`}}></div>
                            </div>
                            <figure className="icon-box">
                            <img src={shape2} alt=""/>
                            </figure>
                            <p>Live Chat With</p>
                            <h3>Doctor</h3>
                            <div className="link"><a href="doctors/index.html"><i className="fa fa-arrow-right"></i></a></div>
                            <div className="btn-box"><a href="doctors/index.html" className="theme-btn-one">All Doctors<i className="fa fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                    <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="pattern">
                                <div className="pattern-1" style={{backgroundImage:` url(${shape7})`}}>
                                </div>
                                <div className="pattern-2" style={{backgroundImage:` url(${shape11})`}}></div>
                            </div>
                            <figure className="icon-box">
                            <img src={shape3} alt=""/>
                            </figure>
                            <p>Appoinment With Top</p>
                            <h3>Departments</h3>
                            <div className="link"><a href="department/index.html"><i className="fa fa-arrow-right"></i></a></div>
                            <div className="btn-box"><a href="department/index.html" className="theme-btn-one">Departments<i className="fa fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                    <div className="feature-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="pattern">
                                <div className="pattern-1" style={{backgroundImage:` url(${shape8})`}}>
                                </div>
                                <div className="pattern-2" style={{backgroundImage:` url(${shape12})`}}></div>
                            </div>
                            <figure className="icon-box">
                            <img src={shape15} alt=""/>
                            </figure>
                            <p>24/7 Active Support</p>
                            <h3>Help Support</h3>
                            <div className="link"><a href="contact-us/index.html"><i className="fa fa-arrow-right"></i></a></div>
                            <div className="btn-box"><a href="contact-us/index.html" className="theme-btn-one">Contact Us<i className="fa fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </section>
    )
}

export default Feature
