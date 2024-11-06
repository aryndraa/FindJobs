// SortingOptions.js
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const categories = [
  { label: "Default Sorting", value: "id" },
  { label: "Most Viewed", value: "visitor_desc" },
  { label: "High Rating", value: "like_desc" },
  { label: "High Price", value: "price_desc" },
  { label: "Low Price", value: "price_asc" },
];

const SortingOptions = ({ onSortChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.label);
    onSortChange(category.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-6 py-2 bg-white text-black border border-secondary rounded"
      >
        <span>{selectedCategory || "Sort By"}</span>
        <div
          className={`transform transition-transform ml-2 text-secondary duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded-lg overflow-y-auto">
          <ul>
            {categories.map((category) => (
              <li
                key={category.value}
                onClick={() => handleCategoryChange(category)}
                className="cursor-pointer p-2 text-gray-700 hover:bg-gray-100 w-full text-[15px]"
              >
                {category.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortingOptions;
