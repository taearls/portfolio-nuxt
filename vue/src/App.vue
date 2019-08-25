<template>
  <div>
    <!-- add slider that controls nav? -->
    <!-- https://www.moka.tv -->
    <NavBar 
      v-if="navActive"
      :class="{addNav: navActive}"
      />
    <WebProject 
      v-for="(project, index) in projects"
      :key="index"
      :class="{adjustBody: navActive}"
      :project="project"
      :projectCount="projects.length - 1"
      />
    <VueFooter 
      :class="{adjustBody: navActive}"
      />
  </div>
</template>

<script>
import ProjectData from '@/data/web-projects.json';
import NavBar from '@/components/NavBar.vue';
import WebProject from '@/components/WebProject.vue';
import VueFooter from '@/components/VueFooter.vue';

export default {
  name: 'app',
  data() {
    return {
      projects: ProjectData,
      navActive: true,
    }
  },
  components: {
    NavBar,
    WebProject,
    VueFooter
  },
  created() {
    this.checkNavActive();
    window.addEventListener("resize", this.checkNavActive);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkNavActive);
  },
  methods: {
    checkNavActive: function() {
      if (window.innerWidth <= 767) {
        this.navActive = false;
      } else {
        this.navActive = true;
      }
    }
  }
}
</script>

<style lang="scss">
@import "scss/global.scss";

#fix-width {
  overflow-x: hidden;
}
.addNav {
  width: $navWidth;
}

.adjustBody {
  margin-left: $navWidth;
  padding: 0px 10px;
}

/* PORTFOLIO DROPDOWN */
.dropdown-menu {
  background-color: #000;
}
.dropdown-item {
  background-color: #000;
  color: $red;
  &:hover {
    background-color: #000;
    color: $lightblue;
    transition: 0.5s ease;
  }
}
.dropdown-divider {
  border-top: 1px solid $lightblue !important;
}

/* TOGGLED DROP-DOWN ICON */
.custom-toggler .navbar-toggler-icon {
  /* I have to redraw SVG image to customize the color */
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(224, 33, 65, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  &:hover {
    background-image: url("data:image/avg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(52, 136, 153, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    transition: 0.5s ease;
  }
  &:focus {
    border: none;
    outline: none;
  }
}

/* MAIN */
#contact {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* IMAGES */
.contact {
  cursor: pointer;
  span {
    background-color: $red;
    border: 1px solid black;
    &:hover {
      border: 1px solid black;
      background-color: $lightblue;
      transition: 0.2s ease;
    }
  }
}

#portfolio {
  text-align: center;
  a {
    text-decoration: none;
    color: $red;
    display: inline-block;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
}

.skill-title, section h2 {
  font-weight: bold;
}
</style>