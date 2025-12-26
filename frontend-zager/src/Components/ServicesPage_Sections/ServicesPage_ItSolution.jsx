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
    { title: "Consulting Services", icon: FaUsersCog },
    { title: "Vendor Management Services", icon: FaProjectDiagram },
    { title: "Project Management Services", icon: FaTools },
    { title: "Mobile App Development", icon: FaMobileAlt },
    { title: "IT Support & Help Desk", icon: FaServer },
    { title: "Managed IT Services", icon: FaUsersCog },
    { title: "Cloud Services", icon: FaCloud },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center px-2 py-5 bg-white text-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#ffbe00] hover:bg-[#F7931E] hover:text-white text-black text-sm font-medium px-4 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-yellow-500 text-white">
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

export default ItSolution;
