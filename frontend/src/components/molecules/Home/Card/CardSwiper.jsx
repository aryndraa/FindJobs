import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles

const CardSwiper = () => {
  const jobCategories = [
    { title: "Full Stack Developer", icon: "🪄", available: "50+" },
    { title: "Mobile App Developer", icon: "📱", available: "50+" },
    { title: "Web Developer", icon: "💻", available: "40+" },
    { title: "Data Scientist", icon: "📊", available: "30+" },
    { title: "Machine Learning", icon: "🗂️", available: "30+" },
    { title: "Cyber Security", icon: "🔐", available: "30+" },
    { title: "UI/UX Designer", icon: "🫧", available: "30+" },
    { title: "Video Editor", icon: "📸", available: "30+" },
    // Add more categories as needed
  ];

  return (
    <div className="w-full lg:hidden xl:hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        navigation={false}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {jobCategories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="w-[10rem] lg:w-[17rem] mt-5 border rounded-lg shadow-sm font-poppins p-3 flex flex-col items-center hover:cursor-grab">
              <div className="flex items-center">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="ml-2 text-sm lg:text-base font-semibold">{category.title}</h3>
              </div>
              <p className="text-xs lg:text-sm mt-2 text-gray-500">
                {category.available} Available
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
