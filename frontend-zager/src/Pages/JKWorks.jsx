import Heading from "../Components/Heading";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { cn } from "../lib/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import jkworksImg from "../assets/jkworks.jpeg";

function JKWorks() {
  const workValues = [
    {
      name: "DESIGN",
      description:
        "Our team of experienced architects and designers crafts innovative and functional designs that reflect your style and needs. From residential and commercial buildings to bespoke interiors, we ensure every design is both aesthetically pleasing and practical.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664110691109-6558cb5ea476?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8REVTSUdOfGVufDB8fDB8fHww",
    },
    {
      name: "PLANNING",
      description:
        "We provide comprehensive planning services to ensure your project progresses smoothly from concept to completion. Our meticulous approach covers every detail, including site analysis, space utilization, and regulatory compliance.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1706191097326-cd317671d1fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbm5pbmd8ZW58MHwxfDB8fHww",
    },
    {
      name: "CONSTRUCTION",
      description:
        "At JK Works, we manage the construction process with expertise and efficiency. Our team oversees every aspect of the building process, ensuring that construction meets our high standards of quality and aligns with the project’s design and budget.",
      imageUrl:
        "https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09OU1RSVUNUSU9OfGVufDB8MXwwfHx8MA%3D%3D",
    },
    {
      name: "MANAGEMENT",
      description:
        "Our project management services ensure that every project is completed on time and within budget. We coordinate with contractors, suppliers, and stakeholders to manage all phases of the project, from initial planning through to final execution.",
      imageUrl:
        "https://images.unsplash.com/photo-1518281361980-b26bfd556770?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuYWdlbWVudHxlbnwwfDF8MHx8fDA%3D",
    },
  ];

  const words = "Welcome to JK Works, ";
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Set initial states for scroll-triggered elements
    gsap.set([contentRef.current, imageRef.current], {
      y: 100,
      opacity: 0,
    });

    // Create the scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    tl.to([contentRef.current, imageRef.current], {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div className="relative">
        {/* Background Gradient Overlay & Glowing Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, #ffbe00 50%, transparent 100%)",
              opacity: 0.1,
            }}
          ></div>
          <div className="top-glow absolute -top-10 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
          <div className="bottom-glow absolute -bottom-32 -left-20 w-72 h-72 bg-[#ffbe00] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
        </div>

        {/* Main Content with higher z-index */}
        <div className="mt-15 relative z-10">
          <Heading value={"JK WORKS"} />
          <div className="flex flex-col items-center justify-center py-5 gap-2">
            <TextGenerateEffect words={words} />
            {/* Changed to w-full for consistency */}
            <p className="w-full text-center text-lg">
              Your premier partner in architecture and interior design. At JK
              Works, we are dedicated to transforming visions into reality
              through meticulous design, innovative planning, and expert
              construction management. Our platform is your one-stop destination
              for comprehensive architectural and interior design solutions,
              tailored to meet your unique needs and exceed your expectations.
            </p>
          </div>

          {/* Our Mission Section - Adjusted gap and alignment */}
          <section ref={sectionRef} className="py-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-[-16]">
              {/*
                Adjust the 'mt-[-16]' value here:
                  - More negative (e.g., mt-[-20]) pushes it closer.
                  - Less negative (e.g., mt-[-12]) increases the gap.
              */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Text Content */}
                <div ref={contentRef} className="text-center md:text-left">
                  <h3 className="text-[#ffbe00] text-5xl font-bold tracking-normal">
                    Our Mission
                  </h3>
                  <p className="text-gray-900 mt-4 text-lg leading-relaxed">
                    Our mission at JK Works is to deliver exceptional
                    architectural and interior design services that enhance the
                    functionality and aesthetics of every space we touch. We are
                    committed to creating environments that are not only
                    visually stunning but also practical and sustainable. Our
                    goal is to bring your vision to life with precision,
                    creativity, and excellence.
                  </p>
                </div>

                {/* Image Section */}
                <div ref={imageRef} className="flex justify-center">
                  <img
                    src={jkworksImg}
                    alt="ZMS Platform"
                    className="rounded-lg w-full md:w-96"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="mt-17">
            <Heading value={"What we Do?"} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
            {workValues.map((value, index) => (
              <div key={index} className="max-w-xs w-full group/card">
                <div
                  className={cn(
                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
                  )}
                  style={{
                    backgroundImage: `url(${value.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-40 group-hover/card:bg-black hover:opacity-60"></div>
                  <div className="flex flex-row items-center space-x-4 z-10"></div>
                  <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {value.name}
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio / Final Section */}
          <div className="flex flex-col items-center justify-center py-5 gap-2 mt-15 mb-20">
            <h2 className="text-4xl md:text-4xl font-bold mb-2 text-[#ffbe00] text-center capitalize">
              our portfolio
            </h2>
            <p className="w-[50%] text-center text-lg">
              Explore our portfolio to see examples of our work and get inspired
              by our diverse range of projects. Whether you’re planning a new
              build or a renovation, our portfolio showcases the quality and
              creativity we bring to every endeavor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default JKWorks;
