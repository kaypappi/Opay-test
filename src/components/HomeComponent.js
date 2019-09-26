import React, { Component } from "react";
import Phone from '../Assets/SVG/phone.svg'
import Playstore from '../Assets/SVG/playstore.svg'
import Piggy from '../Assets/SVG/piggy.svg'
import Building from '../Assets/SVG/building.svg'
import Shield from '../Assets/SVG/shield.svg'
import Shuttle from '../Assets/SVG/shuttle.svg'
import Bar from '../Assets/PNG/bar.png'
import Jaime from '../Assets/PNG/jaime.png'
import Phone2 from '../Assets/PNG/phone.png'
import Smallphone from '../Assets/PNG/smallphone.png'
import Lock from '../Assets/PNG/lock.png'
import Laptop from '../Assets/PNG/laptop.png'
import Tag from '../Assets/SVG/tag.svg'
import Slack from '../Assets/SVG/slack.svg'
import Facebook from '../Assets/SVG/facebook.svg'
import Instagram from '../Assets/SVG/instagram.svg'
import Twitter from '../Assets/SVG/twitter.svg'
import LinkedIn from '../Assets/SVG/LinkedIn.svg'

import './HomeComponent.css'



class HomeComponent extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="landing">
          <div className="landing-left">
            <div className="phone">
              <img src={Phone} alt="" />
            </div>
          </div>
          <div className="landing-right">
            <div className="content">
              <div className="heading">
                <div>Get paid Fast,</div>
                <div>Securely &amp; Reliable</div>
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                eu sed mauris non dignissim. Nam mi pretium, id eu ipsum orci
                nisl. rr
              </div>
              <div className="play-store">
                <img
                  src={Playstore}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-body">
          <div className="section1">
            <div className="help-text">How OPay can help you</div>
            <div className="categories row">
              <div className="category col m3">
                <div className="category-icon">
                  <img
                    src={Piggy}
                    alt=""
                  />
                </div>
                <div className="category-title">Personal Finances</div>
                <div className="divider-block">
                  <div className="spot" />
                  <div className="line" />
                </div>
                <div className="category-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
              </div>
              <div className="category col m3">
                <div className="category-icon">
                  <img
                    src={Building}
                    alt=""
                  />
                </div>
                <div className="category-title">Business Finances</div>
                <div className="divider-block">
                  <div className="spot" />
                  <div className="line" />
                </div>
                <div className="category-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
              </div>
              <div className="category col m3">
                <div className="category-icon">
                  <img
                    src={Shield}
                    alt=""
                  />
                </div>
                <div className="category-title">Secure Finances</div>
                <div className="divider-block">
                  <div className="spot" />
                  <div className="line" />
                </div>
                <div className="category-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
              </div>
              <div className="category col m3">
                <div className="category-icon">
                  <img
                    src={Shuttle}
                    alt=""
                  />
                </div>
                <div className="category-title">Fast Payment</div>
                <div className="divider-block">
                  <div className="spot" />
                  <div className="line" />
                </div>
                <div className="category-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
              </div>
            </div>
            <div className="middle">
              <div className="row">
                <div className="col m6">
                  <div className="left-top">
                    <div className="top-img">
                      <img
                        src={Bar}
                        alt=""
                      />
                    </div>
                    <div className="top-description">
                      <div className="top-description-title">Meet Sample</div>
                      <div className="top-description-text">
                        <p>
                          Sample is a platform designed for merchant or seller.
                          It has all the features that are needed and frequently
                          used by Seller. Handling payments &amp; Inventory!
                        </p>
                        <p className="learn-more">Learn More</p>
                      </div>
                    </div>
                  </div>
                  <div className="left-middle">
                    <div />
                    <div className="grey-blocks" />
                    <div className="right-img">
                      <img
                        src={Jaime}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="left-bottom">
                    <div />
                    <div />
                    <div className="grey-blocks right-img">
                      <img
                        src={Jaime}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="right col m6">
                  <div className="row">
                    <div className="col m6">
                      <div className="img-holder">
                        <img
                          src={Smallphone}
                          alt=""
                        />
                      </div>
                      <div className="title">Compatibility</div>
                      <div className="text">
                        <p>
                          You don't have to own a smartphone, Sample works with
                          all mobile phones. Android users can find us on Google
                          Play Store and IOS users, we are near the corners!
                        </p>
                      </div>
                    </div>
                    <div className="col m6">
                      <div className="img-holder">
                        <img
                          src={Lock} alt=""
                        />
                      </div>
                      <div className="title">Highly Secure</div>
                      <div className="text">
                        <p>
                          You don't have to own a smartphone, Sample works with
                          all mobile phones. Android users can find us on Google
                          Play Store and IOS users, we are near the corners!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col m6">
                      <div className="img-holder">
                        <img
                          src={Laptop}alt=""
                        />
                      </div>
                      <div className="title">Payment Solutions.</div>
                      <div className="text">
                        <p>
                          E-Commerce made easy with Sample -- Buy and Sell at
                          your convience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="bottom">
              <div className="bottom-left">
                <img
                  src={Phone2}
                  alt=""
                  className="big-phone"
                />
              </div>
              <div className="bottom-right">
                <div className="br-top">
                  <img
                    src={Tag}
                    alt=""
                    className="tag"
                  />
                  <div className="features">Features</div>
                </div>
                <div className="br-middle">
                  <div className="features-holder">
                    <div className="spot" />
                    <div className="feature-item">
                      Available on USSD <strong>*726#</strong>
                    </div>
                  </div>
                  <div className="features-holder">
                    <div className="spot" />
                    <div className="feature-item">
                      Settle (liquidate): real-time
                    </div>
                  </div>
                  <div className="features-holder">
                    <div className="spot" />
                    <div className="feature-item">
                      Secure Access – Encryption
                    </div>
                  </div>
                  <div className="features-holder">
                    <div className="spot" />
                    <div className="feature-item">
                      Real-time monitoring and reporting
                    </div>
                  </div>
                  <div className="features-holder">
                    <div className="spot" />
                    <div className="feature-item">Support multiple Users</div>
                  </div>
                  <div className="features-holder">
                    <div className="spot" />
                    <div className="feature-item">
                      Dashboard with insights and analytics
                    </div>
                  </div>
                  <div className="features-holder">
                    <div className="spot" />
                    <div className="feature-item">
                      Integrated with BK and Ecobank
                    </div>
                  </div>
                </div>
                <div className="br-bottom">
                  <div className="play-store">
                    <img
                      src={Playstore}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="divider" />
            <div className="footer-main">
              <div className="left-footer">
                <p>Copyright © 2019 Oltranz Ltd. All rights reserved</p>
              </div>
              <div className="right-footer">
                <span>FAQs</span>
                <span>
                  <img
                    src={Slack}
                    alt=""
                  />
                </span>
                <span>
                  <img
                    src={Facebook}
                    alt=""
                  />
                </span>
                <span>
                  <img
                    src={Twitter}
                    alt=""
                  />
                </span>
                <span>
                  <img
                    src={Instagram}
                    alt=""
                  />
                </span>
                <span>
                  <img
                    src={LinkedIn}
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
