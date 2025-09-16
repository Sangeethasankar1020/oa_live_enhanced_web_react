import React from "react";
import { toolsdata } from "../course_data/tooldata";

export const GeneralTools = () => {
  const generalTools = toolsdata.filter((tool) => tool.type === "general");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16">
      <h2 className="text-xl sm:text-3xl font-bold text-[#034E72] mb-6">
        10+ Programming Tools, Libraries & Technologies Covered
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {generalTools.map((tool) => (
          <div
            key={tool.id}
            className="flex items-center justify-center bg-white shadow-sm rounded-lg p-1 hover:shadow-md transition"
          >
            <div className="h-20 w-24">
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
