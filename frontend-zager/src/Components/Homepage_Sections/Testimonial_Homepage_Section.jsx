// src/Components/Homepage_Sections/Testimonial.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";

/* Client logos — reuse the same assets as Clients page */
import logo1 from "../../assets/clientLogos/logo_client1.png";
import logo2 from "../../assets/clientLogos/logo_client2.jpg";
import logo3 from "../../assets/clientLogos/logo_client3.png";
import logo4 from "../../assets/clientLogos/logo_client4.png";
import logo5 from "../../assets/clientLogos/logo_client5.jpg";
import logo6 from "../../assets/clientLogos/logo_client6.jpg";

const TESTIMONIALS = [
  {
    quote:
      "Zager Digital Services rebuilt our college website with a fresh, user-friendly, and fully responsive design. Their expertise has greatly improved our digital presence.",
    name: "Er. Ajay Prakash Verma",
    designation: "Chairman — CSIT DURG",
    src: logo1,
  },
  {
    quote:
      "Our new website, crafted by Zager Digital Services, is sleek, responsive, and highly accessible—truly enhancing communication with our school community.",
    name: "Mrs. Sweta Singh",
    designation: "Principal — SHREE PADMAKSHI GLOBAL SCHOOL, BILASPUR",
    src: logo2,
  },
  {
    quote:
      "Working with Zager Digital Services was an exceptional experience. They translated our vision into a modern, intuitive, and fully responsive website that enhances user experience.",
    name: "Mr. Jitendra Kumar",
    designation: "Founder — JK Works",
    src: logo3,
  },
  {
    quote:
      "Zager Digital Services created a website that perfectly captures the spirit of Soch Labs with intuitive design and responsive functionality.",
    name: "Prince Sai",
    designation: "Founder — Soch Lab",
    src: logo4,
  },
  {
    quote:
      "Zager played a key role in increasing pass sales for the Gajendra Verma concert through targeted Meta ads and social media management. Great work!",
    name: "Punit Lohani",
    designation: "The Bhilai Company",
    src: logo5,
  },
  {
    quote:
      "Zager did a great job as our digital marketing partner for Jogira Pre-Holi Event — their Meta ads & social strategy ensured maximum reach.",
    name: "Abhishek Singh",
    designation: "Team Jogira Bhilai",
    src: logo6,
  },
];

export default function TestimonialAlt({ autoMs = 6000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  const len = TESTIMONIALS.length;

  useEffect(() => {
    if (!paused && len > 1) {
      timeoutRef.current = setTimeout(() => {
        next();
      }, autoMs);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [index, paused, autoMs]);

  function prev() {
    setIndex((i) => (i - 1 + len) % len);
  }
  function next() {
    setIndex((i) => (i + 1) % len);
  }
  function goTo(i) {
    setIndex(i % len);
  }

  const t = TESTIMONIALS[index];

  return (
    <section
      className="py-12"
      aria-label="Client testimonials alternate"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-center text-[#ffbe00] mb-3">
          What clients say
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Selected project outcomes and direct testimonials from our partners.
        </p>

        <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 min-h-[320px] md:min-h-[280px]">
            {/* left: avatar */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/80 border border-gray-100 flex items-center justify-center shadow-sm">
                <img
                  src={t.src}
                  alt={t.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* right: quote */}
            <div className="flex-1">
              <div className="relative rounded-md p-3 md:p-6 bg-white/70 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="text-6xl md:text-7xl leading-none text-[#ffbe00] opacity-15 font-extrabold select-none">
                    “
                  </div>
                  <div>
                    <p className="text-gray-900 text-lg md:text-xl leading-snug line-clamp-6">
                      {t.quote}
                    </p>

                    <div className="mt-4">
                      <div className="text-sm md:text-base font-semibold text-gray-900">
                        {t.name}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        {t.designation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* controls */}
              <div className="mt-5 flex items-center justify-between gap-4">
                {/* thumbnail indicators */}
                <div className="flex items-center gap-2 overflow-x-auto">
                  {TESTIMONIALS.map((it, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        goTo(i);
                      }}
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border ${
                        i === index
                          ? "border-[#ffbe00] scale-105 shadow"
                          : "border-transparent"
                      } bg-white flex items-center justify-center transform transition`}
                      aria-label={`Show testimonial ${i + 1}`}
                    >
                      <img
                        src={it.src}
                        alt={it.name}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>

                {/* arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border hover:shadow"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      className="w-4 h-4 text-gray-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <button
                    onClick={next}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border hover:shadow"
                    aria-label="Next testimonial"
                  >
                    <svg
                      className="w-4 h-4 text-gray-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">
          Testimonials are real client quotes. Logos are displayed for
          attribution and visual reference.
        </div>
      </div>
    </section>
  );
}
