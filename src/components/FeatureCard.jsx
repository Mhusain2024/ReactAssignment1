// src/components/FeatureCard.js
import React from 'react';

const FeatureCard = ({ image, title, description }) => {
  return (
    // <div className="feature-card text-left  max-w-xs pl-4">
    <div className="feature-card text-left  w-3xs pl-2">
      <img 
        src={image} 
        alt={title} 
        className="w-16 h-16 ml-0 mb-4" 
      />
      <h5 className="text-xl font-bold py-2">{title}</h5>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href="#" className="text-blue-500 hover:text-blue-700">Readmore</a>
    </div>
  );
};

export default FeatureCard;