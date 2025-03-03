import React from "react";
import { 
  FaVideo, 
  FaCamera, 
  FaFacebook, 
  FaPaintBrush, 
  FaFileAlt, 
  FaChartBar, 
  FaCalendarCheck 
} from "react-icons/fa";

const DigitalMarketing = () => {
  const services = [
    { title: "Film & Video Production", icon: <FaVideo size={24} /> },
    { title: "Digital Media & Photography", icon: <FaCamera size={24} /> },
    { title: "Social Media Management", icon: <FaFacebook size={24} /> },
    { title: "Graphic Design Services", icon: <FaPaintBrush size={24} /> },
    { title: "Content Strategy & Development", icon: <FaFileAlt size={24} /> },
    { title: "Media Consulting & Research", icon: <FaChartBar size={24} /> },
    { title: "Event Production & Management", icon: <FaCalendarCheck size={24} /> },
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

export default DigitalMarketing;
