import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../pages/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/web-projects",
    name: "WebProjects",
    component: () => import(/* webpackChunkName: "webprojects" */ "../pages/web-projects/WebProjects.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import(/* webpackChunkName: "contact" */ "../pages/ContactForm.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // scroll to relative url on page
      return {
        selector: to.hash,
      };
    } if (savedPosition) {
      // emulates native-like behavior as if using a back button
      return savedPosition;
    }
    // start at top of page by default
    return { x: 0, y: 0 };
  },
});

export default router;
