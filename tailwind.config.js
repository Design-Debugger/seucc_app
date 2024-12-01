/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',    // You can customize these colors
        secondary: '#6c757d',
        accent: '#28a745',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // You can customize the fonts
      },
    },
  },
  plugins: [],
}

