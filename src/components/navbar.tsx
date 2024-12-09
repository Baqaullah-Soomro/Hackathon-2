'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Sign up and get 20% off your first order. 
        <Link href="#" className="underline ml-2">Sign Up Now</Link>
      </div>

      {/* Navigation Bar */}
      <nav className="relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <div 
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </div>

          {/* Logo */}
          <Link href="/" className="text-3xl font-bold">
            SHOP.CO
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <div 
              className="relative group"
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              <button className="text-black flex items-center">
                Shop
                <i className="fas fa-chevron-down ml-2"></i>
              </button>
              {isShopDropdownOpen && (
                <div className="absolute z-10 bg-white shadow-lg mt-2 rounded-md">
                  {['Category 1', 'Category 2', 'Category 3'].map((category) => (
                    <Link 
                      key={category} 
                      href="#" 
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {['On Sale', 'New Arrivals', 'Brands'].map((link) => (
              <Link key={link} href="#" className="text-black">
                {link}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border rounded-lg overflow-hidden">
            <i className="fas fa-search text-gray-500 p-2"></i>
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="p-2 w-64 focus:outline-none"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Link href="#" className="text-2xl relative">
              <i className="fas fa-search md:hidden"></i>
              <i className="fas fa-search hidden md:inline"></i>
            </Link>

            {/* Cart Icon with Item Count */}
            <Link href="/cart" className="text-2xl relative ">
              <i className="fas fa-shopping-cart"></i>
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>

            {/* Login/Account Icon */}
            <Link href="/login" className="text-2xl relative">
              <i className="fas fa-user-circle"></i>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10">
            <div className="flex flex-col">
              {/* Shop Dropdown */}
              <div 
                className="px-4 py-2 border-b flex justify-between items-center"
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
              >
                Shop
                <i className={`fas ${isShopDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </div>
              {isShopDropdownOpen && (
                <div>
                  {['Category 1', 'Category 2', 'Category 3'].map((category) => (
                    <Link 
                      key={category} 
                      href="#" 
                      className="block px-4 py-2 border-b hover:bg-gray-100"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}

              {/* Other Navigation Links */}
              {['On Sale', 'New Arrivals', 'Brands'].map((link) => (
                <Link 
                  key={link} 
                  href="#" 
                  className="px-4 py-2 border-b hover:bg-gray-100"
                >
                  {link}
                </Link>
              ))}

              {/* Mobile Additional Links */}
              <Link href="/cart" className="px-4 py-2 border-b hover:bg-gray-100 flex justify-between items-center">
                Cart
                {cartItems > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Link>
              <Link href="/login" className="px-4 py-2 border-b hover:bg-gray-100">
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;