<template>
  <footer>
    <SocialMediaIcons />
    <p
      class="text-center text-soft-black dark:text-white text-xs tracking-wide font-normal"
      v-html="footerHtml"
    />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import SocialMediaIcons from "../widgets/SocialMediaIcons.vue";

export default defineComponent({
  components: {
    SocialMediaIcons,
  },
  setup() {
    const footerHtml = `&copy; 1993-${new Date().getFullYear()} &bull; Tyler Earls`;

    return {
      footerHtml,
    };
  },
});
</script>
