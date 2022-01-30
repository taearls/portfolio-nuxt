/**
 * Client-side plugin that sets dark mode preference on initial page load, based on:
 * 1. "color-scheme" cookie value - light or dark
 * 2. system preference based on window.matchMedia
 */

const isDarkModePreferred = () => {
  const cookieKey = "color-scheme";
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(cookieKey));
  // have to make sure there's a value for `color-scheme` before attempting to grab it.
  let cookieValue;
  if (cookie) {
    cookieValue = cookie.split("=")[1];
  }

  if (
    cookieValue === "light" ||
    (window.matchMedia &&
      !window.matchMedia("(prefers-color-scheme: dark)").matches &&
      cookieValue !== "dark")
  ) {
    return false;
  } else if (
    cookieValue === "dark" ||
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      cookieValue !== "light")
  ) {
    return true;
  }

  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

const setDarkModePreference = () => {
  if (isDarkModePreferred()) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

setDarkModePreference();
