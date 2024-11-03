import React from "react";
import { GiAchievement } from "react-icons/gi";

const CardContactPerson = () => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md">
      <div className="p-5">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 rounded-full overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/portrait-happy-young-male-student-with-glasses-casual-outfit-posing-park_1153-6309.jpg"
              alt="Xavier Dreams"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Xavier Dreams</h1>
            <p className="text-gray-500 text-sm">example@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <GiAchievement className="text-lg text-primary" />
            <span>1+ Years</span>
          </div>
          <div className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
            Available
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4 text-justify">
          Menghadirkan pesan yang menarik dan desain yang memukau dalam setiap
          banner iklan adalah kunci untuk membangun branding dan meningkatkan
          konversi.
        </p>
        <button className="w-full bg-primary text-white py-2 rounded-md text-sm">
          Contact Freelance
        </button>
      </div>
    </div>
  );
};

export default CardContactPerson;
