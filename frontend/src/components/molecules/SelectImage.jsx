import React, { useState } from "react";
import { LuImagePlus } from "react-icons/lu";

const SelectImage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile ? selectedFile.name : null);
  };

  return (
    <div>
      <div className="border border-gray-300 w-full h-40 rounded-md mt-2 flex items-center justify-center bg-gray-100 cursor-pointer">
        <label className="flex flex-col items-center cursor-pointer">
          <LuImagePlus className="text-gray-400 text-5xl mb-2" />
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
