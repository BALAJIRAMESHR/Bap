"use client";
import React, { useState } from 'react';  
import Link from 'next/link';
import { useRouter } from "next/navigation";
// import Image from "./logo.jpg"
import Contact from "../contact/Contact"

const Homepage = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Header Navigation */}
      <header className="relative z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/BAp.png" alt="Logo" className="w-24 h-24 object-contain" />
            {/* <span className="text-xl font-semibold text-gray-900">float</span> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-blue-700 font-bold transition-colors">Home</Link>
            {/* <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link> */}
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Abstract Shapes - Left Side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
          {/* Various abstract shapes */}
          <circle cx="50" cy="100" r="15" fill="#000" />
          <path d="M20 150 Q40 140 60 150 T100 150" stroke="#000" strokeWidth="2" fill="none" />
          <rect x="80" y="200" width="20" height="20" fill="#000" transform="rotate(45 90 210)" />
          <ellipse cx="30" cy="250" rx="25" ry="15" fill="#000" />
          <path d="M70 300 L90 320 M90 300 L70 320" stroke="#000" strokeWidth="3" />
          <circle cx="120" cy="350" r="8" fill="none" stroke="#000" strokeWidth="2" />
          <path d="M10 400 Q30 380 50 400 Q70 420 90 400" stroke="#000" strokeWidth="2" fill="none" />
          <polygon points="130,450 140,470 120,470" fill="#000" />
          <circle cx="60" cy="500" r="12" fill="#000" />
          <path d="M100 520 C120 510 140 530 160 520" stroke="#000" strokeWidth="2" fill="none" />
          
          {/* Dotted patterns */}
          <g fill="#000">
            <circle cx="15" cy="80" r="1.5" />
            <circle cx="25" cy="85" r="1.5" />
            <circle cx="35" cy="90" r="1.5" />
            <circle cx="45" cy="95" r="1.5" />
          </g>
          
          <g fill="#000">
            <circle cx="150" cy="180" r="1.5" />
            <circle cx="160" cy="185" r="1.5" />
            <circle cx="170" cy="190" r="1.5" />
            <circle cx="180" cy="195" r="1.5" />
          </g>
        </svg>
      </div>

      {/* Abstract Shapes - Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
          {/* Hand-like shape */}
          <path d="M300 200 Q320 180 340 200 Q360 220 340 240 Q320 260 300 240 Q280 220 300 200" fill="#000" />
          <ellipse cx="350" cy="160" rx="20" ry="35" fill="#000" transform="rotate(-30 350 160)" />
          
          {/* Various abstract elements */}
          <circle cx="280" cy="300" r="18" fill="#000" />
          <path d="M320 350 Q340 330 360 350 T400 350" stroke="#000" strokeWidth="3" fill="none" />
          <rect x="270" y="400" width="25" height="25" fill="#000" transform="rotate(20 282.5 412.5)" />
          <ellipse cx="350" cy="450" rx="30" ry="20" fill="#000" />
          
          {/* Curved lines */}
          <path d="M250 100 Q270 80 290 100 Q310 120 330 100" stroke="#000" strokeWidth="2" fill="none" />
          <path d="M380 250 Q360 270 340 250 Q320 230 300 250" stroke="#000" strokeWidth="2" fill="none" />
          
          {/* Dotted spiral */}
          <g fill="#000">
            <circle cx="380" cy="380" r="1.5" />
            <circle cx="375" cy="385" r="1.5" />
            <circle cx="370" cy="390" r="1.5" />
            <circle cx="365" cy="395" r="1.5" />
            <circle cx="360" cy="400" r="1.5" />
          </g>
          
          {/* More abstract shapes */}
          <polygon points="250,500 260,520 240,520" fill="#000" />
          <circle cx="310" cy="550" r="10" fill="none" stroke="#000" strokeWidth="2" />
        </svg>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8 text-center">
        {/* Small Label */}
        <div className="inline-block font-semibold px-4 py-2 rounded-full text-sm text-gray-600 mb-2">
         The Agentic Business Workspace for Human-Centric Augmentation
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-6xl font-bold text-black mb-4 leading-tight">
         Your Work, Intelligently <br />
          Augmented.
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 max-w-1xl mx-auto leading-relaxed">
         Designed to fundamentally reshape how organizations and individuals perform their work.
        </p>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
           It
fundamentally reshapes how you work by enhancing human capabilities and focusing your efforts on
high-value activities.
        </p>

        {/* Waitlist Section */}
        <div className="mb-6">
          <p className="text-black font-semibold mb-6">
            Join the waitlist and be among the first to experience intelligent human augmentation!

          </p>

          {/* Email Form */}
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto text-black">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-400 text-blue-800 font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-medium">
              Request access
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Abstract Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 128" fill="none">
          {/* Bottom scattered elements */}
          <circle cx="100" cy="60" r="8" fill="#000" />
          <path d="M200 40 Q220 20 240 40" stroke="#000" strokeWidth="2" fill="none" />
          <rect x="350" y="70" width="15" height="15" fill="#000" transform="rotate(45 357.5 77.5)" />
          <ellipse cx="500" cy="50" rx="20" ry="12" fill="#000" />
          <circle cx="650" cy="80" r="6" fill="none" stroke="#000" strokeWidth="2" />
          <path d="M800 30 L820 50 M820 30 L800 50" stroke="#000" strokeWidth="2" />
          <polygon points="950,60 960,80 940,80" fill="#000" />
          <circle cx="1100" cy="45" r="10" fill="#000" />
        </svg>
      </div>
    </div>
  );
};

export default Homepage;