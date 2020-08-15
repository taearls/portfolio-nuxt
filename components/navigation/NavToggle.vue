<template>
  <div class="fixed top-0 right-0 z-10 float-right p-4 h-16 sm:float-none sm:static">
    <button
      id="custom-toggler"
      class="pt-1 px-1 rounded-sm focus:outline-none focus:shadow-outline"
      style="margin-top: -0.2rem;"
      :class="{active: isToggleActive, inactive: !isToggleActive}"
      :aria-label="`${isToggleActive ? 'Close Navigation' : 'Open Navigation'}`"
      @click="handleToggle($event);"
      @mouseover="hoverClass = true;"
      @mouseleave="hoverClass = false;"
    >
      <div
        id="toggler-top"
        class="bg-purple-600 dark:bg-purple-500"
        :class="hoverClass ? 'hover' : 'bg-purple-600'"
      />
      <div
        id="toggler-middle"
        class="bg-purple-600 dark:bg-purple-500"
        :class="hoverClass ? 'hover' : 'bg-purple-600'"
      />
      <div
        id="toggler-bottom"
        class="bg-purple-600 dark:bg-purple-500"
        :class="hoverClass ? 'hover' : 'bg-purple-600'"
      />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggleActive: false,
      hoverClass: false
    };
  },
  computed: {
    bodyTopMargin() {
      const navContainer = document.getElementById("nav-container");
      const navHeight = navContainer.offsetHeight;
      let margin = `${navHeight + 16}px`;
      return margin;
    }
  },
  beforeMount() {
    this.adjustBodyTopMargin();
    window.addEventListener("resize", this.adjustBodyTopMargin);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.adjustBodyTopMargin);
  },
  methods: {
    handleToggle() {
      this.isToggleActive = !this.isToggleActive;
      this.adjustBodyTopMargin();
      this.$emit("toggleNavigation", this.isToggleActive);
    },
    adjustBodyTopMargin() {
      this.$nextTick(() => {
        if (this.isToggleActive && window.innerWidth < 640) {
          window.document.body.style.marginTop = this.bodyTopMargin;
        } else {
          window.document.body.style.marginTop = "4rem"; // horizontal navHeight is 4rem (64px)
        }
      });
    },
  },
};
</script>

<style>
#custom-toggler > div {
  width: 32px;
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
.hover {
  @apply bg-blue-400;
  transition: 0.2s ease;
}
html.dark-mode .hover {
  @apply bg-blue-300;
}
</style>
