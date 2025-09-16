import React from "react";
import { useParams } from "react-router-dom";
import { coursesdata, Course } from "../course_data/coursedata";
import { CourseDetail } from "../course_components/CourseDetail";
import { CourseSidebar } from "../course_components/CourseSidebar";
import { CourseHeader } from "../course_components/CourseHeader";
import { GeneralTools } from "../course_components/GeneralTools";
import { AiTools } from "../course_components/AiTools";
import { DetailedCourseCta } from "../course_components/DetailedCourseCta";
import { ReviewSection } from "../course_components/ReviewSection";

export const CourseDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const course: Course | undefined = coursesdata.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center text-lg sm:text-xl text-gray-700">
        Course not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Back Button */}
      <CourseHeader />

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8 mt-2">
          <CourseDetail course={course} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <CourseSidebar course={course} />
        </div>
      </div>

      {/* Tools Sections */}
      <GeneralTools />
      <AiTools />
      <div className="">
        <ReviewSection />
      </div>
      <div className="mt-8">
        <DetailedCourseCta />
      </div>
    </div>
  );
};
