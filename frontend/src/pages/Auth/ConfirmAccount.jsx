import React, { useState } from "react";
import { MdPassword } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const ConfirmAccount = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name");
  const username = queryParams.get("username");
  const email = queryParams.get("email");

  function handleSubmit(event) {
    event.preventDefault(); 

    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

  }

  return (
    <div className="flex items-start lg:items-center justify-center min-h-screen bg-white">
      <form
        className="bg-white p-6 rounded-lg w-full max-w-md mt-20"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold ">Confirm Account</h2>
          <p className="text-sm text-secondary">
            Create New Your Freelancer Account
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <div className="flex items-center border-b border-gray-300 p-2 ">
            <MdPassword className="text-secondary mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full outline-none bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Menyimpan password
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Confirm Password</label>
          <div className="flex items-center border-b border-gray-300 p-2 ">
            <MdPassword className="text-secondary mr-2" />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              className="w-full outline-none bg-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Menyimpan konfirmasi password
            />
          </div>
        </div>

        <Link to="/sign-in">
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 font-medium text-[15px] rounded-lg hover:bg-green-600 transition duration-200"
        >
          Confirm Account
        </button>
        </Link>
      </form>
    </div>
  );
};

export default ConfirmAccount;
