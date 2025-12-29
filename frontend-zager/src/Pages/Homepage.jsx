import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import { Link } from "react-router-dom";

import ContactForm from "../Components/Homepage_Sections/ContactUs_Homepage_Section";
import AboutUsSection from "../Components/Homepage_Sections/AboutUs_Homepage_Section";
import OurServicesSections from "../Components/Homepage_Sections/OurServices_Homepage_Section";
import OurProducts from "../Components/Homepage_Sections/OurProducts_Homepage_Section";
import Clients from "../Components/Homepage_Sections/OurClients_Homepage_Section";
import OurPlatforms from "../Components/Homepage_Sections/OurPlatforms_Homepage_Section";
import Testimonials from "../Components/Homepage_Sections/Testimonial_Homepage_Section";

import graphicVideo from "../assets/graphics5.webm";
import { Helmet } from "@dr.pogodin/react-helmet";

const HeroSection = () => {
  const textRef = useRef(null);
  const paragraphRef = useRef(null);

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

     <Helmet>
      <title>Zager - IT & Digital Marketing Solutions</title>
      <meta
        name="description"
        content="Empowering businesses with cutting-edge IT solutions and digital marketing strategies. Boost your online presence and grow your brand with Zager."
      />
      <link rel="canonical" href="https://www.zager.in/" />

      {/* Open Graph for social media sharing */}
      <meta property="og:title" content="Zager - IT & Digital Marketing Solutions" />
      <meta
        property="og:description"
        content="Empowering businesses with cutting-edge IT solutions and digital marketing strategies. Boost your online presence and grow your brand with Zager."
      />
      <meta property="og:url" content="https://www.zager.in/" />
      <meta property="og:type" content="website" />
    </Helmet>
      {/* HERO / HEADER */}
      <header className="relative min-h-fit flex items-center justify-center bg-white text-[#051224] py-8 md:py-12 overflow-hidden  ">
        {/* Decorative Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="top-glow absolute -top-10 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-100 -left-5 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse"></div>
        </div>

        <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-12">
          {/* Left Content */}
          <article className="content-div flex-1 text-left">
            <h1
              ref={textRef}
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tighter lg:text-5xl sm:text-3xl"
            >
              Empowering <span className="text-[#ffbe00]">Businesses</span> with{" "}
              <span className="text-[#ffbe00]">IT</span> Solutions <br />&
              Digital <span className="text-[#ffbe00]">Marketing</span>
            </h1>

            <p
              ref={paragraphRef}
              className="animated-paragraph text-base md:text-lg opacity-90 mb-6 max-w-lg"
            >
              We provide cutting-edge IT & digital marketing solutions to
              elevate your business to new heights.
            </p>

            {/* CTA Navigation */}
            <nav aria-label="Primary">
              <ul className="flex flex-wrap gap-4">
                <li>
                  <Link to="/Contact">
                    <button className="bg-[#ffbe00] text-[#180f31] px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                      Get Started
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/Services">
                    <button className="bg-transparent text-[#ffbe00] px-4 md:px-6 py-3 border-2 border-[#ffbe00] rounded-lg font-semibold hover:bg-[#ffbe00] hover:text-[#051224] transition-all duration-300 shadow-lg transform hover:scale-105">
                      Learn More
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </article>

          {/* Right Video Section */}
          <aside className="video-div flex-1 flex justify-center mt-4 md:mt-0">
            <div className="overflow-hidden rounded-lg w-full md:w-auto">
              <video
                autoPlay
                loop
                muted
                playsInline
                aria-label="Promotional animation showcasing our IT & marketing services"
                className="max-w-full h-auto object-cover"
              >
                <source src={graphicVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </aside>
        </div>
      </header>

      {/* MAIN PAGE CONTENT */}
      <main>
        <OurServicesSections />
        <AboutUsSection />
        <OurProducts />
        <OurPlatforms />
        <Clients />
        <ContactForm />
        <Testimonials />
      </main>
    </>
  );
};

export default HeroSection;
