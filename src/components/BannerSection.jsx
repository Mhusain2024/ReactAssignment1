// src/components/SeoMarketingSection.js
import React from 'react';

const BannerSection = () => {
  return (
        <section className="banner-section bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Search engine optimisation &amp;<br />Marketing.</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Simple is a simple template with a creative design that solves all your marketing and SEO queries.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="px-6 py-3 bg-orange-200 text-orange-500 font-medium rounded-md hover:bg-orange-300 transition-colors">
                Get started
            </button>
            <button className="px-6 py-3 bg-green-200 text-green-500 font-medium rounded-md hover:bg-green-300 transition-colors">
                Learn more
            </button>
        </div>
        <img 
          src= "assets/Group171.svg"
          alt="SEO & Marketing Illustration"
          className="mt-8 max-w-full h-auto mx-auto"
        />
      </div>
    </section>
  );
};

export default BannerSection;