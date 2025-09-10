import React from "react";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  showBackButton = false,
  onBack,
}) => {
  return (
    <header
      className={`relative flex flex-col items-center justify-center text-gray-700  ${
        showBackButton ? "pt-12 sm:pt-6" : "py-6"
      }`}
    >
      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={onBack}
          className="
            absolute left-2 top-2 sm:left-4 sm:top-4
            inline-flex items-center gap-1 sm:gap-2
            px-2 py-1 sm:px-4 sm:py-2
            rounded-full bg-[#00AEFF] text-white font-medium sm:font-semibold
            shadow-lg hover:shadow-xl transition-all duration-300
            hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400
          "
        >
          <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back</span>
        </button>
      )}

      {/* Title */}
      <div className="text-center px-4">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
