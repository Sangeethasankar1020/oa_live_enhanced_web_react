// utils/animation.ts

let styleSheet: HTMLStyleElement | null = null;

export const marqueeAnimation = (
  direction: "left" | "right" = "left",
  duration: number = 25
) => {
  // ensure we have a shared <style> in the head
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);
  }

  const key = `marquee-${direction}-${duration}`;
  const rule = `
    @keyframes ${key} {
      0% { transform: translateX(${direction === "left" ? "0" : "-50%"}); }
      100% { transform: translateX(${direction === "left" ? "-50%" : "0"}); }
    }
  `;

  // inject only once
  if (!styleSheet.innerHTML.includes(key)) {
    styleSheet.innerHTML += rule;
  }

  return {
    animation: `${key} ${duration}s linear infinite`,
  };
};
// Shuffle array
export const shuffleArray = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Rotate array by offset
export const rotateArray = <T>(arr: T[], offset: number): T[] => {
  return [...arr.slice(offset), ...arr.slice(0, offset)];
};
