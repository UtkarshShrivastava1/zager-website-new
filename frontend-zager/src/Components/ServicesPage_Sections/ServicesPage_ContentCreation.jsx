import React from "react";
import {
  FaPenNib,
  FaBlog,
  FaVideo,
  FaPodcast,
  FaProjectDiagram,
  FaSearch,
  FaScroll,
  FaEnvelopeOpenText,
  FaTasks,
  FaFilm,
  FaIdCard,
  FaNewspaper,
  FaBookOpen,
  FaLightbulb,
} from "react-icons/fa";

const ContentCreation = () => {
  const services = [
    { title: "Copywriting", icon: <FaPenNib size={24} /> },
    { title: "Blog Writing", icon: <FaBlog size={24} /> },
    { title: "Video Production", icon: <FaVideo size={24} /> },
    { title: "Podcast Production", icon: <FaPodcast size={24} /> },
    { title: "Content Strategy", icon: <FaProjectDiagram size={24} /> },
    { title: "SEO Content", icon: <FaSearch size={24} /> },
    { title: "Script Writing", icon: <FaScroll size={24} /> },
    { title: "Email Newsletters", icon: <FaEnvelopeOpenText size={24} /> },
    { title: "Content Management", icon: <FaTasks size={24} /> },
    { title: "Video Editing", icon: <FaFilm size={24} /> },
    { title: "Business Card", icon: <FaIdCard size={24} /> },
    { title: "News Cover & Production", icon: <FaNewspaper size={24} /> },
    { title: "Magazine Writing", icon: <FaBookOpen size={24} /> },
    { title: "Informative Content", icon: <FaLightbulb size={24} /> },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center px-6 py-12 bg-white text-black">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-[#ffbe00] hover:bg-[#F7931E] hover:text-white text-black text-sm font-medium px-4 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="bg-yellow-500 text-white p-2 rounded-full">{item.icon}</div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentCreation;
