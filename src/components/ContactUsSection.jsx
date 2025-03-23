import React from 'react';

const ContactUsSection = () => {
  return (
    <section
      className="contact-us relative bg-cover bg-center bg-no-repeat  bg-gray-900"
      style={{ backgroundImage: "url('/assets/gdpr.jpg')" }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        {/* Heading and Subheading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Do you have any projects?
        </h2>
        <p className="text-xl md:text-2xl font-bold mb-8 text-black">
          Contact us
        </p>

        {/* Button */}
        <button className="px-6 py-2 text-red-500 font-medium border-2 border-red-500 rounded-full hover:bg-red-50 transition-colors">
          Contact us
        </button>
      </div>
    </section>
  );
};

export default ContactUsSection;