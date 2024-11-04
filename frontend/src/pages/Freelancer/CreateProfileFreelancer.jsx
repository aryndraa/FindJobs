import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { IoFlag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import SelectImage from "../../components/molecules/SelectImage";
import JobsCategory from "../../components/molecules/JobsCategory";

const CreateProfileFreelancer = () => {
  return (
    <div className="flex lg:items-center items-start justify-center min-h-screen bg-white">
      <form
        className="bg-white p-6 rounded-lg w-full max-w-md mt-[4rem]"
        method="get"
        action="/register/confirm-account-freelance"
      >
        <h2 className="text-[23px] font-bold mt-2">Create Profile</h2>
        <p className="text-secondary text-sm mt-2">
          Create New Your Freelancer Account
        </p>
        <div className="mb-4 mt-5">
          <label label className="block text-hitam mb-2">
            Bio
          </label>
          <div className="flex items-center border-b border-gray-300 p-2">
            <BsFillClipboard2DataFill className="text-secondary mr-2" />
            <input
              type="text"
              placeholder="Bio"
              name="bio"
              className="w-full outline-none bg-white"
              required
            />
          </div>
        </div>
        <div className="mb-4 mt-5">
          <label label className="block text-hitam mb-2">
            About You
          </label>
          <div className="flex items-center border-b border-gray-300 p-2">
            <FaUser className="text-secondary mr-2" />
            <input
              type="text"
              placeholder="About You"
              name="About You"
              className="w-full outline-none bg-white"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-hitam mb-2">Category</label>
          <div className="flex items-center border-b border-gray-300 p-2">
            <BiSolidCategory className="text-secondary mr-2" />
            <JobsCategory />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-hitam mb-2">Country</label>
          <div className="flex items-center border-b border-gray-300 p-2">
            <FaEnvelope className="text-secondary mr-2" />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="w-full outline-none bg-white"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center p-2">
            <CgProfile className="text-secondary mr-2 text-[17px]" />
            <p className="text-[15px] text-secondary">Profile Picture</p>
          </div>
          <div>
            <SelectImage />
          </div>
        </div>

        <Link to="/freelance-login">
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
          >
            Confirm Account
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CreateProfileFreelancer;
