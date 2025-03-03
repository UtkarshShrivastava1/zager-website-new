import React, { useState } from "react";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { cn } from "../lib/utils";
import Heading from "../Components/Heading";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function CarrerPage() {
  const words = "Are you passionate about digital marketing and IT solutions?";
  const words2 = "We are looking for individuals who are:"

  const workValues = [
    {
      name: "Innovative Environment",
      description:
        "At Zager Digital Services, we thrive on innovation. Join us and work with cutting-edge technologies and strategies that are shaping the future of digital marketing and IT Solutions.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1707155465551-0d2b570926d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGlubm92YXRpdmUlMjBlbnZpcm9ubWVudHxlbnwwfDF8MHx8fDA%3D",
    },
    {
      name: "Professional Growth",
      description:
        "We are committed to your professional development. From mentorship programs to training workshops, we provide resources and opportunities to help you advance your career.",
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
        "We understand the importance of maintaining a healthy work-life balance. Enjoy flexible working arrangements and a positive work environment that supports your personal and professional well-being.",
      imageUrl:
        "https://images.unsplash.com/photo-1546458887-b4d5d7e7a00b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V29yayUyMExpZmUlMjBCYWxhbmNlfGVufDB8MXwwfHx8MA%3D%3D",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  const images = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fcreativity.jpg?alt=media&token=d35c5edb-3f75-49ab-b62c-fc9873121c78",
      alt: "Person 1",
      heading: "CREATIVITY",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fanalysis.jpg?alt=media&token=c8093d9c-115b-436d-89eb-00b07952150b",
      alt: "Person 2",
      heading: "ANALYTICAL",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fteam.jpg?alt=media&token=be61255e-4ec7-4fa6-83c4-1fc2773f900b",
      alt: "Person 3",
      heading: "TEAM-ORIENTED",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/zager-website.appspot.com/o/servicePage%2Fethic.jpg?alt=media&token=eb22e650-b102-4451-9718-3231073003ed",
      alt: "Person 4",
      heading: "DRIVEN",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [formData, setFormData] = useState({
        name: '',
        role: '',
        email: '',
        phone: '',
        // message: ''
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
      };

  return (
    <>
      <div className="mt-5  overflow-hidden">
        <h4
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#ffbe00",
            marginBottom: "0px",
          }}
          className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
        >
          Join Our Team
        </h4>
        <div className="flex flex-col items-center justify-center py-5 gap-2">
          <TextGenerateEffect words={words} />
          <p className="w-[50%] text-center ">
            At{" "}
            <span className="text-[#051244] font-bold ">
              Zager Digital Services,
            </span>{" "}
            we are always on the lookout for talented individuals who are eager
            to innovate and drive success. As a leader in the industry, we offer
            a dynamic work environment where creativity, collaboration, and
            professional growth are at the forefront of everything we do.
          </p>
        </div>

        <Heading value={"Why work with us"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
          {workValues.map((value, index) => (
            <div key={index} className="max-w-xs w-full group/card">
              <div
                className={cn(
                  " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
                  //   `bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover`
                  //   `bg-[url(${value.imageUrl})] bg-cover`
                )}
                style={{
                  backgroundImage: `url(${value.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
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

        <div className="!mt-15">
          <Heading value={"Our Ideal Candidates"} />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <TextGenerateEffect words={words2} />
        </div>
        <div
          ref={containerRef}
          className=" w-full flex items-center justify-center mt-10 ml-18"
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


        <div className="mt-15">
            <Heading value={"Join Us"} />
        </div>
        <div className="bg-white w-[50%] rounded-lg p-6 md:p-8 shadow-xl mx-auto mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                      Fill to join  us
                    </h2>
                    <form
                    //  onSubmit={handleSubmit}
                     className="space-y-6">
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
                        {/* <textarea
                          name="message"
                          placeholder="Your Message*"
                          required
                          rows="4"
                          className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors resize-none"
                          onChange={handleChange}
                          value={formData.message}
                        /> */}
                        <label className="block mb-2 text-sm text-gray-600">
                          Upload Resume*
                        </label>
                        <input 
                        type="file"
                        name="resume"
                        placeholder="Upload Resume*"
                        required
                        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
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
    </>
  );
}

export default CarrerPage;
