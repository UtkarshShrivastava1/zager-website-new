import React from "react";

// import {Carousel,Card} from "./Carousel.js";
// import{ Card} from "./Carousel.js";
// import "./Carousel.css";

// import { useNavigate } from "react-router-dom";
import "./OurServicesSection.css";
import  FocusCards  from "./FocusCard.js";
import '../styles/FocusCards.css'

const cardData = [
  { title: "Web development",description :" Web development refers to the creating, building, and maintaining of websites", src: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },

  { title: "Digital Marketing",description :" Web development refers to the creating, building, and maintaining of websites", src: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },

  { title: "Architecture",description :" Web development refers to the creating, building, and maintaining of websites", src: "https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },

  { title: "Graphic Designer",description :" Web development refers to the creating, building, and maintaining of websites", src: "https://images.pexels.com/photos/28608026/pexels-photo-28608026/free-photo-of-digital-art-creation-on-tablet-with-stylus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },

  { title: "IT Solutions",description :" Web development refers to the creating, building, and maintaining of websites", src: "https://images.pexels.com/photos/7876783/pexels-photo-7876783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },

  { title: "Content Creations",description :" Web development refers to the creating, building, and maintaining of websites", src: "https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },

  { title: "Media Production",description :" Web development refers to the creating, building, and maintaining of websites", src: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },

  { title: "influencer marketing",description :" Web development refers to the creating, building, and maintaining of websites", src: "https://images.pexels.com/photos/7480565/pexels-photo-7480565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
];
const OurServicesSection = () => {
 
  return (
    <div className="our-services-section">
      <h1><span>Our Digital Marketing Services</span></h1>
      <hr/>
      <div >
      <FocusCards cards={cardData} />
  </div>
    </div>
  );
};

export default OurServicesSection;
