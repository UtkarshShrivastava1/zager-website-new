  import { useState, useEffect } from "react";
  import "./Carousel.css"; // Importing Vanilla CSS
  // import Slider from "react-slick";
  // import "slick-carousel/slick/slick.css";  Importing Slick CSS
  const Carousel = () => {
    //  // Carousel settings for react-slick
    //   const carouselSettings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     arrows: true,
    //     nextArrow: <ArrowForwardIos fontSize="small" />,
    //     prevArrow: <ArrowBackIos fontSize="small" />,
    //   };
    const slides = [
      {
        id: 1,
        text: "Web Development",
        description:" Web development refers to the creating, building, and maintaining of websites",
        image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 2,
        text: "Digital Marketing",
        description :" Web development refers to the creating, building, and maintaining of websites",
        image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 3,
        text: "Arcitecture",
        description :" Web development refers to the creating, building, and maintaining of websites",
        image: "https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 4,
        text: "Arcitecture",
        image: "https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Auto-slide every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="carousel-container">
        <div className="carousel">
          {/* <Slider>
            
          </Slider> */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <span className="slide-text">{slide.text}</span>
              <span className="slide-description">{slide.description}</span>
            </div>
          ))}
        </div>
  
        <button className="carousel-prev" onClick={prevSlide}>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
  
        <button className="carousel-next" onClick={nextSlide}>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
  
        <div className="carousel-pagination">
          {slides.map((_, index) => (
            <div key={index} className={`dot ${index === currentIndex ? "active" : ""}`} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;
  