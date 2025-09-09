import React from "react";

export const ReviewCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#034E72] to-[#00AEFF]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
          Ready to Join Our Success Stories?
        </h2>
        <p className="text-md sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Transform your career with Ocean academy’s industry leading courses.
          Start your journey to working with your dream company today.
        </p>

        <button className="bg-white text-[#00AEFF] px-4 sm:px-8 py-4 rounded-full font-semibold">
          Get Started Today
        </button>
      </div>
    </section>
  );
};
