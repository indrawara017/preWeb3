import { useNavigate } from "react-router-dom";
import myImage from "../images/logo-ilab.png";
import React from "react";
import "../App.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={myImage} alt="ilab-logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  role="button"
                  onClick={() => navigate("/")}
                  className="nav-link active"
                  aria-current="page"
                  href=""
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  role="button"
                  onClick={() => navigate("/about")}
                  className="nav-link"
                  href=""
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a
                  role="button"
                  onClick={() => navigate("/contact")}
                  className="nav-link"
                  href=""
                >
                  CONTACT
                </a>
              </li>
            </ul>
            {/* button */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="button"
                className="btn btn-outline-secondary btn-signup"
                disabled
              >
                SIGN UP
              </button>
              <button type="button" className="btn btn-primary" disabled>
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}