<template>
  <div class="flex justify-center">
    <a
      v-for="(link, index) in socialLinks"
      :key="index"
      rel="noreferrer"
      class="px-2 py-1 rounded-sm focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
      target="_blank"
      :href="link.href"
      :aria-label="`Go to Tyler's ${link.label}`"
    >
      <span class="text-xs text-purple-700 dark:text-purple-500 rounded-sm hover:text-blue-500 dark-hover:text-blue-300">
        <font-awesome-icon
          :icon="['fab', link.icon]"
          size="2x"
        />
      </span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faLinkedin, faGithub, faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  setup() {
    library.add(faTwitter, faLinkedin, faGithub, faBandcamp);

    const socialLinks = [
      {
        href: "https://www.linkedin.com/in/tylerearls",
        label: "LinkedIn",
        icon: "linkedin",
      },
      {
        href: "https://www.github.com/taearls",
        label: "Github",
        icon: "github",
      },
      {
        href: "https://www.twitter.com/taearls",
        label: "Twitter",
        icon: "twitter",
      },
      {
        href: "https://cuckooandthebirds.bandcamp.com",
        label: "Bandcamp",
        icon: "bandcamp",
      },
    ];
    return {
      socialLinks,
    };
  },
});
</script>
