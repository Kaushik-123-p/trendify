import React, { useEffect } from "react";

import InfoSection from "../../components/sections/InfoSection";
import CategorySection from "../../components/sections/CategorySection";
import HeroSection from "../../components/sections/HeroSection";
import { setProducts } from "../../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../../assets/data/mockData";
import ProductCard from "../../components/card/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(productsData));
  });
  return (
    <div>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 ">
        <HeroSection />
        <InfoSection />
        <CategorySection />

        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {products.products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
