import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-white   border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-900">
                Communify
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/home" className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                Home
              </Link>
              <Link to="/bussines" className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                Bussines
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex  items-center">
            <form className="relative hidden md:block lg:block">
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              />
            </form>
            <div className="ml-4 flex items-center">
              <Link href="/login" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link href="/register" className="ml-4 text-white bg-teal-500 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
