/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#233b23",
        dark: "#4A4A4A",
        light: "#D3D3D3",
        accent: "#E3F0D2",
      },

      fontFamily: {
        poppins: "Poppins",
        monoton: "Monoton",
      },
    },
  },
  plugins: [],
};
