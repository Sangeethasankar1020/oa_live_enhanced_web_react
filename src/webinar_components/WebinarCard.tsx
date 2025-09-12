// src/webinar_components/WebinarCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Zap } from "lucide-react";
import { WebinarData } from "../webinar_data/webinardata";

interface WebinarCardProps {
  webinar: WebinarData;
  featured: boolean;
}

const WebinarCard: React.FC<WebinarCardProps> = ({ webinar, featured }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={webinar.thumbnail}
          alt={webinar.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {webinar.isLive && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              LIVE
            </span>
          )}
          {featured && (
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date & Time */}
        <div className="flex items-center gap-4 text-sm text-[#2E81A9] mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1 text-[#034E72]" />
            <span>{formatDate(webinar.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-[#00AEFF]" />
            <span>{webinar.time}</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-[#034E72] mb-2 line-clamp-2 group-hover:text-[#00AEFF] transition-colors">
          {webinar.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
          {webinar.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {webinar.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Instructor Info */}
        <div className="flex items-center space-x-3 my-4">
          <img
            src={webinar.instructorImage}
            alt={webinar.instructor}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-[#034E72] text-sm">
              {webinar.instructor}
            </p>
          </div>
        </div>

        {/* Duration + Free Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-[#2E81A9] bg-[#E6F7FF] px-3 py-1 rounded-full">
            Duration: {webinar.duration}
          </span>
          <div className="flex items-center space-x-2 text-green-600 font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm">Free to join</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          // to={`/webinar/${webinar.id}`}
          className="w-full bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-[#2E81A9] hover:to-[#00AEFF] transition-all duration-300 group"
        >
          <span>Join Free Webinar</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default WebinarCard;
