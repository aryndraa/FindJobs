import React from 'react';

const ContactInfo = () => (
  <div className="mt-8 p-4 bg-white rounded-lg border border-gray-300 text-center flex items-center gap-3 justify-center">
    <div className="bg-cover w-16 h-16">
    <img
       src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?t=st=1730483883~exp=1730487483~hmac=d54d5df263f8d9f67e81d267ad00c529a82401f6cec4614279a2a186e17d5061&w=740"
      alt="User Avatar"
      className="rounded-full w-full h-full"
    />
    </div>
    <div>
    <h3 className="font-semibold">Xavier Dreams</h3>
    <p className="text-gray-600">example@gmail.com</p>
    </div>
  </div>
);

export default ContactInfo;
