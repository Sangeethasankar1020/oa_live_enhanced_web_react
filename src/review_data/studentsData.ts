// data/studentsData.ts
import { Users, Star, TrendingUp } from "lucide-react";

export interface StudentStat {
  id: string;
  icon: React.ElementType;
  value: string;
  label: string;
  bg: string;
  color: string;
}

export const studentStats: StudentStat[] = [
  {
    id: "students",
    icon: Users,
    value: "50K+",
    label: "Happy Students",
    bg: "#DBEAFE",
    color: "#3770EC",
  },
  {
    id: "rating",
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    bg: "#FEF9C3",
    color: "#CC8E0B",
  },
  {
    id: "satisfaction",
    icon: TrendingUp,
    value: "98%",
    label: "Satisfaction Rate",
    bg: "#F3E8FF",
    color: "#9F49EC",
  },
];
