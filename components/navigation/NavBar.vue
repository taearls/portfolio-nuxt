<template>
  <div
    id="nav-container"
    class="fixed flex items-center justify-end w-screen top-0 font-default font-mono dark:text-white text-black transition-background-color duration-100 border border-b border-t-0 border-l-0 border-r-0 h-auto sm:h-16"
    :class="{'border border-gray-500 bg-white dark:bg-soft-black dark:border-gray-300': isNavActive, 'border-none bg-transparent': !isNavActive}"
  >
    <DarkModeToggle />
    <nav
      id="nav-bar"
      class="opacity-0 transition-opacity duration-100 w-screen"
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
            class="px-8 sm:px-4 text-lg font-extrabold text-purple-700 dark:text-purple-500 dark-hover:text-blue-300 focus:outline-none focus:shadow-outline rounded-sm"
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
            target="_blank"
            class="sm:flex sm:items-center sm:justify-center pl-8 pr-12 sm:pl-4 sm:pr-2 text-lg font-extrabold text-purple-700 dark:text-purple-500 dark-hover:text-blue-300 focus:outline-none focus:shadow-outline rounded-sm"
          >
            {{ externalLink.name }}
            <svg
              class="absolute inline-block ml-1 sm:static sm:mx-1"
              height="24px"
              width="24px"
              :stroke="prefersDarkMode ? '#9f7aea' : '#6b46c1'"
              stroke-width="5"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="margin-bottom: 0.1rem;"
              xml:space="preserve"
            >
              <title>External Link</title>
              <desc>Icon indicating the user will visit an external site in a separate tab.</desc>
              <path
                d="M28.8,83.1h36l0,0c6.6,0,12-5.4,12-12v-22c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v22c0,4.4-3.6,8-8,8l0,0h-36  c-4.4,0-8-3.6-8-8v-36c0-4.4,3.6-8,8-8l0,0h22l0,0c1.1,0,2-0.9,2-2s-0.9-2-2-2h-22l0,0c-6.6,0-12,5.4-12,12v36  C16.8,77.7,22.2,83.1,28.8,83.1z"
              />
              <path
                d="M83.2,37.2V18.9c0-0.1,0-0.3,0-0.4c0,0,0-0.1,0-0.1c0-0.1,0-0.2-0.1-0.3L83,18c0-0.1-0.1-0.2-0.1-0.2  c-0.1-0.2-0.3-0.4-0.6-0.6c-0.1-0.1-0.2-0.1-0.3-0.1H82L81.7,17h-0.1c-0.1,0-0.3,0-0.4,0l0,0H62.9l0,0c-1.1,0-2,0.9-2,2s0.9,2,2,2  h13.5L47.1,50.1c-0.8,0.8-0.8,2,0,2.8c0.8,0.8,2,0.8,2.8,0l29.3-29.2v13.5c0,1.1,0.9,2,2,2l0,0C82.3,39.2,83.2,38.3,83.2,37.2z"
              />
            </svg>
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
import DarkModeToggle from "../util/DarkModeToggle";
import NavToggle from "./NavToggle";

const internalLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/web-projects",
    name: "Web",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const externalLinks = [
  {
    href: "https://cuckooandthebirds.bandcamp.com",
    name: "Music",
  },
];

export default {
  components: {
    NavToggle,
    DarkModeToggle,
  },
  data() {
    return {
      isNavActive: false,
      internalLinks,
      externalLinks,
    };
  },
  computed: {
    prefersDarkMode() {
      return this.$store.state.prefersDarkMode;
    }
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
        const firstRouterLink = document.querySelector("#nav-bar ul li:first-child a");
        firstRouterLink.focus();
      });
    },
  },
};
</script>

<style>
</style>
