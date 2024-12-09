"use client"

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const paymentLogos = [
    { src: '/icons/Visa.svg', alt: 'Visa' },
    { src: '/icons/paypal.svg', alt: 'PayPal' },
    { src: '/icons/mastercard.svg', alt: 'MasterCard' },
    { src: '/icons/applePay.svg', alt: 'Apple Pay' },
    { src: '/icons/googlePay.svg', alt: 'Google Pay' }
  ];

  return (
    <footer className="bg-white">
      <div className="bg-black rounded-2xl text-white text-center py-8">
        <h2 className="text-3xl font-bold">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="mt-4 flex justify-center">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="p-3 rounded-l-full text-black w-64 md:w-96" 
          />
          <button className="bg-black text-white p-3 rounded-2xl">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold">SHOP.CO</h3>
            <p className="mt-2 text-gray-600">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black"><FaTwitter /></a>
              <a href="#" className="text-gray-600 hover:text-black"><FaFacebook /></a>
              <a href="#" className="text-gray-600 hover:text-black"><FaInstagram /></a>
              <a href="#" className="text-gray-600 hover:text-black"><FaGithub /></a>
            </div>
          </div>

          {[
            { title: 'COMPANY', links: ['About', 'Features', 'Works', 'Career'] },
            { title: 'HELP', links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
            { title: 'FAQ', links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
            { title: 'RESOURCES', links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'] }
          ].map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-xl font-bold">{section.title}</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-black">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-4 text-gray-600 text-center">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="mt-4 flex justify-center space-x-4">
            {paymentLogos.map((logo, index) => (
              <img 
                key={index} 
                src={logo.src} 
                alt={`${logo.alt} logo`} 
                width={40} 
                height={20} 
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;