// src/pages/About.js
import React from "react";
import Product from "./Product";
import Carousel from "../components/Carousel.js";
import '../styles/About.css';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      <Product/>
      <div className="Carousel">
      <Carousel/>
      </div>
    </div>
  );
};

export default About;
