"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState, useCallback } from "react";

// Import local images for products
import schoolManagementImg from "../assets/schoolmanagement.jpg";
import employeeManagementImg from "../assets/employee-management.jpg";
import mysavuiorImg from "../assets/mysavuior.jpg";

const products = [
  {
    image: schoolManagementImg,
    name: "School Management System By Zager",
    description:
      "An all-in-one platform to streamline school operations, manage student records, and enhance communication.",
    link: "/products/school-management",
  },
  {
    image: employeeManagementImg,
    name: "Employee Management System By Zager",
    description:
      "A robust solution to handle employee data, attendance, and HR processes efficiently.",
    link: "/products/employee-management",
  },
  {
    image: mysavuiorImg,
    name: "MySavuior",
    description:
      "A comprehensive website for maintaining blood donor lists, ensuring timely and efficient donation matching.",
    link: "/products/mysavuior",
  },
];

const OurProducts = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(1);
  const totalProducts = products.length;

  // Prepare a display array with wrap-around elements
  const displayProducts = [
    products[totalProducts - 1],
    ...products,
    products[0],
  ];

  const slide = useCallback(
    (direction) => {
      let newIndex = index + direction;

      // Handle wrap-around logic
      if (newIndex <= 0) {
        newIndex = totalProducts; // Jump to last product
        gsap.set(carouselRef.current, { x: -totalProducts * 100 + "%" });
      } else if (newIndex >= displayProducts.length - 1) {
        newIndex = 1; // Jump to first product
        gsap.set(carouselRef.current, { x: "-100%" });
      }

      setIndex(newIndex);

      // Animate the carousel slide
      gsap.to(carouselRef.current, {
        x: -newIndex * 100 + "%",
        ease: "power2.out",
        duration: 0.6,
      });
    },
    [index, totalProducts, displayProducts.length]
  );

  const handleDotClick = (dotIndex) => {
    const direction = dotIndex - index;
    slide(direction);
  };

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      slide(1);
    }, 3500);
    return () => clearInterval(interval);
  }, [index, slide]);

  // Background gradient animation (using a subtle effect)
  useEffect(() => {
    gsap.fromTo(
      ".products-bg",
      {
        opacity: 1,
        background: "linear-gradient(to bottom, #ffffff, transparent, #ffffff)",
      },
      {
        opacity: 1,
        background: "linear-gradient(to bottom, #ffffff, transparent, #ffffff)",
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="products-bg relative overflow-hidden min-h-[100vh]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, transparent 30%, #ffbe00 50%, transparent 100%)",
            opacity: 0.1,
          }}
        ></div>
        <div className="absolute -top-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      </div>

      <h4
        style={{
          fontWeight: "700",
          fontSize: "2.5rem",
          color: "#ffbe00",
          marginBottom: "20px",
        }}
        className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
      >
        Our Products
      </h4>
      <div className="relative w-full overflow-hidden mb-10">
        <div
          ref={carouselRef}
          className="flex w-full transition-transform duration-1000"
        >
          {displayProducts.map((product, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full flex flex-col md:flex-row items-center gap-10 px-5 md:px-10 lg:px-20 py-10"
            >
              <div className="w-full max-w-[300px] md:max-w-[40%] h-[200px] md:h-[300px] lg:w-[50%] lg:h-[400px] rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center w-full md:w-[50%] p-4">
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
                  {product.name}
                </h4>
                <p className="text-base md:text-lg text-gray-500 mb-6 overflow-hidden min-h-28 overflow-y-auto">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="bg-[#ffbe00] w-[100px] md:w-[120px] py-2 px-4 rounded-md hover:scale-110 transition duration-300 text-white flex items-center justify-center gap-2"
                >
                  See Product <span className="font-bold text-xl">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {products.map((_, dotIndex) => (
          <div
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex + 1)}
            className={`w-4 h-4 mx-2 rounded-full cursor-pointer hover:bg-amber-200 ${
              index === dotIndex + 1 ? "bg-[#ffbe00]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
