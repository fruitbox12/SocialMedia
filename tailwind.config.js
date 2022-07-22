/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fbblue: "#1877f2",
        fbgreen: "#42b72a",
        fborange: "#f0f2f5",
        fbgray: "#dddfe2",
        fbbluedark: "#0D6EEC",
        fbgreendark: "#3BA625",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
