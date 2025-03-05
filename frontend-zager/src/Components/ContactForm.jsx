"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { FloatingDock } from "../Components/ui/floating-dock";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const containerRef = useRef(null);
  const links = [
    {
      title: "Instagram",
      icon: (
        <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <Facebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Set initial states for left and right columns
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    gsap.set(leftColumn, { x: -200, opacity: 0 });
    gsap.set(rightColumn, { x: 200, opacity: 0 });

    // Create the scroll trigger animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      onEnter: () => {
        gsap.to(leftColumn, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });
        gsap.to(rightColumn, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });
      },
    });

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf(leftColumn);
      gsap.killTweensOf(rightColumn);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative bg-white min-h-screen overflow-hidden mt-15 md:mt-0">
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
        <div className="absolute -top-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -top-32 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>

        {/* Small circle at bottom-left */}
        <div className="absolute -bottom-32 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      </div>
      <h4
        style={{
          fontWeight: "700",
          fontSize: "2.5rem",
          color: "#ffbe00",
          marginBottom: "0px",
        }}
        className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
      >
        Contact us
      </h4>
      <div
        ref={containerRef}
        className="container mx-auto px-4 py-12 md:py-20 !pt-4"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center px-10">
          {/* Left Column */}
          <div ref={leftColumnRef} className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              TRANSFORM YOUR BUSINESS WITH
            </h1>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#cc9900] to-[#ffbe00] bg-clip-text text-transparent pb-2">
                Digital Innovation &
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#051224] to-[#97bdf1] bg-clip-text text-transparent pb-2">
                Strategic Solutions
              </h2>
            </div>
            <div className="pt-8">
              <FloatingDock mobileClassName="translate-y-20" items={links} />
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            ref={rightColumnRef}
            className="bg-white rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Start a conversation with us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name*"
                  required
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                  onChange={handleChange}
                  value={formData.companyName}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  required
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message*"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors resize-none"
                  onChange={handleChange}
                  value={formData.message}
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#ffbe00] text-white rounded hover:cursor-pointer transition-colors font-semibold"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
