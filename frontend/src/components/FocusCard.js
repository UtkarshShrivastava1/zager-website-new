import React, { useRef } from "react";
import "../styles/FocusCards.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from '@mui/material/Button';

const FocusCards = ({ cards }) => {
  const scrollRef = useRef(null);
  const scrollAmount = 400; // Adjust based on your card width

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="focus-cards-wrapper">
      <div className="focus-cards-container" ref={scrollRef}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.src} alt={card.title} />
            <div className="card-overlay">
              <div className="card-title">{card.title}</div>
              <div className="card-description">{card.description}</div>
              <Button 
              
      variant="outlined" 
      sx={{
        borderColor: 'white',
        color: 'white',
        '&:hover': {
          borderColor: 'white',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'  // Optional: change background on hover
        }
      }}
    >Explore</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons below the images */}
      <div className="nav-buttons">
        <button className="nav-btn" onClick={scrollLeft}>
          <FaArrowLeft />
        </button>
        <button className="nav-btn" onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FocusCards;
