// src/components/DigitalMarketingServicesSection.js
import React from 'react';

const DigitalMarketingServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Offer a Full Range of Digital Marketing Services!</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
          <img 
            src='assets/Group2.png'
            alt="Digital Marketing Services" 
            className="mt-8 max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <img 
            src='assets/Group1.png'
            alt="Leading Digital Agency" 
            className="mt-8 max-w-full h-auto"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leading Digital Agency for Business Solution.</h2>
          <p className="text-gray-700 mb-4">Power-packed with impressive features and well-optimized.</p>
          <p className="text-gray-700 mb-4">Its smart features make it a powerful stand-alone website building tool.</p>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingServicesSection;