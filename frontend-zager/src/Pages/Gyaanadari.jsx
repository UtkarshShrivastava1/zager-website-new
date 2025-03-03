import React, { useEffect, useRef } from "react";
import Heading from "../Components/Heading";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { cn } from "../lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      name: "News Coverage",
      description:
        "Stay updated with the latest developments across various sectors. We provide timely and comprehensive news coverage, ensuring you’re always informed about what matters most.",
      imageUrl:
        "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV3cyUyMENvdmVyYWdlfGVufDB8MXwwfHx8MA%3D%3D",
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
        "Dive deep with exclusive interviews featuring industry experts, thought leaders, and other key figures. Our interviews provide unique insights and perspectives on current trends and topics",
      imageUrl:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEludGVydmlld3N8ZW58MHwxfDB8fHww",
    },
  ];
  const words = "Welcome to Gyaanadri,";

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
        <Heading value={"GYAANDARI"} />
        <div className="flex flex-col items-center justify-center py-5 gap-2">
          <TextGenerateEffect words={words} />
          <p className="w-[50%] text-center text-lg">
            Your premier destination for insightful content and engaging media.
            At Gyaanadri, we’re dedicated to delivering high-quality,
            informative content that informs, inspires, and entertains. Our
            platform is designed to be a hub for diverse content ranging from
            breaking news and in-depth interviews to captivating podcasts and
            informative articles.
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
                  Our mission at Gyaanadri is to empower our audience with
                  valuable knowledge and perspectives through a variety of
                  content formats. We strive to be a trusted source for the
                  latest news, thought-provoking interviews, and enriching
                  podcasts. By curating and creating content that resonates with
                  our audience, we aim to foster a more informed and connected
                  community.
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
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
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
          <h2 className="text-4xl md:text-4xl font-bold mb-2 text-[#ffbe00]  text-center ">
            Join Us On Our Journery
          </h2>
          <p className=" w-[50%] text-center text-lg">
            Explore the world of Gyaanadri and discover a wealth of content
            designed to enrich your knowledge and entertain your mind. Connect
            with us through social media, and stay tuned for the latest updates
            and content releases..
          </p>
        </div>
      </div>
    </>
  );
}

export default Gyaanadari;
