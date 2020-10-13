<template>
  <section class="px-4 mt-20 mx-auto max-w-none w-4/5 leading-8">
    <h1 class="text-center mb-4 text-purple-700 dark:text-purple-500 font-extrabold text-4xl leading-tight">
      Web Projects
    </h1>
    <p class="text-soft-black dark:text-white text-lg md:text-xl px-2 mt-4 mb-10 leading-7">
      Here's a sample of some of my coding work. 
      In addition to this website, which is built with Nuxt, TailwindCSS, and endless hours researching how to design a decent dark mode, 
      my work includes these personal and freelance projects. If you're interested to see more, feel free to stalk me on 
      <a
        class="inline-anchor"
        href="https://www.github.com/taearls"
        rel="noreferrer"
        target="_blank"
      >Github</a>.
    </p>
    <p class="text-soft-black dark:text-white text-lg md:text-xl px-2 mt-4 mb-10 leading-7">
      I have been very interested in learning Rust. I'm currently leveling up those skills and hope to start work on a fun project in that realm. Specifically, I'd love to build a game and embed it on the web using Web Assembly.
    </p>
    <WebProject
      v-for="(project, index) in webProjects"
      :key="'web-project-' + index"
      :project="project"
      :index="index"
      :project-count="webProjects.length - 1"
    />
  </section>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { defineComponent } from "@vue/composition-api";
import WebProject from "../../components/WebProject.vue";

export default defineComponent({
  components: {
    WebProject,
  },
  computed: {
    ...mapState([
      "webProjects",
    ]),
  },
});
</script>
