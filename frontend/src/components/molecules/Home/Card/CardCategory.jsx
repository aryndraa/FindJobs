import React from "react";

const CardCategory = () => {
  const jobCategories = [
    { title: "Full Stack Developer", icon: "🪄", available: "50+" },
    { title: "Mobile App Developer", icon: "📱", available: "50+" },
    { title: "Web Developer", icon: "💻", available: "40+" },
    { title: "Data Scientist", icon: "📊", available: "30+" },
    { title: "Machine Learning", icon: "🗂️", available: "30+" },
    { title: "Cyber Security", icon: "🔐", available: "30+" },
    { title: "UI/UX Designer", icon: "🫧", available: "30+" },
    { title: "Video Editor", icon: "📸", available: "30+" },
  ];

  return (
    <div className="hidden md:hidden lg:block xl:block">
      <div className="grid gap-3 mt-8">
        <div className="bg-white border border-[#e8e8e8] rounded-lg w-[25rem] p-3">
          <div className="p-3">
            <h1 className="text-xl font-bold">Jobs Category</h1>
          </div>
        </div>
        {jobCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white border border-[#e8e8e8] rounded-lg w-[25rem] p-3 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">{category.icon}</span>
                <h3 className="text-[19px] font-bold">{category.title}</h3>
              </div>
              <span className="text-secondary font-medium">
                {category.available} Available
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCategory;
