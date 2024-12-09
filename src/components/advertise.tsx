"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Dress style interface
interface DressStyle {
  id: number;
  name: string;
  image: string;
  alt: string;
}

// Dress styles data
const dressStyles: DressStyle[] = [
  {
    id: 1,
    name: 'Casual',
    image: '/images/dress-style-1.png',
    alt: 'Casual dress style'
  },
  {
    id: 2,
    name: 'Formal',
    image: '/images/dress-style-2.png',
    alt: 'Formal dress style'
  },
  {
    id: 3,
    name: 'Party',
    image: '/images/dress-style-3.png',
    alt: 'Party dress style'
  },
  {
    id: 4,
    name: 'Gym',
    image: '/images/dress-style-4.png',
    alt: 'Gym dress style'
  }
];

// Dress Styles Component
const DressStyles: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <motion.h2 
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        BROWSE BY DRESS STYLE
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
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
        {dressStyles.map((style) => (
          <motion.div
            key={style.id}
            className="relative"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5 }
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <Image 
              src={style.image}
              alt={style.alt}
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              {style.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DressStyles;