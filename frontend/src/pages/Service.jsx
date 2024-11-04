// Service.js
import React from "react";
import HeroSection from "../components/molecules/Service/Hero/HeroService";
import CategoryFilter from "../components/molecules/filter/CategoryFilter";
import SearchBar from "../components/molecules/SearchBar";
import SortingOptions from "../components/molecules/filter/SortingOptions";
import ServiceCard from "../components/molecules/Service/Card/ServiceCard";
import BreadCrumbs from "../components/molecules/BreadCrumbs";

const Service = () => {
  const breadLink = [
    {
      url: "/",
      name: "home",
    },
    {
      url: "/service",
      name: "service",
    },
  ];

  return (
    <div className="mx-7 lg:mx-16 py-24">
      <BreadCrumbs breadLink={breadLink} />
      <HeroSection />
      <CategoryFilter />
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <SearchBar />
        <SortingOptions />
      </div>
      <h2 className="text-xl font-bold mt-6">12,000 Results</h2>
      <div className=" gap-4 mt-4">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;
