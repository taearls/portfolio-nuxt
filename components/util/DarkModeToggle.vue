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
        class="toggle-checkbox absolute inline-block align-middle w-5 h-5 border-2 border-gray-400 dark:border-purple-400 rounded-full bg-white appearance-none cursor-pointer focus:outline-none"
        @click="toggleDarkMode()"
      >
      <label
        for="darkModeToggle"
        class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-400 cursor-pointer"
      />
    </div>

    <!-- sun / moon svg icons -->
    <template v-if="prefersDarkMode">
      <SunIcon width="32" />
    </template>
    <template v-else>
      <MoonIcon />
    </template>
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
      console.log("prefersDarkMode watcher fired");
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
  methods: {
    toggleDarkMode() {
      this.prefersDarkMode = !this.prefersDarkMode;
    }
  }
};
</script>

<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply right-0;
  /* right: 0;
  border-color: #68D391; */
}
.toggle-checkbox:checked + .toggle-label {
  @apply bg-purple-400;
  /* background-color: #68D391; */
}
</style>
