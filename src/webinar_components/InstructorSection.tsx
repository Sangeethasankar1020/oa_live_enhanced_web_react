// src/webinar_components/InstructorSection.tsx
import React from "react";
import { User, Award } from "lucide-react";

interface Instructor {
  name: string;
  image: string;
  expertise: string;
  experience: string;
}

const InstructorSection: React.FC<{ instructors: Instructor[] }> = ({
  instructors,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <User className="w-7 h-7 md:w-8 md:h-8 text-blue-600 mr-3" />
        Meet Your Instructors
      </h2>

      {/* ✅ Responsive flex container */}
      <div className="flex flex-col gap-6">
        {instructors.map((inst, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl flex items-start gap-4 flex-1 min-w-[280px] md:max-w-full"
          >
            <img
              src={inst.image}
              alt={inst.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg"
            />
            <div className="flex flex-col text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                {inst.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-2">
                Expert in {inst.expertise}
              </p>
              <div className="flex items-center text-xs md:text-sm text-gray-700">
                <Award className="w-4 h-4 text-blue-600 mr-1" />
                {inst.experience}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorSection;
