import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#101010",
        darkcard: "#1414149c",
        purpleAccent: "#a476ff",
        limeDot: "#A9FF5B",
        mutedIcon: "#f3f3f398",
        mutedBorder: "#f3f3f310",
        lightText: "#dfdfdf",
      },
      keyframes: {
        scaleAnim: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "heart-pulse": {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)" },
        },
        scroll: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        scale: "scaleAnim 300ms ease-in-out",
        "heart-pulse": "heart-pulse 0.6s ease-in-out",
        scroll: "scroll 45s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

