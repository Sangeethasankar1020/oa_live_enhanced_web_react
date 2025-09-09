import {
  GraduationCap,
  Code,
  Users,
  Briefcase,
  UserCheck,
  Video,
  Award,
  TrendingUp,
  Target,
  Monitor,
  Laptop,
  Star,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import { Imag1, Imag2, Imag3 } from "../assest/service";

// ---------------- Types ----------------
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  tagline: string;
  features: string[];
}

interface Stat {
  number: string;
  label: string;
  icon: React.ElementType;
}
export interface AdvancedService {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType; // 👈 same as TrainingService now
  features: string[];
  gradient: string;
  bgColor: string;
  iconColor: string;
  popular?: boolean;
}

// ---------------- Data ----------------
export const Detailedservices = [
  {
    id: 1,
    title: "Hone your skills with Corporate Training",
    description:
      "Boost workforce performance with custom IT corporate training programs, available online PAN-India and at our Puducherry branch.",
    features: [
      { icon: Star, text: "Expert Trainers", color: "text-yellow-500" },
      { icon: Star, text: "Flexible Schedules", color: "text-yellow-500" },
      {
        icon: Star,
        text: "Industry-Relevant Skills",
        color: "text-yellow-500",
      },
      { icon: Star, text: "Practical Projects", color: "text-yellow-500" },
    ],
    image: Imag1,
    reverse: false,
  },
  {
    id: 2,
    title: "Start a new career with Career-oriented courses",
    description:
      "Launch your IT career with job-ready courses in Python, Java, Data Science, Cloud & more — with real-time project exposure.",
    features: [
      {
        icon: CheckCircle,
        text: "Industry-aligned curriculum",
        color: "text-green-500",
      },
      {
        icon: CheckCircle,
        text: "Practical project experience",
        color: "text-green-500",
      },
      {
        icon: CheckCircle,
        text: "Career counseling support",
        color: "text-green-500",
      },
    ],
    image: Imag2,
    reverse: true,
  },
  {
    id: 3,
    title:
      "Experience latest technologies through Workshops & Value-added Courses",
    description:
      "Gain hands-on expertise in AI, ML, Blockchain, IoT, and Cloud with our workshops, offered online PAN-India and at our Puducherry branch.",
    features: [
      {
        icon: Star,
        text: "Future-Ready Tech Skills",
        color: "text-yellow-500",
      },
      { icon: Star, text: "Expert-Led Sessions", color: "text-yellow-500" },
      {
        icon: Star,
        text: "Real-Time Project Exposure",
        color: "text-yellow-500",
      },
    ],
    image: Imag3,
    reverse: false,
  },
];
export const aboutCards = [
  {
    id: 1,
    icon: Award,
    title: "Excellence in Education",
    text: "Industry-relevant training programs.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: Users,
    title: "Industry Partnerships",
    text: "Building scalable IT solutions for clients.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: BookOpen,
    title: "Practical Learning",
    text: "Hands-on approach with live applications.",
    gradient: "from-green-500 to-teal-500",
  },
];

export const services: Service[] = [
  {
    icon: GraduationCap,
    title: "On Campus Training",
    description:
      "Comprehensive hands-on learning programs designed to bridge the gap between academic theory and industry practice.",
    tagline: "Hone your skills with Corporate Training",
    features: [
      "Expert Faculty",
      "Industry-Standard Labs",
      "Practical Projects",
      "Certification",
    ],
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions tailored to meet your business needs with cutting-edge technologies and best practices.",
    tagline: "Experience latest technologies",
    features: [
      "Web Development",
      "Mobile Apps",
      "Enterprise Solutions",
      "DevOps",
    ],
  },
  {
    icon: Users,
    title: "Technical Workshops",
    description:
      "Intensive training programs focusing on specific technologies and industry-relevant skills for professionals.",
    tagline:
      "Experience latest technologies through Workshops & Value-added Courses",
    features: [
      "Implant Training",
      "Skill Enhancement",
      "Industry Experts",
      "Hands-on Learning",
    ],
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description:
      "Strategic technology guidance to help organizations optimize their IT infrastructure and digital transformation.",
    tagline: "Professional IT guidance",
    features: [
      "Strategy Planning",
      "Digital Transformation",
      "Process Optimization",
      "Technology Audit",
    ],
  },
  {
    icon: UserCheck,
    title: "Placement Support",
    description:
      "Comprehensive career assistance including interview preparation, resume building, and job placement opportunities.",
    tagline: "Start a new career with Career-oriented courses",
    features: [
      "Interview Prep",
      "Resume Building",
      "Job Matching",
      "Career Counseling",
    ],
  },
  {
    icon: Video,
    title: "Free Webinars",
    description:
      "Regular online sessions covering trending technologies, industry insights, and career guidance for tech enthusiasts.",
    tagline: "Stay updated with industry trends",
    features: [
      "Industry Trends",
      "Expert Speakers",
      "Interactive Sessions",
      "Free Access",
    ],
  },
];

export const stats: Stat[] = [
  { number: "500+", label: "Students Trained", icon: GraduationCap },
  { number: "50+", label: "Industry Partners", icon: Briefcase },
  { number: "100+", label: "Successful Placements", icon: Award },
  { number: "25+", label: "Expert Trainers", icon: Users },
];

export const advancedServices: AdvancedService[] = [
  {
    id: 1,
    title: "Software Development",
    description:
      "Transform ideas into powerful digital products with our expert development team in Puducherry & online projects PAN-India.",
    icon: Code,
    features: [
      "Custom Web Apps",
      "Mobile Development",
      "API & Cloud Integration",
      "Scalable IT Solutions",
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "bg-blue-500",
    popular: true,
  },
  {
    id: 2,
    title: "Training Programs",
    description:
      "Accelerate your career with industry-driven IT courses and real-time project training.",
    icon: Users,
    features: [
      "Live Workshops",
      "Certification",
      "1-on-1 Mentoring",
      "Career Support",
    ],
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "bg-emerald-500",
  },
  {
    id: 3,
    title: "Technology Consulting",
    description:
      "Strategic IT consulting to help businesses adopt modern technologies.",
    icon: TrendingUp,
    features: [
      "Digital Strategy",
      "Tech Architecture",
      "Process Optimization",
      "Innovation Labs",
    ],
    gradient: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    iconColor: "bg-purple-500",
  },
  {
    id: 4,
    title: "IT Solutions",
    description:
      "End-to-end infrastructure & security solutions for businesses.",
    icon: Target,
    features: [
      "Infrastructure Setup",
      "Security Audits",
      "System Integration",
      "24/7 Support",
    ],
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "bg-orange-500",
  },
  {
    id: 5,
    title: "Placement Support",
    description: "Bridging the gap between training & career success.",
    icon: Award,
    features: [
      "Resume Building",
      "Interview Prep",
      "Job Matching",
      "Salary Negotiation",
    ],
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    iconColor: "bg-pink-500",
  },
  {
    id: 6,
    title: "Online Learning",
    description: "Flexible online IT courses with real-time project exposure.",
    icon: Monitor,
    features: [
      "Self-Paced Learning",
      "Interactive Content",
      "Progress Tracking",
      "Community Access",
    ],
    gradient: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    iconColor: "bg-cyan-500",
  },
];

export const taglines = [
  {
    icon: Briefcase,
    color: "text-blue-600",
    title: "Corporate Training",
    description:
      "Upskill teams with IT-focused training tailored to business needs.",
  },
  {
    icon: GraduationCap,
    color: "text-cyan-500",
    title: "Career Courses",
    description:
      "Job-ready programs with real-time projects & expert guidance.",
  },
  {
    icon: Laptop,
    color: "text-purple-600",
    title: "Modern Tech",
    description: "Workshops on AI, Cloud, Cybersecurity, Data Science & more.",
  },
];
