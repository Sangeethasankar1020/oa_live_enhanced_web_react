// src/webinar_components/BenefitsSection.tsx
import React from "react";
import { Target, CheckCircle } from "lucide-react";

const BenefitsSection: React.FC<{ benefits: string[] }> = ({ benefits }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <Target className="w-7 h-7 md:w-8 md:h-8 text-blue-600 mr-3" />
        What You'll Learn
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg"
          >
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700 text-sm md:text-base font-medium">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
