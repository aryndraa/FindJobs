import React, { useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const ConfirmAccount = () => {
  // State untuk menyimpan password dan konfirmasi password
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Mendapatkan query params dari URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name");
  const username = queryParams.get("username");
  const email = queryParams.get("email");

  // Fungsi untuk menangani form submission
  function handleSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman

    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Logika tambahan seperti validasi atau pengiriman data ke server bisa ditambahkan di sini
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
            <MdPassword className="text-gray-300 mr-2" />
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
            <MdPassword className="text-gray-300 mr-2" />
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

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Confirm Account
        </button>
      </form>
    </div>
  );
};

export default ConfirmAccount;
