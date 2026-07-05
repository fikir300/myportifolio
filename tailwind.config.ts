import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // This tells Tailwind to style your components
  ],
  theme: {
    extend: {
      colors: {
        // Adding custom "V2" colors
        background: "#020617",
        primary: "#3b82f6",
        secondary: "#1e293b",
      },
    },
  },
  plugins: [],
};
export default config;