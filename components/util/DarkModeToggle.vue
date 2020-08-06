<template>
  <div class="flex items-center h-8">
    <!-- toggle component -->
    <div
      class="relative inline-block w-10 h-auto mr-2 align-middle select-none transition duration-800 ease-in"
    >
      <input
        id="darkModeToggle"
        type="checkbox"
        :checked="prefersDarkMode"
        name="darkModeToggle"
        class="toggle-checkbox focus:outline-none dark:border-purple-400"
        @click="prefersDarkMode = !prefersDarkMode"
      >
      <label
        for="darkModeToggle"
        class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-400 cursor-pointer"
      />
    </div>

    <!-- sun / moon svg icons -->
    <no-ssr>
      <transition name="fade">
        <template v-if="prefersDarkMode">
          <SunIcon />
        </template>
      </transition>
      <transition name="fade">
        <template v-if="!prefersDarkMode">
          <MoonIcon />
        </template>
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
  transition: opacity 0.4s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
