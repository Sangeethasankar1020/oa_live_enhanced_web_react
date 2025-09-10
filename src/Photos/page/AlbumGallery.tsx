import { useNavigate } from "react-router-dom";
import { AlbumCard } from "../components";
import { OCEAN_ALBUMS } from "../constant";
import { HeroSection } from "../components/HeroSection";

export const AlbumGallery: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = (id: string) => {
    navigate(`/gallery/${id}`);
  };
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}

      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OCEAN_ALBUMS.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              onClick={() => handleNavigate(album.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
