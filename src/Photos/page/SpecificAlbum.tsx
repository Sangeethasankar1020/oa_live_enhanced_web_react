import { useState } from "react";
// import { useSlide } from "../../../utils";
import { ImageModal, PhotoThumbnail } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { OCEAN_ALBUMS } from "../constant";

import { ArrowLeft } from "lucide-react";
import PageHeader from "../components/PageHeader";

export const SpecificAlbum = () => {
  const navigate = useNavigate();
  // const { setIsModalOpen } = useSlide();
  const { id } = useParams();

  const selectedAlbum = OCEAN_ALBUMS.find((album) => album.id == id);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    // setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    // setIsModalOpen(false);
  };

  const handleBackToAlbums = () => {
    setSelectedImageIndex(null);
    navigate(-1);
  };

  if (!id) {
    return;
  }
  if (!selectedAlbum) {
    return <p className="text-center text-gray-500 p-8">Album not found.</p>;
  }

  return (
    <section>
      <PageHeader
        title={selectedAlbum.title}
        showBackButton
        onBack={handleBackToAlbums}
      />
      <div className="grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2 sm:mt-10">
        {selectedAlbum?.images.map((image, index) => (
          <PhotoThumbnail
            key={index}
            image={image}
            index={index}
            onClick={() => handleImageClick(index)}
            isActive={selectedImageIndex === index}
          />
        ))}
      </div>
      {selectedAlbum && selectedImageIndex !== null && (
        <ImageModal
          images={selectedAlbum.images}
          currentIndex={selectedImageIndex}
          onClose={handleCloseModal}
          onNavigate={setSelectedImageIndex}
        />
      )}
    </section>
  );
};
