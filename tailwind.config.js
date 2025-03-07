/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'man-pic': "url('/src/Pictures/image.jpg')", },

      
    }
  },
  plugins: [],
}


