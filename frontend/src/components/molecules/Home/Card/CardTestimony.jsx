import React from "react";
import freelance from "../../../../assets/home/1.jpg";

const testimonials = [
  {
    id: 1,
    name: "Xavier Dreams",
    role: "Web Developer",
    testimony:
      "Lately, I don’t have jobs. But when, I started put my cv on this website. Today Finally I get a job.",
    image: freelance,
  },
  {
    id: 2,
    name: "Xavier Dreams",
    role: "Web Developer",
    testimony:
      "Lately, I don’t have jobs. But when, I started put my cv on this website. Today Finally I get a job.",
    image: freelance,
  },
  {
    id: 3,
    name: "Xavier Dreams",
    role: "Web Developer",
    testimony:
      "Lately, I don’t have jobs. But when, I started put my cv on this website. Today Finally I get a job.",
    image: freelance,
  },
  {
    id: 4,
    name: "Xavier Dreams",
    role: "Web Developer",
    testimony:
      "Lately, I don’t have jobs. But when, I started put my cv on this website. Today Finally I get a job.",
    image: freelance,
  },
  {
    id: 5,
    name: "Xavier Dreams",
    role: "Web Developer",
    testimony:
      "Lately, I don’t have jobs. But when, I started put my cv on this website. Today Finally I get a job.",
    image: freelance,
  },
  {
    id: 6,
    name: "Xavier Dreams",
    role: "Web Developer",
    testimony:
      "Lately, I don’t have jobs. But when, I started put my cv on this website. Today Finally I get a job.",
    image: freelance,
  },
];

const CardTestimony = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="border rounded border-[#e8e8e8]  p-5 hover:-translate-y-3 transition-all ease-in-out transform cursor-pointer duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="w-16 h-16 bg-cover">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">{testimonial.name}</h1>
              <div className="mt-1 bg-primary p-2 text-white text-center text-xs rounded font-poppins">
                {testimonial.role}
              </div>
            </div>
            <h1 className="text-secondary text-8xl font-lora">“</h1>
          </div>
          <div className="mt-5">
            <p className="font-medium text-sm">“{testimonial.testimony}”</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTestimony;
