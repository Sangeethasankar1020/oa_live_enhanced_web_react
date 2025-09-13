// src/webinar_components/AgendaSection.tsx
import React from "react";
import { Play } from "lucide-react";

const AgendaSection: React.FC<{ agenda: string[] }> = ({ agenda }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <Play className="w-7 h-7 md:w-8 md:h-8 text-[#FDCE5C] mr-3" />
        Webinar Agenda
      </h2>
      <div className="space-y-4">
        {agenda.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 border-l-4 border-[#FDCE5C] bg-gray-50 rounded-r-lg hover:bg-blue-50 transition-colors"
          >
            <div className="bg-[#FDCE5C] text-gray-800 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold text-xs md:text-sm">
              {index + 1}
            </div>
            <span className="text-gray-700 text-sm md:text-base font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaSection;
