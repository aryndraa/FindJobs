import React, { useState } from "react";
import { FaImage } from "react-icons/fa";

const SelectImage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile ? selectedFile.name : null);
  };

  return (
    <div className="mt-10">
      <h1 className="text-lg font-semibold">Image</h1>
      <div className="border border-gray-300 w-full h-40 rounded-md mt-2 flex items-center justify-center bg-gray-100 cursor-pointer">
        <label className="flex flex-col items-center">
          <FaImage className="text-gray-400 text-4xl mb-2" />
          <span className="text-gray-400">
            {file ? file : "Choose an image"}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default SelectImage;
