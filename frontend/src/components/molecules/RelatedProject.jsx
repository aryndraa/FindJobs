import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const projectData = [
  {
    id: 1,
    username: 'Hermansyah_Akbar',
    title: 'Mencari Web Developer Untuk Pembuatan Website Profile Sekolah',
    description:
      'Menghadirkan pesan yang menarik dan desain yang memukau dalam setiap banner iklan adalah kunci untuk membangun branding dan meningkatkan konversi.',
    price: 'Rp. 120.000',
    tags: ['Penerjemah', 'Adobe Illustrator', 'Penerjemah'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-happy-young-male-student-with-glasses-casual-outfit-posing-park_1153-6309.jpg?t=st=1730487270~exp=1730490870~hmac=a993a4554e3a0b6c7c756261113f2a0adb458fa24c2f184daa49dd47f2f93be8&w=360',
  },
  {
    id: 1,
    username: 'Hermansyah_Akbar',
    title: 'Mencari Web Developer Untuk Pembuatan Website Profile Sekolah',
    description:
      'Menghadirkan pesan yang menarik dan desain yang memukau dalam setiap banner iklan adalah kunci untuk membangun branding dan meningkatkan konversi.',
    price: 'Rp. 120.000',
    tags: ['Penerjemah', 'Adobe Illustrator', 'Penerjemah'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-happy-young-male-student-with-glasses-casual-outfit-posing-park_1153-6309.jpg?t=st=1730487270~exp=1730490870~hmac=a993a4554e3a0b6c7c756261113f2a0adb458fa24c2f184daa49dd47f2f93be8&w=360',
  },
  {
    id: 1,
    username: 'Hermansyah_Akbar',
    title: 'Mencari Web Developer Untuk Pembuatan Website Profile Sekolah',
    description:
      'Menghadirkan pesan yang menarik dan desain yang memukau dalam setiap banner iklan adalah kunci untuk membangun branding dan meningkatkan konversi.',
    price: 'Rp. 120.000',
    tags: ['Penerjemah', 'Adobe Illustrator', 'Penerjemah'],
    profileImage:
      'https://img.freepik.com/free-photo/portrait-happy-young-male-student-with-glasses-casual-outfit-posing-park_1153-6309.jpg?t=st=1730487270~exp=1730490870~hmac=a993a4554e3a0b6c7c756261113f2a0adb458fa24c2f184daa49dd47f2f93be8&w=360',
  },
  // You can add more project objects here
];

const ProjectCard = ({
  username,
  profileImage,
  title,
  description,
  price,
  tags,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{description}</p>
      <div className="flex gap-2 mb-3 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-sm font-medium">Start From</h4>
          <h2 className="text-lg font-bold text-primary">{price}</h2>
        </div>
        <Link to="/details-project">
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-green-800 transition">
          Visit Project
        </button>
        </Link>
      </div>
    </div>
  );
};

const RelatedProject = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projectData.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default RelatedProject;
