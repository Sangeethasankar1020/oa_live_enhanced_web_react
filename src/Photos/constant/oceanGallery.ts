
import { COLLEGE_INVITES_GALLERY, IWCCT_GALLERY, LEGACY_GALLERY, SFM_GALLERY, TECHFEST_GALLERY, THIRU_SPOKEN } from "../../assets";
import type { Album, GalleryData, Image } from "../types";

// Mock image data - replace with your actual images
const generateMockImages = (category: string, count: number): Image[] => {
  //   const colors: string[] = [
  //     "bg-gradient-to-br from-blue-400 to-purple-600",
  //     "bg-gradient-to-br from-green-400 to-blue-500",
  //     "bg-gradient-to-br from-pink-400 to-red-500",
  //     "bg-gradient-to-br from-yellow-400 to-orange-500",
  //     "bg-gradient-to-br from-indigo-400 to-purple-600",
  //     "bg-gradient-to-br from-teal-400 to-blue-500",
  //   ];

  return Array.from(
    { length: count },
    (_, i): Image => ({
      src: `https://picsum.photos/400/300?random=${category}-${i}`,
      alt: `${category} ${i + 1}`,
      title: `${category} Project ${i + 1}`,
      subtitle: `Amazing ${category.toLowerCase()} project showcasing modern design and functionality. This is a detailed description of the project.`,
      //   color: colors[i % colors.length],
    })
  );
};

export const galleryData: GalleryData = {
  "Web Development": generateMockImages("Web", 18),
  "Mobile Apps": generateMockImages("Mobile", 16),
  "UI/UX Design": generateMockImages("Design", 22),
  "AI & Machine Learning": generateMockImages("AI", 15),
  "Cloud Computing": generateMockImages("Cloud", 19),
  "Block chain": generateMockImages("Blockchain", 14),
};

export const OCEAN_GALLERY_DATA: GalleryData = {
  "TechFest 2025": TECHFEST_GALLERY,
  "College Invites": COLLEGE_INVITES_GALLERY,
  "IWCCT 2017": IWCCT_GALLERY,
  "Ocean Legacy": LEGACY_GALLERY,
  "SFM APP Launch": SFM_GALLERY,
  "SPOKEN ENGLISH": THIRU_SPOKEN,
};

export const OCEAN_ALBUMS: Album[] = [
  {
    id: "1",
    images: TECHFEST_GALLERY,
    thumbnail: TECHFEST_GALLERY[1].src,
    title: "TechFest 2025",
    description: "Memorable event",
  },
  {
    id: "2",
    images: SFM_GALLERY,
    thumbnail: SFM_GALLERY[1].src,
    title: "SFM Mobile App Launch Event",
    description: "Smoke free mind app launch event",
  },
  {
    id: "3",
    images: COLLEGE_INVITES_GALLERY,
    thumbnail: COLLEGE_INVITES_GALLERY[1].src,
    title: "CK College-Cuddalore",
    description: "An Cheif guest to a college",
  },
  {
    id: "4",
    images: IWCCT_GALLERY,
    thumbnail: IWCCT_GALLERY[1].src,
    title: "International Workshop - 2017",
    description: "A remarkable conference @PTU",
  },
  {
    id: "5",
    images: LEGACY_GALLERY,
    thumbnail: LEGACY_GALLERY[1].src,
    title: "Ocean Academy Leagacy",
    description: "since 2007 we building more confident",
  },
  {
    id: "6",
    images: THIRU_SPOKEN,
    thumbnail: THIRU_SPOKEN[1].src,
    title: "Thiru's Easy English",
    description: "Ocean students fulfullied with his speech",
  },
];
