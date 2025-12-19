"use client";

import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { cn } from "../lib/utils";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import api from "../services/api";

import { TbPointFilled } from "react-icons/tb";
import { motion } from "framer-motion";

// Job openings data structure - easily scalable
const JOB_OPENINGS = [
  {
    id: 1,
    title: "Web Developer Intern",
    description:
      "Join our development team to build cutting-edge web applications",
    requirements: [
      "Knowledge of HTML, CSS, JavaScript",
      "Familiarity with React.js",
      "Basic understanding of responsive design",
      "Eager to learn and grow",
    ],
    location: "Remote/On-site",
    type: "Internship",
    department: "Development",
    pdfUrl: "/assets/uploads/internjobopening.pdf", // Relative path
    // Alternative: You can also store PDF content as base64 or fetch from API
  },
  {
    id: 2,
    title: "Sales Intern",
    description:
      "Help drive our sales efforts and learn the fundamentals of B2B sales",
    requirements: [
      "Excellent communication skills",
      "Customer-focused mindset",
      "Basic understanding of digital marketing",
      "Enthusiasm for sales and business development",
    ],
    location: "On-site",
    type: "Internship",
    department: "Sales",
    pdfUrl: "/assets/uploads/salesintern.pdf", // Relative path
  },
  // Easy to add more jobs here
];

function CareerPage() {
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
  const [selectedJob, setSelectedJob] = useState(null);
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    workasa: "",//workAsA
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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleJobSelect = (job) => {
    setSelectedJob(selectedJob?.id === job.id ? null : job);
    // Auto-fill the role field when a job is selected
    setFormData((prev) => ({ ...prev, role: job.title }));
  };

  const handleDownloadPDF = async (job) => {
    try {
      // Option 1: Fetch and download (prevents corruption)
      const response = await fetch(job.pdfUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${job.title.replace(/\s+/g, "_")}_JD.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the object URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      // Fallback: Open in new tab
      window.open(job.pdfUrl, "_blank");
    }
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
    data.append("workasa", formData.workasa);
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
        workasa: "",//work as a
      });
      setResume(null);
      setSelectedJob(null);
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
        <h4
          className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
          style={{ fontWeight: "700", fontSize: "2.5rem" }}
        >
          Why Work With Us
        </h4>
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
          <h4
            className="text-3xl font-bold text-center text-[#ffbe00] mb-4 mt-8"
            style={{ fontWeight: "700", fontSize: "2.5rem" }}
          >
            Our Ideal Candidates
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center">
          <TextGenerateEffect words={candidateWords} />
        </div>

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
          <h4
            className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
            style={{ fontWeight: "700", fontSize: "2.5rem" }}
          >
            Join Us
          </h4>
        </div>

        {/* Enhanced Openings and Form Section */}
        <div className="w-full px-4 md:px-10 mb-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Enhanced Openings Card */}
            <div className="bg-white w-full lg:w-[48%] rounded-lg p-6 md:p-8 shadow-xl mb-6">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Current Openings ({JOB_OPENINGS.length})
                </h2>
                <p className="text-gray-600 opacity-70 font-medium mb-6">
                  Click on a role to see details and requirements. Download the
                  job description for more information.
                </p>
              </div>

              {/* Enhanced Openings List */}
              <div className="mt-6 space-y-4 relative z-10">
                {JOB_OPENINGS.map((job) => (
                  <div
                    key={job.id}
                    className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <motion.button
                        onClick={() => handleJobSelect(job)}
                        className="text-lg font-semibold flex items-center gap-3 text-gray-800 transition-all duration-300 hover:text-blue-600 flex-1 text-left"
                        whileHover={{ scale: 1.02 }}
                      >
                        <TbPointFilled className="text-yellow-500 text-xl flex-shrink-0" />
                        <div>
                          <div className="font-bold">{job.title}</div>
                          <div className="text-sm text-gray-600 font-normal">
                            {job.department} • {job.type} • {job.location}
                          </div>
                        </div>
                      </motion.button>
                      <button
                        onClick={() => handleDownloadPDF(job)}
                        className="ml-4 px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm hover:bg-blue-200 transition-colors"
                      >
                        Download JD
                      </button>
                    </div>

                    {/* Expandable Job Details */}
                    {selectedJob?.id === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <p className="text-gray-700 mb-3">{job.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Requirements:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {JOB_OPENINGS.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No current openings available.</p>
                  <p className="text-sm mt-2">
                    Please check back later or submit your resume for future
                    opportunities.
                  </p>
                </div>
              )}
            </div>

            {/* Application Form */}
            <div className="bg-white w-full lg:w-[48%] rounded-lg p-6 md:p-8 shadow-xl mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Apply Now
              </h2>
              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {errorMessage}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="role"
                    placeholder="Role Applying For*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    onChange={handleChange}
                    value={formData.role}
                  />
                  {selectedJob && (
                    <p className="text-sm text-blue-600 mt-1">
                      Selected: {selectedJob.title}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
                 <div>
                  <select
                    name="workasa"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all "
                    onChange={handleChange}
                    value={formData.workasa}
                  >
                    <option value="" className="">Work as  *</option>
                    <option value="employee">Employee</option>
                    <option value="intern">Intern</option>
                  
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Upload Resume* (PDF, DOC, DOCX - Max 5MB)
                  </label>
                  <input
                    type="file"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                    onChange={(e) => setResume(e.target.files?.[0] || null)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-[#ffbe00] text-white rounded-lg transition-all font-semibold hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        SUBMITTING...
                      </>
                    ) : (
                      "SUBMIT APPLICATION"
                    )}
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

export default CareerPage;
