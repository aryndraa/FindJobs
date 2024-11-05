import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CategoryFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const categories = [
    "Software Developer",
    "Design Graphic",
    "UI/UX Designer",
    "Copy Writer",
    "Logo Branding",
    "Video Editor",
    "Photo Editor",
    "Architecture",
    "Photografer",
    "Videografer",
    "More",
  ];

  const handleCategoryClick = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    }
  };

  const handleSearch = () => {
    if (location.pathname === "/service") {
      navigate("/service/service-category", { state: { selectedCategories } });
    } else if (location.pathname === "/project") {
      navigate("/project/project-category", { state: { selectedCategories } });
    } else if (location.pathname === "/list-freelancer"){
      navigate("/list-freelancer/freelancer-category", { state: { selectedCategories } });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Find By Category</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 border rounded-md ${
              selectedCategories.includes(category)
                ? "text-green-600 border-green-500"
                : "border-gray-300"
            } hover:bg-gray-100`}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        onClick={handleSearch}
        className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-green-800"
      >
        Search
      </button>
    </div>
  );
};

export default CategoryFilter;
