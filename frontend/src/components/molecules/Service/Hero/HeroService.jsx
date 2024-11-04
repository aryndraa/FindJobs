import React from 'react';
import bg from "../../../../assets/service/hero.svg"
const HeroService = () => {
  return (
    <div className="bg-gradient-to-r from-[#D0F9D0] to-[#a1f896] justify-center w-full p-4 lg:p-0 rounded-lg flex items-center flex-col lg:flex-row">
      <div>
        <img
        src={bg}
        alt="Hero"
        className="w-72 lg:w-80 "
      />
      </div>
      <div className="lg:ml-6 ml-3">
        <h1 className="text-2xl lg:text-5xl font-bold">
          Start Your Journey, with Our best Service!
        </h1>
        <p className="text-black mt-2 text-justify text-sm max-w-[20rem] lg:max-w-[45rem]">
        Discover a wide range of professional services offered by talented freelancers. From design to development, our experts are here to bring your ideas to life with quality and efficiency. Start exploring today and find the perfect match for your next project!
        </p>
      </div>
    </div>
  );
};

export default HeroService;
