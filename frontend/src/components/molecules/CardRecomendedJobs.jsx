import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const CardRecomendedJobs = () => {
  return (
    <div className="">
      {/* Card 1 */}
      <div className="mt-9 border-l-8 border-l-primary w-[21rem] md:w-[48rem] lg:w-[44rem] xl:w-[55rem] p-4 rounded">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <div className="px-3 py-1 rounded bg-hijaumuda">
              <p className="text-lg text-primary font-semibold">#</p>
            </div>
            <h1 className="text-sm md:text-[15px] lg:text-base font-semibold">Developer Apps</h1>
          </div>
          <div className="p-2 rounded-full bg-hijaumuda">
            <MdOutlineFavoriteBorder className="text-primary"/>
          </div>
        </div> 
        <div className="mt-4">
          <h1 className="text-[22px] md:text-2xl font-semibold">Project Manager</h1>
          <p className="text-xs md:text-[13px] text-secondary mt-2">Start from : Rp. 1.700.000 - 10.0000</p>
        </div>
        <div className="flex justify-between items-center mt-7 font-poppins">
          <div className="flex  items-center justify-center">
          <IoLocationOutline className="text-primary text-lg"/>
          <div className="ml-2 text-sm text-gray-500">
            Jakarta, Indonesia</div>
          </div>
          <button className="px-4 py-1 md:px-6 md:py-2  text-[13px] border rounded border-secondary">Apply Now</button>
        </div>
      </div>
      {/* Card 2 */}
      <div className="mt-8 border-l-8 border-l-kuning w-[21rem] md:w-[48rem] lg:w-[44rem] xl:w-[55rem]  p-4 rounded">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <div className="px-3 py-1 rounded bg-kuningmuda">
              <p className="text-lg text-kuning font-semibold">#</p>
            </div>
            <h1 className="text-sm md:text-[15px] font-semibold">Developer Apps</h1>
          </div>
          <div className="p-2 rounded-full bg-kuningmuda">
            <MdOutlineFavoriteBorder className="text-kuning"/>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-[22px] md:text-2xl font-semibold">Project Manager</h1>
          <p className="text-xs md:text-[13px] text-secondary mt-1">Start from : Rp. 1.700.000 - 10.0000</p>
        </div>
        <div className="flex justify-between items-center mt-7 font-poppins">
          <div className="flex  items-center justify-center">
          <IoLocationOutline className="text-kuning text-lg"/>
          <div className="ml-2 text-sm text-gray-500">
            Jakarta, Indonesia</div>
          </div>
          <button className="px-4 py-1 md:px-6 md:py-2 text-[13px] border rounded border-secondary">Apply Now</button>
        </div>
      </div>
      {/*Card 3*/}
      <div className="mt-8 border-l-8 border-l-ungu w-[21rem] md:w-[48rem] lg:w-[44rem] xl:w-[55rem] p-4 rounded">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <div className="px-3 py-1 rounded bg-ungumuda">
              <p className="text-lg text-ungu font-semibold">#</p>
            </div>
            <h1 className="text-sm font-semibold md:text-[15px]">Developer Apps</h1>
          </div>
          <div className="p-2 rounded-full bg-ungumuda">
            <MdOutlineFavoriteBorder className="text-ungu"/>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-[22px] md:text-2xl font-semibold">Project Manager</h1>
          <p className="text-xs md:text-[13px] text-secondary mt-1">Start from : Rp. 1.700.000 - 10.0000</p>
        </div>
        <div className="flex justify-between items-center mt-7 font-poppins">
          <div className="flex  items-center justify-center">
          <IoLocationOutline className="text-ungu text-lg"/>
          <div className="ml-2 text-sm text-gray-500">
            Jakarta, Indonesia</div>
          </div>
          <button className="px-4 py-1 md:px-6 md:py-2 text-[13px] border rounded border-secondary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardRecomendedJobs;
