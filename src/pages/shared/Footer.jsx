/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 lg:pl-10">
            <h3 className="text-lg font-semibold mb-2">Job Hunter</h3>
            <p className="text-gray-300">
              Find your dream job with Job Hunter. We connect job seekers with
              employers to help them achieve their career goals.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-300">
              Email: info@jobhunter.com
              <br />
              Phone: +880 1700000000
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link className="text-primary text-2xl">
                <FaFacebook></FaFacebook>
              </Link>
              <Link className="text-primary text-2xl">
                <FaInstagramSquare></FaInstagramSquare>
              </Link>
              <Link className="text-primary text-2xl">
                <FaLinkedin></FaLinkedin>
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <p className="text-center text-gray-300">
          &copy; {new Date().getFullYear()} Job Hunter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
