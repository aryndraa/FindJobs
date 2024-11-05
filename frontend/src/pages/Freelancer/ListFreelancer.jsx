import React from "react";
import HeroListFreelancer from "../components/molecules/List Freelancer/Hero/HeroListFreelancer";
import CategoryFilter from "../components/molecules/filter/CategoryFilter";
import SearchBar from "../components/molecules/SearchBar";
import SortingOptions from "../components/molecules/filter/SortingOptions";
import ProjectCard from "../components/molecules/Project/Card/ProjectCardList";
import CardListFreelancer from "../components/molecules/List Freelancer/Card/CardListFreelancer";
const ListFreelancer = () => {
  return (
    <div className="mx-7 lg:mx-16 py-24">
      <HeroListFreelancer />
      <CategoryFilter />
      <div className="flex items-start flex-col lg:flex-row justify-between gap-5">
        <SearchBar />
        <div className="mt-2 flex items-end">
          <SortingOptions />
        </div>
      </div>
      <h2 className="text-xl font-bold mt-6">12,000 Results</h2>
      <div className="mt-4">
      <CardListFreelancer />
      </div>
    </div>
  );
};

export default ListFreelancer;
