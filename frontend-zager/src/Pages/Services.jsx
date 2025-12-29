import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ServicesIntro from "../Components/ServicesPage_Sections/ServicesPage_Intro";
import DigitalMarketing from "../Components/ServicesPage_Sections/ServicesPage_DigitalMarketing";
import WebDevelopment from "../Components/ServicesPage_Sections/ServicesPage_WebDevelopment";
import MediaProduction from "../Components/ServicesPage_Sections/ServicesPage_MediaProduction";
import ItSolution from "../Components/ServicesPage_Sections/ServicesPage_ItSolution";
import Designing from "../Components/ServicesPage_Sections/ServicesPage_Designing";
import ContentCreation from "../Components/ServicesPage_Sections/ServicesPage_ContentCreation";
import StickyScroll from "../Components/ServicesPage_Sections/ServicesPage_StickyScroll";
import Architecture from "../Components/ServicesPage_Sections/ServicesPage_Architecture";

// Local video imports
import digitalMarketingVideo from "../assets/design1.mp4";
import webDevelopmentVideo from "../assets/design2.mp4";
import mediaProductionVideo from "../assets/design3.mp4";
import itSolutionsVideo from "../assets/design4.mp4";
import contentCreationVideo from "../assets/design5.mp4";
import designingVideo from "../assets/design6.mp4";
import { Helmet } from "react-helmet-async";
// import architectureVideo from "../assets/design7.mp4";

// Content data with IDs matching the hash links for scroll anchoring
const contentData = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Build and maintain high-performance websites with custom design, coding, and server configuration to ensure seamless user experience.",
    tags: <WebDevelopment />,
    videoUrl: webDevelopmentVideo,
  },
  {
    id: "it-solutions",
    title: "IT Solutions and Services",
    description:
      "Get comprehensive support for software, networks, and technical challenges to boost your business efficiency.",
    tags: <ItSolution />,
    videoUrl: itSolutionsVideo,
  },
  {
    id: "digital-media",
    title: "Digital Marketing",
    description:
      "Promote your products or services using digital channels like social media, search engines, email, and websites to engage your target audience.",
    tags: <DigitalMarketing />,
    videoUrl: digitalMarketingVideo,
  },

  
  {
    id: "designing",
    title: "Graphic Designing & Branding",
    description:
      "Enhance your brand identity with visually stunning designs that capture attention and convey your message effectively.",
    tags: <Designing />,
    videoUrl: designingVideo,
  },
  {
    id: "media-production",
    title: "Media Production",
    description:
      "Create captivating video and media content through end-to-end production—from concept development to final editing.",
    tags: <MediaProduction />,
    videoUrl: mediaProductionVideo,
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Engage your audience with high-quality content in various formats that supports your marketing goals and builds your brand.",
    tags: <ContentCreation />,
    videoUrl: contentCreationVideo,
  },
  // {
  //   id: "architecture",
  //   title: "Architecture",
  //   description:
  //     "Design and construct aesthetically pleasing and functional structures that emphasize sustainability and innovation.",
  //   tags: <Architecture />,
  //   videoUrl: architectureVideo,
  // },
];

const Services = () => {
  const location = useLocation();

  // Smooth scroll to section if URL contains a hash
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const targetElement = document.getElementById(location.hash.slice(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Our Services - Zager</title>
        <meta
          name="description"
          content="Discover Zager's range of digital services including Web Development, IT Solutions, Digital Marketing, Graphic Designing, Media Production, and Content Creation."
        />
        <link rel="canonical" href="https://www.zager.in/Services" />
        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Our Services - Zager" />
        <meta
          property="og:description"
          content="Discover Zager's range of digital services including Web Development, IT Solutions, Digital Marketing, Graphic Designing, Media Production, and Content Creation."
        />
        <meta property="og:url" content="https://www.zager.in/Services" />
        <meta property="og:type" content="website" />
      </Helmet>
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
                "linear-gradient(135deg, #ffbe00 10%, transparent 50%)",
              opacity: 0.1,
            }}
          ></div>

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
            Our Services
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
