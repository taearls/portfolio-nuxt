module.exports = {
  purge: ["./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue"],
  theme: {
    extend: {},
    fontFamily: {
      default: "'Avenir', Helvetica, Arial, sans-serif;"
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
          }
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};
