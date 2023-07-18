/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaRegCircle, FaRegTimesCircle } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const toggleProductDropdown = () => {
        setProductDropdownOpen(!isProductDropdownOpen);
      };

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="ml-2 text-primary font-semibold text-2xl md:text-3xl lg:text-5xl">
                Job Hunter
              </span>
            </div>
          </div>
          <div className="-mr-2 flex items-center">
            <div className="hidden md:block">
              <div className="ml-4 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/news"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  Latest News
                </Link>
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  Team
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                >
                  Blog
                </Link>
                <div className="relative inline-block">
                  <button
                    onClick={toggleProductDropdown}
                    className="text-gray-300 focus:outline-none"
                  >
                    Product
                  </button>
                  {isProductDropdownOpen && (
                    <ul className="p-4 absolute right-0 mt-2 bg-white border rounded shadow">
                      <li>
                        <Link
                          className="block px-2 hover:bg-gray-200"
                        >
                          Product 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block px-2 hover:bg-gray-200"
                        >
                          Product 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block px-2 hover:bg-gray-200"
                        >
                          Product 3
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FaRegTimesCircle className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              to="/news"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Latest News
            </Link>
            <Link
              to="/team"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            <div className="relative inline-block">
              <button
                onClick={toggleProductDropdown}
                className="text-gray-300 focus:outline-none ml-3"
              >
                Product
              </button>
              {isProductDropdownOpen && (
                <ul className="pl-2 absolute right-0 mt-2 bg-white border rounded shadow">
                  <li className="inline-block">
                    <Link
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Product 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Product 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Product 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
