/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu Mono", "sans-serif"],
      },
      colors: {
        background: "#2D2D2D",
        backgroundOutline: "#5F5F5F",
      },
    },
  },
  plugins: [],
};
