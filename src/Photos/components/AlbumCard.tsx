import { useState } from "react";
import type { Album } from "../types";
import { Grid } from "lucide-react";

// Album Card Component
export const AlbumCard: React.FC<{ album: Album; onClick: () => void }> = ({
  album,
  onClick,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
        loaded ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      <div className="aspect-[4/3] rounded-2xl relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={album.thumbnail}
          alt={album.title}
          onLoad={() => setLoaded(true)}
          className="w-full h-full  object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-xl mb-2">{album.title}</h3>
          <p className="text-sm opacity-90 mb-2">{album.description}</p>
          <div className="flex items-center gap-2 text-xs opacity-80">
            <Grid size={14} />
            <span>{album.images.length} photos</span>
          </div>
        </div>

        {/* Photo count badge */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          {album.images.length}
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      {/* Below image content */}
      <div className="mt-1 flex  gap-2 px-1">
        <h3 className="text-lg font-semibold text-gray-800">{album.title}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Grid size={14} />
          <span>{album.images.length} photos</span>
        </div>
      </div>
    </div>
  );
};
