/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "marquee-left": "marqueeLeft 30s linear infinite",
        "marquee-right": "marqueeRight 30s linear infinite",
      },
    },
  },
  plugins: [],
};




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'zoomFade': 'zoomFade 2.5s ease-in-out infinite',
      },
      keyframes: {
        zoomFade: {
          '0%': { transform: 'scale(0.85)', opacity: '0.3' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(0.85)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};
