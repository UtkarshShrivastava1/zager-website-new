import React from "react";
import promo from "../assets/promo.mp4";

const PromotionalVideos = () => {
  return (
    <section className="bg-white  py-12 px-6">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center  ">
        
        {/* 🔴 Video Section - Now Bigger */}
        <div className="md:col-span-2 relative">
          <video 
            src={promo} 
            className="w-full h-auto rounded-xl shadow-lg" 
            controls 
            poster="https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with a real thumbnail
          />
        </div>

        {/* 🔵 Marketing Message / Image Section */}
        <div className="text-center md:text-left space-y-6 bg-linear-[45deg,yellow-100_60%,white_30%,white_30%]">
          <h2 className="text-4xl font-extrabold text-[#051224]">
            Elevate Your Brand with <span className="text-yellow-500">Digital Marketing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover innovative strategies that bring your business to life in the digital space.
          </p>
          {/* <img 
            src="https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Digital Marketing" 
            className="rounded-xl shadow-lg w-full max-w-sm mx-auto md:mx-0"
          /> */}
        </div>

      </div>
    </section>
  );
};

export default PromotionalVideos;
