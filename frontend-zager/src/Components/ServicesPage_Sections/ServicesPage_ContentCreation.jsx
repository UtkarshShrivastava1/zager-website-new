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
    { title: "Copywriting", icon: FaPenNib },
    { title: "Blog Writing", icon: FaBlog },
    { title: "Video Production", icon: FaVideo },
    { title: "Podcast Production", icon: FaPodcast },
    { title: "Content Strategy", icon: FaProjectDiagram },
    { title: "SEO Content", icon: FaSearch },
    { title: "Script Writing", icon: FaScroll },
    { title: "Email Newsletters", icon: FaEnvelopeOpenText },
    { title: "Content Management", icon: FaTasks },
    { title: "Video Editing", icon: FaFilm },
    { title: "Business Card", icon: FaIdCard },
    { title: "News Cover & Production", icon: FaNewspaper },
    { title: "Magazine Writing", icon: FaBookOpen },
    { title: "Informative Content", icon: FaLightbulb },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center px-6 py-12 bg-white text-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#ffbe00] hover:bg-[#F7931E] hover:text-white text-black text-sm font-medium px-4 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-white">
                <Icon size={20} />
              </div>
              <span className="leading-tight">{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContentCreation;
