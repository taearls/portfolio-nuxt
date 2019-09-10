<template>
  <div>
    <!-- add slider that controls nav? -->
    <!-- https://www.moka.tv -->
    <nav-toggle 
      class="nav-toggle"
      :class="{adjustToggle: navActive}"
      @toggle="handleToggle();"></nav-toggle>
    <nav-bar 
      v-if="navActive"
      style="padding-top: 35px;"
      :class="{addNav: navActive}"/>
    <vue-body
      :class="{adjustBody: navActive}"/>
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
.addNav {
  width: $navWidth;
}
.nav-toggle {
  margin-left: 0;
}
.adjustBody, .adjustToggle {
  margin-left: $navWidth !important;
  padding: 0px 10px;
}
</style>