export const getCookieValue = (cookieKey) => {
  return document.cookie
    .split("; ")
    .find(row => row.startsWith(cookieKey))
    .split("=")[1];
};

export const setCookieValue = (cookieKey, newCookieValue) => {
  document.cookie = `${cookieKey}=${newCookieValue}`;
};

export const isDarkModePreferred = () => {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const doesColorSchemeCookieExist = (cookieKey) => {
  return document.cookie != null && document.cookie.indexOf(`${cookieKey}=`) > -1;
};
