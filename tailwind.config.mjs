/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#f8f9fa",
          card: "#ffffff",
          text: "#000000",
          muted: "#6c757d",
        },
        dark: {
          bg: "#1a1a1a",
          card: "#2d2d2d",
          text: "#ffffff",
          muted: "#a0a0a0",
        },
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
      },
    },
  },
  plugins: [],
};
