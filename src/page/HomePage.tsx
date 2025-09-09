import React from "react";
import CompaniesSection from "../home_components/CompaniesSection";
import CTASection from "../home_components/CTASection";
import CommunitySection from "../home_components/CommunitySection";

export const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      <CompaniesSection />
      <CTASection />
      <CommunitySection />
    </div>
  );
};
