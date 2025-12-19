"use client";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedTestimonials = ({
  testimonials = [],
  autoScrollInterval = 4000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return; // Prevent interval if no testimonials exist

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [testimonials, autoScrollInterval]); // Ensure it restarts on prop change

  if (!testimonials.length) {
    return (
      <p className="text-center text-gray-500">No testimonials available</p>
    );
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center p-6 bg-white shadow-lg rounded-lg"
        >
          <p className="text-lg italic text-gray-700">
            {testimonials[index]?.quote}
          </p>
          <div className="mt-4">
            <img
              src={testimonials[index]?.src}
              alt={testimonials[index]?.name}
              className="w-16 h-16 mx-auto rounded-full border-2 border-yellow-400"
            />
            <h5 className="mt-2 font-bold text-lg text-gray-900">
              {testimonials[index]?.name}
            </h5>
            <p className="text-sm text-gray-500">
              {testimonials[index]?.designation}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

AnimatedTestimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
  autoScrollInterval: PropTypes.number,
};

export default AnimatedTestimonials;
