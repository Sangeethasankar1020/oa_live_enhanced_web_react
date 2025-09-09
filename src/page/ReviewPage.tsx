import React from "react";
import { HeroSection } from "../review_component/HeroSection";
import VideoTestimonialsSection from "../review_component/VideoTestimonialsSection";
import GoogleReviews from "../review_component/GoogleReviews";
import { ReviewCTA } from "../review_component/ReviewCTA";

export const ReviewPage = () => {
  return (
    <div>
      <HeroSection />
      <VideoTestimonialsSection />
      <GoogleReviews />
      <ReviewCTA />
    </div>
  );
};
