import React from "react";

const CardCategory = () => {
  const jobCategories = [
    { title: "Software Developer", icon: "🪄", available: "50+" },
    { title: "Design Graphic", icon: "🎨", available: "40+" },
    { title: "UI/UX Designer", icon: "🫧", available: "30+" },
    { title: "Copy Writer", icon: "✍️", available: "25+" },
    { title: "Logo Branding", icon: "🖋️", available: "20+" },
    { title: "Video Editor", icon: "📸", available: "30+" },
    { title: "Photo Editor", icon: "📷", available: "35+" },
    { title: "Architecture", icon: "🏛️", available: "15+" },
    { title: "Photografer", icon: "📸", available: "40+" },
    { title: "Videografer", icon: "🎥", available: "20+" },
  ];

  return (
    <div className="hidden md:hidden lg:block xl:block flex-1">
      <div className="grid gap-3 mt-8">
        <div className="bg-white border border-[#e8e8e8] rounded-lg w-[25rem] xl:w-[40rem] p-3">
          <div className="p-3">
            <h1 className="text-xl font-bold">Jobs Category</h1>
          </div>
        </div>
        {jobCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white border border-[#e8e8e8] rounded-lg w-[25rem] xl:w-[40rem] p-3 cursor-pointer"
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
