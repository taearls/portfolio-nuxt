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
    typography: {
      default: {
        css: {
          color: "#000",
          a: {
            color: "#805ad5", // text-purple-600
            "&:hover": {
              color: "#63b3ed" // text-blue-400
            }
          },
          span: {
            "&:hover": {
              color: "#63b3ed" // text-blue-400
            }
          },
          h1: {
            color: "#805ad5",
          },
          h2: {
            color: "#805ad5",
          },
          p: {
            fontSize: "1.125rem", // prose-lg
          },
          img: {
            marginTop: 0,
            marginBottom: 0,
          },
        }
      }
    }
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
