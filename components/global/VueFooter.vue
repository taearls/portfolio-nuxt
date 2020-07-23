<template>
  <footer>
    <social-media-icons />
    <h6 
      class="text-center text-xs tracking-wide font-light"
      v-html="footerText"
    />
  </footer>
</template>

<script>
import SocialMediaIcons from "../widgets/SocialMediaIcons.vue";

export default {
  components: {
    SocialMediaIcons,
  },
  computed: {
    footerText() {
      const year = new Date().getFullYear();
      return `&copy; 1993-${year} &bull; Tyler Earls`;
    },
  },

};
</script>

<style>

</style>
