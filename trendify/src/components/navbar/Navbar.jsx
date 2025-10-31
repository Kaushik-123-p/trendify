import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="bg-white shadow-md static top-0 left-0 w-full z-10">
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
          <Link to="/cart" className="relative">
            <FaShoppingCart size={20} />
            {products.length > 0 && (
              <span className="absolute -top-4 -right-5 text-xs w-3 h-3 p-2 left-1 bg-red-600 text-white rounded-full flex items-center justify-center ">
                {products.length}
              </span>
            )}
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
        <Link to="/shop" className="hover:underline">
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
