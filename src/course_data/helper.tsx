import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiOpenai,
} from "react-icons/si";
import React from "react";

const iconsMap: Record<
  string,
  React.ComponentType<{ size?: number; color?: string }>
> = {
  react: SiReact,
  "react.js": SiReact,
  node: SiNodedotjs,
  "node.js": SiNodedotjs,
  express: SiExpress,
  "express.js": SiExpress,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  openai: SiOpenai,
};

export const getTechIcon = (
  tech: string,
  size = 16, // default small size
  color = "#fff"
) => {
  const Icon = iconsMap[tech.toLowerCase()];
  return Icon ? (
    <Icon size={size} color={color} />
  ) : (
    <span style={{ fontSize: size }}>{tech}</span>
  );
};
