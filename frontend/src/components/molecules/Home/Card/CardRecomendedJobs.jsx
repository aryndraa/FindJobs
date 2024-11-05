import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const jobCards = [
  {
    id: 1,
    borderColor: "border-l-primary",
    bgColor: "bg-hijaumuda",
    textColor: "text-primary",
    jobTitle: "Developer Apps",
    position: "Project Manager",
    salary: "Start from : Rp. 1.700.000 - 10.0000",
    location: "Jakarta, Indonesia",
  },
  {
    id: 2,
    borderColor: "border-l-kuning",
    bgColor: "bg-kuningmuda",
    textColor: "text-kuning",
    jobTitle: "Developer Apps",
    position: "Project Manager",
    salary: "Start from : Rp. 1.700.000 - 10.0000",
    location: "Jakarta, Indonesia",
  },
  {
    id: 3,
    borderColor: "border-l-ungu",
    bgColor: "bg-ungumuda",
    textColor: "text-ungu",
    jobTitle: "Developer Apps",
    position: "Project Manager",
    salary: "Start from : Rp. 1.700.000 - 10.0000",
    location: "Jakarta, Indonesia",
  },
  {
    id: 4,
    borderColor: "border-l-biru",
    bgColor: "bg-birumuda",
    textColor: "text-biru",
    jobTitle: "Developer Apps",
    position: "Project Manager",
    salary: "Start from : Rp. 1.700.000 - 10.0000",
    location: "Jakarta, Indonesia",
  },
];

const CardRecomendedJobs = () => {
  return (
    <div className="flex-grow-[2]">
      {jobCards.map((job) => (
        <div
          key={job.id}
          className={`mt-9 min-w-full p-4 rounded ${
            job.borderColor === "border-l-primary"
              ? "border-l-8 border-l-primary"
              : job.borderColor === "border-l-kuning"
              ? "border-l-8 border-l-kuning"
              : job.borderColor === "border-l-ungu"
              ? "border-l-8 border-l-ungu"
              : "border-l-8 border-l-biru"
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`px-3 py-1 rounded ${job.bgColor}`}>
                <p className={`text-lg ${job.textColor} font-semibold`}>#</p>
              </div>
              <h1 className="text-sm md:text-[15px] lg:text-base font-semibold">
                {job.jobTitle}
              </h1>
            </div>
            <div className={`p-2 rounded-full ${job.bgColor}`}>
              <MdOutlineFavoriteBorder className={job.textColor} />
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-[22px] md:text-2xl font-semibold">
              {job.position}
            </h1>
            <p className="text-xs md:text-[13px] text-secondary mt-2">
              {job.salary}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 font-poppins">
            <div className="flex items-center">
              <IoLocationOutline className={`${job.textColor} text-lg`} />
              <div className="ml-2 text-sm text-gray-500">{job.location}</div>
            </div>
            <button className="px-4 py-1 md:px-6 md:py-2 text-[13px] border rounded border-secondary hover:bg-hitam transition-all duration-200 ease-in hover:text-white">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRecomendedJobs;
