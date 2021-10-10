module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
      screens: {
        'sm': '400px',
        // => @media (min-width: 400px Phones) { ... }
  
        'md': '540px',
        // => @media (min-width: 540px Surface Duo) { ... }
  
        'lg': '768px',
        // => @media (min-width: 768px Ipad) { ... }
  
        'xl': '1024px',
        // => @media (min-width: 1024px Ipad Pro) { ... }

        '2xl': '1680px',
        // => @media (min-width: 1680px) { ... }
    },
    extend: {
      colors: {
        primary: "#A74C5E",
        secondary: "#4ca795",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
