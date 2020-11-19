<template>
  <div id="app">
    <nav-bar />
    <nuxt />
    <vue-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import NavBar from "../components/navigation/NavBar.vue";
import VueFooter from "../components/global/VueFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    VueFooter,
  },
});
</script>

<style>
/* light-mode */
html {
  @apply bg-white text-soft-black;
}
html a:hover, html a:hover span {
  @apply text-blue-500;
}
html a:hover svg.dark-toggle, html a:hover svg.external-link {
  @apply stroke-current fill-current text-blue-500; 
}
/* dark-mode */

html.dark, html.dark body {
  @apply bg-soft-black;
}
html.dark a:hover span {
  @apply text-blue-300;
}
html.dark a:hover svg.dark-toggle, html.dark a:hover svg.external-link {
  @apply text-blue-300;
}
.inline-anchor {
  @apply rounded-sm text-purple-700 font-semibold hover:text-blue-500 hover:cursor-pointer focus:outline-none focus:shadow-outline-light;
}
/* .inline-anchor:hover {
  @apply text-blue-500 cursor-pointer;
}
.inline-anchor:focus {
  @apply outline-none shadow-outline-light;
} */
html.dark .inline-anchor {
  @apply text-purple-400 hover:text-blue-300 focus:shadow-outline-dark;
}
/* html.dark .inline-anchor:hover {
  @apply text-blue-300;
} */
/* html.dark .inline-anchor:focus {
  @apply shadow-outline-dark;
} */
</style>
