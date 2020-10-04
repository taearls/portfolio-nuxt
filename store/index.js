import { fireStore } from "~/plugins/firebase.js";

export const state = () => ({
  prefersDarkMode: false,
  webProjects: {},
});

export const mutations = {
  toggleDarkMode(state) {
    state.prefersDarkMode = !state.prefersDarkMode; 
  },
  setPrefersDarkMode(state, defaultVal) {
    state.prefersDarkMode = defaultVal;
  },
  setWebProjects(state, webProjects) {
    state.webProjects = webProjects;
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
    const upperCasedCollectionName = collectionName.charAt(0).toUpperCase() + collectionName.slice(1);

    commit(`set${upperCasedCollectionName}`, data);
  },
  async nuxtServerInit({ dispatch }) {
    await dispatch("fetchData", "webProjects");
  },
};

export const modules = () => {};
