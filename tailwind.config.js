module.exports = {
  purge: {
    content: ["./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue"],
  },
  darkMode: "class",
  theme: {
    fontFamily: {
      default: "'Avenir', Helvetica, Arial, sans-serif;",
    },
    extend: {
      spacing: {
        "17": "4.25rem",
      },
      colors: {
        "soft-black": "#121212",
      },
      boxShadow: {
        "outline-light": "0 0 0 3px #4299e1",
        "outline-dark": "0 0 0 3px #90cdf4",
      },
    },
  },
  variants: {
    // backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    // borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    boxShadow: ["responsive", "hover", "focus"],
    cursor: ["responsive", "disabled"],
    opacity: ["responsive", "hover", "focus", "disabled"],
    padding: ["responsive", "disabled"],
    // textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"],
  },
  plugins: [],
};
