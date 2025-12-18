import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8  mt-20 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start">
        <div>
          <h3 className="text-xl font-semibold">trendify</h3>
          <p className="pt-4">
            Discover the joy of online shopping with quality products, great
            offers, and smooth delivery.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-center">
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
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-xl hover:text-gray-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-xl hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-xl hover:text-gray-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-xl hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
          </div>
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 sm:mt-8 w-full max-w-sm sm:max-w-md mx-auto sm:mx-0 flex flex-col sm:flex-row items-center sm:items-stretch gap-2"
          >
            <label htmlFor="subscribe" className="sr-only">
              Email
            </label>
            <input
              id="subscribe"
              type="email"
              aria-label="Email for newsletter"
              placeholder="Enter Email"
              className="flex-1 p-2 rounded-md sm:rounded-l-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-sm"
            />
            <button
              aria-label="Subscribe"
              className="bg-red-600 text-white px-4 py-2 rounded-md sm:rounded-r-lg border border-gray-600 hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-0 gap-y-4 text-center md:text-left">
          <div>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} trendify. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8 mt-4 md:mt-0 text-sm items-center">
            <a href="" aria-label="Privacy Policy" className="hover:underline">
              Privacy Policy
            </a>
            <a
              href=""
              aria-label="Terms and Conditions"
              className="hover:underline mt-2 sm:mt-0"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
