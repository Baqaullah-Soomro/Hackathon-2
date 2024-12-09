"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Product data types
interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: number;
}

// Sample product data
const newArrivals: Product[] = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    image: '/images/pic1.png',
    rating: 4.5,
    price: 120
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    image: '/images/pic2.png',
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    image: '/images/pic3.png',
    rating: 3.5,
    price: 180
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    image: '/images/pic4.png',
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30
  }
];

const topSelling: Product[] = [
  {
    id: 5,
    name: 'Vertical Striped Shirt',
    image: '/images/pic5.png',
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discount: 20
  },
  {
    id: 6,
    name: 'Courage Graphic T-shirt',
    image: '/images/pic6.png',
    rating: 4.0,
    price: 145
  },
  {
    id: 7,
    name: 'Loose Fit Bermuda Shorts',
    image: '/images/pic7.png',
    rating: 3.0,
    price: 80
  },
  {
    id: 8,
    name: 'Faded Skinny Jeans',
    image: '/images/pic8.png',
    rating: 4.5,
    price: 210
  }
];

// Reusable Product Card Component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div 
      className="bg-gray-100 p-4 rounded-lg"
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.img 
        src={product.image} 
        alt={product.name} 
        className="w-full mb-4 rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      
      <div className="flex items-center mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={`h-5 w-5 ${star <= Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-400'}`} 
            fill={star <= Math.round(product.rating) ? '#FFC107' : 'none'}
          />
        ))}
        <span className="ml-2 text-gray-600">{product.rating}/5</span>
      </div>
      
      <p className="text-xl font-bold">
        ${product.price}
        {product.originalPrice && (
          <>
            <span className="line-through text-gray-500 ml-2">${product.originalPrice}</span>
            <span className="text-red-500 ml-2">-{product.discount}%</span>
          </>
        )}
      </p>
    </motion.div>
  );
};

// Main Products Component
const ProductsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'new' | 'top'>('new');

  return (
    <div className="container mx-auto p-4">
      {/* Section Toggle */}
      <div className="flex justify-center mb-6">
        <motion.div 
          className="flex bg-gray-100 rounded-full p-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button 
            onClick={() => setActiveSection('new')}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeSection === 'new' 
                ? 'bg-black text-white' 
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            New Arrivals
          </button>
          <button 
            onClick={() => setActiveSection('top')}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeSection === 'top' 
                ? 'bg-black text-white' 
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            Top Selling
          </button>
        </motion.div>
      </div>

      {/* Products Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
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
        {(activeSection === 'new' ? newArrivals : topSelling).map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5 }
              }
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div 
        className="text-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
          View All
        </button>
      </motion.div>
    </div>
  );
};

export default ProductsPage;