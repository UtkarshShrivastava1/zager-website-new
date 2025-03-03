import { NavLink } from "react-router-dom";
import {
  FaShieldAlt,
  FaChartPie,
  FaDigitalTachograph,
  FaPaintBrush,
  FaPenNib,
  FaVideo,
} from "react-icons/fa";

const services = [
  {
    title: "Website Design and Development",
    description:
      "We design and develop both static and dynamic websites for different sectors.",
    icon: <FaShieldAlt size={40} />,
    link: "/website-development",
  },
  {
    title: "Custom Web Application Development",
    description:
      "We are experienced in developing custom web applications for a variety of businesses.",
    icon: <FaChartPie size={40} />,
    link: "/web-app-development",
  },
  {
    title: "Digital Media",
    description:
      "We create and manage digital media strategies to grow your brand online.",
    icon: <FaDigitalTachograph size={40} />,
    link: "/digital-media",
  },
  {
    title: "Designing",
    description:
      "Our creative team designs stunning visuals that align with your brand identity.",
    icon: <FaPaintBrush size={40} />,
    link: "/designing",
  },
  {
    title: "Content Creation",
    description:
      "We develop engaging content, from blogs to social media, that drives engagement.",
    icon: <FaPenNib size={40} />,
    link: "/content-creation",
  },
  {
    title: "Media Production",
    description:
      "We produce high-quality videos and media content for your business needs.",
    icon: <FaVideo size={40} />,
    link: "/media-production",
  },
];

const OurServicesSections = () => {
  return (
    <section className="relative py-16 bg-white text-[#051224] overflow-hidden">
      {/* Decorative Background Elements: Even Gradient Overlay & Blurred Circles, flipped vertically */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: "scaleY(-1)" }}
      >
        {/* Even Gradient Overlay */}
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #ffbe00 50%, transparent 100%)",
            opacity: 0.1,
          }}
        ></div>
        {/* Blurred Circle in top-right corner (after flip, appears at bottom-right) */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        {/* Blurred Circle in bottom-left corner (after flip, appears at top-left) */}
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h4
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#ffbe00",
            marginBottom: "20px",
          }}
          className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
        >
          Our Services
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Custom IT Solutions for <br /> Your Successful Business
        </h2>
        <div className="w-16 h-1 bg-[#ffbe00] mx-auto mt-3"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <NavLink
              to={service.link}
              key={index}
              className="relative bg-[#fffaf0] border border-gray-200 rounded-xl shadow-md p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-[#ffbe00]"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#ffbe00] text-[#051224] p-4 rounded-full shadow-md transition duration-300 hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSections;
