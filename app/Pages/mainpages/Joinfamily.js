"use client";

import React, { useState } from 'react';

const PricingComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Free Plan */}
          <div 
            className={`bg-gray-900 rounded-lg p-8 border-2 cursor-pointer transition-all duration-300 hover:border-blue-400 ${
              selectedPlan === 'free' ? 'border-blue-500' : 'border-gray-700'
            }`}
            onClick={() => setSelectedPlan('free')}
          >
            <div className="mb-8">
              <div className="mb-4">
                 <span className="text-white text-3xl font-bold"> Free </span><br>
                </br>
                <span className="text-gray-400 text-md ml-1"><span className="text-white text-3xl font-bold">Standard</span>  </span>
             
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400 text-sm">Unlimited basic operation</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400 text-sm">Limited Reasoning</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400 text-sm">Planning & Integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400 text-sm">Basic model access</span>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div 
            className={`bg-gray-900 rounded-lg p-8 border-2 relative cursor-pointer transition-all duration-300 hover:border-blue-400 ${
              selectedPlan === 'pro' ? 'border-blue-500' : 'border-gray-700'
            }`}
            onClick={() => setSelectedPlan('pro')}
          >
            {selectedPlan === 'pro' && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Popular
                </span>
              </div>
            )}
            
            <div className="mb-8">
              <div className="mb-4">
                <span className="text-white text-3xl font-bold"> $20  </span><br>
                </br>
                <span className="text-gray-400 text-md ml-1"><span className="text-white text-3xl font-bold">Pro</span>  (Individual)</span>
             
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400 text-sm">Unlimited Advanced operations</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400 text-sm">Unlimited Reasoning, Planning & Integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400 text-sm">Advanced Models access</span>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div 
            className={`bg-gray-900 rounded-lg p-8 border-2 cursor-pointer transition-all duration-300 hover:border-blue-400 ${
              selectedPlan === 'enterprise' ? 'border-blue-500' : 'border-gray-700'
            }`}
            onClick={() => setSelectedPlan('enterprise')}
          >
            <div className="mb-8">
              <div className="mb-4">
                <span className="text-white text-3xl font-bold"> $50  </span><br>
                </br>
                <span className="text-gray-400 text-md ml-1"><span className="text-white text-3xl font-bold">Enterprise</span>  (For teams)</span>
             
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className=" text-gray-400 text-sm">Pro + Customer Portal (For management)</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400 text-sm">Digital Twin building</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400  text-sm">Trust center access</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400 text-sm">Data security & Governance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Join Waitlist Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;