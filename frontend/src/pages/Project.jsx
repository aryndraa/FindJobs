import React from "react";
import HeroProject from "../components/molecules/Project/Hero/HeroProject";
import CategoryFilter from "../components/molecules/filter/CategoryFilter";
import SearchBar from "../components/molecules/SearchBar";
import SortingOptions from "../components/molecules/filter/SortingOptions";
import ProjectCard from "../components/molecules/Project/Card/ProjectCardList";
import BreadCrumbs from "../components/molecules/BreadCrumbs";

const Project = () => {
    const breadLink = [
      {
        url: "/",
        name: "home",
      },
      {
        url: "/project",
        name: "project",
      },
    ];
  return (
    <div className="mx-7 lg:mx-16 py-24">
      <BreadCrumbs breadLink={breadLink} />
      <HeroProject />
      <CategoryFilter />
      <div className="flex items-start flex-col lg:flex-row justify-between gap-5">
        <SearchBar />
        <div className="mt-2 flex items-end">
          <SortingOptions />
        </div>
      </div>
      <h2 className="text-xl font-bold mt-6">12,000 Results</h2>
      <ProjectCard />
    </div>
  );
};

export default Project;
