import { useEffect, useState } from "react";
import logo from "../assets/Final_Logo_White.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Define the common nav links to be reused
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/homepage"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `block text-lg py-2 px-3 text-white hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out ${
              isActive ? "border-b-2 border-[#ffbe00]" : ""
            }`
          }
        >
          Home
        </NavLink>
      </li>
      {/*
  <li>
    <NavLink
      to="/HackathonRegister"
      onClick={() => setIsOpen(false)}
      className="block py-2 px-4 text-lg font-bold relative text-[#ffbe00] transition transform duration-300 ease-in-out 
           animate-pulse-glow hover:text-[#ff4400] hover:scale-110"
    >
      Hackathon
      <span className="absolute top-0 right-0 w-3 h-3 bg-[#ff4400] rounded-full animate-ping"></span>
    </NavLink>
  </li>
*/}
      <li>
        <NavLink
          to="/VTRegister"
          onClick={() => setIsOpen(false)}
          className="block py-2 px-4 text-lg font-bold relative text-[#ffbe00] transition transform duration-300 ease-in-out 
           animate-pulse-glow hover:text-[#ff4400] hover:scale-110"
        >
          VT Registration
          <span className="absolute top-0 right-0 w-3 h-3 bg-[#ff4400] rounded-full animate-ping"></span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/aboutus"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `block py-2 px-3 text-white hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out text-lg ${
              isActive ? "border-b-2 border-[#ffbe00]" : ""
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `block py-2 px-3 text-white hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out text-lg ${
              isActive ? "border-b-2 border-[#ffbe00]" : ""
            }`
          }
        >
          Services
        </NavLink>
      </li>
      {/* Dropdown for Platforms */}
      <li className="relative dropdown-container text-lg">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
          }}
          className="flex items-center py-2 px-3 text-white hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out cursor-pointer"
        >
          Platforms
          <svg
            className="w-3 h-3 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 10 6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 1l4 4 4-4"
            />
          </svg>
        </button>
        {/* <div
          className={`absolute left-0 mt-2 w-44 bg-white rounded-lg shadow-md z-50 transform transition-all duration-400 ease-in-out ${
            isDropdownOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        > */}
        <div
          className={`absolute left-0 mt-2 w-44 bg-white !rounded-lg shadow-md z-50 transform transition-all duration-400 ease-in-out  overflow-hidden hover:overflow-hidden${
            isDropdownOpen
              ? "opacity-100 translate-y-0 translate-x-0 scale-100 shadow-lg"
              : "opacity-0 -translate-y-30 -translate-x-8  scale-0 pointer-events-none"
          }`}
        >
          <ul className=" text-sm text-gray-700">
            <li>
              <NavLink
                to="/ourplatforms/gyaanadari"
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="block px-4 py-2 hover:bg-gray-100 shadow"
              >
                Gyaanadari
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourplatforms/zms"
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="block px-4 py-2 hover:bg-gray-100 shadow "
              >
                Zager Management System
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourplatforms/ira-media-and-productions"
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="block px-4 py-2 hover:bg-gray-100 shadow "
              >
                Ira Media & Productions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourplatforms/jkworks"
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="block px-4 py-2 hover:bg-gray-100 shadow "
              >
                JK Works
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <NavLink
          to="/contactus"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `block py-2 px-3 text-white hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out text-lg ${
              isActive ? "border-b-2 border-[#ffbe00]" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/carrer"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `block py-2 px-3 text-white hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out text-lg ${
              isActive ? "border-b-2 border-[#ffbe00]" : ""
            }`
          }
        >
          Careers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `block py-2 px-3 text-white hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out text-lg ${
              isActive ? "border-b-2 border-[#ffbe00]" : ""
            }`
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-[#051224] border-gray-200 w-full">
      <div className="flex items-center justify-between px-8 py-4">
        <NavLink to="/homepage" className="flex items-center space-x-3">
          <img src={logo} className="h-12" alt="Zager Logo" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex font-medium space-x-8">{navLinks}</ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Side Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          />
          {/* Side Drawer */}
          <div className="relative bg-[#051224] w-3/4 max-w-xs p-6 overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="mt-12 space-y-4">{navLinks}</ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
