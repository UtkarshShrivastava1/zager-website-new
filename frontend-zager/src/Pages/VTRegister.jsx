import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../assets/Banner_VT_PC.png"; // Replace with VT banner
import Banner2 from "../assets/Banner_VT_Mobile.png"; // Replace with VT mobile banner

gsap.registerPlugin(ScrollTrigger);

const VocationalTrainingRegister = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(null);
  const [showOtherBranch, setShowOtherBranch] = useState(false); // New state for "Other" branch
  const [showFloatingButton, setShowFloatingButton] = useState(false); // State for floating button

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    gsap.set(leftColumn, { x: -200, opacity: 0 });
    gsap.set(rightColumn, { x: 200, opacity: 0 });

    ScrollTrigger.create({
      trigger: formRef.current,
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

  // Scroll event to show/hide floating button
  useEffect(() => {
    const handleScroll = () => {
      const formElement = rightColumnRef.current;
      if (!formElement) return;

      const bannerHeight = window.innerWidth >= 768 ? 790 : 700; // Match your banner heights
      const scrollPosition = window.scrollY;
      const formPosition =
        formElement.getBoundingClientRect().top + scrollPosition;

      // Show button when:
      // 1. At the top of page (in banner)
      // 2. Until we get close to the form
      const shouldShowButton =
        scrollPosition <= bannerHeight || // Show in banner section
        scrollPosition < formPosition - 200; // Hide when close to form

      setShowFloatingButton(shouldShowButton);
    };

    // Initialize button state to true when component mounts
    setShowFloatingButton(true);

    // Run the handler immediately to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Modify the branch value if "Other" is selected
    if (data.branch === "Other" && data.otherBranch) {
      data.branch = data.otherBranch;
    }
    delete data.otherBranch; // Remove the extra field before sending

    // Generate Registration ID
    const generateRegistrationID = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = "25";
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      return `VT${day}${month}${year}${hours}${minutes}${seconds}`;
    };

    data.registrationID = generateRegistrationID();

    try {
      const response = await api.post("/vt/register", data);

      if (response.status === 200) {
        toast.success("Registration successful!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });
        setFormData(data);
        reset();
      }
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("Error submitting registration. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const branchOptions = [
    "Computer Science and Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Information Technology",
    "Mechatronics",
    "Civil Engineering",
    "Artificial Intelligence and Data Science",
    "Other",
  ];

  const semesterOptions = ["4th", "6th"];

  // Update the scrollToForm function
  const scrollToForm = () => {
    if (rightColumnRef.current) {
      const yOffset = -20; // Add some padding from top
      const element = rightColumnRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <ToastContainer />

      {/* Hero Section */}
      <div className="relative flex flex-col justify-center items-center text-center text-white w-full overflow-hidden">
        {/* Desktop Background */}
        <div
          className="hidden md:block w-full"
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "100%",
            aspectRatio: "16/9", // Adjust this ratio based on your banner image
            backgroundImage: `url(${Banner})`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Mobile Background */}
        <div
          className="block md:hidden w-full"
          style={{
            aspectRatio: window.innerWidth < 640 ? "9/16" : "3/4",
            height: "auto",
            width: "100%",
            backgroundImage: `url(${Banner2})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Overlay for better text visibility */}
        <div className="bg-grey bg-opacity-40 absolute inset-0"></div>

        {/* Register Button - PC Version */}
        <button
          onClick={scrollToForm}
          className="hidden md:block absolute top-8 right-8 px-6 py-3 text-md font-semibold bg-yellow-700 hover:bg-yellow-600 text-white rounded-lg shadow-lg transition-all hover:scale-110 cursor-pointer"
        >
          Register Now
        </button>

        {/* Register Button - Mobile Version */}
        <button
          onClick={scrollToForm}
          className={`block md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 text-sm font-semibold bg-[#ffbe00] hover:bg-yellow-600 text-white rounded-md shadow-md transition-all duration-300 active:scale-95 animate-bounce ${
            showFloatingButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
          style={{
            zIndex: 9999,
            pointerEvents: showFloatingButton ? "auto" : "none",
          }}
        >
          Register Now ↓
        </button>
      </div>

      {/* Registration Form Section */}
      <div ref={formRef} className="container mx-auto px-4 py-12 md:py-20">
        <h4 className="text-2xl sm:text-3xl font-bold text-center text-[#ffbe00] mb-6">
          Vocational Training Registration
        </h4>

        <div className="grid md:grid-cols-2 gap-10 items-start px-4 sm:px-6 md:px-10 py-8">
          {/* Left Column - Updated Program Details */}
          <div
            ref={leftColumnRef}
            className="space-y-8 text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              🎓 VOCATIONAL TRAINING 2025
            </h2>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#ffbe00]">WE OFFER</h3>
              <p className="text-lg">
                Web Development Training in MERN Stack technology for 4th & 6th
                Semester Students! Get practical experience in web development
                with MongoDB, Express, React, and Node.js, while working in our
                office.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#ffbe00]">
                WHY CHOOSE US
              </h3>
              <ul className="text-lg space-y-2">
                <li>✅ EXPERIENCED TRAINERS</li>
                <li>✅ GET CHANCE TO WORK ON REAL TIME PROJECTS</li>
                <li>✅ WORK IN PROFESSIONAL ENVIRONMENT</li>
                <li>✅ SUPPORTIVE ENVIRONMENT</li>
              </ul>
            </div>

            <div className="space-y-4 ">
              <h3 className="text-xl font-bold text-[#ffbe00]">CONTACT US</h3>
              <div className="space-y-2">
                <p>
                  📍 Zager Digital Services,
                  <br />
                  Startup Enclave Building,
                  <br />
                  CSIT Durg, C.G.
                </p>
                <p>📞 +91-9201239968</p>
                <p>📲 +91-9407655777</p>
              </div>
            </div>
          </div>

          {/* Right Column - Updated Form */}
          <div
            ref={rightColumnRef}
            className="bg-white rounded-lg p-6 md:p-8 shadow-lg w-full max-w-md mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Register Now
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register("name", { required: "Full name is required" })}
                  type="text"
                  placeholder="Full Name*"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <select
                  {...register("semester", {
                    required: "Semester is required",
                  })}
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Select Semester*</option>
                  {semesterOptions.map((sem) => (
                    <option key={sem} value={sem}>
                      {sem} Semester
                    </option>
                  ))}
                </select>
                {errors.semester && (
                  <p className="text-red-500 text-sm">
                    {errors.semester.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email format",
                    },
                  })}
                  type="email"
                  placeholder="Email Address*"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <select
                  {...register("branch", {
                    required: "Branch is required",
                    onChange: (e) =>
                      setShowOtherBranch(e.target.value === "Other"),
                  })}
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Select Branch/Department*</option>
                  {branchOptions.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
                {errors.branch && (
                  <p className="text-red-500 text-sm">
                    {errors.branch.message}
                  </p>
                )}

                {showOtherBranch && (
                  <div className="mt-2">
                    <input
                      {...register("otherBranch", {
                        required: "Please specify your branch",
                      })}
                      type="text"
                      placeholder="Please specify your branch*"
                      className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                    />
                    {errors.otherBranch && (
                      <p className="text-red-500 text-sm">
                        {errors.otherBranch.message}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <input
                  {...register("college", {
                    required: "College name is required",
                  })}
                  type="text"
                  placeholder="College Name*"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.college && (
                  <p className="text-red-500 text-sm">
                    {errors.college.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...register("address", { required: "Address is required" })}
                  placeholder="Complete Address*"
                  rows="3"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#ffbe00] text-white rounded-md hover:bg-yellow-600 disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {formData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Registration Successful!
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Registration ID: {formData.registrationID}
            </p>

            <div className="mt-6">
              <button
                onClick={() => setFormData(null)}
                className="px-6 py-2 bg-[#ffbe00] text-white rounded-md w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocationalTrainingRegister;
