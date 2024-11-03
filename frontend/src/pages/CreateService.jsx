import React from "react";
import CategoryDropdown from "../components/molecules/CategoryDropdown";
import CurrencyDropdown from "../components/molecules/CurrencyDropdown";
import MinMaxPrice from "../components/molecules/MinMaxPrice";
import SelectImage from "../components/molecules/SelectImage"

const CreateService = () => {
  return (
    <div className="mx-64 pt-24">
      {/* <form action=""> */}
      <div className="p-5 border rounded-md border-secondary">
        <h1 className="text-3xl font-semibold">Create Service</h1>
        {/* Input Image */}
        <div className="mt-10">
          <SelectImage/>
        </div>
        {/* Input title */}
        <div className="mt-10">
          <h1 className="text-lg font-semibold">Title</h1>
          <div className="border border-secondary w-full p-3 rounded-md mt-2">
            <input
              type="text"
              placeholder="input your title"
              className="outline-none bg-white"
              required
            />
          </div>
        </div>
        {/* Input description */}
        <div className="mt-5">
          <h1 className="text-lg font-semibold">Description</h1>
          <div className="border border-secondary w-full p-3 rounded-md mt-2 ">
            <textarea
              name="description"
              type=""
              placeholder="input your description"
              className="outline-none bg-white w-full"
              required
            />
          </div>
        </div>
        {/* Select Category */}
        <div className="mt-5">
          <h1 className="text-lg font-semibold">Select Category</h1>
          <div className=" mt-2 ">
            <CategoryDropdown />
            <h1 className="text-sm text-primary font-semibold mt-3">
              Max Select 3 Category
            </h1>
          </div>
        </div>
      </div>
      {/* Select Min Max */}
      <div className="mt-10 w-full p-5 border border-secondary rounded-md text-white mb-20">
        <h1 className="text-lg font-semibold text-black">Select Price</h1>
        <div className=" mt-2 ">
          <MinMaxPrice />
        </div>
        <div className="w-full bg-primary p-3 rounded-md mt-3 text-white text-center border border-secondary">
          <button type="submit">Upload Project</button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default CreateService;
