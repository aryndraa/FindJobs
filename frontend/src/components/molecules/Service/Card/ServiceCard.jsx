// ServiceCard.js
import React from "react";
import { AiFillHeart, AiOutlineTeam } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data && data.length > 0 ? (
        data.map((service) => (
          <div key={service.id} className="border rounded-lg p-4 transition">
            <div className="flex justify-between items-center gap-3 mb-4">
              <div className="bg-cover h-10 w-10">
                <img
                  src={service.freelancer.avatar.file_path}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h1 className="text-sm mr-auto font-semibold font-poppins">
                {service.freelancer.name}
              </h1>
              <div className="border border-primary rounded-full p-2 hover:bg-primary transition-all ease-in duration-200 cursor-pointer">
                <MdOutlineFavoriteBorder className="text-primary text-base hover:text-white" />
              </div>
            </div>
            <img
              src={service.image.file_path}
              alt="Service"
              className="rounded-lg w-full h-40 object-cover"
            />
            <div className="mt-3">
              <Link to="/details-service">
                <h3 className="text-xl font-bold">{service.name}</h3>
              </Link>
              <div className="flex items-center gap-5 mt-3 mb-3 font-poppins">
                <div className="flex gap-2 items-center">
                  <AiFillHeart className="text-primary text-[15px]" />
                  <p className="text-[13px] font-medium">{service.like}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <AiOutlineTeam className="text-primary text-base" />
                  <p className="text-[13px] font-medium">{service.visitor} Visitors</p>
                </div>
              </div>
              <div className="border-b border-[#e8e8e8]"></div>
              <div className="mt-4">
                <h1 className="text-sm font-medium font-poppins">Start From</h1>
                <h1 className="text-xl font-semibold text-primary font-poppins">
                  Rp. {service.price}
                </h1>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading services...</p> // Pesan loading saat data belum ada
      )}
    </div>
  );
};

export default ServiceCard;
