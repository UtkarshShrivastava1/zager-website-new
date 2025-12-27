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
  const services = [
    { title: "Content Marketing", icon: FaClipboardCheck },
    { title: "Website Marketing", icon: FaGlobe },
    { title: "Social Media Marketing", icon: FaUserFriends },
    { title: "Paid Search", icon: FaMoneyBillWave },
    { title: "SEO", icon: FaSearchDollar },
    { title: "Branding", icon: FaBullhorn },
    { title: "Analytics", icon: FaChartLine },
    { title: "Influencer Marketing", icon: FaUsers },
    { title: "Meta Ads", icon: MetaIcon },
    { title: "Email Marketing", icon: FaEnvelopeOpenText },
    { title: "Social Media Management", icon: FaUserFriends },
  ];

  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6 lg:px-8 py-10 bg-white text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#ffbe00] hover:bg-[#F7931E] hover:text-white text-black text-sm md:text-base font-medium px-4 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-yellow-500 text-white">
                <Icon size={18} />
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

