// src/components/CaseStudies.js
import React from 'react';
import CaseStudyCard from './CaseStudyCard.jsx';

const caseStudiesData = [
  {
    title: "Online Marketing",
    category: "Seo, Marketing",
    image: "assets/Group95.svg",
    description: "Know more about Online marketing",
    bgColor: "bg-blue-900",
  },
  {
    title: "Web Development",
    category: "Developing, Designing",
    image: "assets/Group108.svg",
    description: "Know more about Web Development",
    bgColor: "bg-amber-400",
  },
  {
    title: "Web Designing",
    category: "Designing, Developing",
    image: "assets/Group126.svg",
    description: "Know more about Web Designing",
    bgColor: "bg-sky-600",
  },
  {
    title: "Software Development",
    category: "Developing, Designing",
    image: "assets/Group115.svg",
    description: "Know more about Software Development",
    bgColor: "bg-emerald-400",
  },
];


const CaseStudies = () => {
  return (
    <section className="case-studies py-16 bg-gray-100" id="case-studies-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Our case studies</h2>
          <p className="text-lg text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, tincidunt vestibulum.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudiesData.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CaseStudies;