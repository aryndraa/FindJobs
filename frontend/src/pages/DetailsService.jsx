import React from "react";
import HeroDetailsService from "../components/molecules/Detail Service/Hero/HeroDetailsService";
import SectionAboutService from "../components/organisms/SectionAboutService";
import CardAboutService from "../components/molecules/Detail Service/Card/CardAboutService";
import BreadCrumbs from "../components/molecules/BreadCrumbs";

const DetailsService = () => {
  const breadLink = [
    {
      url: "/",
      name: "home",
    },
    {
      url: "/service",
      name: "service",
    },
    {
      url: "/service/details-service",
      name: "service details",
    }
  ]
  return (
    <div className="mx-7 lg:mx-16 py-24">
      <BreadCrumbs breadLink={breadLink} />
      <HeroDetailsService />
      <SectionAboutService />
      <div className="mt-6">
        <h1 className="text-2xl font-semibold">You May Also Like</h1>
        <p className="text-secondary text-[15px] mt-1">
          Let's find out more project!
        </p>
        <div className="mt-4">
          <CardAboutService />
        </div>
      </div>
    </div>
  );
};

export default DetailsService;
