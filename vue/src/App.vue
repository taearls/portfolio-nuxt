<template>
  <div>
    <!-- add slider that controls nav? -->
    <!-- https://www.moka.tv -->
    <nav-toggle 
      class="nav-toggle"
      :class="{adjustToggle: navActive}"
      @toggle="handleToggle();"></nav-toggle>
    <nav-bar 
      style="padding-top: 35px;"
      :class="{addNav: navActive, defaultNav: !navActive}"/>
    <vue-body
      :class="{adjustBody: navActive, defaultBody: !navActive}"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import NavToggle from '@/components/NavToggle.vue';
import VueBody from '@/components/VueBody.vue';

export default {
  name: 'app',
  data() {
    return {
      navActive: true
    }
  },
  components: {
    NavBar,
    NavToggle,
    VueBody
  },
  methods: {
    handleToggle: function() {
      this.navActive = !this.navActive;
    }
  }
}
</script>

<style lang="scss">
@import "scss/global.scss";

#fix-width {
  overflow-x: hidden;
}
.defaultNav {
  width: 0;
  opacity: 0;
  transition: width 400ms $easing, opacity 200ms $easing;
}
.addNav {
  width: $navWidth;
  opacity: 0.8;
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