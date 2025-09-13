// src/webinar_components/HeroSection.tsx
import React from "react";
import { Calendar, Clock, Star } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { WebinarData } from "../webinar_data/webinardata";

interface HeroSectionProps {
  webinar: WebinarData;
  targetDate: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ webinar, targetDate }) => {
  return (
    <div className="bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 py-2 mb-3">
            <Star className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-xs font-medium">Free Masterclass</span>
          </div>

          {/* Title + Description */}
          <h1 className="text-2xl md:text-5xl  font-bold mb-4 leading-tight">
            {webinar.title}
          </h1>

          <p className="text-md md:text-xl text-blue-100 mb-4 max-w-3xl mx-auto">
            {webinar.description}
          </p>

          {/* Tags */}
          {/* <div className="flex flex-wrap justify-center gap-2 mt-2">
            {webinar.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-xs md:text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div> */}
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {webinar.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs md:text-sm font-medium rounded-full 
             bg-white/15 text-white border border-white/30
             hover:bg-white/25 hover:scale-105 
            transition-transform duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Date + Time */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-6 text-sm md:text-md">
            <div className="flex items-center bg-white/20 rounded-lg px-3 py-2 md:px-4 md:py-2">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{webinar.date}</span>
            </div>
            <div className="flex items-center bg-white/20 rounded-lg px-3 py-2 md:px-4 md:py-2">
              <Clock className="w-5 h-5 mr-2" />
              <span>{webinar.time}</span>
            </div>
          </div>
        </div>

        {/* Thumbnail + Timer */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <div className="w-full max-w-md">
            <img
              src={webinar.thumbnail}
              alt="Webinar Thumbnail"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="w-full max-w-md">
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
