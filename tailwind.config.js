/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors:{
        background:'#02090f',
        primaryText:'#00ff00',
        secondaryText:'#1e90ff',
        accentText:'',
        primaryborderColor:'#00ff00',
        linkColor:'#1E90FF'
      },
      fontFamily:{
        firacode:['Fira Code','sans-serif'],
        pixelifysans:['Pixelify Sans','sans-serif']
      }
    },
  },
  plugins: [],
};