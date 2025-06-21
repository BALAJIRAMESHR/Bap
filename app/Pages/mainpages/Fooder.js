'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Row - Logo Left, Useful Links Right */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Left Side - Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src="/Bap_full.png" 
              alt="BAP Logo" 
              className="w-64 h-64 object-contain" 
            />
          </div>
          
          {/* Right Side - Navigation Links */}                
          <div className="flex flex-col items-center space-y-4">                           
            <h2 className='text-gray-800 font-bold text-lg'>Useful Links</h2>
            <div className="flex flex-col items-center space-y-3">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Home
              </Link>
              <div className="w-12 h-px bg-gray-300"></div>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
                
        {/* Bottom - Copyright */}
        <div className="text-center pt-6 border-t border-gray-100">
          <p className="text-gray-600 text-sm">
            All rights reserved <span className="font-bold">@ BAP 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;