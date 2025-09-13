export interface Instructor {
  name: string;
  image: string;
  expertise: string;
  experience: string;
}

export interface WebinarData {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  thumbnail: string;
  description: string;
  tags: string[];
  registeredCount: number;
  maxCapacity: number;
  isLive: boolean;
  featured: boolean;

  agenda: string[];
  benefits: string[];

  // ✅ Replace single instructor with multiple instructors
  instructors: Instructor[];
}

export interface RegistrationForm {
  name: string;
  email: string;
  phone: string;
  experience: string;
}

export const mockWebinars: WebinarData[] = [
  {
    id: "1",
    title: "AI in App Building: The Hack Every College Student Needs to Know",
    date: "2025-01-25",
    time: "10:00 AM IST",
    duration: "2 hours",
    thumbnail:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Master the latest AI tools and techniques to build next-generation applications.",
    tags: ["AI", "App Development", "Career Growth"],
    registeredCount: 1247,
    maxCapacity: 2000,
    isLive: false,
    featured: true,
    agenda: [
      "Introduction to AI in Mobile Development",
      "Popular AI Frameworks and Tools",
      "Building Your First AI-Powered App",
      "Deployment and Best Practices",
      "Q&A Session",
    ],
    benefits: [
      "Learn industry-standard AI development practices",
      "Build a complete AI application during the session",
      "Get access to exclusive resources and templates",
      "Network with fellow developers and students",
    ],
    instructors: [
      {
        name: "Priya Sharma",
        image:
          "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
        expertise: "AI & Mobile Development",
        experience: "10+ Years Experience",
      },
      {
        name: "Ravi Menon",
        image:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
        expertise: "Cloud & Deployment",
        experience: "8+ Years Experience",
      },
    ],
  },
  {
    id: "2",
    title: "Full Stack Development Roadmap 2025",
    date: "2025-01-28",
    time: "2:00 PM IST",
    duration: "1.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Complete roadmap to become a full stack developer in 2025 with industry insights.",
    tags: ["Full Stack", "Web Development", "Career"],
    registeredCount: 892,
    maxCapacity: 1500,
    isLive: false,
    featured: false,
    agenda: [
      "Understanding frontend vs backend",
      "Essential tools & frameworks",
      "APIs & database integration",
      "Deploying full-stack apps",
      "Future trends in web development",
    ],
    benefits: [
      "Clear roadmap to follow in 2025",
      "Hands-on examples with latest tools",
      "Tips to land your first developer job",
      "Learn from industry expert experience",
    ],
    instructors: [
      {
        name: "Arjun Kumar",
        image:
          "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
        expertise: "Full Stack Development",
        experience: "12+ Years Experience",
      },
      {
        name: "Meera Joshi",
        image:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
        expertise: "Frontend Frameworks",
        experience: "7+ Years Experience",
      },
    ],
  },
  {
    id: "3",
    title: "Full Stack Development Roadmap 2025",
    date: "2025-01-28",
    time: "2:00 PM IST",
    duration: "1.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Complete roadmap to become a full stack developer in 2025 with industry insights.",
    tags: ["Full Stack", "Web Development", "Career"],
    registeredCount: 892,
    maxCapacity: 1500,
    isLive: false,
    featured: false,
    agenda: [
      "Understanding frontend vs backend",
      "Essential tools & frameworks",
      "APIs & database integration",
      "Deploying full-stack apps",
      "Future trends in web development",
    ],
    benefits: [
      "Clear roadmap to follow in 2025",
      "Hands-on examples with latest tools",
      "Tips to land your first developer job",
      "Learn from industry expert experience",
    ],
    instructors: [
      {
        name: "Arjun Kumar",
        image:
          "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
        expertise: "Full Stack Development",
        experience: "12+ Years Experience",
      },
      {
        name: "Meera Joshi",
        image:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
        expertise: "Frontend Frameworks",
        experience: "7+ Years Experience",
      },
    ],
  },
  {
    id: "4",
    title: "Full Stack Development Roadmap 2025",
    date: "2025-01-28",
    time: "2:00 PM IST",
    duration: "1.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Complete roadmap to become a full stack developer in 2025 with industry insights.",
    tags: ["Full Stack", "Web Development", "Career"],
    registeredCount: 892,
    maxCapacity: 1500,
    isLive: false,
    featured: false,
    agenda: [
      "Understanding frontend vs backend",
      "Essential tools & frameworks",
      "APIs & database integration",
      "Deploying full-stack apps",
      "Future trends in web development",
    ],
    benefits: [
      "Clear roadmap to follow in 2025",
      "Hands-on examples with latest tools",
      "Tips to land your first developer job",
      "Learn from industry expert experience",
    ],
    instructors: [
      {
        name: "Arjun Kumar",
        image:
          "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
        expertise: "Full Stack Development",
        experience: "12+ Years Experience",
      },
      {
        name: "Meera Joshi",
        image:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
        expertise: "Frontend Frameworks",
        experience: "7+ Years Experience",
      },
    ],
  },
];
