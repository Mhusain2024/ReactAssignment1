import React from 'react';

const DigitalMarketingServicesSection = () => {
  return (
    <section className="digital-marketing-service py-16 bg-gray-50" id="digital-marketing-section">
      {/* First Row */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-7/12" data-aos="fade-right">
            <h3 className="text-4xl font-bold mb-6">
              We Offer a Full Range<br />of Digital Marketing Services!
            </h3>
            <div className="w-full lg:w-10/12 xl:w-8/12">
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
              </p>
              <p className="text-gray-600 font-medium">
                Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-5/12" data-aos="fade-left">
            <img
              src="assets/Group1.png" 
              alt="Digital Marketing"
              className="mt-8 max-w-full h-auto"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mt-16">
          {/* Left Column */}
          <div className="w-full lg:w-7/12 order-2 lg:order-1" data-aos="fade-right">
            <img
              src="assets/Group2.png" 
              alt="Digital Agency"
              className="mt-8 max-w-full h-auto"            />
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-5/12 order-1 lg:order-2" data-aos="fade-left">
            <h3 className="text-4xl font-bold mb-6">
              Leading Digital Agency<br />for Business Solution.
            </h3>
            <div className="w-full lg:w-9/12 xl:w-8/12">
              <p className="text-gray-600 mb-6">
                Power-packed with impressive features and well-optimized, this template is designed to provide the best performance in all circumstances.
              </p>
              <p className="text-gray-600 font-medium mb-6">
                Its smart features make it a powerful stand-alone website building tool.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingServicesSection;
// // src/components/DigitalMarketingServicesSection.js
// import React from 'react';

// const DigitalMarketingServicesSection = () => {
//   return (
//     <section className="py-16 bg-white-100 dark:bg-white-800">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
//         <div className="md:w-1/2 text-center md:text-left pl-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">We Offer a Full Range of Digital Marketing Services!</h2>
//           <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
//           <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer</p>
//           <img 
//             src='assets/Group2.png'
//             alt="Digital Marketing Services" 
//             className="mt-8 max-w-full h-auto"
//           />
//         </div>
//         <div className="md:w-1/2 text-center md:text-left pl-4">
//           <img 
//             src='assets/Group1.png'
//             alt="Leading Digital Agency" 
//             className="mt-8 max-w-full h-auto"
//           />
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Leading Digital Agency for Business Solution.</h2>
//           <p className="text-gray-700 mb-4">Power-packed with impressive features and well-optimized. , this template is designed to provide the best performance in all circumstances.</p>
//           <p className="text-gray-700 mb-4">Its smart features make it a powerful stand-alone website building tool.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DigitalMarketingServicesSection;