import Heading from "../Components/Heading";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { cn } from "../lib/utils";
import gsap from "gsap";
import { useRef, useEffect } from "react";

// Local image imports
import schoolManagementImg from "../assets/schoolmanagement.jpg";
import employeeManagementImg from "../assets/employee-management.jpg";
import hotelErpImg from "../assets/zms.jpeg";
import hospitalErpImg from "../assets/mysavuior.jpg";
import zmsPlatformImg from "../assets/zms.jpeg";

function ZagerManagementSystem() {
  const solutions = [
    {
      name: "School Management System",
      description:
        "Our comprehensive School Management System automates daily operations—managing student records, attendance, scheduling, and communication—in one seamless solution.",
      imageUrl: schoolManagementImg,
    },
    {
      name: "Employee Management System",
      description:
        "Streamline HR processes with our Employee Management System, integrating payroll, attendance, performance tracking, and employee records for efficient workforce management.",
      imageUrl: employeeManagementImg,
    },
    {
      name: "Hotel ERP",
      description:
        "Our Hotel ERP solution unifies guest management, reservations, inventory, and billing into one platform—delivering an enhanced hospitality experience.",
      imageUrl: hotelErpImg,
    },
    {
      name: "Hospital ERP",
      description:
        "Tailored for healthcare, our Hospital ERP integrates patient management, scheduling, billing, and resource allocation, ensuring smooth and efficient operations.",
      imageUrl: hospitalErpImg,
    },
  ];

  const words = "Welcome to Zager Management System (ZMS),";
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Set initial state for scroll-triggered elements
    gsap.set([contentRef.current, imageRef.current], {
      y: 100,
      opacity: 0,
    });

    // Animate text and image on scroll
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

    // Animate background glowing circles
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

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Gradient Overlay & Glowing Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
        <Heading value={"ZAGER MANAGEMENT SYSTEM"} />
        <div className="flex flex-col items-center justify-center py-5 gap-2">
          <TextGenerateEffect words={words} />
          <p className="w-full text-center text-lg">
            Zager Management System (ZMS) is a comprehensive, unified platform
            that brings together a diverse range of automation and ERP systems
            into one seamless solution. Our platform offers cutting-edge
            innovations tailored for various industries—our latest projects
            include the School Management System and Employee Management System,
            with many more solutions like Hotel and Hospital ERPs on the
            pipeline.
          </p>
        </div>

        {/* Vision & Mission Section */}
        <section ref={sectionRef} className="py-12">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-[-16]">
            {/*
              Adjust the 'mt-[-16]' value here:
                - More negative (e.g., mt-[-20]) pushes the section closer.
                - Less negative (e.g., mt-[-12]) creates more gap.
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div ref={contentRef} className="text-center md:text-left">
                <h3 className="text-[#ffbe00] text-4xl font-bold tracking-normal">
                  Our Vision & Mission
                </h3>
                <p className="text-gray-900 mt-4 text-lg leading-relaxed">
                  Our vision is to revolutionize business operations through
                  innovative ERP solutions that streamline processes and empower
                  decision-making. We are dedicated to delivering automation and
                  technology that drive efficiency and growth across industries.
                </p>
              </div>

              {/* Image Section */}
              <div ref={imageRef} className="flex justify-center">
                <img
                  src={zmsPlatformImg}
                  alt="ZMS Platform"
                  className="rounded-lg w-full md:w-96"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions Section */}
        <div className="mt-17">
          <Heading value={"Our Solutions"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
          {solutions.map((solution, index) => (
            <div key={index} className="max-w-xs w-full group/card">
              <div
                className={cn(
                  "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
                )}
                style={{
                  backgroundImage: `url(${solution.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                <div className="text content">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                    {solution.name}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="flex flex-col items-center justify-center py-5 gap-2 mt-15 mb-20">
          {/*
            Added 'mb-20' to create a clear gap after the section ends.
          */}
          <h2 className="text-4xl md:text-4xl font-bold mb-2 text-[#ffbe00] text-center">
            Explore More ERP Solutions
          </h2>
          <p className="w-full text-center text-lg">
            Discover how Zager Management System can transform your business
            processes and elevate operational efficiency with our innovative ERP
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ZagerManagementSystem;
