import { TimelineDemo } from "../Components/AboutUsPage_Sections/AboutUsTimeline";
import { motion } from "framer-motion";

// Generic fade-in/up variant for sections
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.8, ease: "easeOut" },
  },
};

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
      <section
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Gradient Overlay & Glowing Circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, #ffbe00 50%, transparent 100%)",
              opacity: 0.1,
            }}
          ></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-[#ffbe00] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
        </div>

        {/* Existing Black Overlay */}
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ opacity: 0.5 }}
        ></motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#ffbe00] drop-shadow-lg mb-6"
            >
              &quot;Empowering Businesses, Elevating Digital Success!&quot;
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut", delay: 0.3 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-2xl text-white leading-relaxed drop-shadow-md"
            >
              At <span className="font-bold">Zager</span>, we are more than just
              a digital marketing company. We are your growth partners in the
              ever-evolving digital landscape. With a passion for innovation and
              a data-driven approach, we craft result-oriented strategies that
              help businesses thrive online.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ffbe00] mb-8">
            Why Us?
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mb-6">
            <span className="font-bold">
              &quot;Your Growth, Our Strategy!&quot;
            </span>
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            At <span className="font-bold">Zager</span>, we don’t just market—we
            create impactful digital experiences that help your brand stand out,
            engage, and grow. With a blend of data-driven insights, creative
            storytelling, and cutting-edge strategies, we ensure your business
            gets the attention it deserves.
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mt-4">
            From website development to customized management systems, SEO to
            social media marketing, content creation to paid ads, we specialize
            in delivering tailor-made solutions that drive engagement, boost
            visibility, and maximize ROI. Our team of creative minds and
            marketing experts is dedicated to turning your brand’s vision into a
            powerful digital presence.
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mt-4">
            Let’s transform clicks into conversions and ideas into impact—
            because{" "}
            <span className="font-bold">your success is our mission!</span>
          </p>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col h-full">
              <h2 className="text-3xl font-bold text-[#ffbe00] mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed flex-grow">
                Our mission is to provide exceptional digital marketing and IT
                services that help businesses achieve their goals. We are
                committed to enhancing online visibility and engagement through
                innovative marketing strategies, delivering robust IT solutions
                that streamline operations and drive efficiency, and empowering
                clients to embrace the digital revolution with confidence and
                success.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col h-full">
              <h2 className="text-3xl font-bold text-[#ffbe00] mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed flex-grow">
                To be a global leader in providing innovative, customized, and
                comprehensive digital marketing and IT solutions that empower
                businesses to thrive in the digital era. We aim to redefine
                excellence and inspire growth by delivering cutting-edge
                technology and creative strategies tailored to meet our
                client&apos;s evolving needs.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ffbe00] mb-12">
            Our Values
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 p-4 transform transition duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#ffbe00] bg-opacity-10 text-3xl mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <TimelineDemo />
      </motion.section>
    </div>
  );
};

export default AboutUsPage;
