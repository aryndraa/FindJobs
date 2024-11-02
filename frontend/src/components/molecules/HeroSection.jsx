// HeroSection.js
import React from 'react';
import bg from "../../assets/service/hero.svg"
const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#D0F9D0] to-[#a1f896] w-full rounded-lg flex items-center flex-col lg:flex-row">
        <img
        src={bg} // Replace with your image path
        alt="Hero"
        className="w-48 lg:w-80 "
      />
      <div className="ml-6">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Start Your Journey, with Our best Service!
        </h1>
        <p className="text-black mt-2 text-justify text-sm max-w-[21rem] lg:max-w-[45rem]">
        Discover a wide range of professional services offered by talented freelancers. From design to development, our experts are here to bring your ideas to life with quality and efficiency. Start exploring today and find the perfect match for your next project!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
