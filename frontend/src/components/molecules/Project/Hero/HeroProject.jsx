import React from "react";
import bg from "../../../../assets/project/hero.svg";
const HeroProject = () => {
  return (
    <div>
      <div className="bg-[#bce3ff] w-full rounded-lg flex items-center justify-center p-4 lg:p-0 flex-col lg:flex-row">
        <div className="ml-3 lg:ml-6">
          <h1 className="text-[27px] lg:text-5xl font-bold">
          Gateway to Professional Success
          </h1>
          <p className="text-black mt-2 text-justify text-sm max-w-[20rem] lg:max-w-[45rem]">
          Navigate through countless opportunities tailored to your expertise and aspirations. We're here to help you discover roles that not only match your skills but also fulfill your career dreams, putting you on the path to long-term success.
          </p>
        </div>
        <img
          src={bg}
          alt="Hero"
          className="w-72 lg:w-80 "
        />
      </div>
    </div>
  );
};

export default HeroProject;
