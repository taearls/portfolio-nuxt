<template>
  <div id="app">
    <nav-bar />
    <nuxt />
    <vue-footer />
  </div>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import VueFooter from "../components/global/VueFooter.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
    VueFooter,
  },
  computed: {
    ...mapState([
      "webProjects",
    ]),
  },
  mounted() {
    this.preloadCloudinaryImages();
  },
  methods: {
    preloadCloudinaryImages() {
      // setTimeout with 0ms puts this call at the end of the stack
      setTimeout(() => {
        this.webProjects.forEach(project => {
          if (project.cloudinarySrc != null && project.cloudinarySrc !== "") {
            new Image().src = project.cloudinarySrc;
          }
        });
      }, 0);
    },
  },
};
</script>

<style>
/* light-mode */
html {
  @apply bg-white text-soft-black;
}
html a:hover, html a:hover span {
  @apply text-blue-500;
}
html a:hover svg.dark-mode-toggle, html a:hover svg.external-link {
  fill: #4299e1 !important; /* text-blue-500 */
  stroke: #4299e1 !important; /* text-blue-500 */
}
/* dark-mode */
html.dark-mode, html.dark-mode body {
  @apply bg-soft-black;
}
html.dark-mode a:hover span {
  @apply text-blue-300;
}
html.dark-mode a:hover svg.dark-mode-toggle, html.dark-mode a:hover svg.external-link {
  fill: #90cdf4 !important; /* text-blue-300 */
  stroke: #90cdf4 !important; /* text-blue-300 */
}
.inline-anchor {
  @apply rounded-sm text-purple-700 font-semibold;
}
.inline-anchor:hover {
  @apply text-blue-500 cursor-pointer;
}
.inline-anchor:focus {
  @apply outline-none shadow-outline-light;
}
html.dark-mode .inline-anchor {
  @apply text-purple-500;
}
html.dark-mode .inline-anchor:hover {
  @apply text-blue-300;
}
html.dark-mode .inline-anchor:focus {
  @apply shadow-outline-dark;
}
</style>
