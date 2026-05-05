/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      colors: {

        // NEUTRAL
        neutral: {
          25: "#FDFDFD",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E9EAEB",
          300: "#D5D7DA",
          400: "#A4A7AE",
          500: "#717680",
          600: "#535862",
          700: "#414651",
          800: "#252B37",
          900: "#181D27",
          950: "#0A0D12",
        },

        // PRIMARY
        primary: {
          100: "#FEE0D8",
          200: "#FF623E",
          300: "#CC4E32",
          400: "#80311F",
        },

        // BASE
        base: {
          white: "#FFFFFF",
          black: "#000000",
        },
      },
    },
  },

  plugins: [],
}