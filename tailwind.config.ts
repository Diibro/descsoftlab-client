import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          "blue-50":"#edfefe",
          "blue-100":"#d2f9fb",
          "blue-200":"#abf2f6",
          "blue-300":"#71e7ef",
          "blue-400":"#30d1e0",
          "blue-500":"#15b5c5",
          "blue-600":"#1492a6",
          "blue-700":"#177587",
          "blue-800":"#177587",
          "blue-900":"#1b4f5e",
          "blue-950":"#0c3440"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
