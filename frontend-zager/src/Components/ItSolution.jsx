import React from "react";
import {
  FaLaptopCode,
  FaShieldAlt,
  FaNetworkWired,
  FaDatabase,
  FaChalkboardTeacher,
  FaMobileAlt,
  FaTools,
  FaCloud,
  FaUsersCog,
  FaProjectDiagram,
  FaServer,
  FaCode,
} from "react-icons/fa";

const ItSolution = () => {
  const services = [
    { title: "Consulting Services", icon: <FaUsersCog size={24} /> },
    { title: "Software Development & Integration", icon: <FaLaptopCode size={24} /> },
    { title: "Cyber Security Services", icon: <FaShieldAlt size={24} /> },
    { title: "Network Services", icon: <FaNetworkWired size={24} /> },
    { title: "Data Management & Analytics", icon: <FaDatabase size={24} /> },
    { title: "IT Training & Education", icon: <FaChalkboardTeacher size={24} /> },
    { title: "Vendor Management Services", icon: <FaProjectDiagram size={24} /> },
    { title: "Project Management Services", icon: <FaTools size={24} /> },
    { title: "Mobile App Development", icon: <FaMobileAlt size={24} /> },
    { title: "IT Support & Help Desk", icon: <FaServer size={24} /> },
    { title: "Managed IT Services", icon: <FaUsersCog size={24} /> },
    { title: "Cloud Services", icon: <FaCloud size={24} /> },
    { title: "IT Infrastructure & Digital Services", icon: <FaCode size={24} /> },
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

export default ItSolution;
