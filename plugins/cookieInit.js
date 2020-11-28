/**
 * Client-side plugin that sets dark mode preference on initial page load, based on:
 * 1. "color-scheme" cookie value - light or dark
 * 2. system preference based on window.matchMedia
 */
const setDarkModePreference = () => {
  const cookieKey = "color-scheme";
  const cookieValue = document.cookie
    .split("; ")
    .find(row => row.startsWith(cookieKey))
    .split("=")[1];
  if (cookieValue === "light") {
    document.querySelector("html").classList.remove("dark");
  } else if (
    cookieValue === "dark" ||
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.querySelector("html").classList.add("dark");
  }
};

export default setDarkModePreference;
