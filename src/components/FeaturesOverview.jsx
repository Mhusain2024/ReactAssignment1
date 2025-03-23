import React from 'react';
import FeatureCard from './FeatureCard.jsx';

const featuresData = [
  {
    id: 1,
    image: "assets/Group12.svg",
    title: "Speed Optimisation",
    description: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 2,
    image: "assets/Group7.svg",
    title: "SEO and Backlinks",
    description: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 3,
    image: "assets/Group5.svg",
    title: "Content Marketing",
    description: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
];

const FeaturesOverview = () => {
  return (
    <section className="features-overview py-16 bg-white" id="features-section">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How does it work</h2>
          <p className="text-lg text-white-700">
            One theme that serves as an easy-to-use operational toolkit that meets customer's needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
          {featuresData.map((feature, index) => (
             <div
            //  key={index}
            //  className={`flex justify-${index === 0 ? 'start' : index === 1 ? 'center' : 'end'}`}
           >
              <FeatureCard 
                key={feature.id}
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;