// CategoryFilter.js
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Software Developer',
  'Design Graphic',
  'UI/UX Designer',
  'Copy Writer',
  'Logo Branding',
  'Video Editor',
  'Photo Editor',
  'Architecture',
  'Photographer',
  'Videografer',
  'Find More',
];

const CategoryFilter = () => {
  return (
    <div className='mt-8'>
        <h1 className='text-xl font-semibold'>Find by Categories</h1>
      <div className="flex flex-wrap gap-3 my-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={`/services/${category.toLowerCase().replace(/ /g, '-')}`}
          className="px-4 py-2 border rounded-lg hover:border-primary hover:text-primary font-poppins transition"
        >
          {category}
        </Link>
      ))}
    </div>
    </div>
  );
};

export default CategoryFilter;
