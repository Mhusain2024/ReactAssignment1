// src/components/FeatureCard.js
import React from 'react';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card text-center">
      <img 
        src={image} 
        alt={title} 
        className="w-12 h-12 mx-auto mb-4" 
      />
      <h5 className="text-xl font-bold mb-2">{title}</h5>
      <p className="text-gray-700">{description}</p>
      <a href="#" className="text-blue-500 hover:text-blue-700">Readmore</a>
    </div>
  );
};

export default FeatureCard;