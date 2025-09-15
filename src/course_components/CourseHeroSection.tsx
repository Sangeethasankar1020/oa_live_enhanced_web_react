import { Search } from "lucide-react";
import React from "react";

export const CourseHeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            Master Your Skills with Expert-Led Courses
          </h1>
          <p className="text-md sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students learning cutting-edge technologies from
            industry experts. Build real projects and advance your career.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl sm:max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses, technologies, or topics..."
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2 sm:py-4 rounded-xl text-gray-900 text-[14px] sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
