<template>
  <footer>
    <social-media-icons />
    <h6 
      class="text-center"
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
      return `&copy; Tyler Earls ${year}`;
    },
  },

};
</script>

<style>

</style>
