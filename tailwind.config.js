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
    fontFamily: {
      'customFont': ["Champagne Limousines", "sans-serif"],
     'philo':["Ppgatwick","sans-serif"],
      'ital':["Oswald","sans-serif"],
      // Add more custom font families as needed
    },
    extend: {
      
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 2s ease-out',
        fadeinup: 'fade-in-up 1s ease-in-out 0.25s 1',
      },
      keyframes: {
				fadeIn: {
					"0%": { opacity: '0' },
					"100%": { opacity: '1' },
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
			},
  },
  plugins: [],
}

}