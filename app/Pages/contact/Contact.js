"use client";

import React, { useState } from 'react';

const AirtableLanding = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
    

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-12 gap-12">
        {/* Left Side - Content */}
        <div className="flex-1 space-y-8">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Leading in Magic</span>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Explore how Airtable can work <span className="text-blue-600">for you.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Airtable has helped 500,000+ organizations build countless workflows across sales, marketing, product development, team operations, and more.
            </p>
          </div>

          {/* Trusted By Section */}
          <div>
            <p className="text-sm text-gray-500 mb-4">Trusted by 45% of the Fortune 500</p>
            <div className="flex items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">AWS</div>
              <div className="text-2xl font-bold text-gray-400">Netflix</div>
              <div className="text-2xl font-bold text-gray-400">HBO</div>
              <div className="text-2xl font-bold text-gray-400">Shopify</div>
              <div className="text-2xl font-bold text-gray-400">Volvo</div>
            </div>
          </div>

          {/* Questions Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Questions?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you're experiencing technical issues, or if you have any questions about our platform features, we're here to help.
            </p>
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Email with support
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-96">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Contact our sales team</h2>
            
            <form className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div>
                <input
                  type="email"
                  name="workEmail"
                  placeholder="Work Email"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Company and Job Title */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-500"
                >
                  <option value="">Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Help Question */}
              <div>
                <select
                  name="helpQuestion"
                  value={formData.helpQuestion}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-500"
                >
                  <option value="">How can our team help?</option>
                  <option value="demo">Request a demo</option>
                  <option value="pricing">Get pricing information</option>
                  <option value="questions">Ask questions</option>
                </select>
              </div>

              {/* Looking For */}
              <div>
                <select
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-500"
                >
                  <option value="">What are you looking to use this for?</option>
                  <option value="project">Project management</option>
                  <option value="crm">CRM</option>
                  <option value="inventory">Inventory tracking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Privacy Notice */}
              <div className="text-xs text-gray-500 leading-relaxed">
                By clicking "Submit", I agree to Airtable's <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>. You may receive marketing emails from Airtable, and can unsubscribe at any time. View our full privacy policy.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Platform */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Platform Overview</a></li>
                <li><a href="#" className="hover:text-gray-900">Integrations</a></li>
                <li><a href="#" className="hover:text-gray-900">Extensions</a></li>
                <li><a href="#" className="hover:text-gray-900">AI</a></li>
                <li><a href="#" className="hover:text-gray-900">App Building</a></li>
                <li><a href="#" className="hover:text-gray-900">Connected Data</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Product</a></li>
                <li><a href="#" className="hover:text-gray-900">Marketing</a></li>
                <li><a href="#" className="hover:text-gray-900">Operations</a></li>
                <li><a href="#" className="hover:text-gray-900">Sales</a></li>
                <li><a href="#" className="hover:text-gray-900">Human Resources</a></li>
                <li><a href="#" className="hover:text-gray-900">Finance</a></li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Events</a></li>
                <li><a href="#" className="hover:text-gray-900">Video Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Customer Stories</a></li>
                <li><a href="#" className="hover:text-gray-900">Webinars</a></li>
                <li><a href="#" className="hover:text-gray-900">eBooks</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Partners</a></li>
                <li><a href="#" className="hover:text-gray-900">Services</a></li>
                <li><a href="#" className="hover:text-gray-900">Developers</a></li>
                <li><a href="#" className="hover:text-gray-900">Community</a></li>
                <li><a href="#" className="hover:text-gray-900">Templates</a></li>
                <li><a href="#" className="hover:text-gray-900">Universe</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Press</a></li>
                <li><a href="#" className="hover:text-gray-900">Media</a></li>
                <li><a href="#" className="hover:text-gray-900">Newsroom</a></li>
                <li><a href="#" className="hover:text-gray-900">Available for hire</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-200">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Security</span>
              <span>API</span>
              <span>Sitemap</span>
              <span>Privacy</span>
              <span>Terms</span>
              <span>Do Not Sell My Info</span>
              <span>Cookie Preferences</span>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="bg-black text-white px-3 py-1 rounded text-xs">App Store</div>
              <div className="bg-black text-white px-3 py-1 rounded text-xs">Google Play</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AirtableLanding;