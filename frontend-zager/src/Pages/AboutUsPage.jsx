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
      <div className="container mx-auto px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffbe00] mb-6">
              We’re Changing the Way People Connect
            </h1>
            <p className="text-lg text-gray-600">
              At{" "}
              <span className="text-[#051244] font-bold">
                Zager Digital Services
              </span>
              , We are a passionate team of designers, developers, and
              strategists dedicated to crafting cutting-edge solutions. Our goal
              is to help businesses thrive in the digital landscape by providing
              top-notch web development, media production, and creative design
              services.
            </p>
          </div>
          <div className="md:w-1/2 flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Digital Marketing"
              className="w-1/2 h-64 object-cover rounded-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Team Collaboration"
              className="w-1/2 h-64 object-cover rounded-2xl mt-4 md:mt-0"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 px-8 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#ffbe00]">
            Our Values
          </h2>
          <p className="text-xl mb-12">Values That Inspire</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-[#ffbe00] bg-opacity-10 text-2xl">
                  {value.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-1">{value.title}</h3>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission Section with Subtle Gradient Overlay */}
      <div className="relative py-16 sm:py-20 text-center">
        {/* Subtle Gradient Overlay (matching HeroSection) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #ffbe00 50%, transparent 100%)",
            opacity: 0.1,
          }}
        ></div>
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#ffbe00]">
            Our Mission
          </h2>
          <p className="text-xl tracking-tight text-gray-600">
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
      <div className="py-16 px-8 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Innovation Culture */}
          <div className="relative hover:scale-105 transition-transform duration-200 ease-in-out">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                Innovation Culture
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Cultivating continuous innovation and improvement.
              </p>
            </div>
          </div>
          {/* Tech-Driven Problem Solving */}
          <div className="relative hover:scale-105 transition-transform duration-200 ease-in-out">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                Tech-Driven Problem Solving
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Leveraging technology to tackle complex challenges.
              </p>
            </div>
          </div>
          {/* Global Reach */}
          <div className="relative hover:scale-105 transition-transform duration-200 ease-in-out">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                Global Reach
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Connecting businesses with global opportunities.
              </p>
            </div>
          </div>
          {/* Client-Centric Solutions */}
          <div className="relative hover:scale-105 transition-transform duration-200 ease-in-out lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                Client-Centric Solutions
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Delivering customized digital solutions to meet unique client
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section with Subtle Gradient Overlay */}
      <div className="relative py-16 px-8 md:px-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #ffbe00 50%, transparent 100%)",
            opacity: 0.1,
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#ffbe00]">
            Our Vision
          </h2>
          <p className="text-xl tracking-tight text-gray-600 mx-auto">
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
