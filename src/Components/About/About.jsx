import React from "react";
import "./About.css";
import { FaFacebookF } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { CiInstagram } from "react-icons/ci";
const About = () => {
  return (
    <div className="contactUs ">
      <h3>Contact Details</h3>
      <div className="contact ">
        <p>Instagram: </p>
        <p>Facebook: Edelweiss Biergarten</p>
        <p> Phone: 602-404-5919</p>
      </div>
    </div>
  );
};

export default About;
