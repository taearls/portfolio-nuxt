<template>
  <div
    id="nav-container"
    class="fixed flex items-center justify-end w-screen top-0 font-default font-mono text-black transition-background-color transition-opacity duration-100 border border-b border-t-0 border-l-0 border-r-0 h-auto sm:h-16"
    :class="{'border border-gray-600 bg-gray-100': isNavActive, 'border-none': !isNavActive}"
  >
    <nav
      id="nav-bar"
      class="opacity-0 transition-opacity duration-100 w-screen"
      :class="{'opacity-100': isNavActive}"
    >
      <ul class="flex flex-col h-auto justify-center sm:flex-row sm:justify-end">
        <li
          v-for="(section, index) in sections"
          :key="index"
          class="mx-auto py-2 text-center w-1/3 border border-t-0 border-l-0 border-r-0 border-b-1 border-black sm:border-none sm:mx-0 sm:w-auto"
          :class="index === sections.length - 1 ? 'border-none' : ''"
        >
          <nuxt-link
            :to="section.href"
            :tabindex="isNavActive ? 0 : -1"
            class="px-4 text-lg hover:text-purple-700 hover:opacity-100 rounded-sm"
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
import NavToggle from "./NavToggle.vue";

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
/* 
#navbar-fallback {
  position: fixed;
  top: 0;
  height: 75px;
  width: 100%;
  background: $softblack;
  z-index: 10;
  border-bottom: 1px dotted $softwhite;
}
a {
  font-size: 20px;
  padding: 0px 5px;
}
@media (max-width: $S) {
  nav {
    ul {
      margin-right: 50px;
      li {
        padding: 0 2px !important;
      }
    }
  }
} */
</style>
