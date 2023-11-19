/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
      ],

  theme: {
       colors: {
      black: "#000",
      almostBlack: "#202020",
      offGray: "#292929",
      brownPrimary: "#8B8475",
      turqAccent: "#5A9090",
      deepSecondary: "#0B1919",
      almostWhite: "#fefdfb",
      white: "#fff",
    },

    fontSize: {
      sm: "0.800rem",
      base: "1rem",
      xl: "1.250rem",
      "2xl": "1.563rem",
      "3xl": "1.954rem",
      "4xl": "2.442rem",
      "5xl": "3.053rem",
    },
    fontFamily: {
      heading: "Lato",
      body: "Poppins",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },

    minWidth: {
      0: "0",
      100: "100px",
    },
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

