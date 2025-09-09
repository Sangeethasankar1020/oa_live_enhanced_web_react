import { INSTAGRAM, LINKEDIN, WHATSAPP, YOUTUBE } from "../assest/social_links";

export interface SocialLink {
  id: string;
  name: string;
  desc: string;
  color?: string;
  gradient?: string;
  href: string;
  img: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    name: "Join LinkedIn",
    desc: "Advance your career",
    color: "#0A66C2",
    href: "https://www.linkedin.com/company/oceanacademyedu/",
    img: LINKEDIN,
  },
  {
    id: "instagram",
    name: "Follow Instagram",
    desc: "Stay inspired daily",
    color: "#E4405F",
    gradient: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)",
    href: "https://www.instagram.com/oceanacademy_official/?hl=en",
    img: INSTAGRAM,
  },
  {
    id: "youtube",
    name: "Subscribe YouTube",
    desc: "Learn with videos",
    color: "#FF0000",
    href: "https://www.youtube.com/@ocean_academy",
    img: YOUTUBE,
  },
  {
    id: "whatsapp",
    name: "Join WhatsApp",
    desc: "Stay connected 24/7",
    color: "#25D366",
    href: "https://wa.me/919342364952?text=Hello%20Ocean%20Academy,%20I%20want%20to%20know%20more%20about%20your%20courses.",
    img: WHATSAPP,
  },
];
