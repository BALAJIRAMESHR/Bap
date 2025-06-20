import React from 'react';

const JoinFamilyFloat = () => {
  return (
    <div className="bg-slate-800 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Header Text */}
        <div className="mb-8">
          <p className="text-blue-400 text-sm font-medium mb-2">What's a pricing</p>
          <h1 className="text-white text-3xl font-bold mb-4">
            Join the family and get Float
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            It's free to try it out. Then it's just a simple one-time payment of $10 and you get
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-lg p-8 shadow-xl">
          {/* Plan Name */}
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
              FOREVER
            </span>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold text-gray-900">$10</span>
              <span className="text-gray-500 text-sm">one-time payment</span>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-left">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 text-sm">Unlimited for all and many more places</span>
            </div>

            <div className="flex items-center gap-3 text-left">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 text-sm">Notion dashboard</span>
            </div>

            <div className="flex items-center gap-3 text-left">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 text-sm">Email support</span>
            </div>

            <div className="flex items-center gap-3 text-left">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-gray-700 text-sm">Unlimited feedback and payments</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            Get started for free
          </button>

          {/* Fine Print */}
          <p className="text-gray-500 text-xs mt-4">
            No credit card required. Cancel anytime.
          </p>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-400 text-sm mt-8">
          Try it for free, no credit card required
        </p>
      </div>
    </div>
  );
};

export default JoinFamilyFloat;