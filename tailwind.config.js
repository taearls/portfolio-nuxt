module.exports = {
  purge: {
    whitelist: ["dark-mode"],
    content: ["./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue"]
  },
  theme: {
    darkSelector: ".dark-mode",
    fontFamily: {
      default: "'Avenir', Helvetica, Arial, sans-serif;"
    },
    extend: {
      colors: {
        "soft-black": "#121212"
      }
    },
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-dark-mode")()
  ]
};
