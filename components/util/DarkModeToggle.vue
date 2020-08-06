<template>
  <div class="absolute z-10 left-0 items-center h-8 pl-4 hover:opacity-75">    
    <!-- sun / moon svg icons -->
    <no-ssr>
      <transition name="fade">
        <!-- <template> -->
          <button v-show="prefersDarkMode" class="relative left-0 focus:outline-none focus:shadow-outline" @click="prefersDarkMode = !prefersDarkMode">
            <SunIcon @click="prefersDarkMode = !prefersDarkMode"/>
          </button>
        <!-- </template> -->
      </transition>
      <transition name="fade">
        <!-- <template > -->
          <button v-show="!prefersDarkMode" class="relative left-0 focus:outline-none focus:shadow-outline" @click="prefersDarkMode = !prefersDarkMode">
            <MoonIcon />
          </button>
        <!-- </template> -->
      </transition>
    </no-ssr>
  </div>
</template>

<script>
import MoonIcon from "../widgets/MoonIcon";
import SunIcon from "../widgets/SunIcon";

export default {
  components: {
    MoonIcon,
    SunIcon
  },
  data() {
    return {
      prefersDarkMode: false,
      iconHeight: 32,
      iconWidth: 32
    };
  },
  watch: {
    prefersDarkMode: function(newValue) {
      if (newValue) {
        window.document.documentElement.classList.add("dark-mode");
      } else {
        window.document.documentElement.classList.remove("dark-mode");
      }
    }
  },
  beforeMount() {
    this.prefersDarkMode =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
};
</script>

<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply right-0;
}
.toggle-checkbox {
  @apply absolute inline-block align-middle w-5 h-5 border-2 border-gray-400 rounded-full bg-white appearance-none cursor-pointer;
  right: 1.25rem;
  transition: right 0.4s ease;
}
.toggle-checkbox:checked + .toggle-label {
  @apply bg-purple-400;
}

.fade-enter-active {
  display: block;
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  display: none;
  transition: display 0s 0.4s, opacity 0.2s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
