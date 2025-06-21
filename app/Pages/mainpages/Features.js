'use client';

import { Sparkles, RefreshCw, Zap } from 'lucide-react';

export default function Nation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Centered Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
           Experience the future
          <br />
          of work today
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="flex px-8 pb-16">
        {/* Left Side - Content */}
        <div className="w-1/2 pr-12">

          {/* Main Content */}
          <div>
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-16">
               The Agent Business workspace for Human-Centric Augmentation.
            </h2>
            {/* <p className="text-2xl text-gray-600 mb-24 ">
            
            </p> */}

            {/* Feature List */}
            <div className="space-y-6">
              {/* Interactive course platform */}
              <div className="flex items-start gap-4 mb-18">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                    Unified Agentic Workspace
                  </h3>
                  <p className="text-gray-600 text-2xl ">
                   Your primary interface, reducing context switching for streamlined,
                    intuitive workflows.
                  </p>
                </div>
              </div>

              {/* Syncs with Notion */}
              <div className="flex items-start gap-4 mb-18">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                    Deep Contextual Intelligence
                  </h3>
                  <p className="text-gray-600 text-2xl">
                    Unparalleled relevance powered by user, business, and industry
context. 
                  </p>
                </div>
              </div>

              {/* Super fast */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                    Seamless System Connectivity
                  </h3>
                  <p className="text-gray-600 text-2xl">
                    Integrates external SaaS, protecting investments while enabling
consolidation. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Screenshots */}
        <div className="w-1/2 pl-6 flex flex-col items-end justify-center relative" style={{minHeight: '600px'}}>
          {/* First Screenshot */}
          <div className="max-w-md w-full relative right-60 mb-8 z-20">
            <div className="bg-gray-100 rounded-2xl p-4 shadow-lg">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                {/* Browser Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 inline-block">
                        float.so/course/picking-goals
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    </div>
                    <h3 className="font-semibold text-gray-900">Picking the right goals</h3>
                  </div>
                  
                  {/* Video Placeholder */}
                  <div className="bg-gray-800 rounded-lg aspect-video mb-4 relative overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Course video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-4 border-l-gray-800 border-y-2 border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    This is a sample text of what your course content will look like when you create it in Notion.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>Set specific and measurable objectives</span>
                    </div>
                    {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>Prioritize goals based on impact and feasibility</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Screenshot */}
          <div className="max-w-md w-full relative right-48 z-20">
            <div className="bg-gray-100 rounded-2xl p-4 shadow-lg">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                {/* Browser Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 inline-block">
                        notion.so/workspace/course-content
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Notion Interface */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-24 bg-gray-50 border-r border-gray-200 p-3">
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-gray-900 mb-3">Course Content</div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600 py-1">📋 Overview</div>
                        <div className="text-xs text-gray-600 py-1">🎯 Goals</div>
                        <div className="text-xs text-gray-600 py-1">📊 Tracking</div>
                        <div className="text-xs text-gray-600 py-1">🚀 Strategy</div>
                        <div className="text-xs text-gray-600 py-1">📈 Success</div>
                        <div className="text-xs text-gray-600 py-1">🔄 Improve</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Picking the right goals</h3>
                    </div>
                    
                    {/* Video Placeholder */}
                    <div className="bg-gray-800 rounded-lg aspect-video relative overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Course video"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-3 border-l-gray-800 border-y-2 border-y-transparent ml-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}