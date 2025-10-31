import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">trendify</h3>
          <p className="pt-4">
            Discover the joy of online shopping with quality products, great
            offers, and smooth delivery.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
          <form action="" className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg boder border-gray-600 hover:bg-red-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-0">
          <div className="w-full md:w-auto">
            <p className="text-center text-gray-400">
              &copy; {new Date().getFullYear()} trendify. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="" className="hover:underline">
              Privacy Policy
            </a>
            <a href="" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
