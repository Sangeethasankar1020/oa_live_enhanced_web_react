import React from "react";
import { Star, Quote } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  role,
  company,
  rating,
  review,
  avatar,
  date,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 hover:border-blue-200 group">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
        {/* Avatar */}
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-100 group-hover:border-blue-200 transition-colors duration-300"
        />

        {/* Content */}
        <div className="flex-1 w-full">
          {/* Name, Role & Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <div>
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                {name}
              </h3>
              <p className="text-sm text-gray-600">
                {role} at {company}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1 mt-2 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    i < rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="relative">
            <Quote className="absolute -top-2 -left-1 w-5 h-5 sm:w-6 sm:h-6 text-blue-200 opacity-50" />
            <p className="text-gray-700 leading-relaxed pl-6 sm:pl-7 text-sm sm:text-base">
              {review}
            </p>
          </div>

          {/* Date */}
          <p className="text-xs text-gray-500 mt-3 sm:mt-4">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
