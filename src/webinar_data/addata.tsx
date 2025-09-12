// src/data/adData.ts

export interface AdData {
  id: string;
  subtitle: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: {
    label: string;
    icon?: React.ReactNode;
  };
  secondaryCta: {
    label: string;
    icon?: React.ReactNode;
  };
}

export const adData: AdData = {
  id: "career-boost",
  subtitle: "Transform Your Career Today",
  title: "Instil the passion for",
  highlight: "coding",
  description:
    "Upskill yourself through practice-oriented training, learn in-demand skills, and expand your career opportunities with our expert-led webinars.",
  primaryCta: {
    label: "Join Featured Webinar",
  },
  secondaryCta: {
    label: "Browse All Webinars",
  },
};
