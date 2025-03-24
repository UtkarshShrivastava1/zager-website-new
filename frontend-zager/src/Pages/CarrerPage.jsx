"use client";

import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { cn } from "../lib/utils";
import Heading from "../Components/Heading";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import api from "../services/api";
import internsjob from "../assets/uploads/internjobopening.pdf";

import { TbPointFilled } from "react-icons/tb";
import { motion } from "framer-motion";

function CarrerPage() {
  const heroWords =
    "Are you passionate about Digital Marketing and IT solutions?";
  const candidateWords = "We are looking for individuals who are:";

  const workValues = [
    {
      name: "Innovative Environment",
      description:
        "At Zager Digital Services, we thrive on innovation. Work with cutting-edge technologies and strategies that are shaping the future of Digital Marketing and IT solutions.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1707155465551-0d2b570926d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGlubm92YXRpdmUlMjBlbnZpcm9ubWVudHxlbnwwfDF8MHx8fDA%3D",
    },
    {
      name: "Professional Growth",
      description:
        "We are committed to your development. From mentorship programs to training workshops, we provide resources and opportunities to help you advance your career.",
      imageUrl:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMGdyb3d0aHxlbnwwfDF8MHx8fDA%3D",
    },
    {
      name: "Collaborative Culture",
      description:
        "Our team is our greatest asset. Experience a supportive and collaborative work culture where your ideas are valued and teamwork drives success.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1726736742497-c47f64f60214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fENvbGxhYm9yYXRpdmUlMjBDdWx0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
    },
    {
      name: "Work-Life Balance",
      description:
        "We understand the importance of balance. Enjoy flexible working arrangements and a positive environment that supports both your personal and professional well-being.",
      imageUrl:
        "https://images.unsplash.com/photo-1546458887-b4d5d7e7a00b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V29yayUyMExpZmUlMjBCYWxhbmNlfGVufDB8MXwwfHx8MA%3D%3D",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
  });
  const [resume, setResume] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
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
  }, []);

  const images = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fcreativity.jpg?alt=media&token=d35c5edb-3f75-49ab-b62c-fc9873121c78",
      alt: "Creativity",
      heading: "CREATIVITY",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fanalysis.jpg?alt=media&token=c8093d9c-115b-436d-89eb-00b07952150b",
      alt: "Analytical",
      heading: "ANALYTICAL",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fteam.jpg?alt=media&token=be61255e-4ec7-4fa6-83c4-1fc2773f900b",
      alt: "Team Oriented",
      heading: "TEAM-ORIENTED",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fethic.jpg?alt=media&token=eb22e650-b102-4451-9718-3231073003ed",
      alt: "Driven",
      heading: "DRIVEN",
    },
  ];

  const ourOpenings = [
    {
      title: "Web Developer Intern",
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("companyName", formData.role); // using "companyName" field in backend as role
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    if (resume) {
      data.append("resume", resume);
    }
    try {
      const response = await api.post("/job-applications", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Application submitted:", response.data);
      setSuccessMessage(
        "Thank you for applying! Your application has been submitted successfully. We will contact you soon."
      );
      // Clear form fields
      setFormData({
        name: "",
        role: "",
        email: "",
        phone: "",
      });
      setResume(null);
    } catch (error) {
      console.error("Error submitting job application:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred while submitting your application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Background Effects - Glowing Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bottom-glow absolute -bottom-10 -left-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="mt-5 overflow-hidden relative z-10">
        {/* Join Our Team Heading */}
        <h4
          className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
          style={{ fontWeight: "700", fontSize: "2.5rem" }}
        >
          Join Our Team
        </h4>
        <div className="flex flex-col items-center justify-center py-5 gap-2 px-4">
          <TextGenerateEffect words={heroWords} />
          <p className="w-full sm:w-1/2 text-center text-gray-600">
            At{" "}
            <span className="text-[#051244] font-bold">
              Zager Digital Services
            </span>
            , we are always on the lookout for talented individuals eager to
            innovate and drive success. Join our dynamic team where creativity,
            collaboration, and professional growth are our priorities.
          </p>
        </div>

        {/* Work Values */}
        <Heading value={"Why Work With Us"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
          {workValues.map((value, index) => (
            <div key={index} className="max-w-xs w-full group/card">
              <div
                className={cn(
                  "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                )}
                style={{
                  backgroundImage: `url(${value.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 transition duration-300 group-hover/card:bg-black group-hover/card:opacity-60"></div>
                <div className="relative z-10">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50">
                    {value.name}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 my-4">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Ideal Candidates */}
        <div className="mt-8">
          <Heading value={"Our Ideal Candidates"} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <TextGenerateEffect words={candidateWords} />
        </div>

        {/* Interactive Image Carousel
        <div
          ref={containerRef}
          className="w-full flex items-center justify-center mt-10 px-4"
        >
          <div className="w-full md:w-2/3 flex gap-5 h-96">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out"
                style={{
                  width: hoveredIndex === index ? "50%" : "20%",
                  height: "100%",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                  <h2 className="text-white font-bold text-xl">
                    {image.heading}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Interactive Image Carousel - Hidden on Mobile */}
        <div
          ref={containerRef}
          className="hidden md:flex w-full items-center justify-center mt-10 px-4"
        >
          <div className="w-full md:w-2/3 flex gap-5 h-96">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out"
                style={{
                  width: hoveredIndex === index ? "50%" : "20%",
                  height: "100%",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                  <h2 className="text-white font-bold text-xl">
                    {image.heading}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Form */}
        <div className="mt-8">
          <Heading value={"Join Us"} />
        </div>
        {/* Responsive form container: full width on mobile with a max-width */}
        <div className="w-full px-10 mb-10">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Openings Card */}
            <div className="bg-white w-full md:w-[48%] rounded-lg p-6 md:p-8 shadow-xl mb-6">
              {/* Gradient Overlay */}
              {/*  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-blue-300/20 blur-xl opacity-40"></div> */}

              {/* Heading */}
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Current Openings{" "}
                </h2>
                <p className="text-gray-600 opacity-70 font-medium">
                  Click on a role to see the required skills and fill out the
                  &#39;Join Us&#39; form on the right to apply.{" "}
                </p>
              </div>

              {/* Openings List */}
              <div className="mt-6 grid grid-cols-1 gap-3 relative z-10">
                {ourOpenings.map((item, index) => (
                  <motion.a
                    key={index}
                    href={internsjob}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold flex items-center gap-3 text-gray-800 transition-all duration-300 hover:text-blue-600 hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    <TbPointFilled className="text-yellow-500 text-xl" />
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-white w-full md:w-[48%] rounded-lg p-6 md:p-8 shadow-xl mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Fill out the form to join our team
              </h2>
              {successMessage && (
                <p className="text-green-600 font-bold text-center mb-4">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="text-red-600 font-bold text-center mb-4">
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
                    name="role"
                    placeholder="Role*"
                    required
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                    onChange={handleChange}
                    value={formData.role}
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
                  <label className="block mb-2 text-sm text-gray-600">
                    Upload Resume*
                  </label>
                  <input
                    type="file"
                    name="resume"
                    required
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                    onChange={(e) =>
                      setResume(e.target.files && e.target.files[0])
                    }
                  />
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-[#ffbe00] text-white rounded transition-colors font-semibold hover:bg-yellow-600"
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </div>
              </form>
              {loading && (
                <div className="flex justify-center mt-4">
                  <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-t-[#ffbe00] rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarrerPage;
