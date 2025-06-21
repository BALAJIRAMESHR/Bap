'use client';

import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Database, 
  DollarSign, 
  MessageSquare,
  CreditCard,
  TrendingUp,
  Zap,
  BookOpen,
  Users,
  Calendar,
  Eye,
  Heart,
  BarChart3
} from 'lucide-react';

interface CourseData {
  name: string;
  lastUpdated: string;
  created: string;
  status: 'Active' | 'Draft' | 'Completed';
}

interface SalesData {
  course: string;
  date: string;
  amount: string;
  user: string;
  status: 'Completed' | 'Pending' | 'Refunded';
}

interface FeedbackData {
  course: string;
  rating: number;
  comment: string;
  user: string;
  date: string;
}

const courseData: CourseData[] = [
  { name: 'Getting started with Notion templates', lastUpdated: '15 Jan 2024 13:45', created: '10 Jan 2024 09:30', status: 'Active' },
  { name: 'Advanced Notion workflows', lastUpdated: '12 Jan 2024 16:20', created: '08 Jan 2024 14:15', status: 'Active' },
  { name: 'Notion for teams', lastUpdated: '10 Jan 2024 11:30', created: '05 Jan 2024 10:00', status: 'Draft' },
];

const salesData: SalesData[] = [
  { course: 'Getting started with Notion', date: '16 Jan 2024', amount: '$49.00', user: 'john.doe@email.com', status: 'Completed' },
  { course: 'Advanced workflows', date: '15 Jan 2024', amount: '$79.00', user: 'jane.smith@email.com', status: 'Completed' },
  { course: 'Notion for teams', date: '14 Jan 2024', amount: '$99.00', user: 'team@company.com', status: 'Pending' },
];

const feedbackData: FeedbackData[] = [
  { course: 'Getting started', rating: 5, comment: 'Great course! Very helpful for beginners.', user: 'Sarah M.', date: '2 days ago' },
  { course: 'Advanced workflows', rating: 4, comment: 'Good content, could use more examples.', user: 'Mike R.', date: '1 week ago' },
];

export default function ManagePage() {
  const [expandedSections, setExpandedSections] = useState({
    courses: true,
    sales: true,
    feedback: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Draft':
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Refunded':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-12 px-64">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-124 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-3">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>

            {/* Navigation */}
           

            {/* Courses Section */}
            <div className="mb-6 ">
              <button
                className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 hover:bg-yellow-300 rounded bg-yellow-300"
                onClick={() => toggleSection('courses')}
              >
                <div className="flex items-center gap-2 ">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="font-medium text-gray-900 ">Courses</span>
                </div>
                {expandedSections.courses ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </button>
              
              {expandedSections.courses && (
                <div className="mt-2 ml-6 space-y-2">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Course Database</div>
                  {courseData.map((course, index) => (
                    <div key={index} className="bg-gray-50 rounded p-2 text-xs">
                      <div className="font-medium text-gray-900 mb-1 truncate">{course.name}</div>
                      <div className="text-xs text-gray-500 mb-1">
                        <span>Last: {course.lastUpdated.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">Created: {course.created.split(' ')[0]}</span>
                        <span className={`px-1 py-0.5 text-xs rounded ${getStatusColor(course.status)}`}>{course.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sales Section */}
            <div className="mb-6">
              <button
                className="w-full flex items-center justify-between bg-blue-300  hover:bg-blue-300 p-2 text-left hover:bg-gray-50 rounded"
                onClick={() => toggleSection('sales')}
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-500" />
                  <span className="font-medium text-gray-900">Sales</span>
                </div>
                {expandedSections.sales ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {expandedSections.sales && (
                <div className="mt-2 ml-6 space-y-2 ">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Sales Database</div>
                  {salesData.map((sale, index) => (
                    <div key={index} className="bg-gray-50 rounded p-2 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-gray-900 truncate">{sale.course}</div>
                        <div className="font-semibold text-green-600">{sale.amount}</div>
                      </div>
                      <div className="text-xs text-gray-500 mb-1 truncate">{sale.user}</div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">{sale.date}</div>
                        <span className={`px-1 py-0.5 text-xs rounded ${getStatusColor(sale.status)}`}>{sale.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Feedback Section */}
            <div className="mb-6">
              <button
                className="w-full flex items-center justify-between  bg-rose-200 hover:bg-rose-200 p-2 text-left hover:bg-gray-50 rounded"
                onClick={() => toggleSection('feedback')}
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="font-medium text-gray-900">Feedback</span>
                </div>
                {expandedSections.feedback ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {expandedSections.feedback && (
                <div className="mt-2 ml-6 space-y-2">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Feedback Database</div>
                  {feedbackData.map((feedback, index) => (
                    <div key={index} className="bg-gray-50 rounded p-2 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-gray-900 truncate">{feedback.course}</div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-xs ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mb-1 truncate">{feedback.comment}</div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">{feedback.user}</div>
                        <div className="text-xs text-gray-400">{feedback.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-12 bg-gray-50 py-32 flex justify-center">
          <div className="max-w-3xl w-full">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Achieve More. Work Smarter</h1>
              <p className="text-gray-600 leading-relaxed">
               Beyond Tasks, Towards Impact – Unlock Your Organization's True Potential
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              {/* All payments in one place */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Better System Consolidation</h3>
                    <p className="text-gray-600">
                      Unify disparate systems, addressing fragmentation and reducing
complexity and cost.

                    </p>
                  </div>
                </div>
              </div>

              {/* Improve your courses with feedback */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Universal, Intuitive Access</h3>
                    <p className="text-gray-600">
                      BAP is engineered for ease of use, accessible to all, no deep tech
expertise needed

                    </p>
                  </div>
                </div>
              </div>

              {/* Instant Updates */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Space for Human Creativity</h3>
                    <p className="text-gray-600">
                       Liberate human potential from drudgery for strategic thinking and
impactful contributions
                    </p>
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