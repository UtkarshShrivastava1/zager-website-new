"use client";

import design from "../assets/design1.mp4"; // Ensure this is the correct video file

const ServicesIntro = () => {
  return (
    <section className="relative w-full py-16 px-6 overflow-hidden bg-white">
      {/* Decorative Background Elements - Gradient on Left Side */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Gradient Effect - Now only on the left */}
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 190, 0, 0.15) 0%, transparent 40%)",
          }}
        ></div>
        {/* Decorative Element - Moved to Left */}
        <div className="absolute top-100 -left-5 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      </div>

      {/* Main Grid Layout */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Empowering Your Business with{" "}
            <span className="text-[#ffbe00]"> Digital Innovation</span>
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
        <div className="relative mx-auto w-full max-w-4xl aspect-video overflow-hidden bg-white">
          <video
            src={design}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
