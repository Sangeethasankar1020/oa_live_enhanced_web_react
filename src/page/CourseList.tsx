import { div } from "framer-motion/client";
import React from "react";
import { CourseHeroSection } from "../course_components/CourseHeroSection";
import { CourseCategory } from "../course_components/CourseCategory";

export const CourseList = () => {
  return (
    <div>
      <CourseHeroSection />
      <CourseCategory />
    </div>
  );
};
