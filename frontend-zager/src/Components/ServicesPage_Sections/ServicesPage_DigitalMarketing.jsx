import { Megaphone } from "lucide-react";
import {
  FaBullhorn,
  FaGlobe,
  FaSearchDollar,
  FaChartLine,
  FaUserFriends,
  FaMoneyBillWave,
  FaEnvelopeOpenText,
  FaUsers,
  FaMousePointer,
  FaClipboardCheck,
} from "react-icons/fa";
import MetaIcon from "../../assets/icons/MetaIcon";


const DigitalMarketing = () => {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6 lg:px-8 py-10 bg-white text-black">
      {/* Grid of Digital Marketing Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { title: "Content Marketing", icon: <FaClipboardCheck size={20} /> },
          { title: "Website Marketing", icon: <FaGlobe size={20} /> },
          {
            title: "Social Media Marketing",
            icon: <FaUserFriends size={20} />,
          },
          { title: "Paid Search", icon: <FaMoneyBillWave size={20} /> },
          { title: "SEO", icon: <FaSearchDollar size={20} /> },
          { title: "Branding", icon: <FaBullhorn size={20} /> },
          { title: "Analytics", icon: <FaChartLine size={20} /> },
          { title: "Influencer Marketing", icon: <FaUsers size={20} /> },
          // { title: "Pay-Per-Click", icon: <FaMousePointer size={20} /> },
          // {
          //   title: "Conversion Rate Optimization",
          //   icon: <FaClipboardCheck size={20} />,
          // },
          {
            title: "Meta Ads",
            icon: <MetaIcon size={20} />,
          },
          { title: "Email Marketing", icon: <FaEnvelopeOpenText size={20} /> },
          {
            title: "Social Media Management",
            icon: <FaUserFriends size={20} />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-[#ffbe00] hover:bg-[#F7931E] hover:text-white text-black text-sm  font-medium px-4 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer"
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

export default DigitalMarketing;
