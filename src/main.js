import Vue from 'vue';
import VueRouter from 'vue-router';

// root component
import App from './App.vue';

// routes

// import LandingPage from './pages/LandingPage.vue';
import About from './pages/About.vue';
import WebProjects from './pages/web-projects/WebProjects.vue';
import Contact from './pages/Contact.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  // {
  //   path: '/',
  //   component: LandingPage
  // },
  { 
    path: '/', 
    component: About 
  },
  { 
    path: '/web-projects', 
    component: WebProjects 
  },
  { 
    path: '/contact', 
    component: Contact 
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      // scroll to relative url on page
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
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
