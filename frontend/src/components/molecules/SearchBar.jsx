  // SearchBar.js
import React from "react";
import { IoSearch } from "react-icons/io5";
const SearchBar = ({onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-3 items-stretch">
        <input
          type="text"
          placeholder="Search Service"
          className=" rounded px-4 w-72 py-3 bg-[#F7F7F7] outline-none"
          onChange={onChange}
        />
        <div>
          <button
            type="submit"
            className="bg-primary text-white h-full px-3 rounded"
          >
            <IoSearch className="text-2xl" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
