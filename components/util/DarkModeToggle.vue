<template>
  <div class="fixed top-0 float-left p-4 h-16 z-10 left-0 items-center hover:opacity-75 sm:float-none sm:static">
    <!-- sun / moon svg icons -->
    <client-only>
      <transition name="fade">
        <button
          v-show="prefersDarkMode"
          ref="sunToggle"
          aria-label="toggle on light mode"
          class="relative left-0 rounded-sm focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
          @click="toggleDarkMode()"
        >
          <SunIcon />
        </button>
      </transition>
      <transition name="fade">
        <button
          v-show="!prefersDarkMode"
          ref="moonToggle"
          aria-label="toggle on dark mode"
          class="relative left-0 rounded-sm focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
          @click="toggleDarkMode()"
        >
          <MoonIcon />
        </button>
      </transition>
    </client-only>
  </div>
</template>

<script>
import MoonIcon from "../widgets/svg/MoonIcon";
import SunIcon from "../widgets/svg/SunIcon";

export default {
  components: {
    MoonIcon,
    SunIcon
  },
  props: {
    cookieKey: {
      type: String,
      default: "nuxt-color-mode",
    },
  },
  computed: {
    prefersDarkMode() {
      return this.$store.state.prefersDarkMode === true;
    }
  },
  beforeMount() {
    const cookieKey = this.cookieKey;
    const documentHasColorModeCookie = document.cookie && document.cookie.indexOf(`${cookieKey}=`) > -1;
    let isDarkMode;
    
    if (documentHasColorModeCookie) {
      const cookieValue = document.cookie
        .split("; ")
        .find(row => row.startsWith(cookieKey))
        .split("=")[1];
      isDarkMode = cookieValue === "dark";
    } else {
      isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultCookieValue = isDarkMode ? "dark" : "light";
      this.setPrefersDarkModeCookie(defaultCookieValue);
    }
    this.$store.commit("setDefaultDarkMode", isDarkMode);
  },
  methods: {
    toggleDarkMode() {
      // change data value, add/remove dark-mode class, then focus on the newly visible svg icon
      this.$store.commit("toggleDarkMode");
      if (this.prefersDarkMode) {
        window.document.documentElement.classList.add("dark-mode");
        this.setPrefersDarkModeCookie("dark")
      } else {
        window.document.documentElement.classList.remove("dark-mode");
        this.setPrefersDarkModeCookie("light");
      }
      this.$nextTick(() => {
        if (this.prefersDarkMode) {
          this.$refs.sunToggle.focus();
        } else {
          this.$refs.moonToggle.focus();
        }
      });
    },
    setPrefersDarkModeCookie(newCookieValue) {
      if (!document.cookie) return;
      const cookieKey = this.cookieKey;
      document.cookie = `${cookieKey}=${newCookieValue}`;
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
