/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue':"#7D8ABC",
      'black':"#000000",
      "white": "#ffffff"
    },
    extend: {
      fontFamily: {
        customFont: ["Champagne Limousines", "sans-serif"],
        // Add more custom font families as needed
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

