import React from "react";
import HeroDetailsService from "../../components/molecules/Detail Service/Hero/HeroDetailsService";
import SectionAboutService from "../../components/organisms/SectionAboutService";
import CardAboutService from "../../components/molecules/Detail Service/Card/CardAboutService";

const DetailsService = () => {
  return (
    <div className="mx-7 lg:mx-16 py-24">
      <HeroDetailsService />
      <SectionAboutService />
      <div className="mt-6">
      <h1 className="text-2xl font-semibold">You May Also Like</h1>
              <p className="text-secondary text-[15px] mt-1">
Let's find out more project!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        <CardAboutService />
        <CardAboutService />
        <CardAboutService />
      </div>
      </div>
    </div>
  );
};

export default DetailsService;
