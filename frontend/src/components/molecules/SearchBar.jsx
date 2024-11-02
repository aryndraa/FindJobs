// SearchBar.js
import React from 'react';
import { IoSearch } from "react-icons/io5";
const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 mt-4">
      <input
        type="text"
        placeholder="Search Service"
        className=" rounded px-8 py-2 bg-[#F7F7F7] outline-none"
      />
      <button className="bg-primary text-white px-3 py-2 rounded">
        <IoSearch className='text-2xl'/> {/* Using search icon */}
      </button>
    </div>
  );
};

export default SearchBar;
