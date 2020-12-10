<template>
  <div class="flex justify-center">
    <a
      v-for="(socialMediaLink, index) in socialMediaLinks"
      :key="'socialMediaLink' + index"
      rel="noreferrer"
      class="px-2 py-1 rounded-sm focus:outline-none focus:shadow-outline-light dark:focus:shadow-outline-dark"
      target="_blank"
      :href="socialMediaLink.href"
      :aria-label="socialMediaLink.ariaLabel"
    >
      <span class="text-purple-700 dark:text-purple-400 rounded-sm hover:text-cyan-400 dark:hover:text-cyan-300">
        <font-awesome-icon
          v-show="pageLoaded"
          :icon="['fab', socialMediaLink.icon]"
          size="2x"
        />
      </span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { mapState } from "vuex";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faLinkedin, faGithub, faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  setup() {
    library.add(faTwitter, faLinkedin, faGithub, faBandcamp);
  },
  data() {
    return {
      pageLoaded: false,
    };
  },
  computed: {
    ...mapState([
      "socialMediaLinks",
    ]),
  },
  mounted() {
    // this only shows the social media icons after the DOM is fully loaded. 
    // prevents FOUC in firefox
    this.pageLoaded = true;
  },
});
</script>
