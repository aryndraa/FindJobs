import React from "react";
import bg from "../../../../assets/list freelance/hero.svg";
const HeroListFreelancer = () => {
  return (
    <div>
      <div className="bg-kuning w-full rounded-lg flex p-4 lg:p-0 items-center justify-center flex-col lg:flex-row">
        <img
          src={bg}
          alt="Hero"
          className="w-[16rem] lg:w-64 xl:w-80"
        />
        <div className="ml-3 lg:ml-6">
          <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold">
          Launch Your Dream Career Today
          </h1>
          <p className="text-black mt-2 text-justify text-sm max-w-[21rem] lg:max-w-[45rem] xl:text-base xl:max-w-[54rem]">
          Take the first step towards your professional goals with confidence. Browse through countless opportunities across industries and connect with companies that value your unique skills and experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroListFreelancer;
