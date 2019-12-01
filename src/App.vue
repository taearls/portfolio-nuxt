<template>
  <div>
      <nav-bar 
        id="nav-bar"
        :class="{showNav: navActive, hideNav: !navActive}"/>
      <nav-toggle 
        class="nav-toggle"
        @toggle="handleToggle();"/>

      <!-- clears nav height above each view -->
      <div class="nav-clearfix"></div>

      <router-view />

      <vue-footer />
  </div>
</template>

<script>
import "wicg-inert";

import NavBar from '@/components/navigation/NavBar.vue';
import NavToggle from '@/components/navigation/NavToggle.vue';

import VueFooter from '@/components/global/VueFooter.vue';

export default {
  name: 'app',
  data() {
    return {
      navActive: false
    }
  },
  components: {
    NavBar,
    NavToggle,
    VueFooter,
  },
  mounted() {
    var nav = document.getElementById("nav-bar");

    // set initial inert value so accessibility is set before nav interacted with
    if (this.navActive) {
      nav.inert = false;
    } else {
      nav.inert = true;
    }
  },
  methods: {
    handleToggle: function() {
      this.navActive = !this.navActive;
      
      var nav = document.getElementById("nav-bar");
      if (this.navActive) {
        nav.inert = false;
        this.initializeFocus();
      } else {
        nav.inert = true;
      }
    },
    initializeFocus: function() {
      var firstLink = document.querySelector("nav ul li:first-child a");
      firstLink.focus();
    }
  }
}
</script>

<style lang="scss">
@import "scss/global.scss";

.nav-clearfix {
  height: $navHeight;
}

#fix-width {
  overflow-x: hidden;
}
.hideNav {
  opacity: 0;
  transition: opacity 200ms $easing;
}
.showNav {
  opacity: 0.95;
  transition: opacity 600ms $easing;
}
</style>