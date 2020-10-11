import { fireStore } from "~/plugins/firebase.js";

export const state = () => ({
  prefersDarkMode: false,
  webProjects: [],
  internalNavigationLinks: [],
  externalNavigationLinks: [],
  socialMediaLinks: [],
});

export const mutations = {
  toggleDarkMode(state) {
    state.prefersDarkMode = !state.prefersDarkMode; 
  },
  setPrefersDarkMode(state, defaultVal) {
    state.prefersDarkMode = defaultVal;
  },
  setState(state, { stateProperty, newStateValue }) {
    // generic function to update central state for all collections once data is fetched from firebase
    state[stateProperty] = newStateValue;
  },
};

export const actions = {
  async fetchData({ commit }, collectionName) {
    const response = await fireStore.collection(collectionName)
      .where("isActive", "==", true)
      .get();
    const data = response.docs
      .map(doc => doc.data())
      .sort((a, b) => {
        // sort web projects in ascending order by index
        if (a.index > b.index) {
          return 1;
        } else if (a.index < b.index) {
          return -1;
        }
        return 0;
      });
    commit("setState", { stateProperty: collectionName, newStateValue: data });
  },
  async nuxtServerInit({ dispatch }) {
    await dispatch("fetchData", "webProjects");
    await dispatch("fetchData", "internalNavigationLinks");
    await dispatch("fetchData", "externalNavigationLinks");
    await dispatch("fetchData", "socialMediaLinks");
  },
};

export const modules = () => {};
