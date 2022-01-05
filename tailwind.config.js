const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          elmes: "#8BAC3E",
          elmesText: "#A4B441",
        },
        black: {
          medium: "#333333",
        },
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        default: "url('../public/background.png')",
      },
    },
  },
  plugins: [],
};
