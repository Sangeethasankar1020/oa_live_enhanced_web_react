import React from "react";
import { Star, ThumbsUp, Shield, CheckCircle } from "lucide-react";
import { reviews } from "../review_data/video_testimonials";
import ReviewCard from "./ReviewCard";

const GoogleReviews: React.FC = () => {
  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-green-600" />
            <span className="text-green-600 font-semibold">Google Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
            Real Experiences Real Impact
          </h2>
          <p className="text-md sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our Students have to say
            about their experience
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="relative">
              <ReviewCard
                name={review.name}
                role={review.role}
                company={review.company}
                rating={review.rating}
                review={review.review}
                avatar={review.avatar}
                date={review.date}
              />
              {review.verified && (
                <div className="absolute top-4 right-4">
                  <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
