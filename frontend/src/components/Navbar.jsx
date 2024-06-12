import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { useAuth } from '../context/Authcontext';

function Navbar() {
  const { isLoggedIn, logout } = useAuth(); // Access logout function from authentication context

  const handleLogout = async () => {
    try {
      await logout(); // Call logout function
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle logout failure if needed
    }
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-52">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-900">
                Communify
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Your other navigation links */}
              <Link
                to="/"
                className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/bussines"
                className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                Bussines
              </Link>
              {/* <Link
                to="/addbussiness"
                className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                Add Bussines
              </Link> */}

           
              <Link
                to="/about"
                className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
            
          </div>
          <div className="flex  items-center">
            {/* Your search form */}
            <form className="relative hidden md:block lg:block">
              <input
                type="text"
                placeholder="Search..."
                className="block  w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              />
              </form>
            {isLoggedIn ? (
              <Button className="ml-2" onClick={handleLogout} size="sm" color="primary" variant="ghost">
                Logout
              </Button>
            ) : (
              <>
                <Link to="/login" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  <Button size="sm" color="primary" variant="ghost">
                    Login
                  </Button>
                </Link>
                <Link to="/register" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Button size="sm" color="primary" variant="ghost">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
