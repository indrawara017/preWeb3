import myImageIlab from "../images/logo-ilab.png";
import myImageF from "../images/logo-facebook.png";
import myImageI from "../images/logo-instagram.png";
import myImageT from "../images/logo-twitter.png";
import React from "react";
import "../App.css";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* <!-- IMG --> */}
              <div className="mt-5">
                <img src={myImageIlab} alt="" />
              </div>
              <p className="mt-5">Copyright &copy; 2022 Infinite Learning</p>
            </div>

            {/* <!-- SERVICE --> */}
            <div className="col-md-3 mb-3">
              <div className="service">
                <h5>Service</h5>
                <div className="element-service">
                  <ul className="element">
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href=""
                      >
                        Email Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href=""
                      >
                        Campaign
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href=""
                      >
                        Branding
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href=""
                      >
                        Offline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- ABOUT --> */}
            <div className="col-md-3 mb-3">
              <div className="about">
                <h5>About</h5>
                <div className="element-about">
                  <ul className="element">
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center facebook"
                        href=""
                      >
                        Our Story
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href=""
                      >
                        Benefits
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href=""
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href=""
                      >
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- FOLLOW US --> */}
            <div className="col-md-2 mb-3">
              <div className="follow-us">
                <h5>Follow Us</h5>
                <div className="element-follow">
                  <ul>
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href=""
                      >
                        <img src={myImageF} alt="logo-facebook" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href=""
                      >
                        <img src={myImageT} alt="logo-twitter" />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        href=""
                      >
                        <img src={myImageI} alt="logo-instagram" />
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}