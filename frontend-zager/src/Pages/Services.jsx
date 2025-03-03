import ServicesIntro from "../components/ServicesIntro";
import DigitalMarketing from "../components/Digital_Marketing";
import WebDevelopment from "../components/WebDevelopment";
import MediaProduction from "../components/MediaProduction";
import ItSolution from "../components/ItSolution";
import Designing from "../components/Designing";
import ContentCreation from "../components/ContentCreation";
import StickyScroll from "../components/StickyScroll";
import Architecture from "../components/Architecture";

// Local image imports (ensure these paths and filenames are correct)
import digitalMarketingImage from "../assets/design1.gif";
import webDevelopmentImage from "../assets/design2.gif";
import mediaProductionImage from "../assets/design3.gif";
import itSolutionsImage from "../assets/design6.gif";
import contentCreationImage from "../assets/design4.gif";
import designingImage from "../assets/design2.gif";
import architectureImage from "../assets/design5.gif";

const Services = () => {
  // Content data for the sticky scroll section
  const contentData = [
    {
      title: "Digital Marketing",
      description:
        "The practice of promoting products or services using digital channels like social media, search engines, email, and websites to reach and engage target audiences.",
      tags: <DigitalMarketing />,
      imageUrl: digitalMarketingImage,
    },
    {
      title: "Web Development",
      description:
        "The process of building and maintaining websites, involving tasks such as web design, coding, content creation, and server configuration to ensure functionality, user experience, and performance.",
      tags: <WebDevelopment />,
      imageUrl: webDevelopmentImage,
    },
    {
      title: "Media Production",
      description:
        "The process of creating content for various media platforms, encompassing all stages from concept development to final editing and distribution.",
      tags: <MediaProduction />,
      imageUrl: mediaProductionImage,
    },
    {
      title: "IT Solutions and Services",
      description:
        "Support and technologies for software, networks, and tech issues to improve efficiency and address challenges.",
      tags: <ItSolution />,
      imageUrl: itSolutionsImage,
    },
    {
      title: "Content Creation",
      description:
        "The process of generating engaging and valuable content in various formats to attract and retain audiences, support marketing goals, and establish a brand's online presence.",
      tags: <ContentCreation />,
      imageUrl: contentCreationImage,
    },
    {
      title: "Graphic & Brand Design",
      description:
        "Creating visually stunning designs for businesses, branding, and marketing, enhancing user engagement and brand recognition through creative solutions.",
      tags: <Designing />,
      imageUrl: designingImage,
    },
    {
      title: "Architecture",
      description:
        "The art and science of designing and constructing buildings and other structures, focusing on aesthetics, functionality, and sustainability.",
      tags: <Architecture />,
      imageUrl: architectureImage,
    },
  ];

  return (
    <div>
      {/* Intro Section */}
      <ServicesIntro />

      {/* Section Header for Services */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl font-bold text-[#051224] text-center">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 text-center mt-4">
            Explore our range of services designed to boost your digital
            presence.
          </p>
        </div>
      </div>

      {/* Sticky Scroll Section with improved spacing and consistent styling */}
      <div className="min-h-screen bg-white text-[#051224] p-6 md:p-10">
        <StickyScroll content={contentData} />
      </div>
    </div>
  );
};

export default Services;
