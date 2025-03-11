import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ServicesIntro from "../Components/ServicesIntro";
import DigitalMarketing from "../Components/Digital_Marketing";
import WebDevelopment from "../Components/WebDevelopment";
import MediaProduction from "../Components/MediaProduction";
import ItSolution from "../Components/ItSolution";
import Designing from "../Components/Designing";
import ContentCreation from "../Components/ContentCreation";
import StickyScroll from "../Components/StickyScroll";
import Architecture from "../Components/Architecture";

// Local image imports
import digitalMarketingImage from "../assets/design1.gif";
import webDevelopmentImage from "../assets/design2.gif";
import mediaProductionImage from "../assets/design3.gif";
import itSolutionsImage from "../assets/design6.gif";
import contentCreationImage from "../assets/design4.gif";
import designingImage from "../assets/design2.gif";
import architectureImage from "../assets/design5.gif";

// Content data with IDs matching the hash links for scroll anchoring
const contentData = [
  {
    id: "digital-media",
    title: "Digital Marketing",
    description:
      "Promote your products or services using digital channels like social media, search engines, email, and websites to engage your target audience.",
    tags: <DigitalMarketing />,
    imageUrl: digitalMarketingImage,
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Build and maintain high-performance websites with custom design, coding, and server configuration to ensure seamless user experience.",
    tags: <WebDevelopment />,
    imageUrl: webDevelopmentImage,
  },
  {
    id: "it-solutions",
    title: "IT Solutions and Services",
    description:
      "Get comprehensive support for software, networks, and technical challenges to boost your business efficiency.",
    tags: <ItSolution />,
    imageUrl: itSolutionsImage,
  },
  {
    id: "designing",
    title: "Graphic Designing & Branding",
    description:
      "Enhance your brand identity with visually stunning designs that capture attention and convey your message effectively.",
    tags: <Designing />,
    imageUrl: designingImage,
  },
  {
    id: "media-production",
    title: "Media Production",
    description:
      "Create captivating video and media content through end-to-end production—from concept development to final editing.",
    tags: <MediaProduction />,
    imageUrl: mediaProductionImage,
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Engage your audience with high-quality content in various formats that supports your marketing goals and builds your brand.",
    tags: <ContentCreation />,
    imageUrl: contentCreationImage,
  },
  {
    id: "architecture",
    title: "Architecture",
    description:
      "Design and construct aesthetically pleasing and functional structures that emphasize sustainability and innovation.",
    tags: <Architecture />,
    imageUrl: architectureImage,
  },
];

const Services = () => {
  const location = useLocation();

  // Smooth scroll to section if URL contains a hash
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      {/* Intro Section */}
      <ServicesIntro />

      {/* Sticky Scroll Section with top-left and bottom gradient effect */}
      <div className="min-h-screen bg-gradient-to-t from-gray-50 to-white text-[#051224] p-6 md:p-10 relative">
        {/* Gradient Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-left gradient effect */}
          <div
            className="absolute -top-0 left-0 w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, #ffbe00 10%, transparent 50%)", // Top-left gradient
              opacity: 0.1,
            }}
          ></div>
          <div className="absolute top-100 -left-5 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>

          {/* Bottom gradient effect */}
          <div
            className="absolute bottom-0 w-full h-32"
            style={{
              background: "linear-gradient(0deg, #ffbe00 10%, transparent 50%)",
              opacity: 0.1,
            }}
          ></div>
        </div>
        {/* End Gradient Effects */}

        {/* Section Header */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center relative">
          <h4
            style={{
              fontWeight: "700",
              fontSize: "2.5rem",
              color: "#ffbe00",
              marginBottom: "20px",
            }}
            className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
          >
            Our Services{" "}
          </h4>
          <p className="text-lg md:text-xl text-gray-600 mt-1 leading-snug">
            Explore our range of services designed to boost your digital
            presence.
          </p>
        </div>
        <StickyScroll content={contentData} />
      </div>
    </div>
  );
};

export default Services;
