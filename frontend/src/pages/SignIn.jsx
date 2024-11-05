import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="flex lg:items-center items-start justify-center min-h-screen bg-white">
      <form
        className="bg-white p-6 rounded-lg w-full max-w-md mt-[4rem]"
        method="get"
        action="/sign-up/confirm-account"
      >
        <h2 className="text-2xl font-bold mt-2">Welcome Back!</h2>
        <p className="text-secondary text-sm mt-2">Sign In into Your Account</p>
        <div className="mb-4 mt-5">
          <label label className="block text-hitam mb-2">
            Username
          </label>
          <div className="flex items-center border-b border-gray-300 p-2">
            <FaUser className="text-secondary mr-2" />
            <input
              type="text"
              placeholder="name"
              name="username"
              className="w-full outline-none bg-white"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <div className="flex items-center border-b border-gray-300 p-2 ">
            <MdPassword className="text-secondary mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full outline-none bg-white"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <Link to="/">
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-medium" 
        >
          Sign In
        </button>
        </Link>
        <div className="flex justify-start items-center text-sm">
        <p className="mt-4 text-center text-hitam">
          Dont Have Account?{" "}
          <Link to="/sign-up" className="text-primary hover:underline font-medium">
            Sign Up
          </Link>
        </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
