"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

// Product images (make sure these paths exist)
import smsImg from "../../assets/products/SMS.jpg";
import restaurantImg from "../../assets/products/Restaurant.jpg";
import circuitImg from "../../assets/products/Circuit.jpg";
import employeeErpImg from "../../assets/products/EmployeeErp.jpg";
import clinicImg from "../../assets/products/Clinic.jpg";
import inventoryImg from "../../assets/products/inventory.jpg";

const products = [
  {
    image: smsImg,
    name: "SMS - School Management System",
    description:
      "Comprehensive academic & admin automation — admissions, attendance, fees, timetables and parent communication.",
    link: "/ourplatforms/zms#sms-school-management",
  },
  {
    image: employeeErpImg,
    name: "Employees Management System",
    description:
      "Centralize employee records, attendance, payroll and HR workflows for accurate people operations.",
    link: "/ourplatforms/zms#employees-management",
  },
  {
    image: circuitImg,
    name: "Circuit - Task Management System",
    description:
      "Create, assign, prioritize and track tasks with real-time dashboards and team collaboration features.",
    link: "/ourplatforms/zms#circuit",
  },
  {
    image: restaurantImg,
    name: "SWAAD SWETU - Restaurant Management System",
    description:
      "QR-based ordering, kitchen routing, POS and billing designed for fast, contactless dining operations.",
    link: "/ourplatforms/zms#swaad-swetu",
  },
  {
    image: clinicImg,
    name: "Clinic Management System",
    description:
      "Digital prescriptions, appointment scheduling, billing and EMR to streamline clinic workflows.",
    link: "/ourplatforms/zms#clinic-management",
  },
  {
    image: inventoryImg,
    name: "Inventory Management System",
    description:
      "Real-time stock tracking, multi-warehouse support, barcode/QR and automated reorder alerts.",
    link: "/ourplatforms/zms#inventory-management",
  },
];

const OurProducts = () => {
  const carouselRef = useRef(null);
  const indexRef = useRef(1);
  const [index, setIndex] = useState(1);
  const totalProducts = products.length;
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);

  const displayProducts = [
    products[totalProducts - 1],
    ...products,
    products[0],
  ];

  const slide = (direction) => {
    let newIndex = indexRef.current + direction;
    if (!carouselRef.current) return;

    if (newIndex <= 0) {
      gsap.set(carouselRef.current, { x: -totalProducts * 100 + "%" });
      newIndex = totalProducts;
    } else if (newIndex >= displayProducts.length - 1) {
      gsap.set(carouselRef.current, { x: "-100%" });
      newIndex = 1;
    }

    indexRef.current = newIndex;
    setIndex(newIndex);

    gsap.to(carouselRef.current, {
      x: -newIndex * 100 + "%",
      ease: "none",
      duration: 0.6,
    });
  };

  const handleDotClick = (dotIndex) => {
    const direction = dotIndex - indexRef.current;
    slide(direction);
  };

  const startAutoSlide = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) slide(1);
    }, 3500);
  };
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    if (carouselRef.current) gsap.set(carouselRef.current, { x: "-100%" });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".products-bg",
      {
        opacity: 1,
        background: "linear-gradient(to bottom, #ffffff, transparent, #ffffff)",
      },
      {
        opacity: 1,
        background: "linear-gradient(to bottom, #ffffff, transparent, #ffffff)",
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  /**
   * Robust scroll helper (shared between pages)
   * - polls for the element until found (timeout)
   * - when found computes absolute top and scrolls accounting for header offset
   */
  const robustScrollToId = (
    id,
    { offset = 88, maxAttempts = 40, interval = 100 } = {}
  ) => {
    if (typeof window === "undefined" || !id) return;
    let attempts = 0;
    const iv = setInterval(() => {
      attempts++;
      const el = document.getElementById(id);
      if (el) {
        // compute absolute top minus header offset
        const rect = el.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top - offset;
        window.scrollTo({ top: absoluteTop, behavior: "smooth" });
        try {
          el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
          setTimeout(() => el.removeAttribute("tabindex"), 1000);
        } catch {}
        clearInterval(iv);
      } else if (attempts >= maxAttempts) {
        clearInterval(iv);
      }
    }, interval);
  };

  /**
   * navigateTo(link)
   * - If same path: update hash and immediately attempt robust scroll
   * - If different path: full navigation (so server/app router mounts target page and its hash handler runs)
   */
  const navigateTo = (link) => {
    if (typeof window === "undefined") return;
    try {
      const url = new URL(link, window.location.origin);
      const normalize = (p) =>
        p.endsWith("/") && p !== "/" ? p.slice(0, -1) : p;
      const currentPath = normalize(window.location.pathname);
      const targetPath = normalize(url.pathname);
      const hash = url.hash || "";

      if (currentPath === targetPath) {
        // same page: set hash and try to scroll now
        if (window.location.hash !== hash) {
          window.location.hash = hash;
        } else {
          // same hash already set — re-dispatch so any listeners run
          window.dispatchEvent(
            new HashChangeEvent("hashchange", {
              oldURL: window.location.href,
              newURL: url.href,
            })
          );
        }

        const id = hash.replace("#", "");
        if (id)
          robustScrollToId(id, { offset: 88, maxAttempts: 50, interval: 120 });
      } else {
        // different path -> full navigation
        window.location.assign(url.href);
      }
    } catch (e) {
      window.location.href = link;
    }
  };

  const handleMouseEnter = () => (isPausedRef.current = true);
  const handleMouseLeave = () => (isPausedRef.current = false);
  const handleFocusIn = () => (isPausedRef.current = true);
  const handleFocusOut = () => (isPausedRef.current = false);
  const handleTouchStart = () => (isPausedRef.current = true);
  const handleTouchEnd = () =>
    setTimeout(() => (isPausedRef.current = false), 300);

  return (
    <div
      className="products-bg relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocusIn}
      onBlur={handleFocusOut}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Our products carousel"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, transparent 30%, #ffbe00 50%, transparent 100%)",
            opacity: 0.06,
          }}
        />
      </div>

      <h4
        className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
        style={{ fontWeight: 700, fontSize: "2.2rem" }}
      >
        Our Products
      </h4>

      <div className="relative w-full overflow-hidden mb-8">
        <div
          ref={carouselRef}
          className="flex w-full"
          style={{ transform: "translateX(-100%)" }}
        >
          {displayProducts.map((product, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full flex flex-col md:flex-row items-center gap-8 px-4 md:px-8 lg:px-16 py-8 cursor-pointer"
              role="link"
              tabIndex={0}
              onClick={() => navigateTo(product.link)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigateTo(product.link);
                }
              }}
              aria-label={`Open ${product.name}`}
            >
              <div className="w-full max-w-[320px] md:max-w-[45%] h-[180px] md:h-[300px] rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center w-full md:w-[55%] p-2 md:p-4">
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
                  {product.name}
                </h4>
                <p className="text-base md:text-lg text-gray-600 mb-4">
                  {product.description}
                </p>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateTo(product.link);
                    }}
                    className="cursor-pointer bg-gradient-to-r from-[#ffd767] to-[#ffbe00] text-black font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transform transition duration-200 ease-out inline-flex items-center"
                    aria-label={`See ${product.name}`}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="select-none">See Product</span>
                    <span
                      aria-hidden="true"
                      className="ml-2 text-lg leading-none"
                    >
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 z-20">
          <button
            onClick={() => slide(-1)}
            className="p-2 bg-white bg-opacity-80 h-9 w-9 rounded-full hover:bg-opacity-100 focus:outline-none flex items-center justify-center shadow"
            aria-label="Previous product"
          >
            <span className="text-2xl text-gray-700 leading-none">←</span>
          </button>
        </div>

        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 z-20">
          <button
            onClick={() => slide(1)}
            className="p-2 bg-white bg-opacity-80 h-9 w-9 rounded-full hover:bg-opacity-100 focus:outline-none flex items-center justify-center shadow"
            aria-label="Next product"
          >
            <span className="text-2xl text-gray-700 leading-none">→</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-2 mb-6">
        {products.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex + 1)}
            className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
              indexRef.current === dotIndex + 1 ? "bg-[#ffbe00]" : "bg-gray-300"
            }`}
            aria-label={`Go to product ${dotIndex + 1}`}
            title={products[dotIndex].name}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
