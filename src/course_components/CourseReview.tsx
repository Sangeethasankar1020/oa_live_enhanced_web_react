import React from "react";
import { Quote, Star, CheckCircle } from "lucide-react";

export interface ReviewCardProps {
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  avatar: string;
  verified?: boolean;
}

export const CourseReview: React.FC<ReviewCardProps> = ({
  name,
  role,
  company,
  rating,
  review,
  avatar,
  verified = false,
}) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 group h-full min-h-[300px] flex flex-col">
      {/* Verified Badge */}
      {verified && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full flex items-center space-x-1">
            <CheckCircle className="w-3 h-3" />
            <span>Verified</span>
          </div>
        </div>
      )}

      {/* Header with Avatar and Info */}
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 group-hover:border-blue-200 transition-colors duration-300 flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-lg truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{role}</p>
          <p className="text-sm text-blue-600 font-medium">{company}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Review Content */}
      <div className="relative flex-1 flex flex-col">
        <Quote className="absolute -top-1 -left-1 w-6 h-6 text-blue-200 opacity-50" />
        <p className="text-gray-700 leading-relaxed pl-7 text-sm flex-1">
          {review}
        </p>
      </div>
    </div>
  );
};
