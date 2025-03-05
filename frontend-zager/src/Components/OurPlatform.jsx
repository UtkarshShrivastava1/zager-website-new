"use client";

import { motion } from "framer-motion";
import { BookOpen, Building, Film, Cpu } from "lucide-react";

// Import local images
import gyaanadariImg from "../assets/gyanadari.jpeg";
import zmsImg from "../assets/zms.jpeg";
import iramediaImg from "../assets/iramedia.jpeg";
import jkworksImg from "../assets/jkworks.jpeg";

const platforms = [
  {
    title: "Gyaanadri ",
    description:
      "Welcome to Gyaanadri, your premier destination for insightful content and engaging media.",
    imageUrl: gyaanadariImg,
    link: "/gyaanadari",
    icon: <BookOpen className="text-[#ffbe00] w-10 h-10" />,
  },
  {
    title: "Zager Management System(ZMS)",
    description:
      "Explore ZMS and its cutting-edge innovations comprehensive, unified platform that brings together a diverse range of automation and ERP (Enterprise Resource Planning) systems into one seamless platform.",
    imageUrl: zmsImg,
    link: "/zms",
    icon: <Cpu className="text-[#ffbe00] w-10 h-10" />,
  },
  {
    title: "IRA MEDIA & PRODUCTION",
    description:
      "Welcome to IRA Media and Production, where creativity meets strategy to bring your media projects to life.",
    imageUrl: iramediaImg,
    link: "/iramedia",
    icon: <Film className="text-[#ffbe00] w-10 h-10" />,
  },
  {
    title: "JK WORKS",
    description:
      "Welcome to JK Works, your premier partner in architecture and interior design.",
    imageUrl: jkworksImg,
    link: "/jkworks",
    icon: <Building className="text-[#ffbe00] w-10 h-10" />,
  },
];

const OurPlatform = () => {
  return (
    <section className="relative bg-white py-20 px-5 md:px-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle at top-right */}
        <div className="absolute -top-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        {/* Small circle at bottom-left */}
        <div className="absolute -bottom-32 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h4
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#ffbe00",
            marginBottom: "20px",
          }}
          className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
        >
          Our Platforms
        </h4>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } gap-10`}
          >
            {/* Image Section with Overlapping Effect */}
            <div className="relative w-full md:w-1/2">
              <div className="absolute -top-5 -left-5 w-2/3 h-2/3 bg-[#ffbe00] opacity-10 rounded-lg"></div>
              <img
                src={platform.imageUrl}
                alt={platform.title}
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Section with Design */}
            <div className="relative w-full md:w-1/2 p-8 border-l-4 border-[#ffbe00] shadow-lg bg-white rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <span className="absolute -top-6 left-4 bg-white p-2 rounded-full shadow-md">
                {platform.icon}
              </span>
              <h2 className="text-3xl font-bold text-[#ffbe00] mb-3">
                {platform.title}
              </h2>
              <p className="text-[#051224] leading-relaxed">
                {platform.description}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href={platform.link}
                  className="px-6 py-2 bg-[#ffbe00] text-white font-medium rounded-md hover:bg-yellow-500 transition flex items-center justify-center gap-2"
                >
                  Explore <span className="font-bold text-xl">→</span>
                </a>
              </div>
              {/* Decorative Background Element */}
              <div className="absolute top-1/2 -right-6 w-20 h-20 bg-[#ffbe00] opacity-10 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurPlatform;
