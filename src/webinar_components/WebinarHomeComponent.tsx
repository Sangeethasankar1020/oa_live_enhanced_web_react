import React from "react";
import { useNavigate } from "react-router-dom";
import { mockWebinars } from "../webinar_data/webinardata";
import { AdSection } from "./AdSection";
import { adData } from "../webinar_data/addata";
import { FeaturedWebinarSection } from "./FeaturedWebinarSection";

export const WebinarHomeComponent: React.FC = () => {
  const navigate = useNavigate();

  // Featured webinar
  const featuredWebinar = mockWebinars.find((w) => w.featured);

  const goToSingleWebinar = (webinarId: string) => {
    navigate(`/webinar/${webinarId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {featuredWebinar && (
        <AdSection data={adData} webinarId={featuredWebinar.id} />
      )}

      {/* Featured Webinar */}
      {featuredWebinar && (
        <FeaturedWebinarSection
          webinar={featuredWebinar}
          onRegister={goToSingleWebinar}
        />
      )}
    </div>
  );
};
