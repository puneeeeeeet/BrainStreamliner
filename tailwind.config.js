/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#004aad",
      black: "#000000",
      white: "#ffffff",
    },
    fontFamily: {
      customFont: ["Fondamento", 'cursive'],
      
      // Add more custom font families as needed
    },
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fadeIn: "fadeIn 2s ease-out",
        fadeindown: "fade-in-down 1s  1",
        fadeinup: "fade-in-up 1.5s  ease-out 0.25s 1",
        zoomInUp: "zoom-in-up 3s ease-out 0.25s 1",
        fadeinright: 'fade-in-right 3s ease-in-out 0.25s 1',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "zoom-in-up": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
    plugins: [],
  },
};