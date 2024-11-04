import React from "react";
import { TbCategory } from "react-icons/tb";
import freelance from "../../../../assets/home/1.jpg";
// Array of freelancer data
const freelancerData = [
  {
    id: 1,
    name: "Ayu Arista",
    role: "Frontend Developer",
    image: freelance,
    description: "Profesional berpengalaman dalam desain grafis dan pengembangan antarmuka web.",
    jobsAvailable: 98
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Graphic Designer",
    image: freelance,
    description: "Ahli dalam tipografi, branding, dan desain komunikasi visual.",
    jobsAvailable: 75
  },
  {
    id: 3,
    name: "Rina Wijaya",
    role: "UI/UX Designer",
    image: freelance,
    description: "Spesialis pengalaman pengguna dengan fokus pada desain yang intuitif dan menarik.",
    jobsAvailable: 85
  },
  {
    id: 4,
    name: "Ayu Arista",
    role: "Frontend Developer",
    image: freelance,
    description: "Profesional berpengalaman dalam desain grafis dan pengembangan antarmuka web.",
    jobsAvailable: 98
  },
  {
    id: 5,
    name: "Budi Santoso",
    role: "Graphic Designer",
    image: freelance,
    description: "Ahli dalam tipografi, branding, dan desain komunikasi visual.",
    jobsAvailable: 75
  },
  {
    id: 6,
    name: "Rina Wijaya",
    role: "UI/UX Designer",
    image: freelance,
    description: "Spesialis pengalaman pengguna dengan fokus pada desain yang intuitif dan menarik.",
    jobsAvailable: 85
  }
];

const CardBestFreelancer = () => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 z-10">
      {freelancerData.map((freelancer) => (
        <div key={freelancer.id} className="border rounded p-6">
          <div className="flex items-center gap-3">
            <div className="bg-cover w-20 h-20">
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">{freelancer.name}</h1>
              <div className="flex items-center gap-2">
                <TbCategory className="text-sm text-secondary" />
                <p className="text-[13px] text-secondary">{freelancer.role}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-justify text-xs text-secondary">
              {freelancer.description}
            </p>
          </div>
          <div className="mt-10 font-poppins flex justify-between items-center">
            <div>
              <h1 className="font-semibold text-3xl text-primary">
                {freelancer.jobsAvailable}+
              </h1>
              <p className="text-sm">Jobs Available</p>
            </div>
            <button className="px-4 py-1 rounded text-base font-medium border-secondary border hover:bg-primary  transition-all ease-in duration-200 cursor-pointer hover:text-white">
              Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBestFreelancer;