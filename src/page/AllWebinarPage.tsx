// src/pages/AllWebinarsPage.tsx
import React from "react";
import { mockWebinars } from "../webinar_data/webinardata";
import WebinarCard from "../webinar_components/WebinarCard";
import { WebinarPageHeader } from "../webinar_components/WebinarPageHeader";

export const AllWebinarsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      {" "}
      {/* light bg */}
      <WebinarPageHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Webinar Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockWebinars.map((webinar) => (
            <WebinarCard
              key={webinar.id}
              webinar={webinar}
              featured={webinar.featured}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
