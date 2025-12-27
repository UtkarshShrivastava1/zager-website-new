import {
  FaVideo,
  FaCamera,
  FaFacebook,
  FaPaintBrush,
  FaFileAlt,
  FaChartBar,
  FaCalendarCheck,
} from "react-icons/fa";

const DigitalMarketing = () => {
  const services = [
    { title: "Film & Video Production", icon: FaVideo },
    { title: "Digital Media & Photography", icon: FaCamera },
    { title: "Graphic Design Services", icon: FaPaintBrush },
    { title: "Content Strategy & Development", icon: FaFileAlt },
    { title: "Media Consulting & Research", icon: FaChartBar },
    { title: "Event Production & Management", icon: FaCalendarCheck },
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

export default DigitalMarketing;
