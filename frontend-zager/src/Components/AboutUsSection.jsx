import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Set initial states for text and image animations
    gsap.set([contentRef.current, imageRef.current], {
      y: 100,
      opacity: 0,
    });

    // Create the scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    tl.to([contentRef.current, imageRef.current], {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });

    // Cleanup timeline on unmount
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Overlay */}
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #ffbe00 50%, transparent 100%)",
            opacity: 0.1,
          }}
        ></div>
        {/* Large circle at top-right */}
        <div className="absolute -top-32 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        {/* Small circle at bottom-left */}
        <div className="absolute -bottom-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Title Section: Centered across the full container */}
        <div className="text-center mb-12">
          <h4
            style={{
              fontWeight: "700",
              fontSize: "2.5rem",
              color: "#ffbe00",
              marginBottom: "20px",
            }}
            className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
          >
            About Us
          </h4>
        </div>

        {/* Two-Column Grid for Content and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={contentRef} className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#051224] mt-3 leading-tight">
              Empowering Your Business <br /> with Digital Innovation
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              We are a passionate team of designers, developers, and strategists
              dedicated to crafting cutting-edge solutions. Our goal is to help
              businesses thrive in the digital landscape by providing top-notch
              web development, media production, and creative design services.
            </p>
            <button
              onClick={() => navigate("/aboutus")}
              className="mt-6 bg-[#ffbe00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Read More
            </button>
          </div>

          {/* Image Section */}
          <div ref={imageRef} className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/4549411/pexels-photo-4549411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About Us"
              className="rounded-lg shadow-lg w-full md:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
