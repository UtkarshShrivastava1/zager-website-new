import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import serviceVideo1 from "../assets/design1.mp4";
import serviceVideo2 from "../assets/design2.mp4";
import serviceVideo3 from "../assets/design3.mp4";
import serviceVideo4 from "../assets/design4.mp4";
import serviceVideo5 from "../assets/design5.mp4";
import serviceVideo6 from "../assets/design1.mp4";

// Updated links use a common /services page with a hash for each service.
const services = [
  {
    title: "Website Design and Development",
    description:
      "We design and develop both static and dynamic websites for different sectors.",
    video: serviceVideo1,
    link: "/services#website-design-and-development",
  },
  {
    title: "Custom Web Application Development",
    description:
      "We are experienced in developing custom web applications for a variety of businesses.",
    video: serviceVideo2,
    link: "/services#custom-web-application-development",
  },
  {
    title: "Digital Marketing",
    description:
      "Custom Digital solutions and Digital Marketing for your Business.",
    video: serviceVideo3,
    link: "/services#digital-media",
  },
  {
    title: "Designing",
    description:
      "Our creative team designs stunning visuals that align with your brand identity.",
    video: serviceVideo4,
    link: "/services#designing",
  },
  {
    title: "Content Creation",
    description:
      "We develop engaging content, from blogs to social media, that drives engagement.",
    video: serviceVideo5,
    link: "/services#content-creation",
  },
  {
    title: "Media Production",
    description:
      "We produce high-quality videos and media content for your business needs.",
    video: serviceVideo6,
    link: "/services#media-production",
  },
];

const OurServicesSections = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".services-bg",
      {
        opacity: 0,
        background: "linear-gradient(to bottom, #ffffff, #fffaf0)",
      },
      {
        opacity: 1,
        background: "linear-gradient(to bottom, #ffffff, transparent, #ffffff)",
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="relative services-bg py-16 text-[#051224] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #ffbe00 50%, transparent 100%)",
            opacity: 0.1,
          }}
        ></div>
        {/* Matching corner circles */}
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      </div>

      <div className="text-center mb-12 relative z-10">
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
        </h4>{" "}
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Custom Digital Solutions for <br /> Your Successful Business
        </h2>
        <div className="w-16 h-1 bg-[#ffbe00] mx-auto mt-3"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <NavLink
              to={service.link}
              key={index}
              className="service-card bg-[#fffaf0] border border-gray-200 rounded-xl shadow-md p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-[#ffbe00]"
            >
              <div className="relative flex justify-center mb-4 rounded-lg overflow-hidden">
                <video
                  src={service.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
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
