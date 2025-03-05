import { Link, NavLink } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedinIcon,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#051224] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-300">
              At Zager Digital Services, we believe that exceptional Digital
              Marketing and IT solutions stem from a core commitment to
              integrity, innovation, and excellence. Founded with the mission to
              empower businesses through cutting-edge technology and strategic
              marketing, we take pride in delivering tailored solutions that
              drive growth and success.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/about"
                  className="quick-link !text-gray-300 hover:text-white transition-colors hover:opacity-80"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="!text-gray-300 hover:text-white transition-colors hover:opacity-80"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy"
                  className="!text-gray-300 hover:text-white transition-colors hover:opacity-80"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms"
                  className="!text-gray-300 hover:text-white transition-colors hover:opacity-80"
                >
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Startup Enclave, CSIT Campus, Shivaji Nagar, Balod Road, Durg,
                  Chhattisgarh 491001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <Link
                  to="tel:+919407655717"
                  className="!text-gray-300 hover:text-white transition-colors "
                >
                  +91-9407655717
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <Link
                  to="mailto:contact@zager.in"
                  className="!text-gray-300 hover:text-white transition-colors"
                >
                  contact@zager.in
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link
                to="https://www.facebook.com/zagerdigitalservices"
                target="_blank"
                className="!text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                to="#"
                className="!text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.instagram.com/zagerdigitalservices/"
                target="_blank"
                className="!text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/zagerdigitalservices/posts/?feedView=all"
                target="_blank"
                className="!text-gray-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-gray-300 text-sm text-center md:text-right">
              © 2025 Zager Digital Services. All rights reserved.{" "}
              <span className=" text-sm text-center md:text-right">
                <NavLink to={"/admin/admin-login"} className={"!text-gray-200"}>
                  Admin
                </NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
