import React from "react";
import promo from "../assets/promo.mp4";
import background from "../assets/Background.jpg"; // ✅ Import the local background image

const PromotionalVideos = () => {
  return (
    <section
      className="relative min-h-28 flex justify-center items-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${background})`, // ✅ Use the imported image
      }}
    >
      {/* ✅ Lighter Overlay to keep background visible */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">Elevate Your Brand</h2>
        <p className="text-lg mb-6">Unlock the power of digital marketing.</p>

        {/* 🔴 Centered Video */}
        <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-lg">
          <video
            src={promo}
            className="w-full rounded-lg"
            controls
            poster="https://via.placeholder.com/800x450"
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionalVideos;
