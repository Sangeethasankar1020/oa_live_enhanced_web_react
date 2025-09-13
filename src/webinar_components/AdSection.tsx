import React from "react";
import { Sparkles, Play, Calendar, ArrowRight } from "lucide-react";
import { adData, AdData } from "../webinar_data/addata";
import { useNavigate } from "react-router-dom";

interface AdSectionProps {
  data: AdData;
  webinarId: string;
}

export const AdSection: React.FC<AdSectionProps> = ({ data, webinarId }) => {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    navigate(`/webinar/${webinarId}`);
  };
  const handleSecondaryClick = () => {
    navigate("/allwebinars");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-6">
          <div className="flex items-center space-x-2 text-blue-200">
            <Sparkles className="w-5 h-5 text-[#FDCE5C]" />
            <span className="text-xs sm:text-sm font-medium">
              {data.subtitle}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight px-2">
            {data.title}{" "}
            <span className="text-[#FDCE5C]">{data.highlight}</span> in you
          </h1>

          <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl sm:max-w-3xl px-2">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-2">
            <button
              onClick={handlePrimaryClick}
              className="group w-full sm:w-auto bg-gradient-to-r from-[#FBFF86] to-[#F8FF34] text-[#034E72] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>{data.primaryCta.label}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleSecondaryClick}
              className="group w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>{data.secondaryCta.label}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
