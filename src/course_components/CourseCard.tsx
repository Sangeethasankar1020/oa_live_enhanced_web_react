import React from "react";
import { Clock, Users } from "lucide-react";
import { Course } from "../course_data/coursedata";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onViewDetails,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/course/${course.id}`);
  };
  return (
    <div
      key={course.courseId}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Image */}
      <div className="w-full aspect-[25/9] bg-gray-100">
        <img
          src={course.cardImage}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-contain rounded-t-2xl "
          // draggable={false}
        />
      </div>

      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00AEFF] transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <p className="text-md text-gray-900 mb-2 font-bold">
            Technologies Covered
          </p>
          <div className="flex flex-wrap gap-2">
            {course.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="bg-[#00AEFF] bg-opacity-10 text-[#00AEFF] hover:bg-sky-500 hover:text-white px-2 py-2 font-medium rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
            {course.technologies.length > 3 && (
              <span className="bg-gray-100 text-gray-600 hover:bg-gray-300 hover:text-gray-700 text-xs p-2  rounded-full font-medium">
                +{course.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Duration & Students */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration} Months</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{course.price.toLocaleString()}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ₹{course.originalPrice.toLocaleString()}
            </span>
          </div>
          <div className="bg-[#00AEFF] bg-opacity-10 text-[#00AEFF] px-2 py-1 rounded-full text-xs font-medium">
            {course.discountPercentage}% OFF
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleViewDetails}
          className="w-full bg-[#00AEFF] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#034E72] transition-colors group-hover:shadow-lg group-hover:shadow-blue-500/25"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
