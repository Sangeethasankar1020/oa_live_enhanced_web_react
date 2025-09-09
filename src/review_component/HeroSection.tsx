import React from "react";
import { studentStats } from "../review_data/studentsData";

export const HeroSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Top Badge */}
        <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
          ⭐ Trusted by thousands worldwide
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          What Our Students <span className="text-[#00AEFF]">Say</span>
        </h2>
        <p className="text-md sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Discover authentic stories and experiences from our valued customers.
          Their success is our greatest achievement.
        </p>

        {/* Stats Grid */}
        <div className="flex gap-4 sm:gap-6 items-center justify-between flex-col sm:flex-row w-full max-w-2xl mx-auto">
          {studentStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white w-full sm:max-w-[250px] max-sm:flex-1 rounded-xl shadow-md hover:shadow-xl p-2 sm:p-6 flex flex-col items-center"
              >
                <div
                  className="p-4 rounded-xl mb-2"
                  style={{ backgroundColor: stat.bg }}
                >
                  <Icon className="w-6 h-6 " style={{ color: stat.color }} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">{stat.value}</h3>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
