import React, { useEffect, useRef } from "react";
import Heading from "../Components/Heading";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { cn } from "../lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function IRMediaAndProductions() {
  const workValues = [
    {
      name: "DIGITAL MEDIA SERVICE",
      description:
        "We offer a range of digital media services including content creation, social media management, and digital strategy. Our approach is designed to enhance your digital footprint and maximize your online impact.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683288706414-e678ce71d7ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZElHSVRBTCUyME1FRElBJTIwU0VSVklDRXxlbnwwfDF8MHx8fDA%3D",
    },
    {
      name: "FILMS",
      description:
        "Whether it’s a short film, documentary, or feature-length project, we bring your cinematic vision to life. Our expertise in film production ensures high-quality storytelling and technical excellence in every frame.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RklMTVN8ZW58MHwxfDB8fHww",
    },
    {
      name: "DIGITAL ADS",
      description:
        "Our team designs and executes effective digital advertising campaigns that boost your online presence. We utilize targeted strategies and data-driven insights to ensure your ads reach the right audience and deliver measurable results.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683288706157-9913483dffc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fERJR0lUQUwlMjBBRFN8ZW58MHwxfDB8fHww",
    },
    {
      name: "VIDEO PRODUCTION",
      description:
        "We create captivating video content that tells your story and engages your audience. From promotional videos and corporate videos to event coverage and brand storytelling, we handle every aspect of video production with precision and creativity",
      imageUrl:
        "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VklERU8lMjBQUk9EVUNUSU9OfGVufDB8MXwwfHx8MA%3D%3D",
    },
    {
      name: "RESERACH",
      description:
        "Our research services deliver valuable insights and data to inform your media strategies. We conduct thorough research to understand market trends, audience behavior, and competitive landscape, ensuring that your media efforts are grounded in evidence.",
      imageUrl:
        "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UkVTRVJBQ0h8ZW58MHwxfDB8fHww",
    },
    {
      name: "MEDIA CONSULTING",
      description:
        "Navigate the complex media landscape with our expert consulting services. We provide strategic advice and actionable insights to help you optimize your media presence and achieve your objectives.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664195074915-9d850d75da1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TUVESUElMjBDT05TVUxUSU5HfGVufDB8MXwwfHx8MA%3D%3D",
    },
  ];
  const words = "Welcome to Ira Media & Productions,";

  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set([contentRef.current, imageRef.current], {
      y: 100,
      opacity: 0,
    });

    // Create the scroll trigger animation
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
      stagger: 0.2, // Add slight delay between content and image animation
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <>
      <div className="mt-15">
        <Heading value={"IRA MEDIA & PRODUCTIONS"} />
        <div className="flex flex-col items-center justify-center py-5 gap-2">
          <TextGenerateEffect words={words} />
          <p className="w-[50%] text-center text-lg">
           Where creativity meets strategy to bring your media projects to life. At Ira Media & Productions, we specialize in delivering a comprehensive range of media and production services that include video productions, digital ads, films, digital media services, media consulting, and research. Our mission is to transform your vision into impactful and engaging content that resonates with your audience


          </p>
        </div>

        {/* <div className=" flex flex-col items-center justify-center py-5 gap-2">
          <h2 className="text-4xl md:text-4xl font-bold mb-2 text-[#ffbe00]  text-center">
            Our Mission
          </h2>
          <p className=" w-[50%] text-center text-lg">
          Our mission at Gyaanadri is to empower our audience with valuable knowledge and perspectives through a variety of content formats. We strive to be a trusted source for the latest news, thought-provoking interviews, and enriching podcasts. By curating and creating content that resonates with our audience, we aim to foster a more informed and connected community.
          </p>
        </div> */}

        <section ref={sectionRef} className=" py-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div ref={contentRef} className="text-center md:text-left">
                <h3 className="text-[#ffbe00] text-4xl font-bold tracking-normal ">
                  Our Mission
                </h3>
                {/* <Heading value={"Our Mission"}/> */}
                {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 leading-tight">
              Empowering Your Business <br /> with Digital Innovation
            </h2> */}
                <p className="text-gray-900 mt-4 text-lg leading-relaxed">
                At Ira Media & Productions, our mission is to elevate your brand through innovative media solutions and high-quality productions. We are dedicated to crafting compelling narratives and creating visually stunning content that not only captures attention but also drives results. Our goal is to be your trusted partner in navigating the ever-evolving media landscape.
                </p>
                {/* <button className="mt-6 bg-[#ffbe00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:cursor-pointer transition">
              Read More
            </button> */}
              </div>

              {/* Image Section */}
              <div ref={imageRef} className="flex justify-center">
                <img
                  src="https://media.istockphoto.com/id/2151935467/vector/idea-to-achieve-target-and-strategy-or-planning-to-achieve-goal-innovation-to-insight-to.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yh4s7GZEUJm9CNAuN0dfItK2TXvz-cqfd61LsAx4O-0="
                  alt="About Us"
                  className="rounded-lg w-full md:w-96"
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
                  " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
                  //   `bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover`
                  //   `bg-[url(${value.imageUrl})] bg-cover`
                )}
                style={{
                  backgroundImage: `url(${value.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-20 group-hover/card:bg-black hover:opacity-60"></div>
                <div className="flex flex-row items-center space-x-4 z-10"></div>
                <div className="text content">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                    {value.name}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
            // <div className="max-w-xs w-full">
            //   <div
            //     className={cn(
            //       "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",

            //         // Preload hover image by setting it in a pseudo-element
            //         "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            //       //   `before:bg-[url(${value.imageUrl})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
            //         "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
            //         "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            //         "transition-all duration-500"
            //     )}
            //     style={{
            //       backgroundImage: `url(${value.imageUrl})`,
            //       backgroundSize: "cover",
            //       backgroundPosition: "center",
            //     }}
            //   >
            //     <div className="text relative z-50">
            //       <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            //         {value.name}
            //       </h1>
            //       <p className="font-normal text-base text-gray-50 relative my-4">
            //         {value.description}
            //       </p>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>

        <div className=" flex flex-col items-center justify-center py-5 gap-2 mt-15">
          <h2 className="text-4xl md:text-4xl font-bold mb-2 text-[#ffbe00]  text-center capitalize">
          why choose ira media & production
          </h2>
          <p className=" w-[50%] text-center text-lg">
          Our team of experienced professionals brings a wealth of knowledge and skill to every project, ensuring exceptional results. We offer a full suite of services to meet all your media needs, from video production and digital ads to media consulting and research. With our client-focused approach, we tailor our services to fit your unique needs and objectives, providing personalized solutions that deliver real value.
          </p>
        </div>
      </div>
    </>
  );
}

export default IRMediaAndProductions;
