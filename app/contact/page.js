"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    jobTitle: '',
    country: '',
    helpQuestion: '',
    lookingFor: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header Navigation */}
      <header className="relative z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
                     <img src="/BAp.png" alt="Logo" className="w-24 h-24 object-contain" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="/contact" className="text-blue-700 font-bold transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-12 gap-16">
        {/* Left Side - Content (Smaller and Center Aligned) */}
        <div className="lg:w-2/5 flex flex-col justify-center items-center text-center space-y-4">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Leading in Magic</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Explore how BAP can work <span className="text-blue-600">for you.</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto">
              We understand the daily frustrations of fragmented tools and repetitive tasks, and we believe there's a better way to work.
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form (Wider) */}
        <div className="lg:w-3/5 flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Contact  Team</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> Email
                </label>
                <input
                  type="email"
                  name="workEmail"
                  placeholder="Email"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> Phone Number
                </label>
                <div className="flex">
                  <div className="flex items-center px-4 py-3 border border-gray-300 border-r-0 rounded-l-lg bg-gray-50">
                    <img 
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDA1MkZGIi8+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI4IiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjAiIHk9IjE2IiB3aWR0aD0iMjQiIGhlaWdodD0iOCIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K" 
                      alt="US Flag" 
                      className="w-5 h-4 mr-2"
                    />
                    <span className="text-sm text-gray-600">+1</span>
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Company and Job Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                >
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="jp">Japan</option>
                  <option value="in">India</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Help Question */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> How can our team help?
                </label>
                <select
                  name="helpQuestion"
                  value={formData.helpQuestion}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                >
                  <option value="">How can our team help?</option>
                  <option value="demo">Request a demo</option>
                  <option value="pricing">Get pricing information</option>
                  <option value="questions">Ask questions about features</option>
                  <option value="support">Technical support</option>
                  <option value="partnership">Partnership opportunities</option>
                </select>
              </div>

              {/* Looking For */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> How are you looking to use BAP?
                </label>
                <select
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                >
                  <option value="">What are you looking to use this for?</option>
                  <option value="project">Project management</option>
                  <option value="crm">CRM & Sales tracking</option>
                  <option value="inventory">Inventory management</option>
                  <option value="marketing">Marketing campaigns</option>
                  <option value="hr">Human resources</option>
                  <option value="product">Product development</option>
                  <option value="operations">Operations</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Privacy Notice */}
              <div className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                By clicking "Submit", I acknowledge and understand that my personal information may be collected and used as described in  
                <a href="#" className="text-blue-600 hover:underline ml-1">BAP's Privacy Policy</a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
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
    </div>
  );
};

export default ContactPage;