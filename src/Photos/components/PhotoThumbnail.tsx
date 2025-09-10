import { useState } from "react";
import type { Image } from "../types";

// Photo Thumbnail Component
export const PhotoThumbnail: React.FC<{
  image: Image;
  onClick: () => void;
  index: number;
  isActive?: boolean;
}> = ({ image, onClick, index, isActive }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 ${
        loaded ? "animate-fadeInUp" : "opacity-0"
      } ${isActive ? "ring-4 ring-blue-500 ring-offset-2" : ""}`}
      style={{
        animationDelay: `${index * 50}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={image.src}
          alt={image.alt}
          onLoad={() => setLoaded(true)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center px-2">
            <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
            {image.subtitle && (
              <p className="text-xs opacity-80 line-clamp-2">
                {image.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
