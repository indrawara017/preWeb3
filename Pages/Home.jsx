import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Footer from "../Component/Footer";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    );
  }
}