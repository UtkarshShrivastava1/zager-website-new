"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Briefcase,
  GraduationCap,
  Stethoscope,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import { products } from "../../data/products";

const iconMap = {
  Store,
  UtensilsCrossed,
  GraduationCap,
  Stethoscope,
  Briefcase,
};

const OurPlatform = () => {
  return (
    <section
      id="products"
      className="relative bg-white py-14 px-5 md:px-20 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large circle at top-left */}
        <div className="absolute -top-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        {/* Small circle at bottom-right */}
        <div className="absolute -bottom-32 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center mb-16 flex items-center justify-center">
        <h4
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#ffbe00",
            marginBottom: "20px",
          }}
          className="text-3xl font-bold text-center text-[#ffbe00] mb-4 outline-3 outline-[#ffbe00] rounded-2xl md:px-6 py-1 px-3 mt-5"
        >
          Our Products
        </h4>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {products.map((product, index) => {
          const IconComponent = iconMap[product.iconName] || Store;
          return (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.12, 0.36) }}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } gap-10`}
            >
              {/* Image Section with Overlapping Effect */}
              <div className="relative w-full md:w-1/2">
                <div
                  className="absolute -top-5 -left-5 w-2/3 h-2/3 bg-[#ffbe00] opacity-10 rounded-lg"
                  aria-hidden="true"
                ></div>
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden p-4 border border-gray-100">
                  <img
                    src={product.imageUrl}
                    alt={`${product.title} - ${product.category}`}
                    className="w-full h-64 md:h-72 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content Section with Design */}
              <div className="relative w-full md:w-1/2 p-8 pt-10 border-l-4 border-[#ffbe00] shadow-lg bg-white rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <span className="absolute -top-6 left-4 bg-white p-2.5 rounded-full shadow-md">
                  <IconComponent className="text-[#ffbe00] w-9 h-9" />
                </span>

                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#051224] bg-[#ffbe00]/20 px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>

                <h2 className="text-3xl font-bold text-[#ffbe00] mb-3">
                  {product.title}
                </h2>

                <p className="text-[#051224] leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <Link
                    to={product.link}
                    className="px-6 py-2.5 bg-[#ffbe00] text-[#051224] font-semibold rounded-md hover:bg-yellow-500 transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>{product.buttonText}</span>
                    <span className="font-bold text-xl leading-none" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>

                {/* Decorative Background Element */}
                <div
                  className="absolute top-1/2 -right-6 w-20 h-20 bg-[#ffbe00] opacity-10 rounded-full pointer-events-none"
                  aria-hidden="true"
                ></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OurPlatform;
