import React from "react";
import HeroProject from "../components/molecules/Project/Hero/HeroProject";
import CategoryFilter from "../components/molecules/filter/CategoryFilter";
import SearchBar from "../components/molecules/SearchBar";
import SortingOptions from "../components/molecules/filter/SortingOptions";
import ProjectCard from "../components/molecules/Project/Card/ProjectCardList";
const FindFreelancer = () => {
  return (
    <div className="mx-7 lg:mx-16 py-24">
      <HeroProject />
      <CategoryFilter />
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <SearchBar />
        <SortingOptions />
      </div>
      <ProjectCard />
    </div>
  );
};

export default FindFreelancer;
