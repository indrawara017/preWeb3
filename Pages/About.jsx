// class component
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// ABOUT PAGE
export default class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>Halaman About Us</p>
        <Footer />
      </div>
    );
  }
}
