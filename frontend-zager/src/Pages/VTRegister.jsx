import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckCircle2, MapPin, Phone, Mail, GraduationCap, Briefcase, IndianRupee, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const VocationalTrainingRegister = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(null);
  const [showOtherBranch, setShowOtherBranch] = useState(false); // New state for "Other" branch

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

  const semesterOptions = ["4th", "6th", "Final"];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <ToastContainer />

      {/*
      Hero Section hidden for now so the form appears higher on the page.
      <div className="relative flex flex-col justify-center items-center text-center text-white w-full overflow-hidden">
        <div
          className="hidden md:block w-full"
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "100%",
            aspectRatio: "16/9",
            backgroundImage: `url(${Banner})`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

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

        <div className="bg-grey bg-opacity-40 absolute inset-0"></div>

        <button
          onClick={scrollToForm}
          className="hidden md:block absolute top-8 right-8 px-6 py-3 text-md font-semibold bg-gradient-to-r from-[#ffbe00] to-[#e6ab00] hover:shadow-xl text-white rounded-lg shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          Register Now
        </button>

        <button
          onClick={scrollToForm}
          className={`block md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-[#ffbe00] to-[#e6ab00] text-white rounded-full shadow-lg transition-all duration-300 active:scale-95 animate-bounce ${
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
      */}

      {/* Registration Form Section */}
      <div ref={formRef} className="container mx-auto px-4 py-8 md:py-12">
        <h4 className="text-2xl sm:text-3xl font-bold text-center text-[#ffbe00] mb-6">
          Vocational Training Registration
        </h4>

        <div className="grid md:grid-cols-2 gap-10 items-start px-4 sm:px-6 md:px-10 py-8">
          {/* Left Column - Updated Program Details */}
          <div
            ref={leftColumnRef}
            className="space-y-8 text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
              <GraduationCap className="w-10 h-10 text-[#ffbe00]" />
              Training and Internship Program 2026
            </h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#ffbe00] flex items-center gap-2 justify-center md:justify-start">
                <Briefcase className="w-6 h-6" /> WE OFFER
              </h3>
              <p className="text-gray-700 leading-relaxed text-left">
                Full-Stack Software Development Training (MERN Stack) for Students. Gain practical experience building real-world applications using MongoDB, Express, React, and Node.js, along with AI-assisted coding using tools like ChatGPT and GitHub Copilot. Available in both Online and Offline modes, with hands-on training in a professional development environment.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#ffbe00] flex items-center gap-2 justify-center md:justify-start">
                <IndianRupee className="w-6 h-6" /> Vocational Training Fee
              </h3>
              <p className="text-2xl font-bold text-gray-800 text-left flex items-center gap-2 justify-center md:justify-start">
                ₹4,000 <span className="text-base font-normal text-gray-500">(Rupees Four Thousand Only)</span>
              </p>
              {/* Important Note */}
              <div className="bg-yellow-50 border-l-4 border-[#ffbe00] p-4 rounded-r-md mt-4">
                <p className="text-yellow-800 font-medium text-left">
                  <span className="font-bold text-yellow-900">Important Note:</span> Students
                  must have their own laptops for the training.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#ffbe00] flex items-center gap-2 justify-center md:justify-start">
                <Sparkles className="w-6 h-6" /> What Students Gain / Why Choose Us
              </h3>
              <ul className="text-gray-700 space-y-3 text-left">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#ffbe00] shrink-0" /> <span>Hands-on development experience</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#ffbe00] shrink-0" /> <span>Exposure to real development workflow</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#ffbe00] shrink-0" /> <span>Experience working in a professional environment</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#ffbe00] shrink-0" /> <span>Understanding of AI-assisted coding tools</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#ffbe00] shrink-0" /> <span>Internship / Vocational Training Certificate</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#ffbe00] flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-6 h-6" /> CONTACT US
              </h3>
              <div className="space-y-4 text-left">
                <p className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-6 h-6 text-[#ffbe00] shrink-0" />
                  <span>
                    Zager Digital Services,<br />
                    Startup Enclave Building,<br />
                    CSIT Durg, C.G.
                  </span>
                </p>
                <p>
                  <a
                    href="tel:+919201239968"
                    className="flex items-center gap-3 text-gray-700 hover:text-[#ffbe00] transition-colors"
                  >
                    <Phone className="w-6 h-6 text-[#ffbe00] shrink-0" /> +91-9201239968
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:vt.zager@gmail.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-[#ffbe00] transition-colors"
                  >
                    <Mail className="w-6 h-6 text-[#ffbe00] shrink-0" /> vt.zager@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Updated Form */}
          <div
            ref={rightColumnRef}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 w-full max-w-md mx-auto"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#ffbe00] focus:bg-white focus:ring-2 focus:ring-[#ffbe00]/20 outline-none transition-all"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#ffbe00] focus:bg-white focus:ring-2 focus:ring-[#ffbe00]/20 outline-none transition-all"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#ffbe00] focus:bg-white focus:ring-2 focus:ring-[#ffbe00]/20 outline-none transition-all"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#ffbe00] focus:bg-white focus:ring-2 focus:ring-[#ffbe00]/20 outline-none transition-all"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#ffbe00] focus:bg-white focus:ring-2 focus:ring-[#ffbe00]/20 outline-none transition-all"
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#ffbe00] focus:bg-white focus:ring-2 focus:ring-[#ffbe00]/20 outline-none transition-all"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#ffbe00] focus:bg-white focus:ring-2 focus:ring-[#ffbe00]/20 outline-none transition-all"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#ffbe00] focus:bg-white focus:ring-2 focus:ring-[#ffbe00]/20 outline-none transition-all resize-none"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#ffbe00] to-[#e6ab00] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="space-y-2">
                    <div>Submitting... Please wait a moment.</div>
                    <div className="text-sm opacity-80">
                      Please wait, it may take some time. If it seems stuck, try
                      reloading the page and submitting again.
                    </div>
                  </div>
                ) : (
                  "Submit Registration"
                )}
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

            <p className="text-sm text-gray-500 mb-2">
              Registration ID: {formData.registrationID}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Please check your registered email for a confirmation message.
            </p>

            <div className="mt-6">
              <button
                onClick={() => setFormData(null)}
                className="px-6 py-2 bg-[#ffbe00] text-white rounded-md w-full cursor-pointer"
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
