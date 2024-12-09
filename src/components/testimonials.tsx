"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Testimonial interface
interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

// Testimonial data
const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: 'Alex K.',
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    name: 'James L.',
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co The selection of clothes is not only diverse but also on-point with the latest trends."
  }
];

// Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-lg shadow-md flex-shrink-0 w-80"
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="flex items-center mb-2">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <Star 
              key={index} 
              className="h-5 w-5"
              fill="#FFC107"
            />
          ))}
        </div>
        <span className="ml-2 font-bold">{testimonial.name}</span>
      </div>
      <p className="text-gray-600">{testimonial.text}</p>
    </motion.div>
  );
};

// Testimonials Component
const Testimonials: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 mt-10">
      <motion.h2 
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        OUR HAPPY CUSTOMERS
      </motion.h2>
      
      <motion.div 
        className="flex space-x-4 overflow-x-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1
            }
          }
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.5 }
              }
            }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;