import React from "react";
import { WebinarData } from "../webinar_data/webinardata";
import { Sparkles, Clock, Calendar, ArrowRight } from "lucide-react";

interface FeaturedWebinarProps {
  webinar: WebinarData;
  onRegister: (id: string) => void;
}

export const FeaturedWebinarSection: React.FC<FeaturedWebinarProps> = ({
  webinar,
  onRegister,
}) => {
  return (
    <section className="py-16 sm:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Featured Webinar</span>
          </div>
          <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Don't Miss Our Most Popular Session
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            Join thousands of students who have already transformed their
            careers
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 lg:p-12 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <img
              src={webinar.thumbnail}
              alt={webinar.title}
              className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-xl shadow-lg"
            />

            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {webinar.title}
              </h3>
              <p className="text-gray-600">{webinar.description}</p>

              <div className="flex flex-wrap gap-2">
                {webinar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  // onClick={() => onRegister(webinar.id)}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white px-6 sm:px-8 py-3 rounded-xl font-semibold"
                >
                  Register Now <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>

                <button
                  // onClick={() => onRegister(webinar.id)}
                  className="w-full sm:w-auto bg-white text-[#00AEFF] border border-blue-300 px-6 sm:px-8 py-3 rounded-xl font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
