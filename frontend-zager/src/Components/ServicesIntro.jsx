import design from "../assets/graphics.gif"; // Import the design GIF from local assets

// Functional component for the Services Intro Section
const ServicesIntro = () => {
  return (
    // Main section container with full width and centered text
    <section className="w-full py-16 px-6 text-center">
      {/* Heading container centered within a max width */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-black leading-tight">
          Partner{" "}
          <span className="text-[#ffbe00]">
            One of the fastest growing Digital Marketing Agency
          </span>{" "}
          in India
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Discover a suite of tailored solutions designed to elevate your brand
          in the digital realm. At <span className="font-semibold">Zager</span>,
          we specialize in a range of services that synergize to maximize your
          online presence and drive tangible results.
        </p>
      </div>

      {/* Image with text overlay container */}
      <div className="mt-10 flex justify-center">
        {/* Container for the GIF image with increased height */}
        <div className="relative rounded-2xl overflow-hidden w-[50%] h-150 shadow-lg">
          {/* The design GIF fills the container */}
          <img
            src={design}
            alt="Digital Media Maestro"
            className="w-full h-full object-cover"
          />
          {/* Overlay container for text placed on top of the image */}
          <div className="absolute inset-0 flex items-center justify-start p-8 bg-opacity-50">
            <div className="text-left text-white">
              <h3 className="text-2xl md:text-3xl font-semibold">
                We are your
              </h3>
              <h3 className="text-3xl md:text-4xl font-bold mt-2">
                <span className="bg-[#ffbe00] text-white px-2 py-1 rounded">
                  DIGITAL MEDIA MAESTRO
                </span>
              </h3>
              <p className="mt-3 text-lg text-black italic"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
