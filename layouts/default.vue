<template>
  <div 
    id="app"
    class="bg-gray-100 text-black sm:mt-16"
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
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: calc(#{$navHeight} + 30px);
} */
body {
  background-color: #f7fafc; /* bg-gray-100 */
}
</style>
