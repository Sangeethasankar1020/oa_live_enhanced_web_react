export interface WebinarData {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  instructor: string;
  instructorImage: string;
  thumbnail: string;
  description: string;
  tags: string[];
  registeredCount: number;
  maxCapacity: number;
  isLive: boolean;
  featured: boolean;

  // ✅ Add new fields
  agenda: string[];
  benefits: string[];
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
    instructor: "Priya Sharma",
    instructorImage:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
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
  },
  {
    id: "2",
    title: "Full Stack Development Roadmap 2025",
    date: "2025-01-28",
    time: "2:00 PM IST",
    duration: "1.5 hours",
    instructor: "Arjun Kumar",
    instructorImage:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
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
  },
  {
    id: "3",
    title: "Data Science Career Blueprint: Way to Success",
    date: "2025-02-01",
    time: "11:00 AM IST",
    duration: "2.5 hours",
    instructor: "Dr. Sneha Reddy",
    instructorImage:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    thumbnail:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "From beginner to data scientist - learn the complete journey and skills required.",
    tags: ["Data Science", "Analytics", "Career Switch"],
    registeredCount: 675,
    maxCapacity: 1200,
    isLive: false,
    featured: false,
    agenda: [
      "What is Data Science?",
      "Core tools: Python, Pandas, SQL",
      "Machine Learning basics",
      "Real-world project walkthrough",
      "Building your portfolio",
    ],
    benefits: [
      "Step-by-step career roadmap",
      "Hands-on exercises with datasets",
      "Understand ML concepts easily",
      "Learn how to present projects in interviews",
    ],
  },
];
