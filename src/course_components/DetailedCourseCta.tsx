import React from "react";

export const DetailedCourseCta = () => {
  return (
    <section className="py-16 bg-[#E5F4FF]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6">
          Transform Your <span className="text-[#00AEFF]">Future</span> with
          Programming Skills
        </h2>
        <p className="text-md sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of learners who have transformed their careers through
          our comprehensive programming education.
        </p>

        <button className="bg-[#00AEFF] text-white px-6 sm:px-8 py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-shadow">
          Get Started Today
        </button>
      </div>
    </section>
  );
};
