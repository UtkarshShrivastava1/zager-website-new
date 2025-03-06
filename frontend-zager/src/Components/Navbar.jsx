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

  return (
    <nav className="bg-[#051224] border-gray-200 w-full">
      <div className="flex items-center justify-between px-8 py-4">
        <NavLink to="/homepage" className="flex items-center space-x-3">
          <img src={logo} className="h-12" alt="Zager Logo" />
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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

        {/* Navbar Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 border rounded-lg bg-[#051224] md:space-x-8 md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/homepage"
                className={({ isActive }) =>
                  `block text-lg py-2 px-3 text-white hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out ${
                    isActive ? "border-b-2 border-[#ffbe00]" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white hover:text-blue-500 text-lg hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out ${
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
                className={({ isActive }) =>
                  `block py-2 px-3 text-white hover:text-blue-500 text-lg hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out ${
                    isActive ? "border-b-2 border-[#ffbe00]" : ""
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            {/* Dropdown */}
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
              <div
                className={`absolute left-0 mt-2 w-44 bg-white rounded-lg shadow-md z-50 transform transition-all duration-200 ease-in-out ${
                  isDropdownOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <NavLink
                      to="/ourplatforms/gyaanadari"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Gyaanadari
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ourplatforms/zms"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Zager Management System
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ourplatforms/ira-media-and-productions"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Ira Media & Productions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ourplatforms/jkworks"
                      className="block px-4 py-2 hover:bg-gray-100"
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
                className={({ isActive }) =>
                  `block py-2 px-3 text-white hover:text-blue-500 text-lg hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out ${
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
                className={({ isActive }) =>
                  `block py-2 px-3 text-white hover:text-blue-500 text-lg hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out ${
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
                className={({ isActive }) =>
                  `block py-2 px-3 text-white hover:text-blue-500 text-lg hover:opacity-70 hover:scale-105 transition transform duration-200 ease-in-out ${
                    isActive ? "border-b-2 border-[#ffbe00]" : ""
                  }`
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
