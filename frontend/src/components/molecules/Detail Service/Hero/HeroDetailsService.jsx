import React from "react";
import { AiFillHeart, AiOutlineTeam } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const HeroDetailsService = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        {/* Left Section: Text and Icons */}
        <div>
          <h1 className="text-4xl font-bold">Landing Page Web Developer</h1>
          <div className="flex items-center mt-3 font-poppins">
            <h1 className="text-black font-semibold">
              Start From{" "}
              <span className="text-primary font-semibold text-base mr-4">
                Rp. 120.000
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex gap-2 items-center">
                <AiFillHeart className="text-primary text-[17px]" />
                <p className="text-base font-medium">1.903</p>
              </div>
              <div className="flex gap-2 items-center">
                <AiOutlineTeam className="text-primary text-base" />
                <p className="text-base font-medium">20+ Visitors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Heart Border Icon */}
        <div className="border border-primary rounded-full p-3 hover:text-white hover:bg-primary transition-all ease-in duration-200 cursor-pointer">
            <MdOutlineFavoriteBorder className="text-primary text-2xl hover:text-white" />
          </div>
      </div>

      {/* Image Section */}
      <div className="bg-cover w-full bg-center rounded-lg mt-3">
        <img
          src="https://www.wvi.org/sites/default/files/inline-images/W397-0189-006.jpeg"
          alt="Hero"
          className="w-full h-80 object-cover"
        />
      </div>
    </div>
  );
};

export default HeroDetailsService;
