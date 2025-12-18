import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartItem = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
  };
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white p-4 sm:p-5 shadow-xl shadow-violet-300 rounded relative border-0 transform transition-transform duration-300 md:hover:scale-105 flex flex-col h-full">
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-contain mb-4"
          />
        </div>
        <h3 className="text-lg font-semibold mb-1 truncate">{product.name}</h3>
        <div className="text-gray-500">${product.price}</div>
        <div className="flex items-center mt-2 space-x-1 text-sm md:text-base">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar />
        </div>
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full sm:group-hover:w-32 sm:group-hover:bg-red-700 transition-all overflow-hidden focus:outline-none"
          onClick={(e) => addToCartItem(e, product)}
        >
          <span className="sm:group-hover:hidden">+</span>
          <span className="hidden sm:group-hover:block px-3">Add To Cart</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
