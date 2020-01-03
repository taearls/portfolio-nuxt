<template>
  <div>
      <header>
        <nav-bar 
          id="nav-bar"
          ref="navbar"
          :inert="!navActive"
          :class="{showNav: navActive, hideNav: !navActive}"/>
        <nav-toggle 
          class="nav-toggle"
          @toggle="handleToggle();"/>
      </header>

      <!-- clears nav height above each view -->
      <div class="nav-clearfix"></div>

      <router-view />

      <vue-footer />
  </div>
</template>

<script>
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
    const navbar = this.$refs.navbar;

    // set initial inert value so accessibility is set before nav interacted with
    if (this.navActive) {
      navbar.inert = false;
    } else {
      navbar.inert = true;
    }
  },
  methods: {
    handleToggle: function() {
      this.navActive = !this.navActive;
      
      if (this.navActive) {
        this.initializeFocus();
      }
    },
    initializeFocus: function() {
      var firstLink = document.querySelector("nav ul li:first-child a");
      firstLink.focus();
    }
  },
}
</script>

<style lang="scss">
@import "src/scss/global.scss";

.nav-clearfix {
  height: $navHeight;
}
#fix-width {
  overflow-x: hidden;
}
.hideNav {
  opacity: 0;
  transition: opacity 500ms $easing;
}
.showNav {
  opacity: 1;
  transition: opacity 500ms $easing;
}
</style>