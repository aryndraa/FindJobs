import React from 'react';
import { AiFillHeart, AiOutlineTeam } from 'react-icons/ai';

const serviceData = [
  {
    image: 'https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?t=st=1730483883~exp=1730487483~hmac=d54d5df263f8d9f67e81d267ad00c529a82401f6cec4614279a2a186e17d5061&w=740',
    title: 'Learning Data Analyst in Python',
    likes: 1903,
    visitors: '20+ Visitors',
    price: 'Rp. 120.000',
  },
  // Add more service objects as needed
];

const CardAboutService = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {serviceData.map((service, index) => (
        <div key={index} className="border rounded-lg p-4 transition">
          <img
            src={service.image}
            alt="Service"
            className="rounded-lg w-full h-40 object-cover"
          />
          <div className="mt-3">
            <h3 className="text-lg lg:text-xl font-bold">{service.title}</h3>
            <div className="flex items-center gap-5 mt-3 mb-3 font-poppins">
              <div className="flex gap-2 items-center">
                <AiFillHeart className="text-primary text-[15px]" />
                <p className="text-[13px] font-medium">{service.likes}</p>
              </div>
              <div className="flex gap-2 items-center">
                <AiOutlineTeam className="text-primary text-lg" />
                <p className="text-xs lg:text-[13px] font-medium">
                  {service.visitors}
                </p>
              </div>
            </div>
            <div className="border-b border-[#e8e8e8]"></div>
            <div className="mt-4">
              <h1 className="text-xs lg:text-sm font-medium font-poppins">Start From</h1>
              <h1 className="text-lg lg:text-xl font-semibold text-primary font-poppins">
                {service.price}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardAboutService;
