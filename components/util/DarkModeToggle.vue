<template>
  <div class="fixed top-0 float-left p-4 h-16 z-10 left-0 items-center hover:opacity-75 sm:float-none sm:static">
    <!-- sun / moon svg icons -->
    <client-only>
      <transition name="fade">
        <button
          v-show="prefersDarkMode"
          ref="sunToggle"
          class="relative left-0 rounded-sm focus:outline-none focus:shadow-outline"
          @click="toggleDarkMode()"
        >
          <SunIcon />
        </button>
      </transition>
      <transition name="fade">
        <button
          v-show="!prefersDarkMode"
          ref="moonToggle"
          class="relative left-0 rounded-sm focus:outline-none focus:shadow-outline"
          @click="toggleDarkMode()"
        >
          <MoonIcon />
        </button>
      </transition>
    </client-only>
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
    prefersDarkMode: function(isDarkMode) {
      if (isDarkMode) {
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
  methods: {
    toggleDarkMode() {
      // change data value, then focus on the newly visible svg icon
      this.prefersDarkMode = !this.prefersDarkMode;
      this.$nextTick(() => {
        if (this.prefersDarkMode) {
          this.$refs.sunToggle.focus();
        } else {
          this.$refs.moonToggle.focus();
        }
      });
    },
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
