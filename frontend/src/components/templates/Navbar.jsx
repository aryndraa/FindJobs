import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

// Komponen Navbar dengan Sidebar
const Navbar = () => {
  const [sidebar, setSidebar] = useState(null); // Untuk mengontrol sidebar mana yang ditampilkan

  const openSidebar = (sidebarType) => {
    setSidebar(sidebarType);
  };

  const closeSidebar = () => {
    setSidebar(null);
  };

  return (
    <nav className="bg-white p-4 shadow-sm fixed w-full top-0 z-40 lg:hidden">
      <div className="flex justify-between items-center">
        {/* Icon Menu */}
        <HiOutlineMenuAlt2
          onClick={() => openSidebar("noAccount")}
          className="text-3xl cursor-pointer"
        />

        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img src={logo} className="w-16 -mr-5" />
          <span className="text-2xl font-bold">FindJobs.</span>
        </div>

        {/* Icon Search */}
        <FaSearch className="text-2xl cursor-pointer" />
      </div>
      {sidebar === "noAccount" && <SidebarNoAccount onClose={closeSidebar} />}
      {sidebar === "withAccount" && (
        <SidebarWithAccount onClose={closeSidebar} />
      )}
      {sidebar === "freelancer" && <SidebarFreelancer onClose={closeSidebar} />}

      {/* <div className="mt-4 p-4 rounded-md shadow-sm">
          <div className="flex items-center border-b pb-2 mb-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Layanan apa yang kamu cari?"
              className="bg-transparent w-full focus:outline-none"
            />
          </div>
          <p className="text-gray-700 font-semibold mb-2">Layanan Tersedia</p>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Product Designer</span>
              <FaSearch className="text-gray-500" />
            </li>
            <li className="flex justify-between items-center">
              <span>Product Designer</span>
              <FaSearch className="text-gray-500" />
            </li>
          </ul>
        </div> */}
    </nav>
  );
};

// Sidebar Belum Punya Akun
export const SidebarNoAccount = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 lg:hidden xl:hidden"
    onClick={onClose}
  >
    <div
      className="absolute left-0 top-0 bottom-0 w-3/4 bg-white p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="text-2xl">
        <BsArrowLeft />
      </button>
      <h2 className="mt-4 text-2xl font-semibold">Register Account</h2>
      <p className="text-green-500 cursor-pointer mt-2">Register now &gt;</p>
      <div className="border-b-2 text-gray-400 mt-5"></div>
      <ul className="mt-6">
        <div className="text-secondary gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="mt-6">
            <Link to="/service">Find Services</Link>
          </li>
          <li className="mt-6">
            <Link to="/project">Find Projects</Link>
          </li>
          <div className="flex justify-between items-center mt-6">
            <li>Category</li>
            <FiPlus />
          </div>
          <div className="border-b-2 text-gray-400 mt-5"></div>
          <li className="mt-6">Join Freelancer</li>
          <li className="mt-6">Manager Account</li>
        </div>
      </ul>
    </div>
  </div>
);

// Komponen untuk Sidebar Setelah Login
export const SidebarWithAccount = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 lg:hidden xl:hidden"
    onClick={onClose}
  >
    <div
      className="absolute left-0 top-0 bottom-0 w-3/4 bg-white p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="text-2xl">
        <BsArrowLeft />
      </button>
      <div className="flex items-center mt-4">
        <img
          src="https://i.pinimg.com/564x/12/41/7b/12417b5cfabdeffcb0c55231aca15387.jpg"
          alt="User Avatar"
          className="rounded-full w-16 h-fit"
        />
        <div className="ml-4">
          <p className="text-2xl font-semibold">Ayu Aristaa</p>
          <p className="text-sm text-secondary mt-1">example123@gmail.com</p>
        </div>
      </div>
      <div className="border-b-2 text-gray-400 mt-5"></div>
      <ul className="mt-6">
        <div className="text-secondary gap-10">
          <li className="mt-6">Home</li>
          <li className="mt-6">Find Services</li>
          <li className="mt-6">Find Projects</li>
          <div className="flex justify-between items-center mt-6">
            <li>Category</li>
            <FiPlus />
          </div>
          <div className="border-b-2 text-gray-400 mt-5"></div>
          <li className="mt-6">Profile</li>
          <div className="flex justify-between items-center mt-6">
            <li>Message</li>
            <span className="p-2 rounded-full bg-hijaumuda"></span>
          </div>
          <li className="mt-6">Notifications</li>
          <li className="mt-6">Cart</li>
        </div>
      </ul>
    </div>
  </div>
);

// Komponen untuk Sidebar Freelance
export const SidebarFreelancer = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 lg:hidden xl:hidden"
    onClick={onClose}
  >
    <div
      className="absolute left-0 top-0 bottom-0 w-3/4 bg-white p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="text-2xl">
        <BsArrowLeft />
      </button>
      <div className="flex items-center mt-4">
        <img
          src="https://i.pinimg.com/564x/12/41/7b/12417b5cfabdeffcb0c55231aca15387.jpg"
          alt="User Avatar"
          className="rounded-full w-16 h-fit"
        />
        <div className="ml-4">
          <p className="text-2xl font-semibold">Ayu Aristaa</p>
          <span className="inline-block px-2 py-1 text-sm bg-primary mt-2 text-white rounded-full">
            UI / UX Designer
          </span>
        </div>
      </div>
      <div className="border-b-2 text-gray-400 mt-5"></div>
      <ul className="mt-6">
        <div className="text-secondary gap-10">
          <li className="mt-6">Home</li>
          <li className="mt-6">Find Services</li>
          <li className="mt-6">Find Projects</li>
          <div className="flex justify-between items-center mt-6">
            <li>Category</li>
            <FiPlus />
          </div>
          <div className="border-b-2 text-gray-400 mt-5"></div>
          <li className="mt-6">Profile</li>
          <div className="flex justify-between items-center mt-6">
            <li>Message</li>
            <span className="p-2 rounded-full bg-hijaumuda"></span>
          </div>
          <li className="mt-6">Notifications</li>
        </div>
      </ul>
    </div>
  </div>
);

export default Navbar;
