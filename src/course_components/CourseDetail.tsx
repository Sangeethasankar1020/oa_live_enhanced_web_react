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
  Award,
  Check,
} from "lucide-react";
import { FaAward, FaCheckCircle } from "react-icons/fa";

import { Course } from "../course_data/coursedata";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiOpenai,
} from "react-icons/si";
import { getTechIcon } from "../course_data/helper";
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
        <div className="lg:col-span-2">
          {/* Course Header Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-44 sm:h-60  bg-gradient-to-br from-[#00AEFF] to-[#034E72] p-4 sm:p-6 lg:p-8">
              {/* Certification Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1.5 sm:py-2">
                  <span className="text-white text-xs sm:text-sm font-medium">
                    Professional Certification Training
                  </span>
                </div>
              </div>

              {/* Tech Stack Icons */}
              <div className="absolute bottom-14 sm:bottom-16 left-4 sm:left-8 flex items-center gap-2 sm:gap-4">
                {course.tags.slice(0, 4).map((tech, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                  >
                    <span className="text-lg sm:text-xl lg:text-2xl">
                      {getTechIcon(tech)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Course Title */}
              <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-8 right-4 sm:right-8">
                <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                  {course.title}
                </h1>
              </div>

              {/* Support & Job Assistance */}
              <div className="hidden sm:flex absolute bottom-4 right-4 sm:right-8 gap-8">
                <div className="flex flex-col items-center text-white text-sm font-medium">
                  <span>24/7</span>
                  <span>Support</span>
                </div>
                <div className="flex flex-col items-center text-white text-sm font-medium">
                  <span>100%</span>
                  <span>Job Assistance</span>
                </div>
              </div>

              {/* Award Badge */}
              <div className="absolute top-3 sm:top-4 right-4 sm:right-8">
                <FaAward className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#FACC15]" />
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {course.description}
              </p>

              {/* Technologies You'll Learn */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Technologies You'll Learn
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                  {course.tags.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-[#00AEFF] bg-opacity-10 border border-[#00AEFF] border-opacity-20 rounded-lg p-2 sm:p-3 text-center"
                    >
                      <span className="text-[#00AEFF] font-medium text-xs sm:text-sm">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Duration Info */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                      Course Duration
                    </h4>
                    <p className="text-sm sm:text-lg font-bold text-gray-900">
                      5-6 Months
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                      Total Hours
                    </h4>
                    <p className="text-sm sm:text-lg font-bold text-gray-900">
                      180 Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-4 sm:p-6">
          <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">
            {course.description}
          </p>

          {/* Technologies */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">
              Technologies You'll Learn
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {course.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[#00AEFF] bg-opacity-10 rounded-lg px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs lg:text-sm font-medium text-[#00AEFF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Duration + Hours */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Course Duration
                </h4>
                <p className="text-sm sm:text-lg font-bold text-gray-900">
                  {course.duration} Months
                </p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-600 mb-1 sm:mb-2">
                  Total Hours
                </h4>
                <p className="text-sm sm:text-lg font-bold text-gray-900">
                  {course.totalHours} Hours
                </p>
              </div>
            </div>
          </div>

          {/* Icons Section */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-4 sm:mt-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="text-[#00AEFF] w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="text-gray-900 font-medium text-[10px] sm:text-sm lg:text-base">
                Expert Instructors
              </span>
              <span className="text-gray-600 text-[9px] sm:text-xs lg:text-sm">
                Industry professionals
              </span>
            </div>
            <div className="flex flex-col items-center">
              <BadgeCheck className="text-[#00AEFF] w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="text-gray-900 font-medium text-[10px] sm:text-sm lg:text-base">
                Certification
              </span>
              <span className="text-gray-600 text-[9px] sm:text-xs lg:text-sm">
                Industry Recognized
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="text-[#00AEFF] w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="text-gray-900 font-medium text-[10px] sm:text-sm lg:text-base">
                Both Formats
              </span>
              <span className="text-gray-600 text-[9px] sm:text-xs lg:text-sm">
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
