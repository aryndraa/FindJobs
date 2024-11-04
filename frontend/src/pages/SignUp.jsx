import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex lg:items-center items-start justify-center min-h-screen bg-white">
      <form
        className="bg-white p-6 rounded-lg w-full max-w-md mt-[4rem]"
        method="get"
        action="/sign-up/confirm-account"
      >
        <h2 className="text-2xl font-bold mt-2">Sign Up to Your Account</h2>
        <p className="text-secondary text-sm mt-2">Create New Your Account</p>
        <div className="mb-4 mt-5">
          <label label className="block text-hitam mb-2">
            Name
          </label>
          <div className="flex items-center border-b border-gray-300 p-2">
            <FaUser className="text-secondary mr-2" />
            <input
              type="text"
              placeholder="name"
              name="name"
              className="w-full outline-none bg-white"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-hitam mb-2">Username</label>
          <div className="flex items-center border-b border-gray-300 p-2">
            <FaUser className="text-secondary mr-2" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full outline-none bg-white"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-hitam mb-2">Email</label>
          <div className="flex items-center border-b border-gray-300 p-2">
            <FaEnvelope className="text-secondary mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full outline-none bg-white"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-medium" 
        >
          Continue
        </button>
        <div className="flex justify-start items-center text-sm">
        <p className="mt-4 text-center text-hitam">
          Already Have Account?{" "}
          <Link to="/sign-in" className="text-primary hover:underline font-medium">
            Sign In
          </Link>
        </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
