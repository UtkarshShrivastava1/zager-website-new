import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import ContactForm from "../Components/ContactForm";
import AboutUsSection from "../Components/AboutUsSection";
import OurServicesSections from "../Components/OurServicesSections";
import OurProducts from "../Components/Products";
import Clients from "../Components/Client";
import OurPlatforms from "../Components/OurPlatform";
import graphicVideo from "../assets/graphics5.webm";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const textRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    // Animate the main heading
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

    // Floating effect for glowing circles
    gsap.to(".top-glow", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });

    gsap.to(".bottom-glow", {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });

    // Typing Effect using SplitType for heading
    if (textRef.current) {
      const splitText = new SplitType(textRef.current, { type: "chars" });

      gsap.from(splitText.chars, {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Typing Animation Loop for the paragraph
    if (paragraphRef.current) {
      const splitParagraph = new SplitType(paragraphRef.current, {
        type: "chars",
      });

      gsap.fromTo(
        splitParagraph.chars,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.05,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "power1.inOut",
        }
      );
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen w-full flex items-center justify-center bg-white text-[#051224] py-8 md:py-12 overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="top-glow absolute -top-10 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-100 -left-5 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        </div>

        <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-12">
          {/* Left Content Section with Animated Text */}
          <div className="content-div flex-1 text-left">
            <h1
              ref={textRef}
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tighter lg:text-5xl sm:text-3xl"
            >
              Empowering<span className="text-[#ffbe00]"> Businesses</span> with{" "}
              <br />
              <span className="text-[#ffbe00]">IT</span> Solutions <br />
              &<br />
              Digital <span className="text-[#ffbe00]">Marketing</span>
            </h1>
            {/* Animated Typing Effect on Paragraph */}
            <p
              ref={paragraphRef}
              className="animated-paragraph text-base md:text-lg opacity-90 mb-6 max-w-lg"
            >
              We provide cutting-edge solutions to elevate your business to new
              heights.
            </p>
            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/contactus">
                <button className="bg-[#ffbe00] text-[#180f31] px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                  Get Started
                </button>
              </Link>
              <Link to="/services">
                <button className="bg-transparent text-[#ffbe00] px-4 md:px-6 py-3 border-2 border-[#ffbe00] rounded-lg font-semibold hover:bg-[#ffbe00] hover:text-[#051224] transition-all duration-300 shadow-lg transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="video-div flex-1 flex justify-center mt-4 md:mt-0">
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
    </>
  );
};

export default HeroSection;
