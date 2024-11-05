import React from 'react'

const freelanceData = [
    {
      id: 1,
      name: 'Byeon',
      email: 'example@gmail.com',
      projects: 12,
      likes: 10,
      favorites: 120,
      profileImage: 'https://i.pinimg.com/originals/9e/63/8d/9e638d6c84f0de74b01f2c0cee9c1b7f.jpg',
      backgroundImage: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Nature-wallpapers-hd-backgroud-1080p.jpg',
    },
  ];
const CardListFreelancer = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
      {freelanceData.map((freelance) => (
        <div
          key={freelance.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden"
        >
          <div
            className="h-28 m-4 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${freelance.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className="flex justify-center -mt-16">
            <img
              className="w-24 h-24 object-cover rounded-full border-4 border-white"
              src={freelance.profileImage}
              alt={`${freelance.name} Profile`}
            />
          </div>

          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold">{freelance.name}</h2>
            <p className="text-secondary text-sm">{freelance.email}</p>
          </div>

          <div className="grid grid-cols-3 text-center mt-4 mb-4">
            <div>
              <p className="text-lg font-medium text-secondary">{freelance.projects}</p>
              <p className="text-secondary text-xs">Project Taken</p>
            </div>
            <div>
              <p className="text-lg font-medium text-secondary">{freelance.likes}</p>
              <p className="text-secondary text-xs">Service Likes</p>
            </div>
            <div>
              <p className="text-lg font-medium text-secondary">{freelance.favorites}</p>
              <p className="text-secondary text-xs">Favorites</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardListFreelancer