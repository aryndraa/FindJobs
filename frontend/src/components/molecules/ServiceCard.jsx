// ServiceCard.js
import React from "react";
import { AiFillHeart, AiOutlineTeam } from "react-icons/ai";
import { FaEye } from "react-icons/fa"; // Import eye icon
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";
const ServiceCard = () => {
  return (
    <div className="border rounded-lg p-4 transition">
      <Link to="/details-service">
      <div className="flex justify-between items-center gap-3 mb-4">
        <div className="bg-cover h-10 w-10">
          <img
            src="https://img.freepik.com/free-photo/portrait-happy-young-male-student-with-glasses-casual-outfit-posing-park_1153-6309.jpg?t=st=1730487270~exp=1730490870~hmac=a993a4554e3a0b6c7c756261113f2a0adb458fa24c2f184daa49dd47f2f93be8&w=360"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-sm mr-auto font-semibold font-poppins">
          Xavier Dreams
        </h1>
        <div className="border border-primary rounded-full p-2 hover:bg-primary  transition-all ease-in duration-200 cursor-pointer">
          <MdOutlineFavoriteBorder className="text-primary text-base hover:text-white" />
        </div>
      </div>
      </Link>
      <img
        src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?t=st=1730483883~exp=1730487483~hmac=d54d5df263f8d9f67e81d267ad00c529a82401f6cec4614279a2a186e17d5061&w=740" // Replace with your image path
        alt="Service"
        className="rounded-lg w-full h-40 object-cover"
      />
      <div className="mt-3">
        <h3 className="text-xl font-bold">Learning Data Analyst in Python</h3>
        <div className="flex items-center gap-5 mt-3 mb-3 font-poppins">
          <div className="flex  gap-2 items-center ">
            <AiFillHeart className="text-primary text-[15px]" />
            <p className="text-[13px] font-medium">1.903</p>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineTeam className="text-primary text-base" />
            <p className="text-[13px] font-medium">20+ Visitors</p>
          </div>
        </div>
        <div className="border-b border-[#e8e8e8]"></div>
        <div className="mt-4">
          <h1 className="text-sm font-medium font-poppins">Start From</h1>
          <h1 className="text-xl font-semibold text-primary font-poppins">
            Rp. 120.000
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
