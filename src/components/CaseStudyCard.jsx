// src/components/CaseStudyCard.js
import React from 'react';

const CaseStudyCard = ({ title, category, image, description, bgColor }) => {
  return (
    <div className={`card color-cards ${bgColor} rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105`}>
      {/* Card Top Section */}
      <div className="text-center p-6">
        <div className="card-image mb-4">
          <img src={image} alt={title} className="w-20 h-20 mx-auto" />
        </div>
        <div className="card-desc-box flex justify-center">
          <div>
            <h6 className="text-white pb-2 px-3">{description}</h6>
            <button className="bg-white text-black font-bold py-1 px-3 rounded">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Card Bottom Section */}
      <div className="card-details text-center bg-white p-4">
        <h6 className="m-0 pb-1 font-bold">{title}</h6>
        <p className="text-gray-700">{category}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;