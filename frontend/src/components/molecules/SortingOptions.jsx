// SortingOptions.js
import React from 'react';

const SortingOptions = () => {
  return (
    <div className="flex justify-end mt-4">
      <form action="">
      <select className="border rounded-lg px-4 py-2 bg-white">
        <option>Default Sorting</option>
        <option>Most Popular</option>
        <option>Highest Rating</option>
        <option>Low Price</option>
      </select>
      </form>
    </div>
  );
};

export default SortingOptions;
