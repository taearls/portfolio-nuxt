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
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};
