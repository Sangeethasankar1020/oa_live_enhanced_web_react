// Types
export interface Image {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

export interface Album {
  id: string;
  title: string;
  thumbnail: string;
  images: Image[];
  description?: string;
}

export interface GalleryData {
  [category: string]: Image[];
}

export interface CategoryButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
  count: number;
}

export interface ImageCardProps {
  image: Image;
  index: number;
  onClick: () => void;
}

export interface ImageModalProps {
  selectedImage: Image;
  allImages: Image[];
  onClose: () => void;
  onSelect: (image: Image) => void;
}
