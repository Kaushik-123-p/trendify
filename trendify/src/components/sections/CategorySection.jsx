import React from "react";
import MenCategory from "../../assets/images/MenCategory.png";
import WomenCategory from "../../assets/images/WomenCategory.png";
import KidCategory from "../../assets/images/KidCategory.png";

const CategorySection = () => {
  const categories = [
    {
      title: "Men",
      imageurl: MenCategory,
    },
    {
      title: "Women",
      imageurl: WomenCategory,
    },
    {
      title: "Kids",
      imageurl: KidCategory,
    },
  ];
  return (
    <div className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-44 sm:h-56 md:h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer rounded-lg overflow-hidden"
        >
          <img
            src={category.imageurl}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-lg sm:text-xl font-bold">{category.title}</p>
            <p className="text-sm opacity-90">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
