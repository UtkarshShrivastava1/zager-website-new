import React from 'react'
// import  {Carousel } from '../components/Carousel.js';
// import Card from '../components/Card.js';
import OurServicesSection from '../components/OurServicesSection'


// const items = [
//   { title: "iPhone 15", content: "New Dynamic Island", src: "https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
//   { title: "MacBook Pro", content: "M3 Chip, Ultra-fast", src: "https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
// ];
const Services = () => {
  return (
    <div>
    {/* <Carousel items={items.map((item, index) => <Card key={index} card={item} index={index} />)} /> */}
    <OurServicesSection />
  </div>
  )
}



export default Services
