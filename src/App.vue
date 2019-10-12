<template>
  <div>
    <!-- <template v-if="onLandingPage">
      <landing-page 
        @websiteEntered="handleWebsiteEntered();"/>
    </template>
    <template v-else> -->
      <nav-toggle 
        class="nav-toggle"
        :class="{adjustToggle: navActive}"
        @toggle="handleToggle();"></nav-toggle>
      <nav-bar 
        id="nav-bar"
        style="padding-top: 35px;"
        :class="{showNav: navActive, hideNav: !navActive}"/>
      <vue-body
        :class="{adjustBody: navActive, defaultBody: !navActive}"/>
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
      navActive: true
    }
  },
  components: {
    // LandingPage,
    NavBar,
    NavToggle,
    VueBody
  },
  methods: {
    handleToggle: function() {
      this.navActive = !this.navActive;
      
      var nav = document.getElementById("nav-bar");
      if (this.navActive) {
        nav.inert = false;
      } else {
        nav.inert = true;
      }
    },
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
  width: 0;
  opacity: 0;
  transition: width 400ms $easing, opacity 200ms $easing;
}
.showNav {
  width: $navWidth;
  opacity: 0.95;
  transition: width 300ms $easing, opacity 600ms $easing;
}

.nav-toggle {
  margin-left: 0;
}
.defaultBody {
  margin-left: 0;
  transition: margin-left 400ms $easing;
}
.adjustBody, .adjustToggle {
  margin-left: $navWidth !important;
  transition: margin-left 400ms $easing;
  padding: 0px 10px;
}
</style>