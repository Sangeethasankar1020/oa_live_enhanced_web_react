import React from "react";
import { CheckCircle, Download } from "lucide-react";
import { Course } from "../course_data/coursedata";

interface CourseSidebarProps {
  course: Course;
}

export const CourseSidebar: React.FC<CourseSidebarProps> = ({ course }) => {
  return (
    <div className="space-y-6 sticky top-6">
      {/* Pricing Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl font-bold text-gray-900">
              ₹{course.price.toLocaleString()}
            </span>
            {course.originalPrice > course.price && (
              <span className="text-lg text-gray-500 line-through">
                ₹{course.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {course.discountPercentage > 0 && (
            <span className="inline-block bg-[#00AEFF] text-white px-3 py-1 rounded-full text-sm font-semibold">
              {course.discountPercentage}% OFF
            </span>
          )}
        </div>

        <button className="w-full py-4 bg-[#00AEFF] hover:bg-[#034E72] text-white font-bold rounded-lg transition-all duration-200 mb-4 text-lg">
          Enroll Now
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#00AEFF] bg-opacity-10 text-[#00AEFF] font-semibold rounded-lg transition-all duration-200 mb-4 text-lg">
          <Download size={20} /> Download PDF
        </button>
      </div>

      {/* What You’ll Learn */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          What you'll learn
        </h3>
        <div className="space-y-3">
          {course.whatYouWillLearn.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
