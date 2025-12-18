import React from "react";
import { Categories } from "../../assets/data/mockData";
import heroImage from "../../assets/images/heroImage.png";
const HeroSection = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col md:flex-row md:space-x-2 gap-y-6">
      <div className="w-full md:w-3/12">
        <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
          SHOP BY CATEGORIES
        </div>
        <ul className="space-y-4 bg-gray-100 p-3">
          {Categories.map((Category, index) => (
            <li key={index} className="flex items-center text-sm font-medium">
              <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
              {Category}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-9/12 mt-8 md:mt-0 h-56 sm:h-72 md:h-96 relative overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-6 left-4 md:top-16 md:left-8 md:bottom-auto max-w-xs md:max-w-md z-10 text-white">
          <p className="text-gray-100 mb-2 text-sm md:text-base">
            Kaushik | Trendify
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            WELCOME TO TRENDIFY
          </h2>
          <p className="text-lg md:text-xl mt-2 font-bold text-gray-100">
            MILLIONS+ PRODUCTS
          </p>
          <button className="bg-red-600 px-6 md:px-8 py-2 text-white mt-4 hover:bg-red-700 transform md:hover:scale-105 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
