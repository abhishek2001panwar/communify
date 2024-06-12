import React from "react";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
// import CommunifyLogo from "./CommunifyLogo"; // Replace this with your Communify logo SVG

const Footer = () => {
  return (
    <footer className=" text-black py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-4">
          <div className="h-8 w-auto" >
          <svg
            className="w-8 h-8 text-indigo-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11.414V14a1 1 0 11-2 0v-1.414l-2.293-2.293a1 1 0 111.414-1.414L10 11.586l2.293-2.293a1 1 0 111.414 1.414L11 13.414z"
              clipRule="evenodd"
            />
          </svg>

          </div>
        </div>
        <p className="text-center text-sm mb-4">
          © {new Date().getFullYear()} Communify. All rights reserved.
        </p>
        <div className="flex items-center justify-center mb-4 space-x-4">
          <a href="#" className="text-black hover:text-gray-400">
            <FiTwitter />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FiFacebook />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FiInstagram />
          </a>
        </div>
        <nav className="text-sm">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li>
              <a href="#" className="text-black hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
