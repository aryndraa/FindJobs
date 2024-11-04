import React from "react";
import service from "../../../../assets/home/Card Popular/editor.gif";
import analyst from "../../../../assets/home/Card Popular/analyst.gif";
import webdev from "../../../../assets/home/Card Popular/webdev.gif";
import ai from "../../../../assets/home/Card Popular/machine-learning.gif";
import { GoProject } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";

const CardPopularService = () => {
  const cardData = [
    {
      id: 1,
      image: service,
      title: "Video Editor",
      project: "Project 20+",
      service: "Service 10+",
    },
    {
      id: 2,
      image: analyst,
      title: "Data Scientist",
      project: "Project 20+",
      service: "Service 30+",
    },
    {
      id: 3,
      image: webdev,
      title: "Web Developer",
      project: "Project 29+",
      service: "Service 18+",
    },
    {
      id: 4,
      image: ai,
      title: "Machine Learning",
      project: "Project 27+",
      service: "Service 30+",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 place-items-center gap-5 mt-8">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="border border-[#e8e8e8] rounded w-[21rem] p-3 lg:w-[17rem] lg:p-4"
        >
          <div className="flex items-center justify-end">
            <div className="bg-[#f5f5f5] rounded-full p-3 hover:bg-primary  transition-all ease-in duration-200 cursor-pointer">
              <MdOutlineFavoriteBorder className="text-black text-lg hover:text-white" />
            </div>
          </div>
          <div className="flex justify-center">
            <img src={card.image} alt={card.title} className="w-52 lg:w-44" />
          </div>
          <h1 className="text-2xl lg:text-[22px] font-bold mt-4">{card.title}</h1>
          <div className="flex items-center text-gray-500 gap-2 mt-2">
            <GoProject className="text-primary text-xl " />
            <p className="lg:text-sm">{card.project}</p>
            <span><MdOutlineFavoriteBorder className="text-primary text-xl -mr-1"/></span>
            <p className="lg:text-sm">{card.service}</p>
          </div>
          <div className="flex justify-end mt-5 mb-3 lg:mb-0 lg:mt-6">
            <button className="text-[15px] border border-secondary px-7 py-2 lg:px-4 lg:text-[13px] font-medium rounded-full hover:bg-primary  transition-all ease-in duration-200 hover:text-white">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPopularService;
