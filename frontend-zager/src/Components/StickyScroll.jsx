"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardLength = content.length;
    const breakpoints = content.map((_, index) => index / cardLength);
    const closestIndex = breakpoints.reduce((acc, point, index) => {
      return Math.abs(latest - point) < Math.abs(latest - breakpoints[acc])
        ? index
        : acc;
    }, 0);
    setActiveCard(closestIndex);
  });

  const backgroundColors = ["#ffffff", "#ffffff", "#ffffff"];
  const gradients = [
    "linear-gradient(to bottom left ,  #ffffff ,#FFFF00)",
    // "linear-gradient(to bottom right, #ec4899, #6366f1)",
    // "linear-gradient(to bottom right, #f97316, #facc15)",
  ];

  const [bgGradient, setBgGradient] = useState(gradients[0]);

  useEffect(() => {
    setBgGradient(gradients[activeCard % gradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor:
          backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-auto max-h-[40rem] overflow-y-auto flex flex-col lg:flex-row justify-center relative space-y-6 lg:space-x-10 rounded-md p-4 sm:p-6 lg:p-10 no-scrollbar"
      ref={ref}
    >
      {/* Left Side: Text Content */}
      <div className="flex flex-col items-start px-4 w-full lg:w-2/3">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-6 sm:my-8">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-yellow-400"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-sm sm:text-base lg:text-lg text-black max-w-3xl mt-2 sm:mt-4"
              >
                {item.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-xs sm:text-sm lg:text-lg text-slate-300 max-w-3xl mt-1"
              >
                {item.tags}
              </motion.p>
            </div>
          ))}
          <div className="h-10 sm:h-20 lg:h-40" />
        </div>
      </div>

      {/* Right Side: Image */}
     
      <div
      
        className={`w-full lg:w-1/3 h-auto sm:h-56 lg:h-80 rounded-md sticky top-30 overflow-hidden ${contentClassName}`}
      >
        <img
  src={content[activeCard].imageUrl}
  alt={content[activeCard].title}
  className="w-full h-full object-cover rounded-md"
/>
      </div>

     
    </motion.div>
  );
};

export default StickyScroll;
