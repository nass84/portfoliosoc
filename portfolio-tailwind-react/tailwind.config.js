module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#A74C5E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
