import React, { useState } from "react";
import {
  Clock,
  Star,
  CheckCircle,
  Users,
  BadgeCheck,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Course } from "../course_data/coursedata";

interface CourseDetailProps {
  course: Course;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  const [openModule, setOpenModule] = useState(0);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? -1 : index);
  };

  return (
    <>
      {/* Course Header */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative w-[520px] sm:w-full h-36 sm:h-48 sm:aspect-[49/13] bg-red-300">
          <img
            src={course.bannerImage}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 sm:p-6">
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            {course.description}
          </p>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Technologies You'll Learn
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[#00AEFF] bg-opacity-10 rounded-lg px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-[#00AEFF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Duration + Hours */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">
                  Course Duration
                </h4>
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  {course.duration} Months
                </p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">
                  Total Hours
                </h4>
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  {course.totalHours} Hours
                </p>
              </div>
            </div>
          </div>

          {/* Icons Section */}
          <div className="grid grid-cols-3 gap-0 sm:gap-6 mt-2 sm:mt-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="text-[#00AEFF] mb-1" />
              <span className="text-gray-900 font-medium text-[12px] sm:text-base">
                Expert Instructors
              </span>
              <span className="text-gray-600 text-[10px] sm:text-sm">
                Industry professionals
              </span>
            </div>
            <div className="flex flex-col items-center">
              <BadgeCheck className="text-[#00AEFF] mb-1" />
              <span className="text-gray-900 font-medium text-[12px] sm:text-base">
                Certification
              </span>
              <span className="text-gray-600 text-[10px] sm:text-sm">
                Industry Recognized
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="text-[#00AEFF] mb-1" />
              <span className="text-gray-900 font-medium text-[12px] sm:text-base">
                Both Formats
              </span>
              <span className="text-gray-600 text-[10px] sm:text-sm">
                Online / Offline
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <section className="mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#034E72] mb-6">
          Course Curriculum
        </h2>
        <div className="space-y-6">
          {course.modules.map((module: Course["modules"][number], index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleModule(index)}
                className="w-full flex items-center justify-between bg-[#00AEFF] bg-opacity-10 border-[#00AEFF] border-l-4 px-4 sm:px-6 py-4 sm:py-6 text-left"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#00AEFF]">
                  {module.moduleName}
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  {openModule === index ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronUp size={18} />
                  )}
                </div>
              </button>

              {/* Expandable Content */}
              {openModule === index && (
                <div className="p-4 sm:p-6 space-y-3 bg-[#00AEFF] bg-opacity-10 border-[#00AEFF] border-l-4">
                  {/* Topics */}
                  <div>
                    <h4 className="font-medium text-[#034E72] mb-2 text-sm sm:text-base">
                      Topics Covered:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {module.topicsCovered.map((topic, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-700 text-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#00AEFF]"></div>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  {module.handsOnProjects.length > 0 && (
                    <div>
                      <h4 className="font-medium text-[#034E72] mb-2 text-sm sm:text-base">
                        Hands-on Projects:
                      </h4>
                      <ul className="space-y-1">
                        {module.handsOnProjects.map((project, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-gray-700 text-sm"
                          >
                            <Star size={14} className="text-[#00AEFF]" />
                            <span className="font-medium">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Prerequisites */}
      {course.prerequisites?.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#034E72] mb-6">
            Prerequisites
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <ul className="space-y-3">
              {course.prerequisites.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base"
                >
                  <CheckCircle
                    size={18}
                    className="text-gray-400 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
