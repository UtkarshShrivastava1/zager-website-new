"use client";
import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const cardLength = content.length;

  // Update breakpoints calculation
  const breakpoints = content.map((_, index) => index / (cardLength - 1));

  // Update isMobile state based on window width.
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const closestIndex = breakpoints.reduce((acc, point, index) => {
      return Math.abs(latest - point) < Math.abs(latest - breakpoints[acc])
        ? index
        : acc;
    }, 0);
    setActiveCard(closestIndex);
  });

  // Updated variants for the text blocks
  const textVariants = {
    active: { opacity: 1, scale: 1 },
    inactive: { opacity: 1, scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.1 } },
  };

  const backgroundColors = ["#ffffff", "#ffffff", "#ffffff"];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className={`h-auto max-h-[40rem] overflow-y-auto flex flex-col lg:flex-row justify-center relative space-y-6 lg:space-x-10 rounded-md p-4 sm:p-6 lg:p-10 no-scrollbar transition-all duration-500 ease-in-out shadow-lg ${
        isMobile ? "pt-1120" : ""
      }`}
      ref={ref}
    >
      {/* Left Side: Text Content */}
      <div className="flex flex-col items-start px-4 w-full lg:w-2/3">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              className="my-6 sm:my-8"
              variants={textVariants}
              initial="inactive"
              animate={activeCard === index ? "active" : "inactive"}
              whileHover="hover"
              transition={{ duration: 0.1 }}
            >
              <motion.h2
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-yellow-400 transition-all duration-300"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="text-sm sm:text-base lg:text-sm text-black max-w-3xl mt-2 sm:mt-4 transition-all duration-300"
              >
                {item.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="text-xs sm:text-sm lg:text-lg text-slate-300 max-w-3xl mt-1 transition-all duration-300"
              >
                {item.tags}
              </motion.p>
            </motion.div>
          ))}
          <div className="h-10 sm:h-20 lg:h-40" />
        </div>
      </div>

      {/* Right Side: Video Content */}
      <div
        className={`w-full lg:w-1/3 h-auto sm:h-56 lg:h-80 rounded-md relative lg:sticky lg:top-30 overflow-hidden ${contentClassName}`}
      >
        {content[activeCard].videoUrl ? (
          <motion.video
            src={content[activeCard].videoUrl}
            className="w-full h-full object-cover rounded-md transition-all duration-300"
            autoPlay
            muted
            loop
          />
        ) : (
          <motion.div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-md">
            <p className="text-gray-500">No video available</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

StickyScroll.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.node.isRequired,
      videoUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  contentClassName: PropTypes.string,
};

export default StickyScroll;
