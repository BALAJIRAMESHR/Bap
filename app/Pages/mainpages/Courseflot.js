'use client';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: 'Twitter MBA',
      description: 'The all-new comprehensive course designed to help you master the basics of Twitter and build an audience.',
      category: 'Free Course',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: {
        name: 'Erika Emil',
        role: 'CEO and Host',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      },
      color: 'bg-cyan-400'
    },
    {
      id: 2,
      title: 'Superlearning',
      description: '15 minutes a day to unlock the superlearner in you.',
      category: 'Paid Course',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: {
        name: 'Dominic Zijlstra',
        role: 'Founder at Superlearning',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
      },
      color: 'bg-orange-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Courses built with Float
          </h1>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Course Image with Category Badge */}
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`${course.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {course.category}
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={course.author.avatar} 
                    alt={course.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {course.author.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {course.author.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Courses Placeholder */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4">More courses coming soon</p>
        </div>
      </div>
    </div>
  );
}