import { TimelineDemo } from "../Components/AboutUsPage_Sections/AboutUsTimeline";
import { motion } from "framer-motion";
import { Rocket, Palette, Settings, TrendingUp } from "lucide-react";
import { Target, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutBanner from "../assets/aboutBanner.png";
import { Helmet } from "react-helmet-async";

// Generic fade-in/up variant for sections
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.8, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
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

  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">
      <Helmet>
        {/* <title>About Us - Zager</title> */}
        <title>
          About Zager | IT Services, Digital Marketing & Web Development Company
          in India
        </title>
        {/* 
        <meta
          name="description"
          content="Learn more about Zager – we build scalable digital products and technology solutions that drive business growth."
        /> */}
        <meta
          name="description"
          content="Learn more About Zager, a technology company delivering scalable digital products, business technology solutions, and end-to-end digital solutions for modern businesses in India."
        />
        <link rel="canonical" href="https://www.zager.in/About" />
        {/* Open Graph / Social Sharing */}
        <meta
          property="og:title"
          content="About Zager | IT Services, Digital Marketing & Web Development Company in India"
        />
        <meta
          property="og:description"
          content="Learn more About Zager, a technology company delivering scalable digital products, business technology solutions, and end-to-end digital solutions for modern businesses in India.
"
        />
        <meta property="og:url" content="https://www.zager.in/About" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#051224]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,18,36,0.85), rgba(5,18,36,0.85)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Yellow glow accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-[#ffbe00] rounded-full opacity-20 blur-3xl"></div>
        </div>

        {/* Subtle animated dark overlay */}
        <motion.div
          className="absolute inset-0 bg-[#051224]"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0.8 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-4xl mx-auto space-y-6 ">
            {/* Example heading using yellow + white */}
            {/* 
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#ffbe00] drop-shadow-lg">
        Empowering Businesses, Elevating Digital Success!
      </h1>
      */}

            <img
              src={aboutBanner}
              alt="About Zager"
              className="mx-auto max-w-full h-auto mb-4 "
            />

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut", delay: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="text-base text-left   p-5 md:text-lg lg:text-xl text-white leading-relaxed drop-shadow-md text-center"
            >
              {/* At <span className="font-bold text-[#ffbe00]">Zager</span> builds
              scalable digital products and end-to-end technology solutions for
              modern businesses. We integrate modern technologies, AI-enabled
              automation, and performance-driven digital marketing to streamline
              operations, strengthen digital presence, and drive sustainable
              growth. Our focus remains on delivering reliable, high-performance
              systems that create long-term business value. */}
              At <span className="font-bold text-[#ffbe00]">Zager</span>, we are a technology company focused on building scalable digital products and end-to-end technology solutions for modern businesses. We integrate modern technologies, AI-enabled automation, and performance-driven digital marketing to streamline operations, strengthen digital presence, and drive sustainable growth. Our focus remains on delivering reliable business technology solutions that create long-term value.

            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      {/* <motion.section
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
      </motion.section> */}

      {/* Why Us – Premium SaaS Version */}
      <motion.section
        className="py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Soft Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ffbe00] opacity-10 blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-3xl font-bold tracking-[0.3em] text-[#ffbe00] uppercase">
              Why Zager
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-5 leading-tight">
              Strategy. Creativity. <br />
              <span className="text-[#ffbe00]">Real Business Growth.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              We design digital systems that don’t just look good — they
              perform, scale, and convert.
            </p>
          </div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Growth-First Strategy",
                desc: "Data-driven decisions designed to scale brands sustainably.",
                icon: Rocket,
              },
              {
                title: "Creative That Converts",
                desc: "Design and storytelling engineered to drive engagement.",
                icon: Palette,
              },
              {
                title: "Custom Digital Systems",
                desc: "Tailor-made websites, platforms, and automation solutions.",
                icon: Settings,
              },
              {
                title: "ROI-Focused Execution",
                desc: "Every click, campaign, and feature optimized for results.",
                icon: TrendingUp,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -12 }}
                  className="hover:border-2 hover:border-amber-300 relative bg-amber-50 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl  border-2 border-amber-600 bg-[#ec8014] opacity-0 group-hover:opacity-10 transition duration-300" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-800 mb-6">
                      <Icon className="text-[#e9ba2b]" size={26} />
                    </div>

                    <h3
                      className="text-xl font-semibold text-gray-900 mb-3"
                      style={{ textShadow: "none" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-24">
            <p className="text-gray-600 text-lg mb-8">
              Let’s turn ideas into impact — and clicks into customers.
            </p>

            <button
              onClick={() => {
                navigate("/Contact");
              }}
              className="px-12 py-4 rounded-full bg-[#ffbe00] text-gray-900 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Your Growth Journey →
            </button>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      {/* <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            
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
      </motion.section> */}

      <motion.section
        className="relative py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Yellow Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffbe00]/20 blur-[160px]" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white/90 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/30 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl  bg-amber-950 text-[#ffbe00] flex items-center justify-center group-hover:scale-110 transition">
                  <Target size={28} />
                </div>
                <span className="uppercase tracking-widest text-[#ffbe00] font-semibold">
                  Our Mission
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Driving Purposeful Growth
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to deliver exceptional digital marketing and IT
                solutions that help businesses grow sustainably. We focus on
                innovation, performance, and long-term value creation.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-black/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/20 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#ffbe00]/20 text-[#ffbe00] flex items-center justify-center group-hover:scale-110 transition">
                  <Eye size={28} />
                </div>
                <span className="uppercase tracking-widest text-[#ffbe00] font-semibold">
                  Our Vision
                </span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">
                Building the Future of Digital
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                To become a globally trusted digital partner by delivering
                cutting-edge technology, creative strategies, and results-driven
                solutions that empower brands worldwide.
              </p>
            </motion.div>
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
          <h2 className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-center text-[#ffbe00] mb-12">
            Our Values
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {values.map((value, index) => (
              // <motion.div
              //   key={index}
              //   className="w-full sm:w-1/2 lg:w-1/3 p-4 transform transition duration-300 hover:scale-105"
              //   whileHover={{ scale: 1.05 }}
              // >
              //   <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              //     <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#ffbe00] bg-opacity-10 text-3xl mb-4">
              //       {value.icon}
              //     </div>
              //     <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              //     <p className="text-gray-500">{value.description}</p>
              //   </div>
              // </motion.div>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="w-full sm:w-1/2 lg:w-1/3 p-4 group"
              >
                <div className="relative bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-md transition-all duration-300 hover:shadow-2xl overflow-hidden">
                  {/* Full Card Highlight Layer */}
                  <span
                    className="absolute inset-0 rounded-2xl  bg-amber-100
      transform scale-0 origin-top-right 
      group-hover:scale-100 
      transition-transform duration-500 ease-out"
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#ffbe00]/20 text-3xl text-[#ffbe00] mb-6 transition-all duration-300 group-hover:scale-110">
                      {value.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
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
