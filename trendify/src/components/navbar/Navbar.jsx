import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24  py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">trendify</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form action="">
            <input
              className="w-full border px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              placeholder="Search"
            />
            <FaSearch className="absolute  top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <FaShoppingCart size={20} />
          </Link>
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-16 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/" className="hover:underline">
          Shop
        </Link>
        <Link to="/" className="hover:underline">
          Cntact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
