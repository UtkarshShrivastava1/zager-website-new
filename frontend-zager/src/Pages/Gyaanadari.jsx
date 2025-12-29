import Heading from "../Components/Heading";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { cn } from "../lib/utils";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import gyaanadariImg from "../assets/gyanadari.jpeg";
import { Helmet } from "@dr.pogodin/react-helmet";

function Gyaanadari() {
  const workValues = [
    {
      name: "Content Creation",
      description:
        "Our team of skilled creators produces high-quality content tailored to your interests. From in-depth articles to engaging multimedia, we ensure that every piece of content is crafted with care and accuracy.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1677396466885-5f97c45ac1e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29udGVudCUyMENyZWF0aW9ufGVufDB8MXwwfHx8MA%3D%3D",
    },
    {
      name: "Updates & Trends",
      description:
        "Stay updated with the latest developments across various sectors. We provide timely and comprehensive updates and trends, ensuring you’re always informed about what matters most.",
      imageUrl:
        "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXBkYXRlc3xlbnwwfDF8MHx8fDA%3D",
    },
    {
      name: "Podcasting",
      description:
        "Tune into our diverse range of podcasts, where we explore intriguing subjects, share expert opinions, and engage in thought-provoking discussions. Our podcasts are designed to entertain and educate, providing valuable content you can listen to anytime, anywhere.",
      imageUrl:
        "https://images.unsplash.com/photo-1615458318132-1f151a3d18f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG9kY2FzdGluZ3xlbnwwfDF8MHx8fDA%3D",
    },
    {
      name: "Interviews",
      description:
        "Dive deep with exclusive interviews featuring industry experts, thought leaders, and other key figures. Our interviews provide unique insights and perspectives on current trends and topics.",
      imageUrl:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEludGVydmlld3N8ZW58MHwxfDB8fHww",
    },
  ];

  const words = "Welcome to Gyaanadri,";
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Set initial states for scroll-triggered elements
    gsap.set([contentRef.current, imageRef.current], {
      y: 100,
      opacity: 0,
    });

    // Create scroll trigger animation for text and image
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    tl.to([contentRef.current, imageRef.current], {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2,
    });

    // Animate background elements (glowing circles)
    gsap.to(".top-glow", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });

    gsap.to(".bottom-glow", {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
     <Helmet>
        <title>Gyaanadari - Insights, Podcasts, & Content</title>
        <meta
          name="description"
          content="Gyaanadari offers high-quality content, podcasts, interviews, and updates to inform, inspire, and entertain audiences."
        />
      </Helmet>
    <div className="relative overflow-x-hidden">
      {/* Background Gradient Overlay & Glowing Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {" "}
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #ffbe00 50%, transparent 100%)",
            opacity: 0.1,
          }}
        ></div>
        <div className="top-glow absolute -top-10 -right-10 w-64 h-64 bg-[#ffbe00] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
        <div className="bottom-glow absolute -bottom-32 -left-20 w-72 h-72 bg-[#ffbe00] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Content with higher z-index */}
      <div className="mt-15 relative z-10">
        <Heading value={"GYAANADRI"} />
        <div className="flex flex-col items-center justify-center py-5 gap-2">
          <TextGenerateEffect words={words} />
          <p className="w-[100%] text-center text-lg">
            Your premier destination for insightful content and engaging media.
            At Gyaanadri, we’re dedicated to delivering high-quality,
            informative content that informs, inspires, and entertains. Our
            platform is designed to be a hub for diverse content ranging from
            the latest updates and in-depth interviews to captivating podcasts
            and informative articles.
          </p>
        </div>

        {/* Our Mission Section - Adjusted gap */}
        <section ref={sectionRef} className="py-12">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-[-16]">
            {/*
              Adjust the 'mt-[-16]' value here:
                - More negative (e.g., mt-[-20]) pushes it closer.
                - Less negative (e.g., mt-[-12]) increases the gap.
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div ref={contentRef} className="text-center md:text-left">
                <h3 className="text-[#ffbe00] text-5xl font-bold tracking-normal">
                  Our Mission
                </h3>
                <p className="text-gray-900 mt-4 text-lg leading-relaxed">
                  Our mission at Gyaanadri is to empower our audience with
                  valuable knowledge and perspectives through a variety of
                  content formats. We strive to be a trusted source for the
                  latest updates, thought-provoking interviews, and enriching
                  podcasts. By curating and creating content that resonates with
                  our audience, we aim to foster a more informed and connected
                  community.
                </p>
              </div>

              {/* Image Section */}
              {/* Image Section */}
              <div ref={imageRef} className="flex justify-center">
                <img
                  src={gyaanadariImg}
                  alt="ZMS Platform"
                  className="rounded-lg w-full md:w-96 "
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-17">
          <Heading value={"What we Do?"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
          {workValues.map((value, index) => (
            <div key={index} className="max-w-xs w-full group/card">
              <div
                  className={cn(
                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
                  )}
                  style={{
                    backgroundImage: `url(${value.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/60 group-hover/card:bg-black/80 transition duration-300"></div>

                  <div className="relative z-10 text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-100">
                      {value.name}
                    </h1>
                    <p className="font-normal text-sm text-gray-100 my-4">
                      {value.description}
                    </p>
                  </div>
                </div>

            </div>
          ))}
        </div>

        {/* Join Us Section with additional bottom margin for logical gap */}
        <div className="flex flex-col items-center justify-center py-5 gap-2 mt-15 mb-20">
          {/*
            Added 'mb-12' to create a clear gap after the section ends.
          */}
          <h2 className="text-4xl md:text-4xl font-bold mb-2 text-[#ffbe00] text-center">
            Join Us On Our Journey
          </h2>
          <p className="w-[100%] text-center text-lg">
            Explore the world of Gyaanadri and discover a wealth of content
            designed to enrich your knowledge and entertain your mind. Connect
            with us through social media, and stay tuned for the latest updates
            and content releases.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Gyaanadari;
