import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        msm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        // Modos de color
        dark: {
          primary: "#08090A",
          secondary: "#181718",
          tertiary: "#121416",
          quaternary: "#1C1F21",
          body: "#B0B0B0",
          title: "#E1E1E1",
          subtle: "#7E7E7E",
          accent: {
            primary: "#FF5C00",
            secondary: "#4CAF50",
            tertiary: "#00BFAE",
            quaternary: "#FFD447",
            quinary: "#FBC02D",
          },
        },
        light: {
          primary: "#ECEBF3",
          secondary: "#F7F7F7",
          tertiary: "#FFFFFF",
          body: "#555555",
          title: "#1A1A1A",
          subtle: "#A0A0A0",
          accent: {
            primary: "#FF4081",
            secondary: "#8BC34A",
            tertiary: "#FF5C00",
            quaternary: "#FFD447",
            quinary: "#FBC02D",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
