import React from "react";
import { AiFillHeart, AiOutlineTeam } from "react-icons/ai";
import { FaEye } from "react-icons/fa"; // Import eye icon
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";
const ServiceCard = () => {
  // Array of service card data
  const serviceData = [
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-happy-young-male-student-with-glasses-casual-outfit-posing-park_1153-6309.jpg",
      serviceImage: "https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg",
      title: "Learning Data Analyst in Python",
      author: "Xavier Dreams",
      likes: 1903,
      visitors: 20,
      price: "120.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-smiling-confident-businessman_53419-548.jpg",
      serviceImage: "https://img.freepik.com/free-photo/top-view-wooden-desk-digital-devices-with-office-supplies_23-2147760345.jpg",
      title: "Master Web Development",
      author: "Lucas Bright",
      likes: 2500,
      visitors: 35,
      price: "150.000",
    },
    {
      authorImage: "https://img.freepik.com/free-photo/portrait-smiling-confident-businessman_53419-548.jpg",
      serviceImage: "https://img.freepik.com/free-photo/top-view-wooden-desk-digital-devices-with-office-supplies_23-2147760345.jpg",
      title: "Master Web Development",
      author: "Lucas Bright",
      likes: 2500,
      visitors: 35,
      price: "150.000",
    },
    // Add more service objects as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceData.map((service, index) => (
        <div key={index} className="border rounded-lg p-4 transition">
          <div className="flex justify-between items-center gap-3 mb-4">
            <div className="bg-cover h-10 w-10">
              <img
                src={service.authorImage}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-sm mr-auto font-semibold font-poppins">
              {service.author}
            </h1>
            <div className="border border-primary rounded-full p-2 hover:bg-primary transition-all ease-in duration-200 cursor-pointer">
              <MdOutlineFavoriteBorder className="text-primary text-base hover:text-white" />
            </div>
          </div>
          <img
            src={service.serviceImage}
            alt="Service"
            className="rounded-lg w-full h-40 object-cover"
          />
          <div className="mt-3">
            <Link to="/details-service">
            <h3 className="text-xl font-bold">{service.title}</h3>
            </Link>
            <div className="flex items-center gap-5 mt-3 mb-3 font-poppins">
              <div className="flex gap-2 items-center">
                <AiFillHeart className="text-primary text-[15px]" />
                <p className="text-[13px] font-medium">{service.likes}</p>
              </div>
              <div className="flex gap-2 items-center">
                <AiOutlineTeam className="text-primary text-base" />
                <p className="text-[13px] font-medium">{service.visitors} Visitors</p>
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
      ))}
    </div>
  );
};

export default ServiceCard;
