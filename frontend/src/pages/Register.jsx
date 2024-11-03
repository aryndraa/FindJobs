import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex lg:items-center items-start justify-center min-h-screen bg-white">
      <form
        className="bg-white p-6 rounded-lg w-full max-w-md mt-[4rem] mt-2"
        method="get"
        action="/register/confirm-account"
      >
        <h2 className="text-2xl font-bold mt-2">Register to Your Account</h2>
        <p className="text-secondary text-sm mt-2">Create New Your Account</p>
        <div className="mb-4 mt-5">
          <label label className="block text-gray-700 mb-2">
            Name
          </label>
          <div className="flex items-center border border-gray-300 p-2 rounded-lg">
            <FaUser className="text-gray-300 mr-2" />
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
          <label className="block text-gray-700 mb-2">Username</label>
          <div className="flex items-center border border-gray-300 p-2 rounded-lg">
            <FaUser className="text-gray-300 mr-2" />
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
          <label className="block text-gray-700 mb-2">Email</label>
          <div className="flex items-center border border-gray-300 p-2 rounded-lg">
            <FaEnvelope className="text-gray-300 mr-2" />
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
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Continue
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already Have Account{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
