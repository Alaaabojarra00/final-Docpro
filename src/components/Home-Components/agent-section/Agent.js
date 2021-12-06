import React from 'react'
import './agent.css'
const Agent = () => {
  return (
    <section className=" agent-section" id="agent-section">
      <div className="auto-container">
        <div className="inner-container bg-color-2">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 left-column">
              <div className="content_block_3">
                <div className="content-box">
                  <h3>Emergency call</h3>
                  <div className="support-box">
                    <div className="icon-box">
                      <i className="fas fa fa-phone"></i>
                    </div>
                    <span>Telephone</span>
                    <h3>
                      <a href="index.html">+(111) 65_458_856</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 right-column">
              <div className="content_block_4">
                <div className="content-box">
                  <h3>Sign up for Email</h3>
                  <form
                    className="subscribe-form"
                    method="post"
                    action="http://feedburner.google.com/fb/a/mailverify"
                    acceptCharset="utf-8"
                  >
                    <div className="form-group">
                      <input
                        type="hidden"
                        id="uri2"
                        name="uri"
                        value="themeforest"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                      <button type="submit" className="theme-btn-one">
                        Submit now<i className="fa fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agent
