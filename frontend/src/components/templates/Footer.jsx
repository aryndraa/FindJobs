import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
// Footer for No Account
export const FooterNoAccount = () => {
  return (
    <footer className="bg-[#222222] text-secondary py-7">
      <div className="max-w-screen-xl flex md:flex-row flex-col justify-between gap-5 px-10">
        {/* Logo and Social Links */}
        <div>
          <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="FindJobs" className="w-32 -mr-10" />
            <h1 className="text-2xl font-bold text-white">FindJobs.</h1>
          </div>
          <div className="flex gap-8 justify-center items-center -mt-8">
            <a href="https://www.instagram.com/" target="_blank">
              <RiInstagramFill className="text-secondary text-xl hover:-translate-y-2 transform transition-all ease-in-out duration-200" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="text-secondary text-xl hover:-translate-y-2 transform transition-all ease-in-out duration-200" />
            </a>
            <a href="https://www.x.com/" target="_blank">
              <FaXTwitter className="text-secondary text-xl hover:-translate-y-2 transform transition-all ease-in-out duration-200" />
            </a>
          </div>
        </div>
        {/* Explore Section */}
        <div>
          <h6 className="text-white mb-3 text-xl font-semibold">Explore</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Find Projects</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Find Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Find Freelancers</a></li>
          </ul>
        </div>
        {/* Join Us Section */}
        <div>
          <h6 className="text-white text-xl font-semibold mb-3">Join Us</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Register</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Login</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Join Freelancer</a></li>
          </ul>
        </div>
        {/* Stats */}
        <div className="">
          <h6 className="text-white text-xl font-semibold">2.000.000</h6>
          <p className="text-gray-400">Registered Users</p>
          <h6 className="text-white text-xl font-semibold mt-4">2.000.000</h6>
          <p className="text-gray-400">Total Projects Posted</p>
        </div>
      </div>
      <div className="border-t border-gray-600 text-center py-4 mt-8">
        <p className="text-gray-400">© 2024 FindJobs. By Rahayu Team's Project</p>
      </div>
    </footer>
  );
};

// Footer for Logged-In Users
export const FooterWithAccount = () => {
  return (
    <footer className="bg-[#222222] text-secondary py-7">
      <div className="max-w-screen-xl flex flex-col md:flex-row justify-between gap-5 px-10">
        {/* Logo and Social Links */}
        <div>
          <div className="flex items-center justify-end gap-3 mb-4">
          <img src={logo} alt="FindJobs" className="w-32 -mr-10" />
            <h1 className="text-2xl font-bold text-white">FindJobs.</h1>
          </div>
          <div className="flex gap-8 justify-center items-center -mt-8">
            <a href="https://www.instagram.com/" target="_blank">
              <RiInstagramFill className="text-secondary text-xl hover:-translate-y-2 transform transition-all ease-in-out duration-200" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="text-secondary text-xl hover:-translate-y-2 transform transition-all ease-in-out duration-200" />
            </a>
            <a href="https://www.x.com/" target="_blank">
              <FaXTwitter className="text-secondary text-xl hover:-translate-y-2 transform transition-all ease-in-out duration-200" />
            </a>
          </div>
        </div>
        {/* Explore Section */}
        <div>
          <h6 className="text-white text-xl font-semibold mb-3">Explore</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Find Projects</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Find Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Find Freelancers</a></li>
          </ul>
        </div>
        {/* Account Section */}
        <div>
          <h6 className="text-white text-xl font-semibold mb-3">Account</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Profile</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">My Project</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Messages</a></li>
          </ul>
        </div>
        {/* Stats */}
        <div className="">
          <h6 className="text-white text-xl font-semibold">2.000.000</h6>
          <p className="text-gray-400">Registered Users</p>
          <h6 className="text-white text-xl font-semibold mt-4">2.000.000</h6>
          <p className="text-gray-400">Total Projects Posted</p>
        </div>
      </div>
      <div className="border-t border-gray-600 text-center py-4 mt-8">
        <p className="text-gray-400">© 2024 FindJobs. By Rahayu Team's Project</p>
      </div>
    </footer>
  );
};

// Footer for Freelancers
export const FooterFreelancer = () => {
  return (
    <footer className="bg-[#222222] text-secondary py-7">
      <div className="max-w-screen-xl  flex flex-col md:flex-row justify-between gap-5 px-4">
        {/* Logo and Social Links */}
        <div>
          <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="FindJobs" className="w-32 -mr-10" />
            <h1 className="text-2xl font-bold text-white">FindJobs.</h1>
          </div>
          <div className="flex gap-8 justify-center items-center -mt-8">
            <a href="https://www.instagram.com/" target="_blank">
              <RiInstagramFill className="text-secondary text-xl hover:-translate-y-2 transform transition-all ease-in-out duration-200" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="text-secondary text-xl hover:-translate-y-2 transform transition-all ease-in-out duration-200" />
            </a>
            <a href="https://www.x.com/" target="_blank">
              <FaXTwitter className="text-secondary text-xl hover:-translate-y-2 transform transition-all ease-in-out duration-200" />
            </a>
          </div>
        </div>
        {/* Explore Section */}
        <div>
          <h6 className="text-white text-xl font-semibold mb-3">Explore</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Find Projects</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Find Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Find Freelancers</a></li>
          </ul>
        </div>
        {/* Account Section */}
        <div>
          <h6 className="text-white text-xl font-semibold mb-3">Account</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Profile</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">My Project</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">My Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Messages</a></li>
          </ul>
        </div>
        {/* Stats */}
        <div className="">
          <h6 className="text-white text-xl font-semibold">2.000.000</h6>
          <p className="text-gray-400">Registered Users</p>
          <h6 className="text-white text-xl font-semibold mt-4">2.000.000</h6>
          <p className="text-gray-400">Total Projects Posted</p>
        </div>
      </div>
      <div className="border-t border-gray-600 text-center py-4 mt-8">
        <p className="text-gray-400">© 2024 FindJobs. By Rahayu Team's Project</p>
      </div>
    </footer>
  );
};

const Footer = () => {
  const [footer] = useState("noAccount"); // Default header: "noAccount", "withAccount", "freelancer"

  const renderFooter = () => {
    switch (footer) {
      case "withAccount":
        return <FooterWithAccount />;
        case "freelancer":
          return <FooterFreelancer />;
          default:
            return <FooterNoAccount />;
    }
  };

  return <div>{renderFooter()}</div>;
};

export default Footer;
