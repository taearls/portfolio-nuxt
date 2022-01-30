export const setCookieValue = (cookieKey, newCookieValue) => {
  document.cookie = `${cookieKey}=${newCookieValue}`;
};

export const isDarkModePreferred = () => {
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
  } else if (cookieValue === "dark" ||
  (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    cookieValue !== "light")) {
      return true;
    }

  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const setDarkModePreference = () => {
  if (isDarkModePreferred()) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
};
