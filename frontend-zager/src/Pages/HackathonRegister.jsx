import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../Services/api"; // Axios instance with baseURL
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QRcode from "../assets/QRcode.png";
import Banner from "../assets/hackathon-banner.png";
import Banner2 from "../assets/banner2.png";

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

    // Function to Generate Registration ID
    const generateRegistrationID = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = "25"; // Assuming 2025 as the reference year
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      return `ZAG${day}${month}${year}${hours}${minutes}${seconds}`;
    };

    const registrationID = generateRegistrationID();
    data.registrationID = registrationID;

    // Combine member1, member2, member3 into a single "members" field
    data.members = [data.member1, data.member2, data.member3]
      .filter(Boolean) // Removes empty values
      .join(", ");

    console.log("Generated Registration ID:", registrationID);
    console.log("Final Payload:", data);

    const formDataToSubmit = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "paymentReceipt") {
        formDataToSubmit.append(key, value[0]); // Handle file uploads
      } else if (!["member1", "member2", "member3"].includes(key)) {
        formDataToSubmit.append(key, value); // Exclude member1, member2, member3
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

        setFormData(data); // Store form data for modal
        reset(); // Reset form
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
      <div className="relative flex flex-col justify-center items-center text-center text-white w-full">
        {" "}
        {/* Desktop Background */}
        <div
          className="hidden md:block w-full"
          style={{
            height: "790px",
            width: "100%",
            maxWidth: "1900px",
            backgroundImage: `url(${Banner})`,
            backgroundSize: "contain",
            backgroundPosition: "top", // Ensures it starts from top
            backgroundRepeat: "no-repeat",
            marginTop: "0px", // 👈 Removed negative margin
          }}
        ></div>
        {/* Mobile Background */}
        <div
          className="block md:hidden w-full h-[700px] sm:h-[600px]"
          style={{
            backgroundImage: `url(${Banner2})`,
            backgroundSize: "cover",
            backgroundPosition: "top", // 👈 Make it consistent
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* Overlay for better text visibility */}
        <div className="bg-grey bg-opacity-40 absolute inset-0"></div>
        {/* Register Button - Positioned at the Bottom Center */}
        {/* Register Button - PC Version */}
        <button
          onClick={() => {
            const formSection = document.querySelector(".container");
            formSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hidden md:block absolute top-8 right-8 px-6 py-3 text-md font-semibold bg-yellow-700 hover:bg-yellow-600 text-white rounded-lg shadow-lg transition-all hover:scale-110 cursor-pointer"
        >
          Register Now
        </button>
        {/* Register Button - Mobile Version */}
        <button
          onClick={() => {
            rightColumnRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="block md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 text-sm font-semibold bg-yellow-600 hover:bg-yellow-500 text-white rounded-md shadow-md transition-all active:scale-95 animate-bounce"
        >
          Register Now
        </button>
      </div>

      {/* Registration Form Section */}
      <div ref={formRef} className="container mx-auto px-4 py-12 md:py-20">
        <h4 className="text-2xl sm:text-3xl font-bold text-center text-[#ffbe00] mb-6">
          Hackathon Registration
        </h4>

        <div className="grid md:grid-cols-2 gap-10 items-start px-4 sm:px-6 md:px-10 py-8">
          {/* Left Column - Fully Responsive */}
          <div className="space-y-6 text-center md:text-left">
            {/* Event Title */}
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
              🚀 Z-HACK 2025 – The Ultimate Mobile & Web App Hackathon! 🚀
            </h2>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#cc9900] to-[#ffbe00] bg-clip-text text-transparent leading-snug">
              Think. Code. Disrupt.
            </h2>

            {/* Key Details List */}
            <ul className="text-sm sm:text-base md:text-lg text-left space-y-2">
              {" "}
              <li>
                <strong>📅 Competition Dates:</strong> April 12 – April 23, 2025
              </li>
              <li>
                <strong>📌 Application Deadline:</strong> April 11, 2025
              </li>
              <li>
                <strong>🎤 Orientation & Briefing:</strong> April 12, 2025
              </li>
              <li>
                <strong>🚀 Final Submission Deadline:</strong>{" "}
                <span className="whitespace-nowrap">
                  April 23, 2025 (12 PM)
                </span>
              </li>
              <li>
                <strong>🏆 Winner Announcement:</strong> April 25, 2025
              </li>
              <li>
                <strong>💡 Tracks:</strong> Mobile App & Web App Development
              </li>
              <li>
                <strong>💰 Entry Fee:</strong> ₹300 per team per track
              </li>
              <li>
                <strong>🌍 Location:</strong> Virtual - Join from anywhere!
              </li>
              <li>
                <strong>🏢 On-Site Requirement:</strong> All team members must
                be present at the venue on <strong>April 12</strong> and{" "}
                <strong>April 25</strong>.
              </li>
            </ul>

            {/* Additional Info */}
            <div className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base md:text-lg font-medium text-left">
              <p>
                ⚡{" "}
                <span className="font-bold">
                  Double the Challenge, Double the Rewards!
                </span>
              </p>
              <p>Teams must register separately for each track.</p>
              <p>
                You can compete in both tracks (with separate registrations &
                fees).
              </p>
              <p>Exclusive prizes for Web App & Mobile App winners!</p>
            </div>
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
                <label className="block text-gray-700 font-medium mb-1">
                  Team Member 1*
                </label>
                <input
                  {...register("member1", {
                    required: "At least two members are required",
                  })}
                  type="text"
                  placeholder="Enter Team Member 1"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.member1 && (
                  <p className="text-red-500 text-sm">
                    {errors.member1.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Team Member 2*
                </label>
                <input
                  {...register("member2", {
                    required: "At least two members are required",
                  })}
                  type="text"
                  placeholder="Enter Team Member 2"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
                {errors.member2 && (
                  <p className="text-red-500 text-sm">
                    {errors.member2.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Team Member 3
                </label>
                <input
                  {...register("member3")}
                  type="text"
                  placeholder="Enter Team Member 3"
                  className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                />
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

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-[#ffbe00] text-white rounded hover:bg-yellow-600 disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      <span>Registering...</span>
                    </>
                  ) : (
                    "Register"
                  )}
                </button>

                {/* Submission message */}
                {isSubmitting && (
                  <p className="mt-4 text-sm text-gray-600 text-left animate-pulse">
                    Please wait while your form is being registered...
                    <br />
                    This might take a few seconds.
                    <br />
                    <strong className="text-yellow-600">
                      Do not close or refresh the page until confirmation
                      appears.
                    </strong>
                    <br />
                    Thank you for your patience!
                  </p>
                )}
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
              Z-HACK Hackathon Registration Details
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

            {/* Email Info */}
            <p className="mt-6 text-sm text-green-600 font-medium">
              📧 A digital copy of your registration pass will be sent to your
              registered email address shortly.
            </p>

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
