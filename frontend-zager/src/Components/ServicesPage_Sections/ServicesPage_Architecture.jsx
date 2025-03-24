import {
  FaProjectDiagram,
  FaCity,
  FaLeaf,
  FaFileContract,
  FaCouch,
  FaMapMarkedAlt,
  FaPencilRuler,
  FaBuilding,
  FaDraftingCompass,
  FaEye,
  FaCubes,
} from "react-icons/fa";

const Architecture = () => {
  const services = [
    { title: "Project Management", icon: <FaProjectDiagram size={24} /> },
    { title: "Urban Design", icon: <FaCity size={24} /> },
    { title: "Sustainable Design", icon: <FaLeaf size={24} /> },
    { title: "Construction Document", icon: <FaFileContract size={24} /> },
    { title: "Interior Design", icon: <FaCouch size={24} /> },
    { title: "Master & Site Planning", icon: <FaMapMarkedAlt size={24} /> },
    { title: "Architecture Design", icon: <FaPencilRuler size={24} /> },
    { title: "Building Management", icon: <FaBuilding size={24} /> },
    { title: "Design & Planning", icon: <FaDraftingCompass size={24} /> },
    { title: "Visualization", icon: <FaEye size={24} /> },
    {
      title: "BIM (Building Information Modeling)",
      icon: <FaCubes size={24} />,
    },
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
            <div className="bg-yellow-500 text-white p-2 rounded-full">
              {item.icon}
            </div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Architecture;
