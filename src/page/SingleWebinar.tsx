// src/pages/SingleWebinar.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  User,
  Award,
  Target,
} from "lucide-react";
import CountdownTimer from "../webinar_components/CountdownTimer";
import RegistrationForm from "../webinar_components/RegistrationForm";
import { mockWebinars } from "../webinar_data/webinardata";

const SingleWebinar: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isRegistered, setIsRegistered] = useState(false);

  const webinar = mockWebinars.find((w) => w.id === id);

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">
          Webinar not found 🚫
        </h2>
      </div>
    );
  }

  const targetDate = new Date(`${webinar.date} ${webinar.time}`).getTime();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-sm font-medium">Free Masterclass</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {webinar.title}
            </h1>

            <p className="text-lg md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              {webinar.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {webinar.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-xs md:text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-6 text-sm md:text-lg">
              <div className="flex items-center bg-white/20 rounded-lg px-3 py-2 md:px-4 md:py-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{webinar.date}</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-lg px-3 py-2 md:px-4 md:py-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>{webinar.time}</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-lg px-3 py-2 md:px-4 md:py-2">
                <Users className="w-5 h-5 mr-2" />
                <span>{webinar.registeredCount}+ Registered</span>
              </div>
            </div>
          </div>

          {/* Image + Timer */}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-10 md:space-y-12">
            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Target className="w-7 h-7 md:w-8 md:h-8 text-blue-600 mr-3" />
                What You'll Learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {webinar.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm md:text-base font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Agenda */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Play className="w-7 h-7 md:w-8 md:h-8 text-[#FDCE5C] mr-3" />
                Webinar Agenda
              </h2>
              <div className="space-y-4">
                {webinar.agenda.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 border-l-4 border-[#FDCE5C] bg-gray-50 rounded-r-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="bg-[#FDCE5C] text-gray-800 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold text-xs md:text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <User className="w-7 h-7 md:w-8 md:h-8 text-blue-600 mr-3" />
                Meet Your Instructor
              </h2>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={webinar.instructorImage}
                  alt={webinar.instructor}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {webinar.instructor}
                  </h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                    Expert Instructor in {webinar.tags[0]}
                  </p>
                  <div className="flex items-center justify-center md:justify-start space-x-3 text-xs md:text-sm">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-blue-600 mr-1" />
                      <span>10+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <RegistrationForm
                webinarTitle={webinar.title}
                onRegistrationComplete={() => setIsRegistered(true)}
                isRegistered={isRegistered}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWebinar;
