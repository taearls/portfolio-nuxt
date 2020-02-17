module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "@vue/airbnb",
    "plugin:vue/essential",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": "off",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "vue/no-v-html": "off",
    quotes: [2, "double", { avoidEscape: true }],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
