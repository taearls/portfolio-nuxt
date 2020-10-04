<template>
  <div
    id="nav-container"
    class="fixed flex items-center justify-end w-screen top-0 font-default font-mono dark:text-white text-black border border-b border-t-0 border-l-0 border-r-0 h-auto sm:h-16"
    :class="{'border border-gray-500 bg-white dark:bg-soft-black dark:border-gray-300': isNavActive, 'h-0 border-none bg-transparent': !isNavActive}"
  >
    <DarkModeToggle cookie-key="color-scheme" />
    <nav
      id="nav-bar"
      class="opacity-0 w-screen"
      :class="{'opacity-100': isNavActive}"
    >
      <ul class="flex flex-col h-auto justify-center sm:flex-row sm:justify-end">
        <li
          v-for="(internalLink, index) in internalLinks"
          :key="'internalLink' + index"
          class="mx-auto py-2 text-center w-1/3 border border-gray-400 dark:border-gray-500 border-t-0 border-l-0 border-r-0 border-b-1 sm:border-none sm:mx-0 sm:w-auto"
          :class="externalLinks.length === 0 && index === internalLinks.length - 1 ? 'border-none' : ''"
        >
          <nuxt-link
            :to="internalLink.href"
            :tabindex="isNavActive ? 0 : -1"
            :aria-label="internalLink.ariaLabel"
            class="px-8 sm:px-4 text-lg font-extrabold text-purple-700 dark:text-purple-500 dark-hover:text-blue-300 focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark rounded-sm"
          >
            {{ internalLink.name }}
          </nuxt-link>
        </li>
        <li
          v-for="(externalLink, index) in externalLinks"
          :key="'externalLink' + index"
          class="mx-auto py-2 text-center w-1/3 border border-gray-400 dark:border-gray-500 border-t-0 border-l-0 border-r-0 border-b-1 sm:border-none sm:mx-0 sm:w-auto"
          :class="index === externalLinks.length - 1 ? 'border-none' : ''"
        >
          <a
            :href="externalLink.href"
            :tabindex="isNavActive ? 0 : -1"
            :aria-label="externalLink.ariaLabel"
            rel="noreferrer"
            target="_blank"
            class="inline-block pl-6 pr-12 text-lg font-extrabold text-purple-700 rounded-sm dark:text-purple-500 dark-hover:text-blue-300 sm:pl-4 sm:pr-2 sm:flex sm:items-center sm:justify-center focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
          >
            {{ externalLink.name }}
            <ExternalLinkIcon
              :prefers-dark-mode="prefersDarkMode"
              dark-mode-color="#9f7aea"
              light-mode-color="#6b46c1"
            />
          </a>
        </li>
      </ul>
    </nav>
    <nav-toggle
      @toggleNavigation="isNavActive = $event"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import DarkModeToggle from "../util/DarkModeToggle";
import ExternalLinkIcon from "../widgets/svg/ExternalLinkIcon";
import NavToggle from "./NavToggle";

const internalLinks = [
  {
    href: "/",
    name: "Home",
    ariaLabel: "Visit Home Page",
  },
  {
    href: "/web-projects",
    name: "Web",
    ariaLabel: "Visit Web Projects Page",
  },
  {
    href: "/contact",
    name: "Contact",
    ariaLabel: "Visit Contact Page",
  },
];

const externalLinks = [
  {
    href: "https://cuckooandthebirds.bandcamp.com",
    name: "Music",
    ariaLabel: "Listen to Tyler's music on Bandcamp",
  },
];

export default {
  components: {
    DarkModeToggle,
    ExternalLinkIcon,
    NavToggle,
  },
  data() {
    return {
      isNavActive: false,
      internalLinks,
      externalLinks,
    };
  },
  computed: {
    ...mapState(["prefersDarkMode"]),
  },
  watch: {
    isNavActive(isActive) {
      if (isActive) {
        this.initializeFocus();
      }
    },
  },
  methods: {
    initializeFocus() {
      // need to use next tick to ensure tabindex is set to 0 before attempting to focus
      this.$nextTick(() => {
        // initialize focus on the current page
        const activeRouterLink = document.querySelector("a.nuxt-link-exact-active");
        if (activeRouterLink == null) {
          const firstRouterLink = document.querySelector("#nav-bar ul li:first-child a");
          firstRouterLink.focus();
        } else {
          activeRouterLink.focus();
        }
      });
    },
  },
};
</script>

<style>
</style>
