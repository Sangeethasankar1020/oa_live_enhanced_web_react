import React from "react";
import { stats } from "../service_data/service";

export const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[350px] sm:max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center bg-white rounded-xl p-3 sm:p-6">
          <div className="text-blue-600 mb-2 flex justify-center">
            <stat.icon className="w-6 h-6 text-[2B7FFF]" />
          </div>
          <div className="text-xl sm:text-3xl font-bold text-gray-800 mb-1">
            {stat.number}
          </div>
          <div className="text-gray-600 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
