<template>
  <section class="px-4 mt-20 mx-auto max-w-none w-4/5 leading-8">
    <h1 class="text-center mb-4 text-purple-700 dark:text-purple-500 font-extrabold text-4xl leading-tight">
      Woops! That page doesn't exist.
    </h1>

    <p class="text-center text-soft-black dark:text-white text-lg px-2 mt-4 mb-10 leading-7">
      ...no seriously, <span class="text-purple-700 dark:text-purple-500">{{ currentRoute }}</span> doesn't exist. 
    </p>

    <p class="text-center text-soft-black dark:text-white text-lg px-2 my-4 leading-7">
      Click the button below to go back:
    </p>

    <button
      class="flex items-center group mx-auto my-2 mb-4 px-2 py-1 rounded-md text-center text-soft-black dark:text-white bg-purple-700 dark:bg-purple-500 focus:outline-none hover:opacity-75 dark-hover:opacity-75"
      @click="$router.back()"
    >
      <RightArrowIcon
        class="mr-2 transform rotate-180"
      />
      Back
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import RightArrowIcon from "../components/widgets/svg/RightArrowIcon.vue";

export default defineComponent({
  components: {
    RightArrowIcon,
  },
  computed: {
    currentRoute() {
      let currentRoute = "";
      if (process.client) {
        currentRoute = window.location.href;
      }
      return currentRoute;
    },
  },
});
</script>
