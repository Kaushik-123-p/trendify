import React from "react";

import InfoSection from "../../components/sections/InfoSection";
import CategorySection from "../../components/sections/CategorySection";
import HeroSection from "../../components/sections/HeroSection";

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 ">
      <HeroSection />
      <InfoSection />
      <CategorySection />
    </div>
  );
};

export default Home;
