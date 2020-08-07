<template>
  <div 
    id="app"
    class="text-black dark:text-white colors-black-soft sm:mt-16"
  >
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
  beforeMount() {
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (prefersDarkMode) {
      window.document.documentElement.classList.add("dark-mode");
    } else {
      window.document.documentElement.classList.remove("dark-mode");
    }
  },
};
</script>

<style>
/* light-mode */
html {
  @apply bg-white transition-colors text-soft-black;
}
html a:hover {
  @apply text-blue-500;
}
html a:focus {
  box-shadow: 0 0 0 3px #63b3ed; /* text-blue-400 */
}
html button:focus {
  box-shadow: 0 0 0 3px #63b3ed; /* text-blue-400 */
}

/* dark-mode */
html.dark-mode {
  @apply bg-soft-black transition-colors;
}
html.dark-mode body {
  @apply bg-soft-black transition-colors;
}
html.dark-mode h1 {
  @apply text-purple-500;
}
html.dark-mode h2 {
  @apply text-purple-500;
}
html.dark-mode a {
  @apply text-purple-500;
}
html.dark-mode span {
  @apply text-purple-500;
}
html.dark-mode a:hover, html.dark-mode a:hover span {
  @apply text-blue-300;
}
html.dark-mode a:focus {
  box-shadow: 0 0 0 3px #90cdf4; /* text-blue-300 */
}
html.dark-mode button:focus {
  box-shadow: 0 0 0 3px #90cdf4; /* text-blue-300 */
}
</style>
