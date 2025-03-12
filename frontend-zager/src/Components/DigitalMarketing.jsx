import violinImage from "../assets/violin.jpg"; // Replace with your actual image path
import instagram from "../assets/instagram.png";
import heart from "../assets/love.png";
import facebook from "../assets/facebook.png";
import growth from "../assets/growth.png";

const DigitalMarketing = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center px-6 py-16 gap-12">
      {/* Left Content */}
      <div className="max-w-lg text-center lg:text-left">
        <h2 className="text-4xl font-bold text-[#ffbe00] leading-tight mt-2">
          Digital <br /> Marketing
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          The practice of promoting products or services using digital channels
          like social media, search engines, email, and websites to reach and
          engage target audiences.
        </p>

        <p className="mt-6 text-lg font-medium text-gray-700">
          Planning | Strategizing | Creation <br />
          Execution | Evaluation
        </p>

        <button className="mt-6 bg-[#ffbe00] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#d67d16] transition-all">
          Read More
        </button>
      </div>

      {/* Right Image with Overlays */}
      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden max-w-2xs shadow-lg">
          <img
            src={violinImage}
            alt="Violin Representation"
            className="w-full object-cover"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-6 right-6 bg-white p-2 rounded-lg shadow-lg">
          <p className="text-xs font-semibold text-gray-700">
            Social Media Growth
          </p>
          <div className="w-24 h-14 bg-gray-200 rounded">
            <img src={growth} className="w-[60%] " />
          </div>
        </div>

        <div className="absolute bottom-6 right-6 bg-white p-2 rounded-lg shadow-lg flex items-center">
          <p className="text-xs font-semibold text-gray-700">1.3M</p>
          <p className="text-xs text-gray-500 ml-1">Audience Reached</p>
        </div>

        <div className="absolute top-12 left-[-20px]">
          <img src={instagram} alt="Instagram" className="w-10" />
        </div>

        <div className="absolute bottom-8 left-[-20px]">
          <img src={heart} alt="Heart" className="w-10" />
        </div>

        <div className="absolute bottom-12 right-[-20px]">
          <img src={facebook} alt="Facebook" className="w-10" />
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
