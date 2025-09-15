/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        selectionBg: 'rgba(120,119,198,0.3)', 
        selectionText: 'rgba(255,255,255,1)', 
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '::selection': {
          backgroundColor: 'rgba(153, 57, 226, 0.41)', 
          color: 'rgba(255,255,255,1)',
        },
      });
    },
  ],
};