import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 px-6 text-center bg-blue-50">
      <h3 className="text-2xl md:text-3xl font-semibold">
        Ready to join the{" "}
        <span className="bg-gradient-to-r from-[#0E90CF] to-[#034E72] bg-clip-text text-transparent">
          Success stories?
        </span>
      </h3>
      <p className="text-md font-medium sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
        Transform your career with Ocean academy’s industry leading courses.
        Start your journey to working with your dream company today.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="w-[200px] font-semibold bg-gradient-to-r from-[#0E90CF] via-[#0E90CF] to-[#034E72] bg-[length:200%_100%] bg-left hover:bg-right text-white px-6 py-3 rounded-full shadow transition-all duration-500">
          Start Your Journey
        </button>

        <button className=" w-[200px] font-medium border border-gray-800 text-gray-600 px-6 py-3 rounded-full hover:bg-gray-100 transition">
          View Success Stories
        </button>
      </div>
    </section>
  );
};

export default CTASection;
