import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Course, coursesdata } from "../course_data/coursedata";
import { CourseCard } from "./CourseCard";

export const CourseCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("Most popular");
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Most popular",
    "Full stack",
    "Frontend",
    "Backend",
    "Mobile",
    "Design",
  ];

  // Filter logic
  const filteredCourses: Course[] =
    selectedCategory === "Most popular"
      ? coursesdata // show all for "Most popular"
      : coursesdata.filter(
          (course) =>
            course.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Buttons (Desktop/Tablet) */}
        <div className="hidden sm:flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#00AEFF] text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="relative sm:hidden flex justify-center mb-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full max-w-xs flex items-center justify-between px-4 py-3 rounded-full bg-[#00AEFF] text-white font-medium shadow-md transition"
          >
            {selectedCategory}
            <ChevronDown
              className={`ml-2 h-5 w-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full mt-2 w-full max-w-xs bg-white border rounded-xl shadow-lg overflow-hidden z-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 transition ${
                    selectedCategory === category
                      ? "bg-[#00AEFF] text-white"
                      : "text-gray-700 hover:bg-[#E6F7FF]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course.courseId}
                course={course}
                onViewDetails={(course) => console.log("View course:", course)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No courses available in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
