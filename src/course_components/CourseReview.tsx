import React from "react";
import { Star, CheckCircle } from "lucide-react";

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
    <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-500 p-4 sm:p-6 border border-gray-100 hover:border-blue-200 group h-full flex flex-col w-full max-w-full sm:max-w-md mx-auto transform hover:scale-105 sm:min-h-[200px]">
      {/* Verified Badge */}
      {verified && (
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
          <div className="bg-green-50 border border-green-200 text-green-700 text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full flex items-center space-x-1">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Verified</span>
          </div>
        </div>
      )}

      {/* Stars */}
      <div className="absolute top-12 right-2 sm:top-14 sm:right-4 z-10 flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-200 fill-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Profile */}
      <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
        <div className="relative flex-shrink-0">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-100 group-hover:border-blue-200 transition-all duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                name
              )}&background=3B82F6&color=fff&size=56`;
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg leading-tight">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-tight">
            {role}
          </p>
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm flex-1 line-clamp-5">
        "{review}"
      </p>
    </div>
  );
};
