import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        translateReverse: {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "50%": { transform: "translate(5vw, -5vw) rotate(8deg)" },
        },
      },
      animation: {
        rotate: "rotate 6s ease-in-out infinite",
        translateReverse: "translateReverse 8s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
