import ServicesIntro from "../Components/ServicesIntro";
import DigitalMarketing from "../Components/Digital_Marketing";
import WebDevelopment from "../Components/WebDevelopment";
import MediaProduction from "../Components/MediaProduction";
import ItSolution from "../Components/ItSolution";
import Designing from "../Components/Designing";
import ContentCreation from "../Components/ContentCreation";
import StickyScroll from "../Components/StickyScroll";
import Architecture from "../Components/Architecture";

const Services = () => {
  const contentData = [
    {
      title: "Digital Marketing",
      description:
        "The practice of promoting products or services using digital channels like social media, search engines, email, and websites to reach and engage target audiences.",
      tags: <DigitalMarketing />,
      imageUrl:
        "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg",
    },
    {
      title: "Web Development",
      description:
        "The process of building and maintaining websites, involving tasks such as web design, coding, content creation, and server configuration to ensure functionality, user experience, and performance.",
      tags: <WebDevelopment />,
      imageUrl:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Media Production",
      description:
        "The process of creating content for various media platforms, encompassing all stages from concept development to final editing and distribution.",
      tags: <MediaProduction />,
      imageUrl:
        "https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "IT Solutions and Services",
      description:
        "Support and technologies for software, networks, and tech issues to improve efficiency and address challenges.",
      tags: <ItSolution />,
      imageUrl:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Content Creation",
      description:
        "The process of generating engaging and valuable content in various formats to attract and retain audiences, support marketing goals, and establish a brand's online presence.",
      tags: <ContentCreation />,
      imageUrl:
        "https://images.pexels.com/photos/6953672/pexels-photo-6953672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Graphic & Brand Design",
      description:
        "Creating visually stunning designs for businesses, branding, and marketing, enhancing user engagement and brand recognition through creative solutions.",
      tags: <Designing />,
      imageUrl:
        "https://images.pexels.com/photos/3045245/pexels-photo-3045245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Architecture",
      description:
        "The art and science of designing and constructing buildings and other structures, focusing on aesthetics, functionality, and sustainability.",
      tags: <Architecture />,
      imageUrl:
        "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div>
      <ServicesIntro />
      {/* Sticky Scroll Section */}
      <div className="min-h-screen bg-white text-black p-6 md:p-10">
        <StickyScroll content={contentData} />
      </div>
    </div>
  );
};

export default Services;
