<template>
  <nav>
    <ul>
      <li
        v-for="(section, index) in sections"
        :key="index"
      >
        <router-link
          :to="section.href"
          :tabindex="inert ? -1 : 0"
        >
          {{ section.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
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
  props: {
    inert: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      sections,
    };
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
