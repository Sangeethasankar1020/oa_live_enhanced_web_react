import React from "react";
import { LOGO } from "../assest/webinar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DetailedWebinarHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 md:px-8 bg-white border-b">
      {/* Back button */}
      <button
        className="flex items-center gap-1 text-[#00AEFF] text-base font-medium"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={16} strokeWidth={2} />
        Back
      </button>
      {/* <button
        onClick={() => navigate(-1)} // 🔙 go back
        className="flex items-center gap-2 px-4 py-2
          rounded-full bg-[#00AEFF] text-white font-semibold
          shadow-md hover:shadow-lg hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E81A9]
          transition-all duration-300"
      >
        <ArrowLeft size={18} />
        <span className="text-sm sm:text-base">Back</span>
      </button> */}
      {/* Logo */}
      <div className="h-6 md:h-8 w-[150px] sm:w-[200px]">
        <img
          src={LOGO}
          alt="Webinar Logo"
          className="  w-full h-full object-contain"
        />
      </div>
    </header>
  );
};
