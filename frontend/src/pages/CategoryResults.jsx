import React from "react";
import { useLocation } from "react-router-dom";
import ServiceCard from "../components/molecules/Service/Card/ServiceCard";
import ProjectCardList from "../components/molecules/Project/Card/ProjectCardList";

const CategoryResults = () => {
  const location = useLocation();
  const { pathname } = location;
  const { selectedCategories } = location.state || { selectedCategories: [] };

  return (
    <div className="py-20 mx-16">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Selected Categories:</h2>
        <div className="flex flex-wrap gap-3">
          {selectedCategories.map((category, index) => (
            <span
              key={index}
              className="px-4 py-2 border rounded-md text-green-600 border-green-500"
            >
              {category}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-medium mt-6 mb-4">12,000 Results</h3>

        {/* Conditional Rendering Based on URL Path */}
        {pathname === "/service/service-category" ? (
          <ServiceCard />
        ) : pathname === "project/project-category" ? (
          <ProjectCardList />
        ) : null}
      </div>
    </div>
  );
};

export default CategoryResults;
