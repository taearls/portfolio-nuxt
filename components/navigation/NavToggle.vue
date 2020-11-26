<template>
  <div class="fixed top-0 right-0 z-10 float-right p-4 h-16 sm:float-none sm:static">
    <button
      id="custom-toggler"
      class="group pt-1 px-1 rounded-sm focus:outline-none focus:shadow-outline-light dark:focus:shadow-outline-dark"
      style="margin-top: -0.2rem;"
      :class="{active: isToggleActive}"
      :aria-label="`${isToggleActive ? 'Close Navigation' : 'Open Navigation'}`"
      @click="handleToggle();"
    >
      <div
        id="toggler-top"
        class="bg-purple-700 dark:bg-purple-400 group-hover:bg-cyan-400 dark:group-hover:bg-cyan-300 transition-colors duration-200"
      />
      <div
        id="toggler-middle"
        class="bg-purple-700 dark:bg-purple-400 group-hover:bg-cyan-400 dark:group-hover:bg-cyan-300 transition-colors duration-200"
      />
      <div
        id="toggler-bottom"
        class="bg-purple-700 dark:bg-purple-400 group-hover:bg-cyan-400 dark:group-hover:bg-cyan-300 transition-colors duration-200"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data() {
    return {
      isToggleActive: false,
    };
  },
  computed: {
    bodyTopMargin() {
      let margin = "0";
      if (process.client) {
        const navContainer = document.getElementById("nav-container");
        if (navContainer != null) {
          const navHeight = navContainer.offsetHeight;
          margin = `${navHeight + 16}px`;
        }
      }
      return margin;
    },
  },
  beforeMount() {
    this.adjustBodyTopMargin();
    window.addEventListener("resize", this.adjustBodyTopMargin);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.adjustBodyTopMargin);
  },
  methods: {
    handleToggle() : void {
      this.isToggleActive = !this.isToggleActive;
      this.adjustBodyTopMargin();
      this.$emit("toggle-navigation", this.isToggleActive);
    },
    adjustBodyTopMargin() : void {
      this.$nextTick(() => {
        if (this.isToggleActive && window.innerWidth < 640) {
          window.document.body.style.marginTop = this.bodyTopMargin;
        } else {
          window.document.body.style.marginTop = "4rem"; // horizontal navHeight is 4rem (64px)
        }
      });
    },
  },
});
</script>

<style scoped>
#custom-toggler > div {
  width: 36px;
  height: 2px;
  margin-bottom: 8px;
  transition: transform 500ms ease, opacity 500ms;
  will-change: transform, opacity;
}
#toggler-top {
  margin-top: 4px;
}
#toggler-bottom {
  margin-bottom: 4px;
}
.active #toggler-top {
  transform: translateY(10px) rotate(-135deg);
}
.active #toggler-middle {
  opacity: 0;
  transform: rotate(135deg);
}
.active #toggler-bottom {
  transform: translateY(-10px) rotate(-45deg);
}
</style>
