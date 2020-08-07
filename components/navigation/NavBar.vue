<template>
  <div
    id="nav-container"
    class="fixed flex items-center justify-end w-screen top-0 font-default font-mono dark:text-white text-black transition-background-color transition-opacity duration-100 border border-b border-t-0 border-l-0 border-r-0 h-auto sm:h-16"
    :class="{'border border-gray-400 bg-gray-100 dark:bg-soft-black dark:border-gray-600': isNavActive, 'border-none bg-transparent': !isNavActive}"
  >
    <DarkModeToggle />
    <nav
      id="nav-bar"
      class="opacity-0 transition-opacity duration-100 w-screen"
      :class="{'opacity-100': isNavActive}"
    >
      <ul class="flex flex-col h-auto justify-center sm:flex-row sm:justify-end">
        <li
          v-for="(section, index) in sections"
          :key="index"
          class="mx-auto py-2 text-center w-1/3 border border-t-0 border-l-0 border-r-0 border-b-1 border-gray-300 sm:border-none sm:mx-0 sm:w-auto"
          :class="index === sections.length - 1 ? 'border-none' : ''"
        >
          <nuxt-link
            :to="section.href"
            :tabindex="isNavActive ? 0 : -1"
            class="px-4 text-lg font-bold text-purple-600 dark-hover:text-blue-300 focus:outline-none focus:shadow-outline rounded-sm"
          >
            {{ section.name }}
          </nuxt-link>
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

const sections = [
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

export default {
  components: {
    NavToggle,
    DarkModeToggle,
  },
  data() {
    return {
      isNavActive: false,
      sections,
    };
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
