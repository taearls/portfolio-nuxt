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
    boxShadow: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
    cursor: ["responsive", "hover", "disabled"],
    opacity: ["responsive", "group-hover", "focus-within", "hover", "disabled"],
    padding: ["responsive", "disabled"],
  },
  plugins: [],
};
