/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // vishnu: "#572143",
        vishnu: {
          50: "#f9f0f5",
          100: "#f2e0eb",
          200: "#e4c1d6",
          300: "#d6a2c1",
          400: "#b96aa0",
          500: "#9a3f7a",
          600: "#8a376f",
          700: "#6a2a55",
          800: "#4c1d3b",
        },
      },
    },
  },
  plugins: [],
};
