// src/components/TestimonialCard.js
import React from 'react';

export const TestimonialCard = ({ data }) => {
  return (
    <div className="testimonial-card p-6 bg-gray-100 rounded-lg text-center">
      <img
        src={data.image}
        alt={data.name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <p className="text-gray-700 mb-4">{data.feedback}</p>
      <h6 className="text-lg font-bold mb-2">{data.name}</h6>
      <p className="text-gray-500">{data.role}</p>
    </div>
  );
};
