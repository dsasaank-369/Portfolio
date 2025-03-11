import React from 'react';

const SkillBadge = ({ name, level }) => {
  const levelColors = {
    Expert: 'bg-green-100 text-green-800',
    Advanced: 'bg-blue-100 text-blue-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Beginner: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className={`px-4 py-2 rounded-full ${levelColors[level] || 'bg-gray-100 text-gray-800'}`}>
      <span className="font-medium">{name}</span>
      <span className="text-sm ml-2 opacity-75">• {level}</span>
    </div>
  );
};

export default SkillBadge;
