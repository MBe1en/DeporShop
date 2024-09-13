/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",

        "blue-ribbon": {
          50: "#eff5ff",
          100: "#dbe7fe",
          200: "#bed6ff",
          300: "#92bcfe",
          400: "#5e98fc",
          500: "#306cf8",
          600: "#2352ed",
          700: "#1b3eda",
          800: "#1c33b1",
          900: "#1d308b",
          950: "#162055",
        },
      },
    },

    fontFamily: {
      galada: ['"Galada"', "cursive"],
    },
    plugins: [],
  },
};
