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

export default {
  name: "App",
  components: {
    NavBar,
    VueFooter,
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
</style>
