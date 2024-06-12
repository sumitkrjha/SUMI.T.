/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-violet':'#6E07F3',
        'deep-blue':'#141c3a',
        'dark-gray':'rgba(10, 10, 10, 0.9)',
      },
    },
  },
  plugins: [],
}

