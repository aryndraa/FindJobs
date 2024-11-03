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

const CategoryDropdown = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setShowAlert(true); // Tampilkan alert jika melebihi batas 3
    }
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Button dengan Transisi Ikon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 border border-select-secondary text-black rounded"
      >
        <span>Select Categories</span>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </button>

      {/* Dropdown Menu dengan Scroll dan Transisi */}
      <div
        className={`relative mt-2 w-full bg-white border rounded shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="p-2 overflow-y-auto max-h-48">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer p-2 text-gray-700 ${
                selectedCategories.includes(category)
                  ? "bg-hijaumuda font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Tampilan Kategori Terpilih */}
      <div className="mt-4 flex flex-wrap gap-2">
        {selectedCategories.map((category) => (
          <div
            key={category}
            className="px-4 py-2 border border-green-500 text-green-500 rounded-md flex items-center justify-center"
          >
            {category}
          </div>
        ))}
      </div>

      {/* Alert Pop-Up */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full text-center">
            <p className="text-red-500 font-semibold mb-4">You can only select up to 3 categories!</p>
            <button
              onClick={() => setShowAlert(false)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
