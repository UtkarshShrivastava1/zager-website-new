import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../services/api"; // Axios instance with baseURL
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QRcode from "../assets/QRcode.png";
import Banner from "../assets/hackathon-banner2.png";
// Import jsPDF and autoTable
// Ensure jspdf-autotable is imported correctly and extends jsPDF

gsap.registerPlugin(ScrollTrigger);

const HackathonRegister = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [formData, setFormData] = useState(null); // To hold the form data for modal

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

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const generateRegistrationID = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      return `ZAG${day}${month}25${hours}${minutes}${seconds}`;
    };

    const registrationID = generateRegistrationID();
    data.registrationID = registrationID;

    console.log("Generated Registration ID:", registrationID);

    const formDataToSubmit = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "paymentReceipt") {
        formDataToSubmit.append(key, value[0]);
      } else {
        formDataToSubmit.append(key, value);
      }
    });

    try {
      const response = await api.post("/hackathon/register", formDataToSubmit);

      if (response.status === 200) {
        console.log("API response:", response.data);
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });
        setFormData(data); // Store form data to show in the modal
        reset();
      } else {
        throw new Error("Invalid API Response");
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

  // Function to handle printing the form data
  const handlePrint = () => {
    const printContent = document.getElementById("printContent");
    const newWindow = window.open();
    newWindow.document.write(printContent.innerHTML);
    newWindow.print();
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <ToastContainer />

      {/* Hero Section */}
      <div
        className="relative flex flex-col justify-center items-center text-center text-white"
        style={{
          height: "1380px",
          backgroundImage: `url(${Banner})`, // ✅ Use imported image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-grey bg-opacity-50 absolute inset-0"></div>

        {/* Register Button - Positioned Top Right */}
        <button
          onClick={() => {
            const formSection = document.querySelector(".container");
            formSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute top-4 right-4 px-6 py-3 text-lg font-semibold bg-yellow-700 hover:bg-yellow-600 text-white rounded-lg shadow-md transition-all transform hover:scale-110 animate-pulse cursor-pointer"
        >
          Register Now
        </button>
      </div>

      {/* Registration Form Section */}
      <div ref={formRef} className="container mx-auto px-4 py-12 md:py-20">
        <h4 className="text-3xl font-bold text-center text-[#ffbe00] mb-4">
          🚀 Hackathon Registration
        </h4>

        <div
          ref={containerRef}
          className="grid md:grid-cols-2 gap-12 items-center px-4 md:px-10"
        >
          {/* Left Column */}
          <div ref={leftColumnRef} className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Join the Ultimate Hackathon!
            </h2>
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#cc9900] to-[#ffbe00] bg-clip-text text-transparent pb-2">
                Build, Compete, Innovate!
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#051224] to-[#97bdf1] bg-clip-text text-transparent pb-2">
                Win Exciting Prizes!
              </h2>
            </div>
            <ul className="text-lg list-disc list-inside">
              <li>
                <strong>Start Date:</strong> April 15, 2025
              </li>
              <li>
                <strong>End Date:</strong> April 25, 2025
              </li>
              <li>
                <strong>Tracks:</strong> Web & Mobile Development
              </li>
              <li>
                <strong>Location:</strong> Virtual - Join from anywhere!
              </li>
              <li>
                <strong>Registration Fee:</strong> 300 Rs per team
              </li>
            </ul>
          </div>

          {/* Right Column - Form */}
          <div
            ref={rightColumnRef}
            className="bg-white rounded-lg p-6 md:p-8 shadow-lg w-full max-w-md mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Register Now
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              encType="multipart/form-data"
            >
              <div>
                <input
                  {...register("teamName", {
                    required: "Team Name is required",
                  })}
                  type="text"
                  placeholder="Team Name*"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.teamName && (
                  <p className="text-red-500 text-sm">
                    {errors.teamName.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "Valid email required",
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register("phone1", {
                    required: "Primary contact is required",
                  })}
                  type="tel"
                  placeholder="Primary Contact*"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.phone1 && (
                  <p className="text-red-500 text-sm">
                    {errors.phone1.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("phone2", {
                    required: "Secondary contact is required",
                  })}
                  type="tel"
                  placeholder="Secondary Contact*"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.phone2 && (
                  <p className="text-red-500 text-sm">
                    {errors.phone2.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("Occupation", {
                    required: "Occupation is required",
                  })}
                  type="text"
                  placeholder="Student/Fresher"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.Occupation && (
                  <p className="text-red-500 text-sm">
                    {errors.Occupation.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("members", {
                    required: "Team Members are required",
                  })}
                  type="text"
                  placeholder="Team Members (Comma Separated)*"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.members && (
                  <p className="text-red-500 text-sm">
                    {errors.members.message}
                  </p>
                )}
              </div>

              <div>
                <select
                  {...register("hackathonType", {
                    required: "Select a hackathon type",
                  })}
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                >
                  <option value="">Select a track*</option>
                  <option value="Web App Development">
                    Web App Development
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                </select>
                {errors.hackathonType && (
                  <p className="text-red-500 text-sm">
                    {errors.hackathonType.message}
                  </p>
                )}
              </div>

              {/* Registration Payment Button */}
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => setIsQRModalOpen(true)}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                  Registration Payment
                </button>
              </div>

              {/* Payment QR Code Modal */}
              {isQRModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md">
                    <h2 className="text-lg font-bold mb-3">Scan to Pay</h2>
                    <div className="flex justify-center">
                      <img
                        src={QRcode}
                        alt="QR Code"
                        className="w-64 h-64 max-w-full object-contain transition-transform duration-300 hover:scale-125"
                      />
                    </div>
                    <button
                      onClick={() => setIsQRModalOpen(false)}
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              <div className="mb-4">
                {/* Informative Message */}
                <p className="text-gray-700 text-sm mb-2">
                  <strong className="text-blue-600">📢 Important:</strong> After
                  completing your payment, please{" "}
                  <strong className="text-blue-600">take a screenshot</strong>{" "}
                  of the payment confirmation and{" "}
                  <strong className="text-green-600">upload it below</strong> as
                  proof of payment.
                </p>

                {/* Payment Receipt Upload */}
                <input
                  {...register("paymentReceipt", {
                    required: "Payment receipt is required",
                  })}
                  type="file"
                  accept="image/*"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:border-blue-500 outline-none"
                />

                {/* Error Message */}
                {errors.paymentReceipt && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.paymentReceipt.message}
                  </p>
                )}
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#ffbe00] text-white rounded hover:bg-yellow-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-spin">🔄</span> // Adding spinner
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Modal to Display Form Data with Enhanced Information */}
      {formData && (
        <div
          id="printContent"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Zager&apos;s Hackathon Registration Pass
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Registration ID: {formData.registrationID}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Registration Time: {new Date().toLocaleString()}
            </p>

            <ul className="space-y-4">
              <li>
                <strong>Team Name:</strong> {formData.teamName}
              </li>
              <li>
                <strong>Email:</strong> {formData.email}
              </li>
              <li>
                <strong>Primary Contact:</strong> {formData.phone1}
              </li>
              <li>
                <strong>Secondary Contact:</strong> {formData.phone2}
              </li>
              <li>
                <strong>Occupation:</strong> {formData.Occupation}
              </li>
              <li>
                <strong>Members:</strong> {formData.members}
              </li>
              <li>
                <strong>Hackathon Track:</strong> {formData.hackathonType}
              </li>
            </ul>

            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrint}
                className="px-6 py-2 bg-blue-600 text-white rounded-md"
              >
                Print
              </button>
              <button
                onClick={() => setFormData(null)}
                className="px-6 py-2 bg-red-600 text-white rounded-md"
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

export default HackathonRegister;
