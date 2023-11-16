import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    container: {
      maxWidth: "80rem",
    },
    // colors: {
    //   "dark-grey": "#333333",
    //   grey: "#666",
    //   blue: "#1c88bf",
    //   "dark-blue": "#364051",
    //   "off-white": "#f7f7f7",
    // },
    spacing: {
      "s-size": "1.2rem",
      "m-size": "1.6rem",
      "l-size": "3.2rem",
      "xl-size": "4.8rem",
    },
    fontFamily: {
      hel: ["Helvetica", "Arial", "sans-serif"],
    },

    extend: {
      fontSize: {
        "s-size": "1.2rem",
        "m-size": "1.6rem",
        "l-size": "3.2rem",
        "xl-size": "4.8rem",
      },
      colors: {
        "dark-grey": "#333333",
        grey: "#666",
        blue: "#1c88bf",
        "dark-blue": "#364051",
        "off-white": "#f7f7f7",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "10px" },
      });
    }),
  ],
};
