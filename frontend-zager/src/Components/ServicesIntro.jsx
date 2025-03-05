"use client";

import design from "../assets/design1.mp4"; // Ensure this is the correct video file

const ServicesIntro = () => {
  return (
    <section className="relative w-full py-16 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Overlay */}
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(80deg, transparent 0%, #ffbe00 30%, transparent 100%)",
            opacity: 0.1,
          }}
        ></div>
        {/* Decorative circle at bottom-right */}
        <div className="absolute -bottom-32 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      </div>

      {/* Main Grid Layout */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Partner with{" "}
            <span className="text-[#ffbe00]">
              one of the fastest-growing digital marketing agencies
            </span>{" "}
            in India
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Discover a suite of tailored solutions designed to elevate your
            brand in the digital realm. At{" "}
            <span className="font-semibold">Zager</span>, we specialize in a
            range of services that synergize to maximize your online presence
            and drive tangible results.
          </p>
        </div>

        {/* Right: Video/Graphic Design */}
        <div className="relative mx-auto w-full max-w-4xl aspect-video shadow-2xl rounded-lg overflow-hidden">
          <video
            src={design}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay container with hover effect */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-80 transition duration-500 ease-in-out hover:bg-opacity-50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              We are your
            </h3>
            <h3 className="text-3xl md:text-5xl font-extrabold mt-2">
              <span className="bg-[#ffbe00] text-gray-900 px-4 py-2 rounded-lg shadow-md">
                DIGITAL MEDIA MAESTRO
              </span>
            </h3>
            <p className="mt-4 text-lg md:text-xl text-gray-700 italic">
              Elevating your brand to new heights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
