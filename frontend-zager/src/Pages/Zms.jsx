"use client";

import Heading from "../Components/Heading";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { cn } from "../lib/utils";
import gsap from "gsap";
import { useRef, useEffect } from "react";

// images (ensure these files exist)
import smsImg from "../assets/products/SMS.jpg";
import restaurantImg from "../assets/products/Restaurant.jpg";
import circuitImg from "../assets/products/Circuit.jpg";
import employeeErpImg from "../assets/products/EmployeeErp.jpg";
import clinicImg from "../assets/products/Clinic.jpg";
import inventoryImg from "../assets/products/inventory.jpg";
import zmsPlatformImg from "../assets/zms.jpeg";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function ZagerManagementSystem() {
  const solutions = [
    {
      id: "sms-school-management",
      name: "SMS - School Management System",
      imageUrl: smsImg,
      description: [
        "Our School Management System automates academic and administrative operations for schools of every size — from admissions to analytics.",
        "It gives educators and admins a single place to manage students, staff, fees, timetables and parent communications.",
      ],
      features: [
        "Student information & progress reports",
        "Staff & teacher management",
        "Online admissions & fees",
        "Timetable & attendance automation",
        "Parent-teacher communication portal",
        "Learning Management integration",
        "Transport & hostel management",
        "Reports & analytics",
      ],
      benefits: [
        "Reduce admin overhead",
        "Improve communication",
        "Gain better academic insights",
      ],
    },

    {
      id: "swaad-swetu",
      name: "SWAAD SWETU - Restaurant Management System",
      imageUrl: restaurantImg,
      description: [
        "A QR-first restaurant platform that handles digital ordering, kitchen routing, POS billing and inventory tracking — optimized for fast, contactless dining.",
        "Works for single cafes up to multi-outlet restaurant groups and cloud kitchens.",
      ],
      features: [
        "Contactless QR ordering & table mapping",
        "Smart menu categories & modifiers",
        "Role-based dashboards: Admin / Waiter / Kitchen",
        "Billing & receipts (A4 & 80mm)",
        "Real-time order management & kitchen notifications",
        "Per-table QR generation",
        "Inventory & wastage tracking",
      ],
      benefits: [
        "Faster table turnover",
        "Fewer order errors",
        "Better hygiene and faster service",
      ],
    },

    {
      id: "employees-management",
      name: "Employees Management System",
      imageUrl: employeeErpImg,
      description: [
        "Centralize HR workflows — employee profiles, attendance, payroll and approvals — while integrating with finance reporting and analytics.",
        "Ideal for businesses seeking accurate, auditable people operations.",
      ],
      features: [
        "Employee profiles & document storage",
        "Attendance & shift tracking",
        "Payroll automation",
        "Leave management & approval flows",
        "Basic finance & payroll exports",
        "Role-based dashboards",
      ],
      benefits: [
        "Reduce payroll errors",
        "Faster HR processes",
        "Clear workforce visibility",
      ],
    },

    {
      id: "circuit",
      name: "Circuit - Task Management System",
      imageUrl: circuitImg,
      description: [
        "Circuit is a lightweight, flexible task and project management tool with real-time dashboards, collaboration and reporting.",
        "It helps teams plan, assign, and complete work with clarity and accountability.",
      ],
      features: [
        "Task creation, assignment & prioritization",
        "Deadlines & reminders",
        "File sharing & discussion threads",
        "Progress dashboards & reporting",
      ],
      benefits: ["Keep teams aligned", "Improve delivery predictability"],
    },

    {
      id: "clinic-management",
      name: "Clinic Management System",
      imageUrl: clinicImg,
      description: [
        "A secure, cloud clinic platform for appointments, digital prescriptions, billing and electronic medical records.",
        "Designed to reduce admin burden and improve patient experience.",
      ],
      features: [
        "Digital prescriptions & drug DB",
        "Appointment scheduling & reminders",
        "Billing & insurance handling",
        "Electronic Medical Records (EMR)",
        "Multi-device access",
        "Operational reports",
      ],
      benefits: [
        "Streamline clinic operations",
        "Faster patient throughput",
        "Better clinical record-keeping",
      ],
    },

    {
      id: "inventory-management",
      name: "Inventory Management System",
      imageUrl: inventoryImg,
      description: [
        "Real-time inventory control with barcode/QR support, multi-warehouse handling and automated reorder alerts.",
        "Built to reduce stockouts, overstocking and manual reconciliation work.",
      ],
      features: [
        "Real-time stock tracking",
        "Barcode & QR integration",
        "Multi-warehouse & location management",
        "Auto re-order & PO suggestions",
        "Sales / purchase integrations",
        "Demand forecasting reports",
      ],
      benefits: [
        "Reduce stock issues",
        "Improve fulfillment accuracy",
        "Better forecasting & purchasing",
      ],
    },
  ];

  const words = "Welcome to Zager Management System (ZMS),";
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const solutionsTitleRef = useRef(null);
  const topGlowRef = useRef(null);
  const bottomGlowRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // try registering ScrollTrigger but don't break if unavailable
    try {
      const { ScrollTrigger } = require("gsap/ScrollTrigger");
      if (!gsap.plugins || !gsap.plugins.ScrollTrigger)
        gsap.registerPlugin(ScrollTrigger);
    } catch (e) {}

    gsap.set([contentRef.current, imageRef.current], { y: 60, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: sectionRef.current
        ? {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom center",
            toggleActions: "play none none reverse",
          }
        : undefined,
    });

    tl.to([contentRef.current, imageRef.current], {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
    });

    const topGlowTween = topGlowRef.current
      ? gsap.to(topGlowRef.current, {
          y: -18,
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: "power1.inOut",
        })
      : null;
    const bottomGlowTween = bottomGlowRef.current
      ? gsap.to(bottomGlowRef.current, {
          scale: 1.12,
          repeat: -1,
          yoyo: true,
          duration: 3.5,
          ease: "power1.inOut",
        })
      : null;

    return () => {
      tl && tl.kill();
      topGlowTween && topGlowTween.kill();
      bottomGlowTween && bottomGlowTween.kill();
      gsap.killTweensOf([
        contentRef.current,
        imageRef.current,
        topGlowRef.current,
        bottomGlowRef.current,
      ]);
      try {
        const st =
          gsap.core && gsap.core.globals && gsap.core.globals().ScrollTrigger;
        if (st && typeof st.getAll === "function")
          st.getAll().forEach((s) => s.kill && s.kill());
      } catch (e) {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* robustScrollToId: poll for element, then scroll with header offset */
  const robustScrollToId = (
    id,
    { offset = 88, maxAttempts = 60, interval = 100 } = {}
  ) => {
    if (typeof window === "undefined" || !id) return;
    let attempts = 0;
    const iv = setInterval(() => {
      attempts++;
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top - offset;
        window.scrollTo({ top: absoluteTop, behavior: "smooth" });
        try {
          el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
          setTimeout(() => el.removeAttribute("tabindex"), 800);
        } catch (e) {}
        clearInterval(iv);
      } else if (attempts >= maxAttempts) {
        clearInterval(iv);
      }
    }, interval);
  };

  /* On mount & hashchange, try to scroll to any present hash */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const tryScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.replace("#", "");
      if (id)
        robustScrollToId(id, { offset: 88, maxAttempts: 60, interval: 100 });
    };
    tryScroll();
    window.addEventListener("hashchange", tryScroll);
    return () => window.removeEventListener("hashchange", tryScroll);
  }, []);

  const scrollTo = (id) =>
    robustScrollToId(id, { offset: 88, maxAttempts: 50, interval: 100 });

  const handleCardKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      if (typeof window !== "undefined") window.location.hash = `#${id}`;
      scrollTo(id);
    }
  };

  return (
    <>
    <Helmet>
        <title>Zager Management System (ZMS) | ERP Modules</title>
        <meta
          name="description"
          content="Explore Zager Management System (ZMS) – a modular ERP platform with school, restaurant, HR, clinic, inventory, and task management solutions."
        />
        <meta property="og:title" content="Zager Management System (ZMS)" />
        <meta
          property="og:description"
          content="Modular ERP platform with industry-specific solutions for school, restaurant, HR, clinic, inventory, and task management."
        />
        
      </Helmet>
    <div className="relative overflow-x-hidden bg-gray-50 min-h-screen">
      {/* background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(800px 400px at 10% 10%, rgba(255,190,0,0.06), transparent 12%), radial-gradient(600px 300px at 90% 90%, rgba(17,24,39,0.02), transparent 12%)",
          }}
        />
        <div
          ref={topGlowRef}
          className="absolute -top-12 -right-12 w-72 h-72 bg-gradient-to-br from-[#ffefb8] to-[#ffbe00] rounded-full opacity-25 blur-3xl"
          aria-hidden="true"
        />
        <div
          ref={bottomGlowRef}
          className="absolute -bottom-40 -left-16 w-80 h-80 bg-gradient-to-tr from-[#fff1d6] to-[#ffbe00] rounded-full opacity-22 blur-3xl"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Heading value={"ZAGER MANAGEMENT SYSTEM"} />

        <div className="flex flex-col items-center justify-center py-6 gap-4">
          <TextGenerateEffect words={words} />
          <p className="max-w-3xl text-center text-base sm:text-lg text-gray-700">
            Zager Management System (ZMS) is a modular ERP platform with
            industry-specific modules. Click a module card below to jump to a
            full description with visuals, features and CTAs.
          </p>
        </div>

        {/* vision & hero */}
        <section ref={sectionRef} className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              ref={contentRef}
              className="text-center md:text-left space-y-4"
            >
              <h2 className="text-[#ffbe00] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Our Vision & Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We build configurable ERP modules that plug into your business
                with minimal friction. Focus on outcomes: faster operations,
                lower waste and better visibility.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a
                  href="/Contact"
                  className="inline-flex items-center gap-2 bg-[#111827] text-white px-5 py-2.5 rounded-md shadow-md hover:opacity-95"
                >
                  Contact Sales
                </a>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined")
                      window.location.hash = `#${solutions[0].id}`;
                    scrollTo(solutions[0].id);
                  }}
                  className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2.5 rounded-md text-gray-800 bg-white"
                >
                  Explore Modules
                </button>
              </div>
            </div>

            <div ref={imageRef} className="flex justify-center">
              <img
                src={zmsPlatformImg}
                alt="ZMS Platform screenshot"
                className="rounded-xl w-full max-w-sm sm:max-w-md shadow-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* solutions grid */}
        <div className="mt-8">
          <div ref={solutionsTitleRef} id="our-solutions" className="mb-4">
            <Heading value={"Our Solutions"} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div key={solution.id} className="group">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    if (typeof window !== "undefined")
                      window.location.hash = `#${solution.id}`;
                    scrollTo(solution.id);
                  }}
                  onKeyDown={(e) => handleCardKeyDown(e, solution.id)}
                  className={cn(
                    "relative cursor-pointer h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-4 transition-transform transform group-hover:-translate-y-1",
                    "focus:outline-none focus:ring-4 focus:ring-[#ffbe00]/30"
                  )}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 65%), url(${solution.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#0b1220",
                  }}
                  aria-label={`Open ${solution.name} details`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  <div className="relative z-10 text-white text-center px-3">
                    <h4 className="text-base sm:text-lg font-semibold leading-tight">
                      {solution.name}
                    </h4>
                    <p className="mt-2 text-sm text-gray-100 hidden sm:block">
                      {solution.description?.[0]?.slice(0, 80) ?? ""}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* detailed sections: alternate image left/right */}
        <div className="mt-12 space-y-14">
          {solutions.map((s, idx) => {
            const isLeftImage = idx % 2 === 0;
            const imageCol = isLeftImage ? "md:order-1" : "md:order-2";
            const textCol = isLeftImage ? "md:order-2" : "md:order-1";

            return (
              <section
                id={s.id}
                key={s.id}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-10 scroll-mt-28"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div
                    className={cn("flex items-center justify-center", imageCol)}
                  >
                    <div className="w-full max-w-lg rounded-lg overflow-hidden shadow-inner transform transition-transform duration-300 hover:scale-[1.02]">
                      <img
                        src={s.imageUrl}
                        alt={`${s.name} screenshot`}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className={cn("space-y-4", textCol)}>
                    <h3
                      id={`${s.id}-title`}
                      className="text-2xl md:text-3xl font-extrabold text-[#111827]"
                    >
                      {s.name}
                    </h3>

                    {s.description &&
                      s.description.map((p, i) => (
                        <p key={i} className="text-gray-700">
                          {p}
                        </p>
                      ))}

                    {s.features && s.features.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 mt-2">
                          Key features
                        </h4>
                        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                          {s.features.map((f, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 bg-gray-50 p-3 rounded-md border border-gray-100"
                            >
                              {/* consistent check icon */}
                              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ffbe00] shrink-0 flex-none">
                                <svg
                                  width="14"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path
                                    d="M1 5.2L5 9L13 1"
                                    stroke="black"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <span className="leading-tight text-sm md:text-base">
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {s.benefits && s.benefits.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 mt-4">
                          Benefits
                        </h4>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          {s.benefits.map((b, i) => (
                            <li key={i} className="text-sm md:text-base">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`/Contact?product=${encodeURIComponent(s.name)}`}
                        className="inline-flex items-center gap-2 bg-[#ffbe00] text-black font-semibold px-4 py-2 rounded-lg shadow hover:brightness-95"
                      >
                        Request Demo
                      </a>

                      <button
                        onClick={() => {
                          if (typeof window !== "undefined")
                            window.location.hash = "#our-solutions";
                          robustScrollToId("our-solutions", {
                            offset: 88,
                            maxAttempts: 10,
                            interval: 50,
                          });
                        }}
                        className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-gray-800 bg-white"
                      >
                        Back to modules
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 mb-20 text-center">
          <h3 className="text-3xl font-extrabold text-[#111827]">
            Ready to get started?
          </h3>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Book a demo and we'll walk you through a tailored implementation
            plan.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="/Contact"
              className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-full shadow-lg"
            >
              Contact Sales
            </a>
            <button
              onClick={() => {
                if (typeof window !== "undefined")
                  window.location.hash = `#${solutions[0].id}`;
                scrollTo(solutions[0].id);
              }}
              className="inline-flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-full text-gray-800 bg-white"
            >
              Explore Modules
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
