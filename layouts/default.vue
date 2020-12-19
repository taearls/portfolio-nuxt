<template>
  <div id="app">
    <NavBar />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import NavBar from "../components/navigation/NavBar.vue";
import TheFooter from "../components/global/TheFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    TheFooter,
  },
});
</script>

<style>
/* light-mode */
html {
  @apply bg-white text-soft-black;
}
html a:hover, html a:hover span {
  @apply text-cyan-400;
}
html a:hover svg.dark-toggle, html a:hover svg.external-link {
  @apply stroke-current fill-current text-cyan-400; 
}

/* dark-mode */
html.dark, html.dark body {
  @apply bg-soft-black;
}
html.dark a:hover span {
  @apply text-cyan-300;
}
html.dark a:hover svg.dark-toggle, html.dark a:hover svg.external-link {
  @apply text-cyan-300;
}
.inline-anchor {
  @apply rounded-sm text-purple-700 font-semibold hover:text-cyan-400 hover:cursor-pointer focus:outline-none focus:shadow-outline-light;
}
html.dark .inline-anchor {
  @apply text-purple-400 hover:text-cyan-300 focus:shadow-outline-dark;
}
</style>
