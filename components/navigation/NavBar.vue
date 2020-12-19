<template>
  <div
    id="nav-container"
    class="fixed flex items-center w-screen top-0 font-default font-mono dark:text-white text-black border border-b border-t-0 border-l-0 border-r-0 h-auto sm:h-17"
    :class="{'border border-gray-500 bg-white dark:bg-soft-black dark:border-gray-300 justify-end': isNavActive, 'h-0 border-none bg-transparent justify-between': !isNavActive}"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <dark-mode-toggle       
        v-show="!isScrollingDown"
        cookie-key="color-scheme"
      />
    </transition>
    <nav
      v-show="isNavActive"
      id="navbar"
      class="w-screen"
    >
      <ul class="flex flex-col h-auto justify-center sm:flex-row sm:justify-end">
        <li
          v-for="(internalNavigationLink, index) in internalNavigationLinks"
          :key="'internalNavigationLink' + index"
          class="flex justify-center sm:inline-block mx-auto py-2 text-center w-1/3 border border-gray-400 dark:border-gray-500 border-t-0 border-l-0 border-r-0 border-b-1 sm:border-none sm:mx-0 sm:w-auto"
          :class="externalNavigationLinks.length === 0 && index === internalNavigationLinks.length - 1 ? 'border-none' : ''"
        >
          <nuxt-link
            :to="internalNavigationLink.href"
            :tabindex="isNavActive ? 0 : -1"
            :aria-label="internalNavigationLink.ariaLabel"
            prefetch
            class="px-8 sm:px-4 text-lg font-extrabold text-purple-700 dark:text-purple-400 dark:hover:text-cyan-300 focus:outline-none focus:shadow-outline-light dark:focus:shadow-outline-dark rounded-sm"
          >
            {{ internalNavigationLink.displayText }}
          </nuxt-link>
        </li>
        <li
          v-for="(externalNavigationLink, index) in externalNavigationLinks"
          :key="'externalNavigationLinks' + index"
          class="flex justify-center sm:inline-block mx-auto py-2 text-center w-1/3 border border-gray-400 dark:border-gray-500 border-t-0 border-l-0 border-r-0 border-b-1 sm:border-none sm:mx-0 sm:w-auto"
          :class="index === externalNavigationLinks.length - 1 ? 'border-none' : ''"
        >
          <a
            :href="externalNavigationLink.href"
            :tabindex="isNavActive ? 0 : -1"
            :aria-label="externalNavigationLink.ariaLabel"
            rel="noreferrer"
            target="_blank"
            class="inline-block pl-6 pr-12 sm:pl-4 sm:pr-2 text-lg font-extrabold text-purple-700 rounded-sm dark:text-purple-400 dark:hover:text-cyan-300 sm:flex sm:items-center sm:justify-center focus:outline-none focus:shadow-outline-light dark:focus:shadow-outline-dark"
          >
            {{ externalNavigationLink.displayText }}
            <external-link-icon
              :prefers-dark-mode="prefersDarkMode"
            />
          </a>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <nav-bar-toggle
        v-show="!isScrollingDown"
        @toggle-navigation="isNavActive = $event"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { mapState } from "vuex";

import DarkModeToggle from "../util/DarkModeToggle.vue";
import ExternalLinkIcon from "../widgets/svg/ExternalLinkIcon.vue";
import NavBarToggle from "./NavBarToggle.vue";

export default defineComponent({
  components: {
    DarkModeToggle,
    ExternalLinkIcon,
    NavBarToggle,
  },
  setup() {
    return {
      isNavActive: false,
      isScrollingDown: false,
      lastScrollPosition: 0,
    };
  },
  computed: {
    ...mapState([
      "prefersDarkMode",
      "internalNavigationLinks",
      "externalNavigationLinks",
    ]),
  },
  watch: {
    isNavActive(isActive) {
      if (isActive) {
        this.initializeFocus();
      }
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(): void {
      // only hide if nav is inactive
      if (!this.isNavActive) {
        const currentScrollPosition = window.pageYOffset;
        // check if current scroll position is greater than the last stored
        this.isScrollingDown = this.lastScrollPosition < currentScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
      }
    },
    initializeFocus(): void {
      // need to use next tick to ensure tabindex is set to 0 before attempting to focus
      this.$nextTick(() => {
        // initialize focus on the current page
        const activeRouterLink = document.querySelector("a.nuxt-link-exact-active") as HTMLElement;
        if (activeRouterLink == null) {
          const firstRouterLink = document.querySelector("#navbar ul li:first-child a") as HTMLElement;
          if (firstRouterLink != null) {
            firstRouterLink.focus();
          }
        } else {
          activeRouterLink.focus();
        }
      });
    },
  },
});
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.2s ease-out;
}
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
