import { BOLT, EXPRESS, GIT, GITHUB, MONGODB, NODE, OPENAI, PERPLEX, REACT, VSCODE } from "../assest/tools";

// src/course_data/toolsdata.ts
export interface Tool {
  id: string;
  name: string;
  logo: string;
  type: "general" | "ai";
}

export const toolsdata: Tool[] = [
  {
    id: "REACT",
    name: "React",
    logo: REACT,
    type: "general",
  },
  {
    id: "NODE",
    name: "Node.js",
    logo: NODE,
    type: "general",
  },
  {
    id: "EXPRESS",
    name: "Express.js",
    logo: EXPRESS,
    type: "general",
  },
  {
    id: "MONGODB",
    name: "MongoDB",
    logo: MONGODB,
    type: "general",
  },
  {
    id: "GIT",
    name: "Git",
    logo: GIT,
    type: "general",
  },
  {
    id: "GITHUB",
    name: "GitHub",
    logo: GITHUB,
    type: "general",
  },
  {
    id: "VSCODE",
    name: "VS Code",
    logo: VSCODE,
    type: "general",
  },
  // AI Tools
  {
    id: "OPENAI",
    name: "OpenAI",
    logo: OPENAI,
    type: "ai",
  },
  {
    id: "PERPLEX",
    name: "Perplexity",
    logo: PERPLEX,
    type: "ai",
  },
  {
    id: "BOLT",
    name: "Bolt",
    logo: BOLT,
    type: "ai",
  },
];
