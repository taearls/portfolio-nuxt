<template>
  <section class="prose px-4 mx-auto max-w-none w-4/5">
    <DarkModeToggle />
    <h1 class="text-left">
      Hi there! 👋
      <br>
      I'm Tyler Earls.
      <br>
      I am a software engineer and musician.
    </h1>
    <p class="dark:text-white">
      I work at <a
        class="text-purple-600 rounded-sm focus:outline-none focus:shadow-outline"
        href="https://www.ensighten.com"
        rel="noreferrer"
        target="_blank"
      >Ensighten</a>, where I help provide client-side security and privacy law compliance for Fortune 500 companies. I enjoy the continuously evolving challenge of making the web safe for online users and their personal data.
    </p>
    <p class="dark:text-white">
      Occasionally, I do freelance frontend work on the side. I love to build UI components that people interact with on the web.
    </p>
    <p class="dark:text-white">
      Outside of tech, I write songs as Cuckoo and the Birds. You can listen to my music <a
        class="text-purple-600 rounded-sm focus:outline-none focus:shadow-outline"
        href="https://cuckooandthebirds.bandcamp.com"
        rel="noreferrer"
        target="_blank"
      >here.</a>
    </p>
    <br>
  </section>
</template>

<script>
import DarkModeToggle from "../components/util/DarkModeToggle";
export default {
  components: {
    DarkModeToggle,
  },
};
</script>

<style>
</style>
