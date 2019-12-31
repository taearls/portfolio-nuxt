import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import HomePage from './pages/HomePage.vue';
import WebProjects from './pages/web-projects/WebProjects.vue';
import ContactForm from './pages/ContactForm.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { 
    path: '/', 
    component: HomePage
  },
  { 
    path: '/web-projects', 
    component: WebProjects 
  },
  { 
    path: '/contact',
    component: ContactForm
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      // scroll to relative url on page
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
      // emulates native-like behavior as if using a back button
      return savedPosition;
    } else {
      // start at top of page by default
      return { x: 0, y: 0 };
    }
  },
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');