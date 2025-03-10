import { TimelineDemo } from "../Components/TimelineDemo";

const AboutUsPage = () => {
  const values = [
    {
      icon: "👥",
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and accountability in every interaction, fostering trust and long-term partnerships with our clients.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "We embrace new technologies and creative approaches to solve complex challenges and deliver outstanding solutions that exceed expectations.",
    },
    {
      icon: "👋",
      title: "Excellence",
      description:
        "We are dedicated to achieving the highest standards of quality in every project, ensuring measurable success and customer satisfaction.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffbe00] mb-4">
              We’re Changing the Way People Connect
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-snug">
              At{" "}
              <span className="text-[#051244] font-bold">
                Zager Digital Services
              </span>
              , we are a passionate team of designers, developers, and
              strategists dedicated to crafting cutting-edge solutions. Our goal
              is to help businesses thrive in the digital landscape by providing
              top-notch web development, media production, and creative design
              services.
            </p>
          </div>
          <div className="md:w-1/2 flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Digital Marketing"
              className="w-1/2 h-56 object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Team Collaboration"
              className="w-1/2 h-56 object-cover rounded-xl mt-2 md:mt-0"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#ffbe00]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#ffbe00] bg-opacity-10 text-xl">
                  {value.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold mb-1">{value.title}</h3>
                  {/* Increased font size from text-sm to text-base */}
                  <p className="text-gray-500 text-base">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission Section with Subtle Gradient Overlay */}
      <div className="relative py-12 sm:py-16 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #ffbe00 50%, transparent 100%)",
            opacity: 0.1,
          }}
        ></div>
        <div className="relative max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#ffbe00]">
            Our Mission
          </h2>
          <p className="text-base md:text-lg tracking-normal text-gray-600 leading-snug">
            Our mission is to provide exceptional digital marketing and IT
            services that help businesses achieve their goals. We are committed
            to enhancing online visibility and engagement through innovative
            marketing strategies, delivering robust IT solutions that streamline
            operations and drive efficiency, and empowering clients to embrace
            the digital revolution with confidence and success.
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-12 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Innovation Culture */}
          <div className="relative hover:scale-105 transition-transform duration-200 ease-in-out">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">
                Innovation Culture
              </h3>
              <p className="text-base text-gray-600 text-center">
                Cultivating continuous innovation and improvement.
              </p>
            </div>
          </div>
          {/* Tech-Driven Problem Solving */}
          <div className="relative hover:scale-105 transition-transform duration-200 ease-in-out">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">
                Tech-Driven Problem Solving
              </h3>
              <p className="text-base text-gray-600 text-center">
                Leveraging technology to tackle complex challenges.
              </p>
            </div>
          </div>
          {/* Global Reach */}
          <div className="relative hover:scale-105 transition-transform duration-200 ease-in-out">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">
                Global Reach
              </h3>
              <p className="text-base text-gray-600 text-center">
                Connecting businesses with global opportunities.
              </p>
            </div>
          </div>
          {/* Client-Centric Solutions (Full-width on large screens) */}
          <div className="relative hover:scale-105 transition-transform duration-200 ease-in-out lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">
                Client-Centric Solutions
              </h3>
              <p className="text-base text-gray-600 text-center">
                Delivering customized digital solutions to meet unique client
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section with Subtle Gradient Overlay */}
      <div className="relative py-12 px-6 md:px-12">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #ffbe00 50%, transparent 100%)",
            opacity: 0.1,
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#ffbe00]">
            Our Vision
          </h2>
          <p className="text-base md:text-lg tracking-normal text-gray-600 leading-snug mx-auto">
            To be a global leader in providing innovative, customised, and
            comprehensive digital marketing and IT solutions that empower
            businesses to thrive in the digital era. We aim to redefine
            excellence and inspire growth by delivering cutting-edge technology
            and creative strategies tailored to meet our client&apos;s evolving
            needs.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <TimelineDemo />
    </div>
  );
};

export default AboutUsPage;
