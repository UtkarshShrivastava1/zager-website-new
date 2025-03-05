import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingDock } from "../Components/ui/floating-dock";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactUsPage() {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const containerRef = useRef(null);

  const links = [
    {
      title: "Instagram",
      icon: (
        <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <Facebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Set initial states
    gsap.set(leftColumnRef.current, { x: -200, opacity: 0 });
    gsap.set(rightColumnRef.current, { x: 200, opacity: 0 });

    // Create the scroll trigger animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      onEnter: () => {
        gsap.to(leftColumnRef.current, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });
        gsap.to(rightColumnRef.current, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });
      },
    });

    // Clean up on unmount
    return () => {
      gsap.killTweensOf(leftColumnRef.current);
      gsap.killTweensOf(rightColumnRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="bg-white min-h-screen overflow-hidden mt-15 md:mt-5">
        <h4
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#ffbe00",
            marginBottom: "0px",
          }}
          className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
        >
          Contact us
        </h4>
        <div
          ref={containerRef}
          className="container mx-auto px-4 py-12 md:py-20 !pt-4"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center px-10">
            {/* Left Column */}
            <div ref={leftColumnRef} className="space-y-6 ">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                TRANSFORM YOUR BUSINESS WITH
              </h2>
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#cc9900] to-[#ffbe00] bg-clip-text text-transparent pb-2">
                  Digital Innovation &
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#051224] to-[#97bdf1] bg-clip-text text-transparent pb-2">
                  Strategic Solutions
                </h2>
              </div>

              <div className="pt-8">
                <FloatingDock mobileClassName="translate-y-20" items={links} />
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              ref={rightColumnRef}
              className="bg-white rounded-lg p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Start a conversation with us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name*"
                    required
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                    onChange={handleChange}
                    value={formData.companyName}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    required
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message*"
                    required
                    rows="4"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors resize-none"
                    onChange={handleChange}
                    value={formData.message}
                  />
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#ffbe00] text-white rounded hover:cursor-pointer transition-colors font-semibold"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link
                to="https://www.facebook.com/zagerdigitalservices"
                target="_blank"
                className="!text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                to="#"
                className="!text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.instagram.com/zagerdigitalservices/"
                target="_blank"
                className="!text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/zagerdigitalservices/posts/?feedView=all"
                target="_blank"
                className="!text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
