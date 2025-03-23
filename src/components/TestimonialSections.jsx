// src/components/TestimonialsSection.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination module styles
import { TestimonialCard } from './TestimonialCard.jsx';

const testimonials = [
  {
    id: 1,
    name: "Cody Lambert",
    role: "Marketing Manager",
    image: "assets/face1.jpg",
    feedback:
      "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 2,
    name: "Tony Martinez",
    role: "Marketing Manager",
    image: "assets/face2.jpg",
    feedback:
      "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 3,
    name: "Sophia Armstrong",
    role: "Marketing Manager",
    image: "assets/face15.jpg",
    feedback:
      "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 4,
    name: "Sophia Armstrong",
    role: "Marketing Manager",
    image: "assets/face16.jpg",
    feedback:
      "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
];

const TestimonialSections = () => {
  return (
    <section className="customer-feedback py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">What our customers have to say</h2>
          <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>

          <Swiper 
            modules={[ Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30} // Space between slides
            slidesPerView={1} // Number of slides visible at a time
            pagination={{ 
              //el: '.swiper-pagination', // Target the custom pagination container
              clickable: true, }} // Adds pagination dots
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }, // Adjust for larger screens
            }}
            className="testimonial-carousel"
            loop={true} >
          {/* Map through testimonials and render each as a SwiperSlide */}
          {testimonials.map((elem) => (
            <SwiperSlide key={elem.id}>
              <TestimonialCard data={elem} />
            </SwiperSlide>
          ))}
          </Swiper>


        </div>
          {/* Pagination Container */}
          <div className="swiper-pagination mt-8"></div>
      </div>
    </section>
  );
};

export default TestimonialSections;