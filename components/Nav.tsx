import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import { navItems } from '@/data';
import Link from 'next/link';
import MagicButton from './ui/MagicButton';
import { HiBars3BottomRight } from 'react-icons/hi2';

const Nav = () => {
  return (
    <div className="fixed h-[12vh] z-[1000000] bg-purple p-0 border border-white w-full">
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO and Name */}
        <div className="flex items-center space-x-4">
          {/* Circular Logo */}
          <div className="w-16 h-16 rounded-full relative">
            <Image
              src="/logo.jpg" // Ensure the image is in the public folder
              alt="Tonny Murithi Logo"
              layout="fill" // Ensures the image fills the container
              objectFit="cover" // Ensures proper cropping
              className="rounded-full" // Ensures the image itself is rounded
            />
          </div>
          {/* Name */}
          <p className="text-white font-semibold text-lg">Tonny Murithi</p>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-10">
          <div className='hidden lg:flex items-center space-x-8'>
            {navItems.map((item) => (
                <Link key={item.name} href={item.link}>
                   <p className="navitems text-white">{item.name}</p>
                </Link>
            ))}
          </div>
          {/* Button */}
          <div className='flex items-center space-x-4'>
            <MagicButton title='Buy me a coffee' icon={undefined} position={''} otherClasses="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm"/>
                   {/* Burger */}
                   <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Nav