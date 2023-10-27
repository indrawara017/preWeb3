import myImage from "../images/hero.jpg";
import React from "react";
import "../App.css";
export default function Hero() {
  return (
    <div>
      <div className="card">
        <img src={myImage} className="img-fluid" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Selamat Datang</h5>
          <p className="card-text">di website Praktikum Pemograman Website</p>
        </div>
      </div>
    </div>
  );
}