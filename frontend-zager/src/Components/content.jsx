import React from 'react'
import { FiGlobe, FiShoppingCart, FiSettings, FiDatabase, FiShield, FiCode, FiMonitor, FiLayers, FiZap, FiTool, FiActivity } from "react-icons/fi";

const content = () => {
  return (
    <div>
        {/* Grid of Digital Marketing Services */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {[
             { title: "Static Website", icon: <FiGlobe  size={24}/> },
             { title: "Ecommerce Development", icon: <FiShoppingCart   size={24}/> },
             { title: "Dynamic Website", icon: <FiMonitor  size={24} /> },
             { title: "CMS", icon: <FiLayers  size={24} /> },
             { title: "PWA Development", icon: <FiZap   size={24}/> },
             { title: "Single Page App", icon: <FiSettings   size={24}/> },
             { title: "API Development", icon: <FiCode   size={24}/> },
             { title: "Database Development", icon: <FiDatabase  size={24} /> },
             { title: "Web Security", icon: <FiShield  size={24} /> },
             { title: "Maintenance", icon: <FiTool  size={24} /> },
             { title: "Support & More", icon: <FiActivity  size={24} /> },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#ffbe00] hover:bg-[#F7931E] hover:text-white text-black text-sm font-medium px-4 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer flex items-center gap-3"
                  >
                    <div className="bg-yellow-500 text-white p-2 rounded-full">{item.icon}</div>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
      
    </div>
  )
}

export default content;
