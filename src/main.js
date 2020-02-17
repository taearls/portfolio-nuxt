import Vue from "vue";

// 3rd party
import Cloudinary from "cloudinary-vue";

import router from "./router";
import store from "./store";
import App from "./App.vue";

import HomePage from "./pages/HomePage.vue";
import WebProjects from "./pages/web-projects/WebProjects.vue";
import ContactForm from "./pages/ContactForm.vue";

Vue.config.productionTip = false;

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "cuckooandthebirds",
  },
});


Vue.use(VueRouter);
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
