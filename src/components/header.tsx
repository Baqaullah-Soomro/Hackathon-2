'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import anime from'animejs';

const headerLogos = [
  {
    src: "/icons/versace-logo.svg",
    alt: "Versace logo",
    width: 100,
    height: 50
  },
  {
    src: "/icons/zara-logo.svg", 
    alt: "Zara logo",
    width: 100,
    height: 50
  },
  {
    src: "/icons/gucci-logo.svg",
    alt: "Gucci logo", 
    width: 100,
    height: 50
  },
  {
    src: "/icons/prada-logo.svg",
    alt: "Prada logo",
    width: 100,
    height: 50
  },
  {
    src: "/icons/calvin-klein-logo.svg",
    alt: "Calvin Klein logo",
    width: 100,
    height: 50
  }
];

const Header: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run animations if refs are available
    if (titleRef.current && paragraphRef.current && imageRef.current) {
      // Title animation
      anime({
        targets: titleRef.current,
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 1000
      });

      // Paragraph animation
      anime({
        targets: paragraphRef.current,
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 1000,
        delay: 300
      });

      // Image animation
      anime({
        targets: imageRef.current,
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 1000,
        delay: 600
      });

      // Logo animations
      anime({
        targets: '.brand-logo',
        scale: [0.7, 1],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: 'easeOutElastic(1, .8)'
      });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 
              ref={titleRef} 
              className="text-4xl md:text-5xl text-black font-bold leading-tight mb-4 opacity-0"
            >
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p 
              ref={paragraphRef} 
              className="text-lg mb-6 opacity-0"
            >
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <Link 
              href="/shop" 
              className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              Shop Now
            </Link>
          </div>
          <div 
            ref={imageRef} 
            className="md:w-1/2 flex justify-center opacity-0"
          >


<section className="relative md:px-4 min-h-[200px] md:min-w-[480px] md:min-h-[480px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          <Image
            priority
            src="/icons/big-star.svg"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
          />
          <Image
            priority
            src="/icons/small-star.svg"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]"
          />
        </section>
          </div>
          
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-black py-4">
        <div className="container mx-auto flex flex-wrap justify-around items-center space-x-4">
          {headerLogos.map((logo, index) => (
            <Image 
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="brand-logo h-12 opacity-0 my-2"
            />
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;