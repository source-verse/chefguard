/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#125C21",
      },
      fontFamily: {
        roboto:['Roboto','sans-serif']
      },
    },
  },
  // plugins: [require("tw-elements/dist/plugin.cjs")],
};
