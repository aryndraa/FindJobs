import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const categories = [
  "Software Developer",
  "Design Graphic",
  "UI/UX Designer",
  "Copy Writer",
  "Logo Branding",
  "Video Editor",
  "Photo Editor",
  "Architecture",
  "Photographer",
  "Videographer",
  "More",
];

const JobsCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-white text-black border border-secondary rounded"
      >
        <span>{selectedCategory || "Select Category"}</span>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </button>
      {isOpen && (
        <div className="relative mt-2 w-full bg-white border rounded shadow-lg max-h-48 overflow-y-auto">
          <ul className="p-2">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryChange(category)}
                className="cursor-pointer p-2 text-gray-700 hover:bg-gray-100"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobsCategory;
