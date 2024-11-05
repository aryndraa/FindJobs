import React, { useState } from "react";
import {
  IoIosSearch,
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { IoCartOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";

// Komponen Navbar utama yang memeriksa nilai header dan menampilkan komponen yang sesuai
const NavbarDekstop = () => {
  const [header, setHeader] = useState("noAccount"); // Default header: "noAccount", "withAccount", "freelancer"

  const renderNavbar = () => {
    switch (header) {
      case "withAccount":
        return <NavbarLoggedIn />;
      case "freelancer":
        return <NavbarFreelance />;
      default:
        return <NavbarNoAccount />;
    }
  };

  return <div>{renderNavbar()}</div>;
};

// Header untuk pengguna yang belum memiliki akun
export const NavbarNoAccount = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full fixed bg-white lg:z-50">
      <div className="mx-16">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-between py-2 gap-8">
            <Logo />
            <SearchBar />
            <nav className="flex items-center gap-8 text-sm xl:text-base font-semibold">
              <ul className="flex gap-8">
                <li className="hover:text-primary transition-all ease-in duration-100">
                  <Link to="/">Home</Link>
                </li>
                <DropdownEksplore
                  isDropdownOpen={isDropdownOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                />
                <li className="hover:text-primary transition-all ease-in duration-100">
                  <Link to="/freelance-register">Freelance Register</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-4">
            <Link to="/sign-up">
              <button className="border-black text-black border rounded-full text-[13px] py-1 px-6 md:px-4 xl:px-7 xl:text-base hover:bg-black hover:text-white transform transition-all ease-in duration-200">
                Sign Up
              </button>
            </Link>
            <Link to="/sign-in">
              <button className="bg-black text-white rounded-full text-[13px] py-1 px-6 md:px-4 xl:px-7 xl:text-base">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header untuk pengguna yang sudah masuk
export const NavbarLoggedIn = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full fixed bg-white lg:z-50">
      <div className="mx-16">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-between py-2 gap-8">
            <Logo />
            <SearchBar />
            <nav className="flex items-center gap-8 text-sm xl:text-base font-semibold">
              <ul className="flex gap-8">
                <li className="hover:text-primary transition-all ease-in duration-100">
                  <Link to="/">Home</Link>
                </li>
                <DropdownEksplore
                  isDropdownOpen={isDropdownOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                />
                <li className="hover:text-primary transition-all ease-in duration-100">
                  <Link to="/freelance-register">Freelance Register</Link>
                </li>
              </ul>
            </nav>
          </div>
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

// Header untuk freelancer
export const NavbarFreelance = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full fixed bg-white lg:z-50">
      <div className="mx-16">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-between py-2 gap-8">
            <Logo />
            <SearchBar />
            <nav className="flex items-center gap-8 text-sm xl:text-base font-semibold">
              <ul className="flex gap-8">
                <li className="hover:text-primary transition-all ease-in duration-100">
                  <Link to="/">Home</Link>
                </li>
                <DropdownEksplore
                  isDropdownOpen={isDropdownOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                />
                <li className="hover:text-primary transition-all ease-in duration-100">
                  <Link to="/freelance-dashboard">Freelance Dashboard</Link>
                </li>
              </ul>
            </nav>
          </div>
          <ProfileFreelancer />
        </div>
      </div>
    </div>
  );
};


// Komponen umum Logo
const Logo = () => (
  <div className="flex items-center font-bold gap-1 text-3xl">
    <img src={logo} className="w-16 -mr-4"/>
    <h1>FindJobs.</h1>
  </div>
);

// Komponen umum SearchBar
const SearchBar = () => (
  <div className="border rounded-lg flex items-center">
    <input
      type="text"
      placeholder="What Jobs You Want Find?"
      className="lg:w-56 xl:w-80 py-2 ml-3 lg:py-1 focus:outline-none text-sm bg-white"
    />
    <div className="bg-black flex items-center w-12 h-10 justify-center rounded-r-lg">
      <IoIosSearch className="text-white text-[22px]" />
    </div>
  </div>
);

const DropdownEksplore = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li
      className="relative flex items-center gap-2 cursor-pointer hover:text-primary transition-all ease-in duration-100"
      onClick={toggleDropdown}
    >
      Eksplore
      <span
        className={`transition-transform duration-300 ease-in-out ${
          isDropdownOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </span>
      {isDropdownOpen && (
        <ul className="absolute top-10 left-0 w-36 bg-white border text-black rounded-lg py-2 z-50 shadow-lg transition-all duration-300 ease-in-out">
          <Link to="/service">
            <div  className="px-4 py-2 hover:bg-gray-100 transition-colors duration-150 flex items-center gap-1">
            <RiServiceLine />
              <li>
                Service
              </li>
            </div>
          </Link>
          <Link to="/project">
            <div className="px-4 py-2 hover:bg-gray-100 transition-colors duration-150 flex items-center gap-1">
            <AiOutlineProject />
              <li>
                Project
              </li>
            </div>
          </Link>
        </ul>
      )}
    </li>
  );
};

// Komponen umum UserProfile
const UserProfile = () => (
  <div className="flex gap-4 items-center">
    <Link to="/notifications">
      <IoIosNotificationsOutline className="text-2xl" />
    </Link>
    <Link to="/messages">
      <IoChatboxEllipsesOutline className="text-2xl" />
    </Link>
    <Link to="/profile">
    <div className="bg-cover w-10 h-10">
          <img
            src="https://i.pinimg.com/564x/12/41/7b/12417b5cfabdeffcb0c55231aca15387.jpg"
            alt="User Avatar"
            className="rounded-full h-full w-full object-cover"
          />
        </div>
    </Link>
  </div>
);
const ProfileFreelancer = () => (
  <div className="flex gap-6 items-center">
    <Link to="/cart">
      <IoCartOutline className="text-2xl" />
    </Link>
    <Link to="/notifications">
      <IoIosNotificationsOutline className="text-2xl" />
    </Link>
    <Link to="/messages">
      <IoChatboxEllipsesOutline className="text-2xl" />
    </Link>
    <Link to="/profile">
    <div className="bg-cover w-10 h-10">
          <img
            src="https://i.pinimg.com/564x/12/41/7b/12417b5cfabdeffcb0c55231aca15387.jpg"
            alt="User Avatar"
            className="rounded-full h-full w-full object-cover"
          />
        </div>
    </Link>
  </div>
);

export default NavbarDekstop;
