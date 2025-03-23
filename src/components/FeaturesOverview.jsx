import React from 'react';
import FeatureCard from './FeatureCard.jsx';

const featuresData = [
  {
    id: 1,
    image: "assets/Group12.svg",
    title: "Speed Optimisation",
    description: "Lorem ipsum dolor sit amet, tincidunt vestibulum.",
  },
  {
    id: 2,
    image: "assets/Group7.svg",
    title: "SEO and Backlinks",
    description: "Lorem ipsum dolor sit amet, tincidunt vestibulum.",
  },
  {
    id: 3,
    image: "assets/Group5.svg",
    title: "Content Marketing",
    description: "Lorem ipsum dolor sit amet, tincidunt vestibulum.",
  },
];

const FeaturesOverview = () => {
  return (
    <section className="features-overview py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How does it work</h2>
          <p className="text-lg text-gray-700">
            One theme that serves as an easy-to-use operational toolkit that meets customer's needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <FeatureCard 
              key={feature.id}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;