import React from "react";
import { 
  FiGlobe, FiShoppingCart, FiSettings, FiDatabase, 
  FiShield, FiCode, FiMonitor, FiLayers, FiZap, 
  FiTool, FiActivity 
} from "react-icons/fi";

const Webdevelopment = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-10 bg-white text-black">
      {/* Grid of Web Development Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {[
          { title: "Static Website", icon: <FiGlobe size={24} /> },
          { title: "Ecommerce Development", icon: <FiShoppingCart size={24} /> },
          { title: "Dynamic Website", icon: <FiMonitor size={24} /> },
          { title: "CMS", icon: <FiLayers size={24} /> },
          { title: "PWA Development", icon: <FiZap size={24} /> },
          { title: "Single Page App", icon: <FiSettings size={24} /> },
          { title: "API Development", icon: <FiCode size={24} /> },
          { title: "Database Development", icon: <FiDatabase size={24} /> },
          { title: "Web Security", icon: <FiShield size={24} /> },
          { title: "Maintenance", icon: <FiTool size={24} /> },
          { title: "Support & More", icon: <FiActivity size={24} /> },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#ffbe00] hover:bg-[#F7931E] hover:text-white text-black text-sm font-medium px-4 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer flex items-center gap-3"
          >
            <div className="bg-yellow-500 text-white p-2 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Webdevelopment;
