import { useState, useEffect } from "react";
import logo from '../assets/Final_Logo_White.png';
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
    <nav className="bg-[#051224] border-gray-200  sm:w-full">
      <div className=" flex flex-wrap items-center justify-between px-16 py-4">
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src={
              // "https://github.com/ut-zager/zager-website-official/blob/Vinay/Frontend/src/assets/Final_Logo_White.png?raw=true"
              logo
            }
            className="h-8"
            alt="Flowbite Logo"
          />
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto ` }
        >
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#051224] md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <NavLink
                to="/"
                className="block text-lg py-2 px-3 !text-white md:text-blue-500 hover:opacity-70 hover:scale-105 transform transition-all duration-200 ease-in-out "
              >
                Home
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="relative dropdown-container text-lg ">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="flex items-center py-2 px-3 text-white hover:opacity-70 hover:scale-105 transform transition-all duration-200 ease-in-out cursor-pointer "
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

              {/* {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-white rounded-lg shadow-md z-1000">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</NavLink></li>
                    <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-100">Settings</NavLink></li>
                    <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</NavLink></li>
                  </ul>
                  <div className="py-1">
                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</NavLink>
                  </div>
                </div>
              )} */}

              <div
                className={`
          absolute left-0 mt-2 w-44 bg-white rounded-lg shadow-md z-50
          transform transition-all duration-200 ease-in-out 
          ${
            isDropdownOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
              >
                <ul className="py-2 text-sm text-gray-700">
                <li>
                    <NavLink
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Our Platforms
                    </NavLink>
                  </li>
                  <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  >
                    <NavLink
                      to="/ourplatforms/gyaanadari"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Gyaanadari
                    </NavLink>
                  </li>
                  <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  >
                    <NavLink
                      to="/ourplatforms/jkworks"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      JK Works
                    </NavLink>
                  </li>
                  <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  >
                    <NavLink
                      to="/ourplatforms/ira-media-and-productions"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Ira Media & Productions
                    </NavLink>
                  </li>
                  <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  >
                    <NavLink
                      to="/"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      ZMS
                    </NavLink>
                  </li>
                </ul>
                {/* <div className="py-1">
                  <NavLink
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    ZMS
                  </NavLink>
                </div> */}
              </div>
            </li>

            <li>
              <NavLink
                to="/services"
                className="block py-2 px-3 !text-white hover:text-blue-500 text-lg hover:opacity-70 hover:scale-105 transform transition-all duration-200 ease-in-out"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className="block py-2 px-3 !text-white hover:text-blue-500 text-lg hover:opacity-70 hover:scale-105 transform transition-all duration-200 ease-in-out"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className="block py-2 px-3 !text-white hover:text-blue-500 text-lg hover:opacity-70 hover:scale-105 transform transition-all duration-200 ease-in-out"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/carrer"
                className="block py-2 px-3 !text-white hover:text-blue-500 text-lg hover:opacity-70 hover:scale-105 transform transition-all duration-200 ease-in-out"
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="block py-2 px-3 !text-white hover:text-blue-500 text-lg hover:opacity-70 hover:scale-105 transform transition-all duration-200 ease-in-out"
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
