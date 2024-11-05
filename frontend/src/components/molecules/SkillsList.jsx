import React from 'react';

const SkillsList = () => (
  <div className="mt-8">
    <h2 className="text-xl font-semibold">Required Skills</h2>
    <div className="flex flex-wrap mt-4 gap-3">
      {['Numpy', 'Machine Learning', 'SQL', 'Data Visualisation'].map(skill => (
        <span key={skill} className="bg-[#F7F7F7] px-4 py-2 rounded-lg text-black text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillsList;
