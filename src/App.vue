<template>
  <div>
    <!-- <template v-if="onLandingPage">
      <landing-page 
        @websiteEntered="handleWebsiteEntered();"/>
    </template>
    <template v-else> -->
      <nav-bar 
        id="nav-bar"
        :class="{showNav: navActive, hideNav: !navActive}"/>
      <nav-toggle 
        class="nav-toggle"
        @toggle="handleToggle();"/>
      <vue-body/>
    <!-- </template> -->
  </div>
</template>

<script>
import "wicg-inert";

// import LandingPage from '@/components/LandingPage.vue';
import VueBody from '@/components/VueBody.vue';
import NavBar from '@/components/navigation/NavBar.vue';
import NavToggle from '@/components/navigation/NavToggle.vue';

export default {
  name: 'app',
  data() {
    return {
      // onLandingPage: true,
      navActive: false
    }
  },
  components: {
    // LandingPage,
    NavBar,
    NavToggle,
    VueBody
  },
  mounted() {
    var nav = document.getElementById("nav-bar");
    // set initial inert value so accessibility is set before nav interacted with
    if (this.navActive) {
      nav.inert = false;
    } else {
      nav.inert = true;
    }
    console.log(nav.inert);
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
    // handleWebsiteEntered: function() {
    //   this.onLandingPage = false;
    // }
  }
}
</script>

<style lang="scss">
@import "scss/global.scss";

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