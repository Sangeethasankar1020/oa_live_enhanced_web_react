export interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
  verified: boolean;
  helpful: number;
}

export interface VideoTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  views: number;
  previewText: string;
  impact: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc",
    rating: 5,
    review:
      "Absolutely phenomenal service! The team exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched. We've seen a 300% increase in our conversion rates since working with them.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2 weeks ago",
    verified: true,
    helpful: 24,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateLab",
    rating: 5,
    review:
      "Game-changer for our business! The implementation was seamless and the results speak for themselves. Their expertise and professionalism made the entire process smooth and efficient.",
    avatar:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "1 month ago",
    verified: true,
    helpful: 31,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "StartupXYZ",
    rating: 5,
    review:
      "The level of customer support is incredible. They were available 24/7 during our launch and helped us navigate every challenge. Truly a partner you can count on for long-term success.",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "3 weeks ago",
    verified: true,
    helpful: 18,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Operations Director",
    company: "GlobalTech Solutions",
    rating: 4,
    review:
      "Outstanding results and excellent communication throughout the project. The team was responsive, knowledgeable, and delivered exactly what they promised. Highly recommend their services!",
    avatar:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "1 week ago",
    verified: true,
    helpful: 15,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Founder",
    company: "EcoVentures",
    rating: 5,
    review:
      "From concept to execution, they handled everything with precision and care. The ROI we've achieved has been remarkable. This partnership has been instrumental in scaling our business.",
    avatar:
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2 months ago",
    verified: true,
    helpful: 42,
  },
  {
    id: 6,
    name: "James Anderson",
    role: "CTO",
    company: "DataDriven Corp",
    rating: 5,
    review:
      "The technical expertise and innovative solutions provided have transformed our operations. Their team's dedication to excellence is evident in every aspect of their work.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "5 days ago",
    verified: true,
    helpful: 12,
  },
];

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Robert Martinez",
    role: "VP of Sales",
    company: "SalesForce Pro",
    thumbnail:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
    videoUrl: "/review/NLP_Final.mp4",
    duration: "2:34",
    views: 1250,
    previewText:
      "We went from struggling to close deals to becoming the top-performing team in our region. The transformation was incredible!",
    impact: "🚀 Sales increased by 340% in 6 months",
  },
  {
    id: 2,
    name: "Angela Foster",
    role: "Brand Manager",
    company: "Creative Studios",
    thumbnail:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    videoUrl: "#",
    duration: "1:48",
    views: 980,
    previewText:
      "Our brand visibility skyrocketed overnight. Clients started reaching out to us instead of the other way around.",
    impact: "📈 Brand engagement up 250%",
  },
  {
    id: 3,
    name: "Thomas Kim",
    role: "Lead Developer",
    company: "CodeCraft",
    thumbnail:
      "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
    videoUrl: "#",
    duration: "3:12",
    views: 1560,
    previewText:
      "The development process became so smooth and efficient. We're delivering projects 3x faster than before.",
    impact: "⚡ Development speed increased 300%",
  },
];
