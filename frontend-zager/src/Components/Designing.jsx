import React from "react";
import {
  FaPenNib,
  FaPalette,
  FaVectorSquare,
  FaFileAlt,
  FaFileImage,
  FaDesktop,
  FaIdBadge,
  FaBrush,
  FaBook,
  FaBullhorn,
  FaWordpress,
} from "react-icons/fa";

const Designing = () => {
  const services = [
    { title: "Logo Works", icon: <FaPenNib size={24} /> },
    { title: "Web Design", icon: <FaDesktop size={24} /> },
    { title: "UI/UX", icon: <FaVectorSquare size={24} /> },
    { title: "Product Design", icon: <FaPalette size={24} /> },
    { title: "Brochure & Package Design", icon: <FaFileAlt size={24} /> },
    { title: "Social Media Design", icon: <FaFileImage size={24} /> },
    { title: "Typography", icon: <FaBrush size={24} /> },
    { title: "3D Design", icon: <FaVectorSquare size={24} /> },
    { title: "Flyer Design", icon: <FaFileImage size={24} /> },
    { title: "Business Card", icon: <FaIdBadge size={24} /> },
    { title: "Motion Design", icon: <FaPalette size={24} /> },
    { title: "Book Cover", icon: <FaBook size={24} /> },
    { title: "Advertising", icon: <FaBullhorn size={24} /> },
    { title: "Illustration", icon: <FaBrush size={24} /> },
    { title: "Brand Identity", icon: <FaIdBadge size={24} /> },
    { title: "WordPress & Shopify", icon: <FaWordpress size={24} /> },
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

export default Designing;
