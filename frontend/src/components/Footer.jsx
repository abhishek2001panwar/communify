import React from "react";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
// import CommunifyLogo from "./CommunifyLogo"; // Replace this with your Communify logo SVG
import logo from '../assets/communify.png'; // Import the logo image

const Footer = () => {
  return (
    <footer className=" text-black py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-4">
          <div className="h-8 w-auto" >
          <img className="h-10 w-10" src={logo} alt="" />

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
