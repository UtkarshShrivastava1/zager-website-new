import { motion } from "framer-motion";
import { TimelineDemo } from "../Components/TimelineDemo";

// Fade-in animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.8, ease: "easeOut" },
  },
};

const AboutUsContent = () => {
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
    <div className="w-full">
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
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            At <span className="font-bold">Zager</span>, we don’t just market—we
            create impactful digital experiences that help your brand stand out,
            engage, and grow.
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mt-4">
            Our team of creative minds and marketing experts is dedicated to
            turning your brand’s vision into a powerful digital presence.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-[#ffbe00] mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to provide exceptional digital marketing and IT
                services that help businesses achieve their goals.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-[#ffbe00] mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a global leader in providing innovative, customized, and
                comprehensive digital solutions that empower businesses.
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

export default AboutUsContent;
