"use client";


import { useState } from 'react';
import { Star } from 'lucide-react';

export default function ConveyorWaitlist() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    countryRegion: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Main Content */}
      <div className="flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Join the waitlist
              </h2>
              <p className="text-xl text-gray-700">
                Experience Conveyor AI to build your AI solution in minutes.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" fill="currentColor" />
                <div>
                  <p className="text-lg">
                    Immediately build out workflows{' '}
                    <span className="font-semibold">without any coding experience.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" fill="currentColor" />
                <div>
                  <p className="text-lg">
                    Easily integrate popular{' '}
                    <span className="font-semibold">3rd party</span> machine learning models.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" fill="currentColor" />
                <div>
                  <p className="text-lg">
                    Deploy with the confidence of{' '}
                    <span className="font-semibold">auto-scaling and secure maintenance.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <div className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <div className="block text-sm font-medium text-gray-300 mb-2">
                  Country / Region
                </div>
                <input
                  type="text"
                  name="countryRegion"
                  value={formData.countryRegion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <div className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}