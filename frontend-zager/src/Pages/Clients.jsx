// src/Pages/Clients.jsx
"use client";

import Heading from "../Components/Heading";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
import { cn } from "../lib/utils";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

/* Local logo imports (dummy placeholders, replace with real logos later) */
import logo1 from "../assets/clientLogos/logo_client1.png";
import logo2 from "../assets/clientLogos/logo_client2.jpg";
import logo3 from "../assets/clientLogos/logo_client3.png";
import logo4 from "../assets/clientLogos/logo_client4.png";
import logo5 from "../assets/clientLogos/logo_client5.jpg";
import logo6 from "../assets/clientLogos/logo_client6.jpg";
import { Helmet } from "@dr.pogodin/react-helmet";

/**
 * Clients page
 * - Company name is the main title per card
 * - Shows Client Name, What we did, Testimonial
 * - "Visit Website" appears as a CTA button where website is provided
 * - GSAP enter animations (uses ScrollTrigger if available)
 *
 * Client Name is now in its own block so it lines up with other sections
 * and shows fully (wraps) instead of truncating.
 */

const clients = [
  {
    id: "er-ajay-verma",
    company: "CSIT DURG",
    person: "Er. Ajay Prakash Verma — Chairman",
    logo: logo1,
    work: "At Zager Digital Services, we redesigned and rebuilt the official website of CSIT Durg, giving it a modern, responsive, and user-friendly design. With improved navigation, faster performance, and a refreshed look, the new website reflects the institution’s prestige and provides a seamless experience for students, parents, and visitors.",
    testimonial:
      "Zager Digital Services transformed our college website with a modern, user-friendly design. Their expertise boosted our digital presence, and we appreciate their outstanding work. The new site is visually appealing and easy to navigate. We highly recommend them for their professionalism and skill.",
    website: "https://www.csitdurg.in/",
  },
  {
    id: "sweta-singh-spgs",
    company: "SHREE PADMAKSHI GLOBAL SCHOOL, BILASPUR",
    person: "Mrs. Sweta Singh — Principal",
    logo: logo2,
    work: "Built from the ground up by Zager Digital Services, the SPGS Bilaspur website features a modern, responsive, and user-centric design that effectively communicates the school’s values and enhances engagement with students, parents, and the community.",
    testimonial:
      "Our new website, crafted by Zager Digital Services, is sleek, responsive, and highly accessible—truly enhancing communication with our school community.",
    website: "https://www.spgsbilaspur.com/",
  },
  {
    id: "jitendra-jkworks",
    company: "JK Works",
    person: "Mr. Jitendra Kumar — Founder",
    logo: logo3,
    work: "At Zager Digital Services, we designed and developed a modern, intuitive, and fully responsive website for The JK Works. With sleek design, enhanced navigation, and seamless user experience, the website effectively reflects the company’s innovative spirit and makes it easy for clients to explore their services.",
    testimonial:
      "Working with Zager Digital Services was an exceptional experience. They translated our vision into a modern, intuitive, and fully responsive website that not only looks impressive but also enhances user experience, making it easier for clients to connect with and explore The JK Works.",
    website: "https://www.thejkworks.com/",
  },
  {
    id: "prince-sochlab",
    company: "Soch Lab",
    person: "Prince Sai — Founder",
    logo: logo4,
    work: "We partnered with Soch Labs to create a website that reflects their creativity and innovation. By combining intuitive navigation, sleek visuals, and responsive design, we delivered a digital platform that enhances user experience, improves accessibility, and reinforces their brand presence online.",
    testimonial:
      "Zager Digital Services created a website that perfectly captures the spirit of Soch Labs. With intuitive design, responsive functionality, and a fresh, modern look, it has significantly strengthened our digital presence and client engagement.",
    website: "https://www.sochlabs.in/",
  },
  {
    id: "punit-bhilai-company",
    company: "The Bhilai Company",
    person: "Mr. Punit Lohani",
    logo: logo5,
    work: "At Zager Digital Services, we helped increase pass sales for the Gajendra Verma concert through targeted Meta ads and strategic social media management. By identifying and reaching the right audience, optimizing campaigns, and crafting engaging content, we ensured maximum visibility and ticket conversions.",
    testimonial:
      "Zager played a key role in increasing pass sales for the Gajendra Verma concert through Meta ads and social media management. Their strategies ensured the right audience was reached. Great work!",
  },
  {
    id: "abhishek-jogira",
    company: "Team Jogira Bhilai",
    person: "Mr. Abhishek Singh",
    logo: logo6,
    work: "At Zager Digital Services, we partnered with the Jogira Pre-Holi Event team to maximize reach and engagement through targeted Meta ads and a strategic social media campaign. By analyzing the audience and optimizing content, we ensured the event gained maximum visibility and participation.",
    testimonial:
      "Zager did a great job as our digital marketing partner for Jogira Pre-Holi Event, with their Meta ads & social media strategy ensuring maximum reach. Highly recommended!",
  },
];

export default function Clients() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const gridRef = useRef(null);
  const modalRef = useRef(null);

  const filtered = clients.filter((c) =>
    (c.company + " " + c.person)
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  useEffect(() => {
    if (!gridRef.current) return;
    try {
      const { ScrollTrigger } = require("gsap/ScrollTrigger");
      if (!gsap.plugins || !gsap.plugins.ScrollTrigger)
        gsap.registerPlugin(ScrollTrigger);
    } catch {}
    // animate in
    gsap.set(".client-card", { y: 24, opacity: 0 });
    gsap.to(".client-card", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.07,
      scrollTrigger: gsap.plugins?.ScrollTrigger
        ? { trigger: gridRef.current, start: "top 80%" }
        : undefined,
    });
  }, [filtered.length]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // small inline external-link svg used in buttons
  const ExternalIcon = ({ className = "inline-block", size = 14 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M14 3h7v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14L21 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21H3V3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
   <Helmet>
      <title>Our Clients - Zager Digital Services</title>
      <meta
        name="description"
        content="Explore our clients and projects at Zager Digital Services. See testimonials, case studies, and the impact of our web & digital marketing solutions."
      />
      <link rel="canonical" href="https://www.zager.in/clients" />
    </Helmet>
    <div className="relative overflow-x-hidden bg-gray-50 min-h-screen py-12">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading value={"OUR CLIENTS"} />
        <div className="flex flex-col items-center py-6 gap-4">
          <TextGenerateEffect
            words={"Trusted by businesses and institutions."}
          />
          <p className="max-w-3xl text-center text-lg text-gray-700">
            We partner with organizations of every size. Click any client to
            view their project summary and testimonial.
          </p>
        </div>
        {/* Search */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by company or client name..."
            className="w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-4 focus:ring-[#ffbe00]/20"
            aria-label="Search clients"
          />
        </div>
        {/* Grid */}
        <div
          ref={gridRef}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((c) => (
            <article
              key={c.id}
              className={cn(
                "client-card group bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer",
                "flex flex-col h-full"
              )}
              onClick={() => setSelected(c)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(c);
                }
              }}
              aria-labelledby={`${c.id}-title`}
            >
              {/* Header: logo + company */}
              <div
                className="flex items-center gap-4"
                style={{ minHeight: 64 }}
              >
                <div className="w-20 h-20 rounded-md bg-gray-50 p-2 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={c.logo}
                    alt={`${c.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    id={`${c.id}-title`}
                    className="text-base sm:text-lg font-semibold text-gray-900 truncate"
                    title={c.company}
                  >
                    {c.company}
                  </h3>
                </div>
              </div>

              {/* Client Name: moved to its own full-width block so it lines up with sections below */}
              <div className="mt-2">
                <p
                  className="text-sm text-gray-700"
                  style={{ whiteSpace: "normal" }}
                >
                  <span className="font-medium text-gray-800">
                    Client Name -{" "}
                  </span>
                  <span>{c.person}</span>
                </p>
              </div>

              {/* Body: What we did (takes remaining space; clamp long text) */}
              <div className="mt-3 text-sm text-gray-700 flex-1">
                <h4 className="font-semibold mb-1 text-sm text-gray-800">
                  What we did -
                </h4>
                <p className="text-sm text-gray-700 line-clamp-4">{c.work}</p>
              </div>

              {/* Footer: Testimonial + CTA */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <h4 className="font-semibold mb-1 text-sm text-gray-800">
                  Testimonial -
                </h4>

                <div className="flex items-start justify-between gap-4">
                  <blockquote className="italic text-sm text-gray-700 line-clamp-2 flex-1 mr-3">
                    “{c.testimonial}”
                  </blockquote>

                  {c.website ? (
                    <div className="flex-shrink-0 self-start">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            c.website,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#ffbe00] text-black font-semibold shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#ffbe00]/40"
                        aria-label={`Visit ${c.company} website`}
                        title={`Open ${c.company} website`}
                      >
                        <span className="text-sm hidden sm:inline">
                          Visit Website
                        </span>
                        <ExternalIcon size={14} />
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* Modal */}
        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="client-modal-title"
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 rounded-md bg-gray-50 p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={selected.logo}
                    alt={`${selected.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h2 id="client-modal-title" className="text-2xl font-bold">
                    {selected.company}
                  </h2>
                  <p className="mt-1 text-lg text-gray-700">
                    Client Name - {selected.person}
                  </p>
                </div>

                {/* Keep only this button */}
                {selected.website && (
                  <button
                    onClick={() =>
                      window.open(
                        selected.website,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#ffbe00] text-black font-semibold shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#ffbe00]/40"
                    aria-label={`Visit ${selected.company} website`}
                  >
                    <span className="text-sm">Visit Website</span>
                    <ExternalIcon size={14} />
                  </button>
                )}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">What we did -</h4>
                <p className="mt-1 text-gray-700">{selected.work}</p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Testimonial -</h4>
                <blockquote className="mt-1 italic text-gray-700 border-l-2 border-[#ffbe00] pl-3">
                  “{selected.testimonial}”
                </blockquote>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
