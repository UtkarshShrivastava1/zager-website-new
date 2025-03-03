import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Testimonial from "../Components/Testimonial";
import ContactForm from "../Components/ContactForm";
import AboutUsSection from "../Components/AboutUsSection";
import OurServicesSections from "../Components/OurServicesSections";
import OurProducts from "../Components/Products";
import Clients from "../Components/Client";
import OurPlatforms from "../Components/OurPlatform";
import graphicVideo from "../assets/design1.gif";

const HeroSection = () => {
  useGSAP(() => {
    gsap.from(".content-div", {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
    gsap.from(".video-div", {
      x: 200,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-white text-[#051224] py-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ffbe00] to-transparent opacity-10 pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>

        <div className="relative w-full max-w-6xl flex items-center justify-between px-8 lg:px-12">
          {/* Left Content Section with Animated Text */}
          <div className="content-div flex-1 text-left">
            <h1 className="text-6xl font-extrabold mb-4 leading-tight tracking-tighter lg:text-5xl md:text-4xl sm:text-3xl">
              Empowering Businesses with <br />
              <span className="text-[#ffbe00]">IT</span> Solutions <br />
              &<br />
              Digital <span className="text-[#ffbe00]">Marketing</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6 max-w-lg">
              We provide cutting-edge solutions to elevate your business to new
              heights.
            </p>
            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ffbe00] text-[#051224] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                Get Started
              </button>
              <button className="bg-transparent text-[#ffbe00] px-6 py-3 border-2 border-[#ffbe00] rounded-lg font-semibold hover:bg-[#ffbe00] hover:text-[#051224] transition-all duration-300 shadow-lg transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
          {/* Right Video Section for Seamless Loop */}
          <div className="video-div flex-1 flex justify-center mt-8 md:mt-0">
            <div className="overflow-hidden rounded-lg w-full md:w-auto">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full h-auto object-cover"
              >
                <source src={graphicVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Other Sections of the Page */}
      <OurServicesSections />
      <AboutUsSection />
      <OurProducts />
      <OurPlatforms />
      <Clients />
      <ContactForm />
      <Testimonial />
    </>
  );
};

export default HeroSection;
