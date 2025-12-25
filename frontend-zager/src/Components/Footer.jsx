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
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-300">
            We build scalable digital products and intelligent technology solutions using modern technologies and AI-enabled automation to help businesses grow efficiently.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/About"
                  className="quick-link !text-gray-300 hover:text-white transition-colors hover:opacity-80"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
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
              <li>
                {" "}
                <Link
                  to="/admin/admin-login"
                  className="bg-[#051224] text-[#fcfcfc] font-semibold py-1 px- rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Admin
                </Link>
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
                  className="!text-gray-300 hover:text-white transition-colors"
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

        {/* Social Links, Admin Button & Copyright */}
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
            <div className="hidden md:inline-block  md:flex-row items-center space-x-4">
              <p className="text-gray-300 text-sm whitespace-pre-line">
                © 2025 Zager Digital Services Pvt. Ltd. All rights reserved.
              </p>
            </div>
            <div className=" md:hidden  flex flex-col md:flex-row items-center space-x-4">
              <p className="text-gray-300 text-sm whitespace-pre-line">
                © 2025 Zager Digital Services Pvt.Ltd. 
              </p>
              <p className="text-gray-300 text-sm whitespace-pre-line">
                All rights reserved. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
