import React from 'react';

const TagsList = () => {
  const tags = ['Numpy', 'Machine Learning', 'SQL', 'Data Visualisation'];

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsList;
