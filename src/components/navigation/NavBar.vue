<template>
  <!-- TODO: implement mobile design of nav bar -->
  <div>
    <nav
      v-show="isNavActive"
      id="nav-bar"
    >
      <ul>
        <li
          v-for="(section, index) in sections"
          :key="index"
        >
          <router-link
            :to="section.href"
            :tabindex="isNavActive ? 0 : -1"
          >
            {{ section.name }}
          </router-link>
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

<style lang="scss" scoped>
@import "src/scss/global.scss";

a {
    font-size: 20px;
    padding: 0px 5px;
}
#headshot {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
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
}
</style>
