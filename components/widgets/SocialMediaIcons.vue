<template>
  <div class="flex justify-center">
    <a
      v-for="(link, index) in socialLinks"
      :key="index"
      rel="noreferrer"
      class="px-2 py-1"
      target="_blank"
      :href="link.href"
      :aria-label="`Go to Tyler's ${link.label}`"
    >
      <span class="text-xs text-purple-600">
        <font-awesome-icon
          :icon="['fab', link.icon]"
          size="2x"
        />
      </span>
    </a>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faLinkedin, faGithub, faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      socialLinks,
    };
  },
};
</script>

<style>
</style>
