"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FloatingDock } from "../Components/ui/floating-dock";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../services/api"; // Ensure your axios instance has the proper baseURL
import { Helmet } from "@dr.pogodin/react-helmet";

gsap.registerPlugin(ScrollTrigger);

function ContactUsPage() {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const containerRef = useRef(null);

  const links = [
    {
      title: "Instagram",
      icon: (
        <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/zagerdigitalservices/",
    },
    {
      title: "Facebook",
      icon: (
        <Facebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/zagerdigitalservices",
    },
    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/company/zagerdigitalservices/posts/?feedView=all",
    },
    {
      title: "Twitter",
      icon: (
        <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/zagerdigitalservices",
    },
  ];



  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    inqury:"",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    gsap.set(leftColumn, { x: -200, opacity: 0 });
    gsap.set(rightColumn, { x: 200, opacity: 0 });

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

    return () => {
      gsap.killTweensOf(leftColumn);
      gsap.killTweensOf(rightColumn);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await api.post("/contacts", formData);
      console.log("Form submitted:", response.data);
      setSuccessMessage("Your message has been sent successfully!");
     setFormData({
      name: "",
      companyName: "",
      email: "",
      phone: "",
      inqury: "",
      message: "",
    });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
        <Helmet>
        <title>Contact Us - Zager</title>
        <meta
          name="description"
          content="Get in touch with Zager Digital Services for digital marketing, IT solutions, and more. Start your growth journey today!"
        />
        <link rel="canonical" href="https://www.zager.in/contact" />
        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Contact Us - Zager" />
        <meta
          property="og:description"
          content="Get in touch with Zager Digital Services for digital marketing, IT solutions, and more. Start your growth journey today!"
        />
        <meta property="og:url" content="https://www.zager.in/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-white min-h-screen overflow-hidden mt-15 md:mt-5">
        <h4
          className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
          style={{ fontWeight: "700", fontSize: "2.5rem" }}
        >
          Contact Us
        </h4>
        <div
          ref={containerRef}
          className="container mx-auto px-4 py-12 md:py-20 !pt-4"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center px-4 md:px-10">
            {/* Left Column */}
            <div ref={leftColumnRef} className="space-y-6">
              <h2 className="text-xl md:text-5xl font-bold text-gray-800 leading-relaxed">
                 Transform Your Bussines With {""} <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#cc9900] to-[#ffbe00] bg-clip-text text-transparent pb-2">
                   Digital Innovation & {" "}
                 </span>
                 <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#051224] to-[#97bdf1] bg-clip-text text-transparent pb-2">
                        Strategic Solutions
                 </span>
              </h2>
              {/* <div className="space-y-2">
               <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#cc9900] to-[#ffbe00] bg-clip-text text-transparent pb-2">
                Digital Innovation &
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#051224] to-[#97bdf1] bg-clip-text text-transparent pb-2">
                Strategic Solutions
              </h2>
              </div> */}
              <div className="pt-8">
                <FloatingDock mobileClassName="translate-y-20" items={links} />
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              ref={rightColumnRef}
              className="bg-white rounded-lg p-6 md:p-8 shadow-lg w-full max-w-md mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Start a conversation with us
              </h2>
              {successMessage && (
                <p className="text-green-600 font-semibold mb-4">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="text-red-600 font-semibold mb-4">
                  {errorMessage}
                </p>
              )}
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
                  <select
                    name="inqury"
                    required
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors bg-white"
                    onChange={handleChange}
                    value={formData.inqury}
                  >
                    <option value="">Please select *</option>
                    <option value="career">Career</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="doctor-z">Doctor Z</option>
                    <option value="sms">School Management System</option>
                    <option value="swaad-setu">Swaad setu</option>
                    <option value="others">Others</option>
                  </select>
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
                    disabled={loading}
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
