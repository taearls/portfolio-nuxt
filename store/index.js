export const state = () => ({
  prefersDarkMode: false,
});

export const mutations = {
  toggleDarkMode(state) {
    state.prefersDarkMode = !state.prefersDarkMode; 
  },
  setDefaultDarkMode(state, defaultVal) {
    state.prefersDarkMode = defaultVal;
  },
};

export const actions = () => {};

export const modules = () => {};
