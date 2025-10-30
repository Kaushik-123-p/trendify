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
    <div className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-3  gap-6 ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageurl}
            alt=""
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-sm text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
