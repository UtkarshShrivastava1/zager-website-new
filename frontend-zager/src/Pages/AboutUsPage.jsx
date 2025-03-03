import React from "react";
import { BentoGridDemo } from "../Components/BentoGrid";
import { TimelineDemo } from "../Components/TimelineDemo";

const AboutUsPage = () => {
  const values = [
    {
      icon: "👥",
      title: "Integrity.",
      description:
        "We uphold the highest standards of honesty and transparency in every interaction.",
    },
    {
      icon: "🚀",
      title: "Innovation.",
      description:
        "We continuously explore new technologies and methodologies to offer creative and effective solutions.",
    },
    {
      icon: "👋",
      title: "Excellence.",
      description:
        "We are committed to delivering outstanding results and exceeding client expectations.",
    },
    // {
    //   icon: "🎓",
    //   title: "Always learning.",
    //   description:
    //     "Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.",
    // },
    // {
    //   icon: "🔄",
    //   title: "Share everything you know.",
    //   description:
    //     "Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.",
    // },
    // {
    //   icon: "☀️",
    //   title: "Enjoy downtime.",
    //   description:
    //     "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
    // },
  ];
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffbe00] mb-6">
              We're changing the way people connect
            </h1>
            <p className="text-lg text-gray-600">
              At{" "}
              <span className="text-[#051244] font-bold ">
                Zager Digital Services
              </span>
              , we believe that exceptional Digital Marketing and IT solutions
              stem from a core commitment to integrity, innovation, and
              excellence. Founded with the mission to empower businesses through
              cutting-edge technology and strategic marketing, we take pride in
              delivering tailored solutions that drive growth and success.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10 gap-4 flex md:gap-10 m-auto ">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Digital Marketing"
              className="md:w-[40%] md:h-[400px] w-[50%] h-[300px] object-cover rounded-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80  "
              alt=""
              className="md:w-[40%] md:h-[400px] w-[50%] h-[300px] object-cover rounded-2xl mt-20"
            />
          </div>
        </div>
      </div>

      {/* <div>
        <BentoGridDemo/>
      </div> */}

      <div className=" text-black !pt-0 py-16 px-10 md:px-24">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#ffbe00]  text-center">
            Our values
          </h2>
          <p className=" text-xl mb-16 ml-1 text-center w-full">
            Values That Inspire
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {values.map((value, index) => (
              <div key={index} className="flex">
                {/* <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 bg-opacity-10 text-2xl mr-4"> */}
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-opacity-10 text-2xl mr-4">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}

      {/* Contact CTA */}
      {/* <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital and IT services can help your business thrive in the digital age.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Contact Us Today
          </button>
        </div>
      </div> */}

      <div className="!pt-10 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-bold tracking-tight text-balance text-[#ffbe00] sm:text-5xl">
            Our Mission
          </p>
          {/* <h2 className="text-center text-base/7 font-semibold text-[#051244]">
            Our mission is simple yet profound
          </h2> */}
          <p className=" text-xl !mt-2 mb-8  mx-auto w-[60%] text-center tracking-tight">
            Our mission is to provide exceptional digital marketing and IT
            services that help businesses achieve their goals. We are committed
            to enhancing online visibility and engagement through innovative
            marketing strategies, delivering robust IT solutions that streamline
            operations and drive efficiency, and empowering clients to embrace
            the digital revolution with confidence and success.
          </p>
          <div className="!mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2 hover:scale-105 transform transition-all duration-200 ease-in-out">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] shadow-2xl">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Innovation Culture
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Cultivate a culture of innovation and continuous
                    improvement.
                  </p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1  hover:scale-105 transform transition-all duration-200 ease-in-out">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] shadow-2xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Tech-Driven Problem Solving
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Leverage technology to solve complex business challenges.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs rounded-lg mt-1"
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2  hover:scale-105 transform transition-all duration-200 ease-in-out">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] shadow-2xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Global Reach
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Connect businesses with opportunities across borders through
                    innovative technology.
                  </p>
                </div>
                {/* <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2 justify-between">
                <img
                  className="h-[min(152px,40cqw)] w-[80%] max-lg:max-w-xs rounded-lg mt-1 object-cover"
                  src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc"
                  alt=""
                />
              </div> */}
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs rounded-lg mt-1"
                    src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2  hover:scale-105 transform transition-all duration-200 ease-in-out">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] shadow-2xl">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Client-Centric Solution
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    "Deliver tailor-made digital solutions that meet our
                    clients' unique needs.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl shadow-2xl">
                    {/* <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div> */}
                    {/* <div className="px-6 pt-6 pb-14">Your code example</div> */}
                    <img
                      className="w-full h-full max-lg:max-w-xs !rounded-tl-xl mt-1 object-cover"
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values section  */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#ffbe00]  text-center">
          Our Vision
        </h2>
        <p className=" text-xl !mt-6 mb-8  mx-auto w-[40%] text-center tracking-tight">
          To be a global leader in providing innovative, customised, and
          comprehensive digital marketing and IT solutions that empower
          businesses to thrive in the digital era. We aim to redefine excellence
          and inspire growth by delivering cutting-edge technology and creative
          strategies tailored to meet our clients' evolving needs.
        </p>
      </div>

      <TimelineDemo />
    </div>
  );
};

export default AboutUsPage;
